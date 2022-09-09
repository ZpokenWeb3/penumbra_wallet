import * as jspb from 'google-protobuf'

import * as src_proto_crypto_pb from '../../src/proto/crypto_pb';


export class Validator extends jspb.Message {
  getIdentityKey(): src_proto_crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: src_proto_crypto_pb.IdentityKey): Validator;
  hasIdentityKey(): boolean;
  clearIdentityKey(): Validator;

  getConsensusKey(): Uint8Array | string;
  getConsensusKey_asU8(): Uint8Array;
  getConsensusKey_asB64(): string;
  setConsensusKey(value: Uint8Array | string): Validator;

  getName(): string;
  setName(value: string): Validator;

  getWebsite(): string;
  setWebsite(value: string): Validator;

  getDescription(): string;
  setDescription(value: string): Validator;

  getEnabled(): boolean;
  setEnabled(value: boolean): Validator;

  getFundingStreamsList(): Array<FundingStream>;
  setFundingStreamsList(value: Array<FundingStream>): Validator;
  clearFundingStreamsList(): Validator;
  addFundingStreams(value?: FundingStream, index?: number): FundingStream;

  getSequenceNumber(): number;
  setSequenceNumber(value: number): Validator;

  getGovernanceKey(): src_proto_crypto_pb.GovernanceKey | undefined;
  setGovernanceKey(value?: src_proto_crypto_pb.GovernanceKey): Validator;
  hasGovernanceKey(): boolean;
  clearGovernanceKey(): Validator;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Validator.AsObject;
  static toObject(includeInstance: boolean, msg: Validator): Validator.AsObject;
  static serializeBinaryToWriter(message: Validator, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Validator;
  static deserializeBinaryFromReader(message: Validator, reader: jspb.BinaryReader): Validator;
}

export namespace Validator {
  export type AsObject = {
    identityKey?: src_proto_crypto_pb.IdentityKey.AsObject,
    consensusKey: Uint8Array | string,
    name: string,
    website: string,
    description: string,
    enabled: boolean,
    fundingStreamsList: Array<FundingStream.AsObject>,
    sequenceNumber: number,
    governanceKey?: src_proto_crypto_pb.GovernanceKey.AsObject,
  }
}

export class ValidatorList extends jspb.Message {
  getValidatorKeysList(): Array<src_proto_crypto_pb.IdentityKey>;
  setValidatorKeysList(value: Array<src_proto_crypto_pb.IdentityKey>): ValidatorList;
  clearValidatorKeysList(): ValidatorList;
  addValidatorKeys(value?: src_proto_crypto_pb.IdentityKey, index?: number): src_proto_crypto_pb.IdentityKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorList.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorList): ValidatorList.AsObject;
  static serializeBinaryToWriter(message: ValidatorList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorList;
  static deserializeBinaryFromReader(message: ValidatorList, reader: jspb.BinaryReader): ValidatorList;
}

export namespace ValidatorList {
  export type AsObject = {
    validatorKeysList: Array<src_proto_crypto_pb.IdentityKey.AsObject>,
  }
}

export class FundingStream extends jspb.Message {
  getAddress(): string;
  setAddress(value: string): FundingStream;

  getRateBps(): number;
  setRateBps(value: number): FundingStream;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FundingStream.AsObject;
  static toObject(includeInstance: boolean, msg: FundingStream): FundingStream.AsObject;
  static serializeBinaryToWriter(message: FundingStream, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FundingStream;
  static deserializeBinaryFromReader(message: FundingStream, reader: jspb.BinaryReader): FundingStream;
}

export namespace FundingStream {
  export type AsObject = {
    address: string,
    rateBps: number,
  }
}

export class RateData extends jspb.Message {
  getIdentityKey(): src_proto_crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: src_proto_crypto_pb.IdentityKey): RateData;
  hasIdentityKey(): boolean;
  clearIdentityKey(): RateData;

  getEpochIndex(): number;
  setEpochIndex(value: number): RateData;

  getValidatorRewardRate(): number;
  setValidatorRewardRate(value: number): RateData;

