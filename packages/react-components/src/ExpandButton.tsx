// Copyright 2017-2025 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import React, { useCallback, useEffect } from 'react';

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
  // This log should definitely appear in all circumstances
  console.warn('🔴🔴🔴 ExpandButton COMPONENT RENDER 🔴🔴🔴', { expanded, referendumIndex });
  // Keep track of last prop value to detect changes for debugging
  const lastExpandedRef = React.useRef(expanded);

  // Enhanced logging to ensure click events are visible
  console.log('%c ExpandButton Current State:', 'background: #2ecc71; color: white; font-size: 12px', {
    expanded,
    fromParent: true,
    referendumIndex: referendumIndex || 'unknown' // Log referendum index if available
  });

  // Simply forward the onClick event to the parent without stopping propagation
  // This is critical - we're making this component fully controlled by its parent
  const handleClick = useCallback((e: React.MouseEvent) => {
    // Enhanced logging for debugging purposes only
    console.log('%c ExpandButton CLICKED:', 'background: #e74c3c; color: white; font-size: 14px', {
      currentExpanded: expanded,
      expectedNextState: !expanded,
      referendumIndex: referendumIndex || 'unknown',
      timestamp: new Date().toISOString()
    });

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
  }, [expanded, onClick, referendumIndex]);

  // Track prop changes for debugging purposes
  useEffect(() => {
    if (lastExpandedRef.current !== expanded) {
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
  }, [expanded, referendumIndex]);

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
      className={`${className} ui--ExpandButton`}
      data-expanded={expanded.toString()}
      data-testid='row-toggle'
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

const StyledDiv = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 1.7rem;
  height: 1.7rem;
  border: 1px solid var(--border-table);
  border-radius: 4px;
  cursor: pointer;

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
