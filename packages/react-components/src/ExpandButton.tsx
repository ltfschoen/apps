// Copyright 2017-2025 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect, useMemo } from 'react';

import Icon from './Icon.js';
import { styled } from './styled.js';

// Global debugging - this will execute immediately on module load
console.error('🚨🚨🚨 EXPANDBUTTON MODULE LOADED 🚨🚨🚨');

interface Props {
  onClick: () => void;
  expanded: boolean;
  className?: string;
  referendumIndex?: string; // Optional referendum index for debugging
}

function ExpandButton ({ className = '', expanded, onClick, referendumIndex }: Props): React.ReactElement<Props> {
  // Create a unique ID for this component instance to trace render cycles
  const instanceId = useMemo(() => Math.random().toString(36).substring(2, 8), []);

  // Ensure there's always a valid string to use, even if undefined
  const debugIndex = referendumIndex || 'MISSING-ID';

  // FOCUS ON CSS CLASS: Look for ui--Table-Column-Expand class which is present in referendum rows
  const isReferendumRow = className?.includes('ui--Table-Column-Expand') === true;

  // Conditional logging only for referendum rows
  if (isReferendumRow) {
    // This log should be extremely visible with additional context information
    console.warn('🔴🔴🔴 EXPAND-BUTTON 🔴🔴🔴', {
      component: 'ExpandButton',
      debugIndex,
      expanded,
      instanceId,
      originalRefId: referendumIndex,
      stack: new Error().stack?.split('\n')[1]?.trim()
    });

    // Log more visible current state info
    console.log('%c ExpandButton State:', 'background: #2ecc71; color: white; font-size: 12px', {
      debugIndex,
      expanded,
      instanceId
    });
  }

  // Keep track of last prop value to detect changes for debugging
  const lastExpandedRef = React.useRef(expanded);

  // Enhanced logging to ensure click events are visible
  const handleClick = useCallback((e: React.MouseEvent) => {
    // Only log for referendum rows
    if (isReferendumRow) {
      console.log('%c ExpandButton CLICKED:', 'background: #e74c3c; color: white; font-size: 14px', {
        currentExpanded: expanded,
        debugIndex, // Use our strict debugging ID
        expectedNextState: !expanded,
        instanceId,
        timestamp: new Date().toISOString()
      });
    }

    // Simply call onClick without preventing default or stopping propagation
    // This allows the click to propagate to parent handlers if needed
    onClick();

    // Add a small debug helper that checks if the click correctly reaches the parent Expander
    setTimeout(() => {
      const expanderElement = (e.currentTarget as HTMLElement).closest('.ui--Expander');

      if (expanderElement) {
        const hasExpandedClass = expanderElement.classList.contains('isExpanded');

        // Store referendum index on the Expander element for debugging
        if (referendumIndex) {
          expanderElement.setAttribute('data-referendum-index', referendumIndex);
          console.log(`%c Added referendum index ${referendumIndex} to Expander`, 'background: #3498db; color: white; font-size: 12px');
        }

        console.log('%c ExpandButton parent Expander state:', 'background: #9b59b6; color: white; font-size: 12px', {
          hasExpandedClass,
          referendumIndex: referendumIndex || 'unknown',
          shouldBeExpanded: !expanded, // What we expect after the click
          synced: hasExpandedClass !== expanded // Are they properly synced after click?
        });
      }
    }, 10);
  }, [debugIndex, expanded, instanceId, isReferendumRow, onClick, referendumIndex]);

  // Track prop changes for debugging purposes
  useEffect(() => {
    if (lastExpandedRef.current !== expanded && isReferendumRow) {
      console.log('%c ExpandButton PROP CHANGED:', 'background: #9b59b6; color: white; font-size: 12px', {
        from: lastExpandedRef.current,
        timestamp: new Date().toISOString(),
        to: expanded
      });

      // Log current state after each change to the expanded prop
      console.log('%c ExpandButton Current State (UPDATED):', 'background: #2ecc71; color: white; font-size: 12px', {
        expanded,
        fromParent: true,
        referendumIndex: referendumIndex || 'unknown',
        updatedAt: new Date().toISOString()
      });

      lastExpandedRef.current = expanded;
    }
  }, [expanded, isReferendumRow, referendumIndex]);

  // Setup global debug helper on mount only
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Use a TypeScript-safe approach with the Window interface
      type ClickDebugFunction = () => void;
      const w = window as { __debugExpandButtonClicks?: ClickDebugFunction };

      w.__debugExpandButtonClicks = function () {
        document.addEventListener('click', function (e) {
          console.log('GLOBAL CLICK DEBUG:', e.target, e.currentTarget);
        }, true);
        console.log('Global click debugging enabled!');
      };

      // Log instructions for debugging
      console.log(
        '%c Debug Help:',
        'background: #3498db; color: white; font-size: 12px',
        'Run window.__debugExpandButtonClicks() in console to enable click tracking'
      );
    }
  }, []);

  return (
    <StyledDiv
      className={`ui--ExpandButton ${className}`}
      data-instance-id={instanceId} /* Unique instance ID for tracing */
      data-ref-expanded={expanded.toString()} /* Track expanded state in DOM */
      data-ref-id={debugIndex} /* Debugging attribute to make ID visible in DOM */
      data-testid='toggle-expander'
      onClick={handleClick}
    >
      <Icon
        className='clickable-icon'
        data-debug-expanded={expanded.toString()}
        icon={expanded ? 'caret-up' : 'caret-down'}
      />
    </StyledDiv>
  );
}

const StyledDiv = styled('div')`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid var(--border-table);
  border-radius: 4px;
  cursor: pointer;
  position: relative; /* To allow absolute positioning of debug elements */

  &::after {
    content: attr(data-ref-id); /* Show the referendumId in the DOM for debugging */
    position: absolute;
    top: -16px;
    right: 0;
    font-size: 9px;
    background: rgba(255, 0, 0, 0.1);
    border-radius: 2px;
    padding: 0 2px;
    color: #ff5722;
    opacity: 0.5;
    pointer-events: none;
    display: var(--debug-display, none); /* Control with CSS var */
  }

  /* Ensure the entire area is clickable */
  & .clickable-icon {
    pointer-events: auto;
    width: 100%;
    height: 100%;
  }

  /* Add visual feedback on hover */
  &:hover {
    background-color: var(--bg-table);
  }
`;

export default React.memo(ExpandButton);