  getValidatorExchangeRate(): number;
  setValidatorExchangeRate(value: number): RateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RateData.AsObject;
  static toObject(includeInstance: boolean, msg: RateData): RateData.AsObject;
  static serializeBinaryToWriter(message: RateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RateData;
  static deserializeBinaryFromReader(message: RateData, reader: jspb.BinaryReader): RateData;
}

export namespace RateData {
  export type AsObject = {
    identityKey?: src_proto_crypto_pb.IdentityKey.AsObject,
    epochIndex: number,
    validatorRewardRate: number,
    validatorExchangeRate: number,
  }
}

export class BaseRateData extends jspb.Message {
  getEpochIndex(): number;
  setEpochIndex(value: number): BaseRateData;

  getBaseRewardRate(): number;
  setBaseRewardRate(value: number): BaseRateData;

  getBaseExchangeRate(): number;
  setBaseExchangeRate(value: number): BaseRateData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BaseRateData.AsObject;
  static toObject(includeInstance: boolean, msg: BaseRateData): BaseRateData.AsObject;
  static serializeBinaryToWriter(message: BaseRateData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BaseRateData;
  static deserializeBinaryFromReader(message: BaseRateData, reader: jspb.BinaryReader): BaseRateData;
}

export namespace BaseRateData {
  export type AsObject = {
    epochIndex: number,
    baseRewardRate: number,
    baseExchangeRate: number,
  }
}

export class ValidatorStatus extends jspb.Message {
  getIdentityKey(): src_proto_crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: src_proto_crypto_pb.IdentityKey): ValidatorStatus;
  hasIdentityKey(): boolean;
  clearIdentityKey(): ValidatorStatus;

  getState(): ValidatorState | undefined;
  setState(value?: ValidatorState): ValidatorStatus;
  hasState(): boolean;
  clearState(): ValidatorStatus;

  getVotingPower(): number;
  setVotingPower(value: number): ValidatorStatus;

  getBondingState(): BondingState | undefined;
  setBondingState(value?: BondingState): ValidatorStatus;
  hasBondingState(): boolean;
  clearBondingState(): ValidatorStatus;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorStatus.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorStatus): ValidatorStatus.AsObject;
  static serializeBinaryToWriter(message: ValidatorStatus, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorStatus;
  static deserializeBinaryFromReader(message: ValidatorStatus, reader: jspb.BinaryReader): ValidatorStatus;
}

export namespace ValidatorStatus {
  export type AsObject = {
    identityKey?: src_proto_crypto_pb.IdentityKey.AsObject,
    state?: ValidatorState.AsObject,
    votingPower: number,
    bondingState?: BondingState.AsObject,
  }
}

export class BondingState extends jspb.Message {
  getState(): BondingState.BondingStateEnum;
  setState(value: BondingState.BondingStateEnum): BondingState;

  getUnbondingEpoch(): number;
  setUnbondingEpoch(value: number): BondingState;
  hasUnbondingEpoch(): boolean;
  clearUnbondingEpoch(): BondingState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BondingState.AsObject;
  static toObject(includeInstance: boolean, msg: BondingState): BondingState.AsObject;
  static serializeBinaryToWriter(message: BondingState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BondingState;
  static deserializeBinaryFromReader(message: BondingState, reader: jspb.BinaryReader): BondingState;
}

export namespace BondingState {
  export type AsObject = {
    state: BondingState.BondingStateEnum,
    unbondingEpoch?: number,
  }

  export enum BondingStateEnum { 
    BONDED = 0,
    UNBONDING = 1,
    UNBONDED = 2,
  }

  export enum UnbondingEpochCase { 
    _UNBONDING_EPOCH_NOT_SET = 0,
    UNBONDING_EPOCH = 2,
  }
}

export class ValidatorState extends jspb.Message {
  getState(): ValidatorState.ValidatorStateEnum;
  setState(value: ValidatorState.ValidatorStateEnum): ValidatorState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorState.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorState): ValidatorState.AsObject;
  static serializeBinaryToWriter(message: ValidatorState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorState;
  static deserializeBinaryFromReader(message: ValidatorState, reader: jspb.BinaryReader): ValidatorState;
}

export namespace ValidatorState {
  export type AsObject = {
    state: ValidatorState.ValidatorStateEnum,
  }

  export enum ValidatorStateEnum { 
    INACTIVE = 0,
    ACTIVE = 1,
    JAILED = 2,
    TOMBSTONED = 3,
    DISABLED = 4,
  }
}

export class ValidatorInfo extends jspb.Message {
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): ValidatorInfo;
  hasValidator(): boolean;
  clearValidator(): ValidatorInfo;

