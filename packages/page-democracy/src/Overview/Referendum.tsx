// Copyright 2017-2025 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveReferendumExt } from '@polkadot/api-derive/types';
import type { Balance } from '@polkadot/types/interfaces';

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { Badge, Button, Columar, ExpandButton, Icon, LinkExternal, Progress, Table } from '@polkadot/react-components';
import { useAccounts, useApi, useBestNumber, useCall } from '@polkadot/react-hooks';
import { BlockToTime } from '@polkadot/react-query';
import { BN_ONE, formatNumber, isBoolean } from '@polkadot/util';

import { exportLogs, isAutoEvent, logAutoEvent, logComponent, logUserAction, recordUserAction, setReferendumExpanded } from '../debugLogger.js';
import { useTranslation } from '../translate.js';
import useChangeCalc from '../useChangeCalc.js';
import PreImageButton from './PreImageButton.js';
import ProposalCell from './ProposalCell.js';
import ReferendumVotes from './ReferendumVotes.js';
import Voting from './Voting.js';

interface Props {
  className?: string;
  value: DeriveReferendumExt;
}

interface VoteType {
  hasVoted: boolean;
  hasVotedAye: boolean;
}

function Referendum ({ className = '', value: { allAye, allNay, image, imageHash, index, isPassing, status, voteCountAye, voteCountNay, votedAye, votedNay, votedTotal } }: Props): React.ReactElement<Props> | null {
  const renderCountRef = useRef(0);

  // Direct console log to help debug visibility issues
  console.log(`%c REFERENDUM ${index.toString()} RENDER #${renderCountRef.current + 1}`, 'background: #8e44ad; color: white; font-size: 12px;');

  renderCountRef.current += 1;

  const { t } = useTranslation();
  const { api } = useApi();
  const { allAccounts } = useAccounts();
  const bestNumber = useBestNumber();
  const [isExpanded, setIsExpanded] = useState(false);

  // Direct debugging approach

  // Create debug overlay at component mount to ensure visibility
  useEffect(() => {
    // Create a persistent debug overlay
    const debugOverlay = document.createElement('div');

    debugOverlay.id = `referendum-debug-overlay-${index.toString()}`;
    debugOverlay.style.position = 'fixed';
    debugOverlay.style.top = '10px';
    debugOverlay.style.right = '10px';
    debugOverlay.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';
    debugOverlay.style.color = 'white';
    debugOverlay.style.padding = '10px';
    debugOverlay.style.zIndex = '10000';
    debugOverlay.style.borderRadius = '5px';
    debugOverlay.style.boxShadow = '0 0 10px black';
    debugOverlay.style.width = '300px';

    // Add title
    const title = document.createElement('h3');

    title.textContent = `Referendum ${index.toString()} Debug`;
    title.style.margin = '0 0 10px 0';
    debugOverlay.appendChild(title);

    // Add timestamp
    const timestamp = document.createElement('div');

    timestamp.id = 'referendum-debug-timestamp';
    timestamp.textContent = `Loaded: ${new Date().toISOString()}`;
    timestamp.style.fontSize = '12px';
    timestamp.style.marginBottom = '10px';
    debugOverlay.appendChild(timestamp);

    // Add status indicator
    const status = document.createElement('div');

    status.id = 'referendum-debug-status';
    status.textContent = `Expanded: ${isExpanded ? 'Yes' : 'No'}`;
    debugOverlay.appendChild(status);

    // Add button to manually export logs
    const exportButton = document.createElement('button');

    exportButton.textContent = 'Export Logs Now';
    exportButton.style.backgroundColor = '#2ecc71';
    exportButton.style.color = 'white';
    exportButton.style.border = 'none';
    exportButton.style.padding = '5px 10px';
    exportButton.style.borderRadius = '3px';
    exportButton.style.marginTop = '10px';
    exportButton.style.cursor = 'pointer';

    exportButton.onclick = () => {
      try {
        // Update status
        const statusEl = document.getElementById('referendum-debug-status');

        if (statusEl) {
          statusEl.textContent = 'EXPORTING LOGS NOW...';
          statusEl.style.color = '#f1c40f';
        }

        // Call export function
        exportLogs();

        // Show success after slight delay
        setTimeout(() => {
          if (statusEl) {
            statusEl.textContent = `Export complete at ${new Date().toTimeString().split(' ')[0]}`;
            statusEl.style.color = '#2ecc71';
          }
        }, 1000);
      } catch (error) {
        // Show error
        const statusEl = document.getElementById('referendum-debug-status');

        if (statusEl) {
          statusEl.textContent = `Export failed: ${error instanceof Error ? error.message : 'Unknown error'}`;
          statusEl.style.color = '#e74c3c';
        }
      }
    };

    debugOverlay.appendChild(exportButton);

    // Add close button
    const closeButton = document.createElement('button');

    closeButton.textContent = 'X';
    closeButton.style.position = 'absolute';
    closeButton.style.top = '5px';
    closeButton.style.right = '5px';
    closeButton.style.cursor = 'pointer';
    closeButton.style.fontSize = '12px';
    closeButton.style.fontWeight = 'bold';
    closeButton.onclick = () => document.body.removeChild(debugOverlay);
    debugOverlay.appendChild(closeButton);

    // Add the overlay to the document
    document.body.appendChild(debugOverlay);

    // Update status when expand state changes
    const updateStatus = () => {
      const statusEl = document.getElementById('referendum-debug-status');

      if (statusEl) {
        statusEl.textContent = `Expanded: ${isExpanded ? 'Yes' : 'No'}`;
        statusEl.style.color = isExpanded ? '#2ecc71' : 'white';
      }
    };

    // Initial status update
    updateStatus();

    // Return cleanup function
    return () => {
      try {
        if (document.body.contains(debugOverlay)) {
          document.body.removeChild(debugOverlay);
        }
      } catch (error) {
        console.error('Error removing debug overlay:', error);
      }
    };
  }, [isExpanded, index]);

  // Utility function to create temporary debug messages on screen
  const createDebugMessage = useCallback((message: string, options: { color?: string; position?: string; timeout?: number } = {}) => {
    const { color = 'red', position = 'top-right', timeout = 5000 } = options;

    // Create a floating div for the debug message
    const messageDiv = document.createElement('div');

    messageDiv.textContent = message;
    messageDiv.style.position = 'fixed';
    messageDiv.style.zIndex = '9999';
    messageDiv.style.padding = '10px';
    messageDiv.style.backgroundColor = color;
    messageDiv.style.color = 'white';
    messageDiv.style.borderRadius = '5px';
    messageDiv.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.2)';

    // Position the message based on the position option
    switch (position) {
      case 'top-left':
        messageDiv.style.top = '10px';
        messageDiv.style.left = '10px';
        break;
      case 'top-right':
        messageDiv.style.top = '10px';
        messageDiv.style.right = '10px';
        break;
      case 'bottom-left':
        messageDiv.style.bottom = '10px';
        messageDiv.style.left = '10px';
        break;
      case 'bottom-right':
        messageDiv.style.bottom = '10px';
        messageDiv.style.right = '10px';
        break;
      case 'middle':
        messageDiv.style.top = '50%';
        messageDiv.style.left = '50%';
        messageDiv.style.transform = 'translate(-50%, -50%)';
        break;
      default:
        messageDiv.style.top = '10px';
        messageDiv.style.right = '10px';
    }

    // Add to the document
    document.body.appendChild(messageDiv);

    // Remove after timeout
    setTimeout(() => {
      if (document.body.contains(messageDiv)) {
        document.body.removeChild(messageDiv);
      }
    }, timeout);

    return messageDiv;
  }, []);

  // Handle clicking the expand button
  const handleExpandClick = useCallback(() => {
    recordUserAction();
    const newState = !isExpanded;

    // First update state
    setIsExpanded(newState);

    // Log the user action
    logUserAction(`Referendum ${index.toString()} expand button clicked`, { expanded: newState });

    // Update the stored state
    setReferendumExpanded(index.toString(), newState);

    // If expanding, automatically export logs to help debug
    if (newState) {
      try {
        // Create a visible notification
        createDebugMessage(`EXPORTING LOGS FOR REFERENDUM ${index.toString()}`, {
          color: 'blue',
          position: 'middle',
          timeout: 3000
        });

        // Log to console with emphasis
        console.log(`%c EXPORTING LOGS FOR REFERENDUM ${index.toString()}`, 'background: #e74c3c; color: white; font-size: 14px;');
        console.warn(`Referendum ${index.toString()} logs being exported...`);

        // Actually export the logs
        exportLogs();

        // Show an alert to make it very obvious
        setTimeout(() => alert(`Logs exported for Referendum ${index.toString()}`), 500);
      } catch (error) {
        console.error('Error exporting logs:', error);
        // Safe access to error.message with type checking
        const errorMessage = error instanceof Error ? error.message : 'Unknown error';

        alert(`Error exporting logs: ${errorMessage}`);
      }
    }
  }, [createDebugMessage, isExpanded, index]);

  const prevIsExpanded = useRef(isExpanded);

  useEffect(() => {
    if (prevIsExpanded.current !== isExpanded) {
      if (isAutoEvent()) {
        logAutoEvent(`Referendum ${index.toString()} expansion changed automatically`, {
          expanded: isExpanded,
          timestamp: new Date().toISOString()
        });
      }

      prevIsExpanded.current = isExpanded;
    }
  }, [index, isExpanded]);

  useEffect(() => {
    const mountTime = Date.now();

    // Direct console log for component mount
    console.log(`%c REFERENDUM ${index.toString()} MOUNTED`, 'background: #27ae60; color: white; font-size: 12px;', { expanded: isExpanded, timestamp: new Date().toISOString() });

    logComponent(`Referendum ${index.toString()} mounted`, { expanded: isExpanded, timestamp: new Date().toISOString() });

    return () => {
      logComponent(`Referendum ${index.toString()} unmounted`, {
        duration: `${(Date.now() - mountTime) / 1000}s`,
        timestamp: new Date().toISOString(),
        wasExpanded: isExpanded
      });
    };
  }, [index, isExpanded]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === 'visible';

      // Direct console log for visibility changes
      console.log(
        `%c TAB VISIBILITY CHANGED TO ${isVisible ? 'VISIBLE' : 'HIDDEN'} FOR REFERENDUM ${index.toString()}`,
        `background: ${isVisible ? '#2980b9' : '#c0392b'}; color: white; font-size: 12px;`,
        {
          isExpanded,
          renderCount: renderCountRef.current,
          timestamp: new Date().toISOString()
        }
      );

      logComponent(`Tab visibility changed to ${isVisible ? 'visible' : 'hidden'} for referendum ${index.toString()}`, {
        isExpanded,
        renderCount: renderCountRef.current
      });
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [index, isExpanded]);

  logComponent(`Rendering Referendum ${index.toString()}`, {
    expanded: isExpanded,
    renderCount: renderCountRef.current
  });

  const totalIssuance = useCall<Balance>(api.query.balances?.totalIssuance);
  const totalCalculated = votedAye.add(votedNay);

  const thresholdText = useMemo(
    () => status.threshold.type.toString().replace('majority', ' majority '),
    [status]
  );

  const { changeAye, changeNay } = useChangeCalc(status.threshold, votedAye, votedNay, votedTotal);

  const { hasVoted, hasVotedAye } = useMemo(
    (): VoteType => {
      const hasVotedAye = allAye.some(({ accountId }) => allAccounts.includes(accountId.toString()));
      const hasVotedNay = allNay.some(({ accountId }) => allAccounts.includes(accountId.toString()));

      if (totalIssuance) {
        const thresholdValue = status.threshold.toNumber ? status.threshold.toNumber() : 0;

        logComponent(`Referendum ${index.toString()} threshold:`, { threshold: thresholdValue });

        return {
          hasVoted: hasVotedAye || hasVotedNay,
          hasVotedAye
        };
      } else {
        return { hasVoted: false, hasVotedAye: false };
      }
    },
    [allAccounts, allAye, allNay, totalIssuance, status, index]
  );

  if (!bestNumber || status.end.sub(bestNumber).lten(0)) {
    logComponent(`Referendum ${index.toString()} filtered out due to end time`);

    return null;
  }

  logComponent(`Referendum ${index.toString()} rendering details:`, {
    expanded: isExpanded,
    isPassing,
    renderCount: renderCountRef.current,
    voteCounts: {
      aye: voteCountAye.toString(),
      nay: voteCountNay.toString()
    }
  });

  const enactBlock = status.end.add(status.delay);
  const remainBlock = status.end.sub(bestNumber).isub(BN_ONE);

  return (
    <>
      <tr className={`${className} isExpanded isFirst ${isExpanded ? '' : 'isLast'}`}>
        <Table.Column.Id value={index} />
        <ProposalCell
          imageHash={imageHash}
          proposal={image?.proposal}
        />
        <td className='number together media--1200'>
          <BlockToTime value={remainBlock} />
          {t('{{blocks}} blocks', { replace: { blocks: formatNumber(remainBlock) } })}
        </td>
        <td className='number together media--1400'>
          <BlockToTime value={enactBlock.sub(bestNumber)} />
          #{formatNumber(enactBlock)}
        </td>
        <td className='number together media--1400'>
          {totalIssuance && (
            <>
              <div>{`${(votedTotal.muln(10000).div(totalIssuance).toNumber() / 100).toFixed(2)}%`}</div>
            </>
          )}
        </td>
        <td className='badge'>
          {isBoolean(isPassing) && (
            <Badge
              color={isPassing ? 'green' : 'red'}
              hover={
                isPassing
                  ? t('{{threshold}}, passing', { replace: { threshold: thresholdText } })
                  : t('{{threshold}}, not passing', { replace: { threshold: thresholdText } })
              }
              icon={isPassing ? 'check' : 'times'}
            />
          )}
        </td>
        <td className='expand'>
          {(() => {
            const refId = index.toString();

            console.warn('🔴🔴🔴 REFERENDUM SOURCE 🔴🔴🔴 Passing referendumId to ReferendumVotes:', refId);

            return (
              <ReferendumVotes
                change={changeAye}
                count={voteCountAye}
                isAye
                isWinning={isPassing}
                referendumId={refId}
                total={votedAye}
                votes={allAye}
              />
            );
          })()}
          {(() => {
            const refId = index.toString();

            console.warn('🔴🔴🔴 REFERENDUM SOURCE 🔴🔴🔴 Passing referendumId to ReferendumVotes (nay):', refId);

            return (
              <ReferendumVotes
                change={changeNay}
                count={voteCountNay}
                isAye={false}
                isWinning={!isPassing}
                referendumId={refId}
                total={votedNay}
                votes={allNay}
              />
            );
          })()}
        </td>
        <td className='media--1000 middle chart'>
          <Progress
            total={totalCalculated}
            value={votedAye}
          />
        </td>
        <td className='badge'>
          <Icon
            color={hasVoted ? (hasVotedAye ? 'green' : 'red') : 'gray'}
            icon='asterisk'
          />
        </td>
        <td className='actions'>
          <Button.Group>
            {!image?.proposal && (
              <PreImageButton imageHash={imageHash} />
            )}
            <Voting
              proposal={image?.proposal}
              referendumId={index}
            />
            {/* Log before rendering the ExpandButton for debugging */}
            {(() => {
              // Log outside of component rendering to avoid React warnings
              console.log(`%c Passing referendum index ${index.toString()} to ExpandButton`, 'background: #f39c12; color: black; font-size: 12px');

              return (
                <ExpandButton
                  expanded={isExpanded}
                  onClick={handleExpandClick}
                  referendumIndex={index.toString()}
                />
              );
            })()}
          </Button.Group>
        </td>
      </tr>
      <tr className={`${className} ${isExpanded ? 'isExpanded isLast' : 'isCollapsed'}`}>
        <td />
        <td
          className='columar'
          colSpan={100}
        >
          <Columar is100>
            <Columar.Column>
              <LinkExternal
                data={index}
                type='democracyReferendum'
                withTitle
              />
            </Columar.Column>
          </Columar>
        </td>
      </tr>
    </>
  );
}

export default React.memo(Referendum);
