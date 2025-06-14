// Copyright 2017-2025 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Text } from '@polkadot/types';

import React, { useCallback, useMemo } from 'react';

import { useToggle } from '@polkadot/react-hooks';

import ExpandButton from './ExpandButton.js';
import { styled } from './styled.js';

interface Meta {
  docs: Text[];
}

export interface Props {
  children?: React.ReactNode;
  className?: string;
  isOpen?: boolean;
  isHeader?: boolean;
  isLeft?: boolean;
  isPadded?: boolean;
  onClick?: (isOpen: boolean) => void;
  referendumId?: string;
  renderChildren?: (() => React.ReactNode | undefined | null) | null;
  summary?: React.ReactNode;
  summaryHead?: React.ReactNode;
  summaryMeta?: Meta;
  summarySub?: React.ReactNode;
  withBreaks?: boolean;
  withHidden?: boolean;
}

function splitSingle (value: string[], sep: string): string[] {
  return value.reduce((result: string[], value: string): string[] => {
    return value.split(sep).reduce((result: string[], value: string) => result.concat(value), result);
  }, []);
}

function splitParts (value: string): string[] {
  return ['[', ']'].reduce((result: string[], sep) => splitSingle(result, sep), [value]);
}

function formatMeta (meta?: Meta): [React.ReactNode, React.ReactNode] | null {
  if (!meta?.docs.length) {
    return null;
  }

  const strings = meta.docs.map((d) => d.toString().trim());
  const firstEmpty = strings.findIndex((d) => !d.length);
  const combined = (
    firstEmpty === -1
      ? strings
      : strings.slice(0, firstEmpty)
  ).join(' ').replace(/#(<weight>| <weight>).*<\/weight>/, '');
  const parts = splitParts(combined.replace(/\\/g, '').replace(/`/g, ''));

  return [
    parts[0].split(/[.(]/)[0],
    <>{parts.map((part, index) => index % 2 ? <em key={index}>[{part}]</em> : <span key={index}>{part}</span>)}&nbsp;</>
  ];
}

function Expander ({ children, className = '', isHeader, isLeft, isOpen, isPadded, onClick, referendumId, renderChildren, summary, summaryHead, summaryMeta, summarySub, withBreaks, withHidden }: Props): React.ReactElement<Props> {
  // Force strict referendumId handling with fallback - CRITICAL to prevent undefined values
  const refId = referendumId || 'EXPANDER-MISSING-ID';

  // Look for ui--Table class which is present in referendum table containers
  // This approach uses DOM structure to identify referendum rows rather than relying on ID format
  const isReferendumRow = className?.includes('ui--Table') === true || referendumId !== 'EXPANDER-MISSING-ID';

  // Conditional logging only for referendum rows
  if (isReferendumRow) {
    // Enhanced debugging with stack trace to identify the call site
    console.warn('🔵🔵🔵 EXPANDER COMPONENT 🔵🔵🔵', {
      component: 'Expander',
      originalRefId: referendumId,
      refId,
      // Add stack trace to help identify exact component instance
      stack: new Error().stack?.split('\n').slice(1, 3).join(' → ')
    });

    // Full props logging for debugging
    console.debug('Expander full props:', {
      children: !!children,
      className,
      isOpen,
      onClick: !!onClick,
      refId,
      renderChildren: !!renderChildren,
      summary: !!summary
    });
  }

  const [isExpanded, toggleExpanded] = useToggle(isOpen, onClick);

  // Explicitly track expanded state changes for debugging - only for referendum rows
  if (isReferendumRow) {
    console.log('%c Expander state:', 'background: #3498db; color: white; font-size: 12px', { isExpanded, referendumId });

    // Add a very visible warning to definitely show in console
    console.warn('🔵🔵🔵 EXPANDER COMPONENT RENDER 🔵🔵🔵', { isExpanded, referendumId });
  }

  // Handle click in a controlled manner - this will be passed to ExpandButton
  const handleToggleClick = useCallback(() => {
    // Log only for referendum rows
    if (isReferendumRow) {
      console.log('%c Expander handleToggleClick - Current state:', 'background: #3498db; color: white; font-size: 12px', {
        beforeToggle: isExpanded,
        willBecome: !isExpanded
      });
    }

    toggleExpanded();
  }, [isExpanded, isReferendumRow, toggleExpanded]);

  const demandChildren = useMemo(
    () => isExpanded && renderChildren && renderChildren(),
    [isExpanded, renderChildren]
  );

  const [headerSubMini, headerSub] = useMemo(
    () => formatMeta(summaryMeta) || [summarySub, summarySub],
    [summaryMeta, summarySub]
  );

  const hasContent = useMemo(
    () => !!renderChildren || (!!children && (!Array.isArray(children) || children.length !== 0)),
    [children, renderChildren]
  );

  // Use the ExpandButton component directly for better integration
  const iconButton = useMemo(
    () => {
      console.warn('🔵🔵🔵 Creating ExpandButton inside Expander 🔵🔵🔵', {
        component: 'ExpandButton-Creator',
        isExpanded,
        refId
      });

      return (
        <ExpandButton
          expanded={isExpanded}
          onClick={handleToggleClick}
          referendumIndex={refId}
        />
      );
    },
    [handleToggleClick, isExpanded, refId]
  );

  return (
    <StyledDiv className={`${className} ui--Expander ${isExpanded ? 'isExpanded' : ''} ${isHeader ? 'isHeader' : ''} ${isPadded ? 'isPadded' : ''} ${hasContent ? 'hasContent' : ''} ${withBreaks ? 'withBreaks' : ''}`}>
      <div
        className={`ui--Expander-summary${isLeft ? ' isLeft' : ''}`}
        onClick={toggleExpanded}
      >
        {isLeft && iconButton}
        <div className='ui--Expander-summary-header'>
          <div className='ui--Expander-summary-title'>
            {summaryHead}
          </div>
          {summary}
          {headerSub && (
            <div className='ui--Expander-summary-header-sub'>{isExpanded ? headerSub : headerSubMini}</div>
          )}
        </div>
        {!isLeft && iconButton}
      </div>
      {hasContent && (isExpanded || withHidden) && (
        <div className='ui--Expander-content'>{children || demandChildren}</div>
      )}
    </StyledDiv>
  );
}

const StyledDiv = styled.div`
  max-width: 60rem;
  overflow: hidden;
  text-overflow: ellipsis;

  &:not(.isExpanded) {
    .ui--Expander-content {
      display: none;
    }
  }

  &.isExpanded {
    .ui--Expander-content {
      margin-top: 0.75rem;

      .body.column {
        justify-content: end;
      }
    }
  }

  &.isHeader {
    margin-left: 2rem;
  }

  &.withBreaks .ui--Expander-content {
    white-space: normal;
  }

  .ui--Expander-summary {
    margin: 0;
    min-width: 13.5rem;
    overflow: hidden;

    .ui--Expander-summary-header {
      display: inline-block;
      max-width: calc(100% - 2rem);
      overflow: hidden;
      text-overflow: ellipsis;
      vertical-align: middle;
      white-space: nowrap;

      span {
        white-space: normal;
      }

      .ui--Expander-summary-header-sub,
      .ui--Expander-summary-title {
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 1;
        box-orient: vertical;
        display: -webkit-box;
        line-clamp: 1;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: normal;
      }

      .ui--Expander-summary-header-sub {
        font-size: var(--font-size-small);
        opacity: var(--opacity-light);
      }
    }

    .ui--Icon {
      vertical-align: middle;
    }

    &:not(.isLeft) > .ui--Icon {
      margin-left: 0.75rem;
    }

    &.isLeft > .ui--Icon {
      margin-right: 0.75rem;
    }

    .ui--LabelHelp {
      .ui--Icon {
        margin-left: 0;
        margin-right: 0.5rem;
        vertical-align: text-bottom;
      }
    }
  }

  &.hasContent .ui--Expander-summary {
    cursor: pointer;
  }

  &.isPadded .ui--Expander-summary {
    margin-left: 2.25rem;
  }
`;

export default React.memo(Expander);
