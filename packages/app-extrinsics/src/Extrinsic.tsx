// Copyright 2017-2018 @polkadot/app-extrinsics authors & contributors
// This software may be modified and distributed under the terms
// of the ISC license. See the LICENSE file for details.

import { SectionItem } from '@polkadot/params/types';
import { Extrinsics } from '@polkadot/extrinsics/types';
import { BareProps } from '@polkadot/ui-app/types';
import { ApiProps } from '@polkadot/ui-react-rx/types';
import { RawParam } from '@polkadot/ui-app/Params/types';
import { EncodedMessage } from '@polkadot/ui-signer/types';

import BN from 'bn.js';
import React from 'react';

import encode from '@polkadot/extrinsics/codec/encode/extrinsic';
import InputExtrinsic from '@polkadot/ui-app/InputExtrinsic';
import Params from '@polkadot/ui-app/Params';
import { checkValueBitLength, maxValue } from '@polkadot/ui-app/util/chainSpec';
import isUndefined from '@polkadot/util/is/undefined';
import rawToValues from '@polkadot/ui-signer/rawToValues';
import withApi from '@polkadot/ui-react-rx/with/api';

import paramComponents from './Params';

type Props = BareProps & ApiProps & {
  defaultValue: SectionItem<Extrinsics>,
  isDisabled?: boolean,
  isError?: boolean,
  isPrivate?: boolean,
  labelMethod?: string,
  labelSection?: string,
  onChange: (encoded: EncodedMessage) => void,
  withLabel?: boolean
};

type State = {
  extrinsic: SectionItem<Extrinsics>,
  values: Array<RawParam>
};

function convertUint8ArrayToBinaryString(u8Array) {
	var i, len = u8Array.length, b_str = "";
	for (i=0; i<len; i++) {
		b_str += String.fromCharCode(u8Array[i]);
	}
	return b_str;
}

class Extrinsic extends React.PureComponent<Props, State> {
  state: State;

  constructor (props: Props) {
    super(props);

    this.state = {
      extrinsic: props.defaultValue,
      values: []
    };
  }

  render () {
    const { defaultValue, isDisabled, isError, isPrivate, labelMethod, labelSection, withLabel } = this.props;
    const { extrinsic } = this.state;

    return (
      <div className='extrinsics--Extrinsic'>
        <InputExtrinsic
          defaultValue={defaultValue}
          isDisabled={isDisabled}
          isError={isError}
          isPrivate={isPrivate}
          labelMethod={labelMethod}
          labelSection={labelSection}
          onChange={this.onChangeExtrinsic}
          withLabel={withLabel}
        />
        <Params
          item={extrinsic}
          onChange={this.onChangeValues}
          overrides={paramComponents}
        />
      </div>
    );
  }

  nextState (newState: State): void {
    console.log('Extrinsic nextState')

    const isValidLength = (values: Array<RawParam>, index: number) => {
      console.log('values[index].type', values[index].type);
      return (values[index].type === 'Balance' ? checkValueBitLength(values[index].value as BN, 128) : true);
    };

    // choose whether to keep here or earlier in isValidBalance??
    // already tested in isValidBalance (i.e. !inputBN.lt(maxBN) ) but doesn't catch it early enough
    // add unit test to this file
    const isBelowMaxValue = (values: Array<RawParam>, index: number) => {
      // console.log('values[index].type', values[index].type);
      if (values[index].type === 'Balance') {
        console.log('index: ', index);
        console.log('values[index].value: ', values[index].value);
        convertUint8ArrayToBinaryString(values[index].value);
      }

      return (values[index].type === 'Balance')
        ? ((values[index].value as BN) < maxValue(128))
        : false;
    };

    this.setState(newState, () => {
      const { apiSupport, onChange } = this.props;
      const { extrinsic, values } = this.state;

      const params = Object.values(extrinsic.params);
      const isValid = values.length === params.length &&
        params.reduce((isValid, param, index) =>
          isValid &&
          !isUndefined(values[index]) &&
          !isUndefined(values[index].value) &&
          isValidLength(values, index) &&
          isBelowMaxValue(values, index) &&
          values[index].isValid, true);

      const value = isValid && extrinsic.params
        ? encode(extrinsic, values.map((p) => p.value), apiSupport)
        : new Uint8Array([]);
    
      console.log('Extrinsic nextState after encode')

      onChange({
        isValid,
        values: [value]
      });
    });
  }

  onChangeExtrinsic = (extrinsic: SectionItem<Extrinsics>): void => {
    this.nextState({ extrinsic, values: [] } as State);
  }

  onChangeValues = (values: Array<RawParam>): void => {
    this.nextState({ values } as State);
  }
}

export default withApi(Extrinsic);
