// Copyright 2017-2025 @polkadot/app-democracy authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { DeriveReferendumExt } from '@polkadot/api-derive/types';

import React, { useEffect, useRef } from 'react';

import { Button } from '@polkadot/react-components';
import { useApi, useCall, useToggle } from '@polkadot/react-hooks';

import { createDebugUI, logApi, logAutoEvent, logComponent } from '../debugLogger.js';
import { useTranslation } from '../translate.js';
import Externals from './Externals.js';
import PreImage from './PreImage.js';
import Proposals from './Proposals.js';
import Propose from './Propose.js';
import Referendums from './Referendums.js';
import Summary from './Summary.js';

interface Props {
  className?: string;
}

function Overview ({ className }: Props): React.ReactElement<Props> {
  const { t } = useTranslation();
  const { api } = useApi();
  const [isPreimageOpen, togglePreimage] = useToggle();
  const [isProposeOpen, togglePropose] = useToggle();
  const referendums = useCall<DeriveReferendumExt[]>(api.derive.democracy.referendums);
  const mountTimeRef = useRef<number>(Date.now());
  const referendumsRef = useRef<DeriveReferendumExt[] | undefined>();

  // Initialize debug UI on mount
  useEffect(() => {
    logComponent('Overview component mounted');
    createDebugUI();

    return () => {
      logComponent('Overview component unmounted');
    };
  }, []);

  // Log referendums data changes
  useEffect(() => {
    const timeSinceMount = (Date.now() - mountTimeRef.current) / 1000;

    logComponent(`Referendums updated (${timeSinceMount.toFixed(2)}s since mount)`, {
      changed: referendums !== referendumsRef.current,
      connectionState: api.isConnected ? 'connected' : 'disconnected',
      count: referendums?.length || 0,
      ids: referendums?.map((r) => r.index.toString())
    });

    referendumsRef.current = referendums;
  }, [api, referendums]);

  // Monitor API connection state
  useEffect(() => {
    const onConnected = () => {
      logApi('API CONNECTED');
    };

    const onDisconnected = () => {
      logApi('API DISCONNECTED');
    };

    const onError = (error: Error) => {
      logApi('API ERROR', error);
    };

    api.on('connected', onConnected);
    api.on('disconnected', onDisconnected);
    api.on('error', onError);

    // Log initial state
    logApi('Initial API state', { connected: api.isConnected });

    return () => {
      api.off('connected', onConnected);
      api.off('disconnected', onDisconnected);
      api.off('error', onError);
    };
  }, [api]);

  // Monitor tab visibility changes
  useEffect(() => {
    const handleVisibilityChange = () => {
      const isVisible = document.visibilityState === 'visible';

      logAutoEvent(`Tab visibility changed to: ${isVisible ? 'visible' : 'hidden'}`, {
        visibility: document.visibilityState
      });

      logAutoEvent(`Current referendums when visibility=${document.visibilityState}`, {
        apiConnected: api.isConnected,
        count: referendums?.length || 0,
        ids: referendums?.map((r) => r.index.toString())
      });

      if (isVisible) {
        // Force a check when tab becomes visible
        setTimeout(() => {
          logAutoEvent('Delayed check after tab became visible', {
            apiConnected: api.isConnected,
            count: referendums?.length || 0,
            ids: referendums?.map((r) => r.index.toString())
          });
        }, 1000);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [api, referendums]);

  logComponent('Rendering Overview', { referendumCount: referendums?.length || 0 });

  return (
    <div className={className}>
      <Summary referendumCount={referendums?.length} />
      <Button.Group>
        {api.tx.democracy.notePreimage && (
          <Button
            icon='plus'
            label={t('Submit preimage')}
            onClick={togglePreimage}
          />
        )}
        <Button
          icon='plus'
          label={t('Submit proposal')}
          onClick={togglePropose}
        />
      </Button.Group>
      {isPreimageOpen && (
        <PreImage onClose={togglePreimage} />
      )}
      {isProposeOpen && (
        <Propose onClose={togglePropose} />
      )}
      <Referendums referendums={referendums} />
      <Proposals />
      <Externals />
    </div>
  );
}

export default React.memo(Overview);
