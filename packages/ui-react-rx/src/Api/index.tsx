// Copyright 2017-2018 @polkadot/ui-react-rx authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { ProviderInterface } from '@polkadot/api-provider/types';
import { RxApiInterface } from '@polkadot/api-rx/types';
import { EncodingVersions } from '@polkadot/params/types';
import { ApiProps } from '../types';

import React from 'react';
import createWsProvider from '@polkadot/api-provider/ws';
import createApi from '@polkadot/api-rx';
import defaults from '@polkadot/api-rx/defaults';

import ApiContext from './Context';

type Props = {
  api?: RxApiInterface,
  children: any, // node?
  provider?: ProviderInterface,
  url?: string
};

type State = ApiProps & {
  subscriptions: Array<any> // rxjs$ISubscription | null>;
};

export function shouldUseLatestChain(chain?: string, wsUrl?: string): boolean {
  if (typeof chain === 'undefined') return false;
  const re = new RegExp("(poc-1)", "i");
  if (typeof wsUrl !== 'undefined' && wsUrl != '') {
    const matchUrl = re.test(wsUrl.toLowerCase());
    return matchUrl ? false : true;
  }
  const matchChainSpec = re.test(chain.toLowerCase());
  if (matchChainSpec) return false;
  return true;
}

function apiSupport (chain?: string, wsUrl?: string): EncodingVersions {
  return shouldUseLatestChain(chain, wsUrl) ? 'latest' : 'poc-1';
}

export default class Api extends React.PureComponent<Props, State> {
  state: State = {} as State;

  constructor (props: Props) {
    super(props);

    const { provider, url = '' } = props;
    const api = props.api || createApi(
      url && url.length
        ? createWsProvider(url)
        : provider
    );
    const setApi = (api: RxApiInterface): void => {
      this.setState({ api }, () => {
        console.log('updating subscriptions with api: ', api)
        this.updateSubscriptions();
      });
    };
    const setApiProvider = (provider?: ProviderInterface): void =>
      setApi(createApi(provider));
    const setApiWsUrl = (url: string = defaults.WS_URL): void =>
      setApiProvider(createWsProvider(url));

    this.state = {
      api,
      apiConnected: false,
      apiSupport: 'poc-1',
      setApi,
      setApiProvider,
      setApiWsUrl,
      subscriptions: []
    };
  }

  componentDidMount () {
    this.updateSubscriptions();
  }

  componentWillUnmount () {
    this.unsubscribe();
  }

  updateSubscriptions () {
    const { api } = this.state;
    const { url = '' } = this.props;

    this.unsubscribe();
    this.setState({
      subscriptions:
        [
          () => api.isConnected().subscribe((isConnected?: boolean) => {
            this.setState({ apiConnected: !!isConnected });
          }),
          () => api.system.chain().subscribe((chain?: string) => {
            this.setState({ apiSupport: apiSupport(chain, url) });
          })
        ].map((fn: Function) => {
          try {
            return fn();
          } catch (error) {
            console.error(error);
            return null;
          }
        })
    });
  }

  unsubscribe (): void {
    const { subscriptions } = this.state;

    subscriptions.forEach((subscription) => {
      if (subscription) {
        try {
          subscription.unsubscribe();
        } catch (error) {
          console.error(error);
        }
      }
    });
  }

  render () {
    const { api, apiConnected, apiSupport, setApi, setApiProvider, setApiWsUrl } = this.state;

    return (
      <ApiContext.Provider value={{
        api,
        apiConnected,
        apiSupport,
        setApi,
        setApiProvider,
        setApiWsUrl
      }}>
        {this.props.children}
      </ApiContext.Provider>
    );
  }
}
