// Copyright 2017-2018 @polkadot/ui-identicon authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { shouldUseLatestChain } from './index';

describe('check chain spec and WS_URL from environment variables to configure encoding', () => {
  it('enables PoC-1 encoding when chain specification is PoC-1 or undefined', () => {
    expect(shouldUseLatestChain('poc-1', '')).toEqual(false);
    expect(shouldUseLatestChain('PoC-1 Testnet', '')).toEqual(false);
    expect(shouldUseLatestChain(undefined, '')).toEqual(false);
  });

  it('enables PoC-1 encoding when WS_URL is PoC-1', () => {
    expect(shouldUseLatestChain('', 'wss://poc-1.polkadot.io:9944')).toEqual(false);
  });

  it('enables PoC-1 encoding when WS_URL is PoC-1 but where WS_URL has precedence over Polkadot Node CLI options', () => {
    expect(shouldUseLatestChain('poc-2', 'wss://poc-1.polkadot.io:9944')).toEqual(false);
    expect(shouldUseLatestChain('local', 'wss://poc-1.polkadot.io:9944')).toEqual(false);
    expect(shouldUseLatestChain('dev', 'wss://poc-1.polkadot.io:9944')).toEqual(false);
  });

  it('enables Latest encoding when chain specification is NOT PoC-1 or undefined', () => {
    expect(shouldUseLatestChain('poc-2', '')).toEqual(true);
    expect(shouldUseLatestChain('PoC-2 Testnet', '')).toEqual(true);
    expect(shouldUseLatestChain('Local', '')).toEqual(true);
    expect(shouldUseLatestChain('Development', '')).toEqual(true);
    expect(shouldUseLatestChain(' development', '')).toEqual(true);
    expect(shouldUseLatestChain('dev', '')).toEqual(true);
    expect(shouldUseLatestChain('Local', '')).toEqual(true);
    expect(shouldUseLatestChain(' local ', '')).toEqual(true);
    expect(shouldUseLatestChain('loc', '')).toEqual(true);
  });

  it('enables Latest encoding when WS_URL is NOT PoC-1', () => {
    expect(shouldUseLatestChain('', 'wss://poc-2.polkadot.io:9944')).toEqual(true);
    expect(shouldUseLatestChain('', 'wss://random-url:9944')).toEqual(true);
  });

  it('enables Latest encoding when WS_URL is NOT PoC-1 but where WS_URL has precedence over Polkadot Node CLI options', () => {
    expect(shouldUseLatestChain('poc-1', 'wss://poc-2.polkadot.io:9944')).toEqual(true);
    expect(shouldUseLatestChain('poc-1', 'wss://random-url:9944')).toEqual(true);
  });
});
