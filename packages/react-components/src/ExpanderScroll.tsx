// Copyright 2017-2025 @polkadot/react-components authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { Props as ExpanderProps } from './Expander.js';

import React, { useCallback, useMemo } from 'react';

import Table from './Table/index.js';
import Expander from './Expander.js';
import { styled } from './styled.js';

interface Props extends Omit<ExpanderProps, 'renderChildren'> {
  empty?: string;
  referendumId?: string;
  renderChildren?: (() => React.ReactNode | undefined | null) | null;
}

function mapRow (row: React.ReactNode, key: number): React.ReactNode {
  return (
    <tr key={key}>
      <td>{row}</td>
    </tr>
  );
}

function ExpanderScroll ({ children, className, empty, referendumId, renderChildren, summary }: Props): React.ReactElement<Props> {
  // Force strict referendumId handling
  const refId = referendumId || 'EXPANDER-SCROLL-MISSING';

  // Add enhanced debugging with component name for tracing
  console.warn('🟣🟣🟣 EXPANDER-SCROLL 🟣🟣🟣', {
    component: 'ExpanderScroll',
    refId,
    summary: summary ? 'has summary' : 'no summary'
  });
  const hasContent = useMemo(
    () => !!(renderChildren || children),
    [children, renderChildren]
  );

  const innerRender = useCallback(
    (): React.ReactNode => (renderChildren || children) && (
      <div className='tableContainer'>
        <Table
          empty={empty}
          isInline
        >
          {renderChildren
            ? (() => {
              const rendered = renderChildren();

              return Array.isArray(rendered)
                ? rendered.map(mapRow)
                : rendered !== null && rendered !== undefined
                  ? <tr><td>{rendered}</td></tr>
                  : null;
            })()
            : Array.isArray(children)
              ? children.map(mapRow)
              : <tr><td>{children}</td></tr>
          }
        </Table>
      </div>
    ),
    [children, empty, renderChildren]
  );

  return (
    <StyledExpander
      className={className}
      referendumId={refId}
      renderChildren={hasContent ? innerRender : undefined}
      summary={summary}
    />
  );
}

// Create a wrapper component that explicitly forwards the referendumId prop
const ExpanderWithForwardedProps = ({ className, referendumId, ...props }: Props): React.ReactElement<Props> => {
  // Ensure strict prop handling with fallback
  const refId = referendumId || 'FORWARDED-EXPANDER-MISSING';

  // Use class detection for referendum rows - consistent with other components
  const isReferendumRow = className?.includes('ui--Expander') === true && referendumId !== 'FORWARDED-EXPANDER-MISSING';

  // Conditional logging only for referendum rows
  if (isReferendumRow) {
    console.warn('🪳🪳🪳 FORWARDING PROPS IN STYLED WRAPPER 🪳🪳🪳', {
      component: 'ExpanderWithForwardedProps',
      originalRefId: referendumId,
      refId
    });
  }

  return (
    <Expander
      className={className}
      referendumId={refId}
      {...props}
    />
  );
};

const StyledExpander = styled(ExpanderWithForwardedProps)`
  .tableContainer {
    overflow-y: scroll;
    display: block;
    margin: 0 0 0 auto;
    max-height: 13.75rem;
    max-width: 25rem;
    overflow-x: hidden;
  }
`;

export default React.memo(ExpanderScroll);