  getStatus(): ValidatorStatus | undefined;
  setStatus(value?: ValidatorStatus): ValidatorInfo;
  hasStatus(): boolean;
  clearStatus(): ValidatorInfo;

  getRateData(): RateData | undefined;
  setRateData(value?: RateData): ValidatorInfo;
  hasRateData(): boolean;
  clearRateData(): ValidatorInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorInfo): ValidatorInfo.AsObject;
  static serializeBinaryToWriter(message: ValidatorInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorInfo;
  static deserializeBinaryFromReader(message: ValidatorInfo, reader: jspb.BinaryReader): ValidatorInfo;
}

export namespace ValidatorInfo {
  export type AsObject = {
    validator?: Validator.AsObject,
    status?: ValidatorStatus.AsObject,
    rateData?: RateData.AsObject,
  }
}

export class ValidatorDefinition extends jspb.Message {
  getValidator(): Validator | undefined;
  setValidator(value?: Validator): ValidatorDefinition;
  hasValidator(): boolean;
  clearValidator(): ValidatorDefinition;

  getAuthSig(): Uint8Array | string;
  getAuthSig_asU8(): Uint8Array;
  getAuthSig_asB64(): string;
  setAuthSig(value: Uint8Array | string): ValidatorDefinition;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorDefinition.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorDefinition): ValidatorDefinition.AsObject;
  static serializeBinaryToWriter(message: ValidatorDefinition, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorDefinition;
  static deserializeBinaryFromReader(message: ValidatorDefinition, reader: jspb.BinaryReader): ValidatorDefinition;
}

export namespace ValidatorDefinition {
  export type AsObject = {
    validator?: Validator.AsObject,
    authSig: Uint8Array | string,
  }
}

export class Delegate extends jspb.Message {
  getValidatorIdentity(): src_proto_crypto_pb.IdentityKey | undefined;
  setValidatorIdentity(value?: src_proto_crypto_pb.IdentityKey): Delegate;
  hasValidatorIdentity(): boolean;
  clearValidatorIdentity(): Delegate;

  getEpochIndex(): number;
  setEpochIndex(value: number): Delegate;

  getUnbondedAmount(): number;
  setUnbondedAmount(value: number): Delegate;

  getDelegationAmount(): number;
  setDelegationAmount(value: number): Delegate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Delegate.AsObject;
  static toObject(includeInstance: boolean, msg: Delegate): Delegate.AsObject;
  static serializeBinaryToWriter(message: Delegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Delegate;
  static deserializeBinaryFromReader(message: Delegate, reader: jspb.BinaryReader): Delegate;
}

export namespace Delegate {
  export type AsObject = {
    validatorIdentity?: src_proto_crypto_pb.IdentityKey.AsObject,
    epochIndex: number,
    unbondedAmount: number,
    delegationAmount: number,
  }
}

export class Undelegate extends jspb.Message {
  getValidatorIdentity(): src_proto_crypto_pb.IdentityKey | undefined;
  setValidatorIdentity(value?: src_proto_crypto_pb.IdentityKey): Undelegate;
  hasValidatorIdentity(): boolean;
  clearValidatorIdentity(): Undelegate;

  getEpochIndex(): number;
  setEpochIndex(value: number): Undelegate;

  getUnbondedAmount(): number;
  setUnbondedAmount(value: number): Undelegate;

  getDelegationAmount(): number;
  setDelegationAmount(value: number): Undelegate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Undelegate.AsObject;
  static toObject(includeInstance: boolean, msg: Undelegate): Undelegate.AsObject;
  static serializeBinaryToWriter(message: Undelegate, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Undelegate;
  static deserializeBinaryFromReader(message: Undelegate, reader: jspb.BinaryReader): Undelegate;
}

export namespace Undelegate {
  export type AsObject = {
    validatorIdentity?: src_proto_crypto_pb.IdentityKey.AsObject,
    epochIndex: number,
    unbondedAmount: number,
    delegationAmount: number,
  }
}

export class CommissionAmount extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): CommissionAmount;

  getDestination(): src_proto_crypto_pb.Address | undefined;
  setDestination(value?: src_proto_crypto_pb.Address): CommissionAmount;
  hasDestination(): boolean;
  clearDestination(): CommissionAmount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommissionAmount.AsObject;
  static toObject(includeInstance: boolean, msg: CommissionAmount): CommissionAmount.AsObject;
  static serializeBinaryToWriter(message: CommissionAmount, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommissionAmount;
  static deserializeBinaryFromReader(message: CommissionAmount, reader: jspb.BinaryReader): CommissionAmount;
}

export namespace CommissionAmount {
  export type AsObject = {
    amount: number,
    destination?: src_proto_crypto_pb.Address.AsObject,
  }
}

export class CommissionAmounts extends jspb.Message {
  getNotesList(): Array<CommissionAmount>;
  setNotesList(value: Array<CommissionAmount>): CommissionAmounts;
  clearNotesList(): CommissionAmounts;
  addNotes(value?: CommissionAmount, index?: number): CommissionAmount;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommissionAmounts.AsObject;
  static toObject(includeInstance: boolean, msg: CommissionAmounts): CommissionAmounts.AsObject;
  static serializeBinaryToWriter(message: CommissionAmounts, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommissionAmounts;
  static deserializeBinaryFromReader(message: CommissionAmounts, reader: jspb.BinaryReader): CommissionAmounts;
}

export namespace CommissionAmounts {
  export type AsObject = {
    notesList: Array<CommissionAmount.AsObject>,
  }
}

export class DelegationChanges extends jspb.Message {
  getDelegationsList(): Array<Delegate>;
  setDelegationsList(value: Array<Delegate>): DelegationChanges;
  clearDelegationsList(): DelegationChanges;
  addDelegations(value?: Delegate, index?: number): Delegate;

  getUndelegationsList(): Array<Undelegate>;
  setUndelegationsList(value: Array<Undelegate>): DelegationChanges;
  clearUndelegationsList(): DelegationChanges;
  addUndelegations(value?: Undelegate, index?: number): Undelegate;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegationChanges.AsObject;
  static toObject(includeInstance: boolean, msg: DelegationChanges): DelegationChanges.AsObject;
  static serializeBinaryToWriter(message: DelegationChanges, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegationChanges;
  static deserializeBinaryFromReader(message: DelegationChanges, reader: jspb.BinaryReader): DelegationChanges;
}

export namespace DelegationChanges {
  export type AsObject = {
    delegationsList: Array<Delegate.AsObject>,
    undelegationsList: Array<Undelegate.AsObject>,
  }
}

export class Uptime extends jspb.Message {
  getAsOfBlockHeight(): number;
  setAsOfBlockHeight(value: number): Uptime;

  getWindowLen(): number;
  setWindowLen(value: number): Uptime;

  getBitvec(): Uint8Array | string;
  getBitvec_asU8(): Uint8Array;
  getBitvec_asB64(): string;
  setBitvec(value: Uint8Array | string): Uptime;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uptime.AsObject;
  static toObject(includeInstance: boolean, msg: Uptime): Uptime.AsObject;
  static serializeBinaryToWriter(message: Uptime, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uptime;
  static deserializeBinaryFromReader(message: Uptime, reader: jspb.BinaryReader): Uptime;
}

export namespace Uptime {
  export type AsObject = {
    asOfBlockHeight: number,
    windowLen: number,
    bitvec: Uint8Array | string,
  }
}

export class CurrentConsensusKeys extends jspb.Message {
  getConsensusKeysList(): Array<src_proto_crypto_pb.ConsensusKey>;
  setConsensusKeysList(value: Array<src_proto_crypto_pb.ConsensusKey>): CurrentConsensusKeys;
  clearConsensusKeysList(): CurrentConsensusKeys;
  addConsensusKeys(value?: src_proto_crypto_pb.ConsensusKey, index?: number): src_proto_crypto_pb.ConsensusKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CurrentConsensusKeys.AsObject;
  static toObject(includeInstance: boolean, msg: CurrentConsensusKeys): CurrentConsensusKeys.AsObject;
  static serializeBinaryToWriter(message: CurrentConsensusKeys, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CurrentConsensusKeys;
  static deserializeBinaryFromReader(message: CurrentConsensusKeys, reader: jspb.BinaryReader): CurrentConsensusKeys;
}

export namespace CurrentConsensusKeys {
  export type AsObject = {
    consensusKeysList: Array<src_proto_crypto_pb.ConsensusKey.AsObject>,
  }
}

