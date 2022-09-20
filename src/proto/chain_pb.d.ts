import * as jspb from 'google-protobuf'

import * as crypto_pb from './crypto_pb';
import * as stake_pb from './stake_pb';


export class ChainParameters extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): ChainParameters;

  getEpochDuration(): number;
  setEpochDuration(value: number): ChainParameters;

  getUnbondingEpochs(): number;
  setUnbondingEpochs(value: number): ChainParameters;

  getActiveValidatorLimit(): number;
  setActiveValidatorLimit(value: number): ChainParameters;

  getBaseRewardRate(): number;
  setBaseRewardRate(value: number): ChainParameters;

  getSlashingPenaltyMisbehaviorBps(): number;
  setSlashingPenaltyMisbehaviorBps(value: number): ChainParameters;

  getSlashingPenaltyDowntimeBps(): number;
  setSlashingPenaltyDowntimeBps(value: number): ChainParameters;

  getSignedBlocksWindowLen(): number;
  setSignedBlocksWindowLen(value: number): ChainParameters;

  getMissedBlocksMaximum(): number;
  setMissedBlocksMaximum(value: number): ChainParameters;

  getIbcEnabled(): boolean;
  setIbcEnabled(value: boolean): ChainParameters;

  getInboundIcs20TransfersEnabled(): boolean;
  setInboundIcs20TransfersEnabled(value: boolean): ChainParameters;

  getOutboundIcs20TransfersEnabled(): boolean;
  setOutboundIcs20TransfersEnabled(value: boolean): ChainParameters;

  getProposalVotingBlocks(): number;
  setProposalVotingBlocks(value: number): ChainParameters;

  getProposalDepositAmount(): number;
  setProposalDepositAmount(value: number): ChainParameters;

  getProposalValidQuorum(): Ratio | undefined;
  setProposalValidQuorum(value?: Ratio): ChainParameters;
  hasProposalValidQuorum(): boolean;
  clearProposalValidQuorum(): ChainParameters;

  getProposalPassThreshold(): Ratio | undefined;
  setProposalPassThreshold(value?: Ratio): ChainParameters;
  hasProposalPassThreshold(): boolean;
  clearProposalPassThreshold(): ChainParameters;

  getProposalVetoThreshold(): Ratio | undefined;
  setProposalVetoThreshold(value?: Ratio): ChainParameters;
  hasProposalVetoThreshold(): boolean;
  clearProposalVetoThreshold(): ChainParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainParameters.AsObject;
  static toObject(includeInstance: boolean, msg: ChainParameters): ChainParameters.AsObject;
  static serializeBinaryToWriter(message: ChainParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainParameters;
  static deserializeBinaryFromReader(message: ChainParameters, reader: jspb.BinaryReader): ChainParameters;
}

export namespace ChainParameters {
  export type AsObject = {
    chainId: string,
    epochDuration: number,
    unbondingEpochs: number,
    activeValidatorLimit: number,
    baseRewardRate: number,
    slashingPenaltyMisbehaviorBps: number,
    slashingPenaltyDowntimeBps: number,
    signedBlocksWindowLen: number,
    missedBlocksMaximum: number,
    ibcEnabled: boolean,
    inboundIcs20TransfersEnabled: boolean,
    outboundIcs20TransfersEnabled: boolean,
    proposalVotingBlocks: number,
    proposalDepositAmount: number,
    proposalValidQuorum?: Ratio.AsObject,
    proposalPassThreshold?: Ratio.AsObject,
    proposalVetoThreshold?: Ratio.AsObject,
  }
}

export class Ratio extends jspb.Message {
  getNumerator(): number;
  setNumerator(value: number): Ratio;

  getDenominator(): number;
  setDenominator(value: number): Ratio;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Ratio.AsObject;
  static toObject(includeInstance: boolean, msg: Ratio): Ratio.AsObject;
  static serializeBinaryToWriter(message: Ratio, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Ratio;
  static deserializeBinaryFromReader(message: Ratio, reader: jspb.BinaryReader): Ratio;
}

export namespace Ratio {
  export type AsObject = {
    numerator: number,
    denominator: number,
  }
}

export class FmdParameters extends jspb.Message {
  getPrecisionBits(): number;
  setPrecisionBits(value: number): FmdParameters;

  getAsOfBlockHeight(): number;
  setAsOfBlockHeight(value: number): FmdParameters;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FmdParameters.AsObject;
  static toObject(includeInstance: boolean, msg: FmdParameters): FmdParameters.AsObject;
  static serializeBinaryToWriter(message: FmdParameters, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FmdParameters;
  static deserializeBinaryFromReader(message: FmdParameters, reader: jspb.BinaryReader): FmdParameters;
}

export namespace FmdParameters {
  export type AsObject = {
    precisionBits: number,
    asOfBlockHeight: number,
  }
}

export class AssetInfo extends jspb.Message {
  getAssetId(): crypto_pb.AssetId | undefined;
  setAssetId(value?: crypto_pb.AssetId): AssetInfo;
  hasAssetId(): boolean;
  clearAssetId(): AssetInfo;

  getDenom(): crypto_pb.Denom | undefined;
  setDenom(value?: crypto_pb.Denom): AssetInfo;
  hasDenom(): boolean;
  clearDenom(): AssetInfo;

  getAsOfBlockHeight(): number;
  setAsOfBlockHeight(value: number): AssetInfo;

  getTotalSupply(): number;
  setTotalSupply(value: number): AssetInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetInfo.AsObject;
  static toObject(includeInstance: boolean, msg: AssetInfo): AssetInfo.AsObject;
  static serializeBinaryToWriter(message: AssetInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetInfo;
  static deserializeBinaryFromReader(message: AssetInfo, reader: jspb.BinaryReader): AssetInfo;
}

export namespace AssetInfo {
  export type AsObject = {
    assetId?: crypto_pb.AssetId.AsObject,
    denom?: crypto_pb.Denom.AsObject,
    asOfBlockHeight: number,
    totalSupply: number,
  }
}

export class CompactBlock extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): CompactBlock;

  getNotePayloadsList(): Array<AnnotatedNotePayload>;
  setNotePayloadsList(value: Array<AnnotatedNotePayload>): CompactBlock;
  clearNotePayloadsList(): CompactBlock;
  addNotePayloads(value?: AnnotatedNotePayload, index?: number): AnnotatedNotePayload;

  getNullifiersList(): Array<crypto_pb.Nullifier>;
  setNullifiersList(value: Array<crypto_pb.Nullifier>): CompactBlock;
  clearNullifiersList(): CompactBlock;
  addNullifiers(value?: crypto_pb.Nullifier, index?: number): crypto_pb.Nullifier;

  getBlockRoot(): crypto_pb.MerkleRoot | undefined;
  setBlockRoot(value?: crypto_pb.MerkleRoot): CompactBlock;
  hasBlockRoot(): boolean;
  clearBlockRoot(): CompactBlock;

  getEpochRoot(): crypto_pb.MerkleRoot | undefined;
  setEpochRoot(value?: crypto_pb.MerkleRoot): CompactBlock;
  hasEpochRoot(): boolean;
  clearEpochRoot(): CompactBlock;

  getQuarantined(): Quarantined | undefined;
  setQuarantined(value?: Quarantined): CompactBlock;
  hasQuarantined(): boolean;
  clearQuarantined(): CompactBlock;

  getSlashedList(): Array<crypto_pb.IdentityKey>;
  setSlashedList(value: Array<crypto_pb.IdentityKey>): CompactBlock;
  clearSlashedList(): CompactBlock;
  addSlashed(value?: crypto_pb.IdentityKey, index?: number): crypto_pb.IdentityKey;

  getProposalStarted(): boolean;
  setProposalStarted(value: boolean): CompactBlock;

  getFmdParameters(): FmdParameters | undefined;
  setFmdParameters(value?: FmdParameters): CompactBlock;
  hasFmdParameters(): boolean;
  clearFmdParameters(): CompactBlock;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompactBlock.AsObject;
  static toObject(includeInstance: boolean, msg: CompactBlock): CompactBlock.AsObject;
  static serializeBinaryToWriter(message: CompactBlock, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompactBlock;
  static deserializeBinaryFromReader(message: CompactBlock, reader: jspb.BinaryReader): CompactBlock;
}

export namespace CompactBlock {
  export type AsObject = {
    height: number,
    notePayloadsList: Array<AnnotatedNotePayload.AsObject>,
    nullifiersList: Array<crypto_pb.Nullifier.AsObject>,
    blockRoot?: crypto_pb.MerkleRoot.AsObject,
    epochRoot?: crypto_pb.MerkleRoot.AsObject,
    quarantined?: Quarantined.AsObject,
    slashedList: Array<crypto_pb.IdentityKey.AsObject>,
    proposalStarted: boolean,
    fmdParameters?: FmdParameters.AsObject,
  }
}

export class AnnotatedNotePayload extends jspb.Message {
  getPayload(): crypto_pb.NotePayload | undefined;
  setPayload(value?: crypto_pb.NotePayload): AnnotatedNotePayload;
  hasPayload(): boolean;
  clearPayload(): AnnotatedNotePayload;

  getSource(): NoteSource | undefined;
  setSource(value?: NoteSource): AnnotatedNotePayload;
  hasSource(): boolean;
  clearSource(): AnnotatedNotePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AnnotatedNotePayload.AsObject;
  static toObject(includeInstance: boolean, msg: AnnotatedNotePayload): AnnotatedNotePayload.AsObject;
  static serializeBinaryToWriter(message: AnnotatedNotePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AnnotatedNotePayload;
  static deserializeBinaryFromReader(message: AnnotatedNotePayload, reader: jspb.BinaryReader): AnnotatedNotePayload;
}

export namespace AnnotatedNotePayload {
  export type AsObject = {
    payload?: crypto_pb.NotePayload.AsObject,
    source?: NoteSource.AsObject,
  }
}

export class KnownAssets extends jspb.Message {
  getAssetsList(): Array<crypto_pb.Asset>;
  setAssetsList(value: Array<crypto_pb.Asset>): KnownAssets;
  clearAssetsList(): KnownAssets;
  addAssets(value?: crypto_pb.Asset, index?: number): crypto_pb.Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KnownAssets.AsObject;
  static toObject(includeInstance: boolean, msg: KnownAssets): KnownAssets.AsObject;
  static serializeBinaryToWriter(message: KnownAssets, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KnownAssets;
  static deserializeBinaryFromReader(message: KnownAssets, reader: jspb.BinaryReader): KnownAssets;
}

export namespace KnownAssets {
  export type AsObject = {
    assetsList: Array<crypto_pb.Asset.AsObject>,
  }
}

export class NoteSource extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): NoteSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteSource.AsObject;
  static toObject(includeInstance: boolean, msg: NoteSource): NoteSource.AsObject;
  static serializeBinaryToWriter(message: NoteSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteSource;
  static deserializeBinaryFromReader(message: NoteSource, reader: jspb.BinaryReader): NoteSource;
}

export namespace NoteSource {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class DelibleNoteSource extends jspb.Message {
  getSource(): NoteSource | undefined;
  setSource(value?: NoteSource): DelibleNoteSource;
  hasSource(): boolean;
  clearSource(): DelibleNoteSource;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelibleNoteSource.AsObject;
  static toObject(includeInstance: boolean, msg: DelibleNoteSource): DelibleNoteSource.AsObject;
  static serializeBinaryToWriter(message: DelibleNoteSource, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelibleNoteSource;
  static deserializeBinaryFromReader(message: DelibleNoteSource, reader: jspb.BinaryReader): DelibleNoteSource;
}

export namespace DelibleNoteSource {
  export type AsObject = {
    source?: NoteSource.AsObject,
  }
}

export class GenesisAppState extends jspb.Message {
  getChainParams(): ChainParameters | undefined;
  setChainParams(value?: ChainParameters): GenesisAppState;
  hasChainParams(): boolean;
  clearChainParams(): GenesisAppState;

  getValidatorsList(): Array<stake_pb.Validator>;
  setValidatorsList(value: Array<stake_pb.Validator>): GenesisAppState;
  clearValidatorsList(): GenesisAppState;
  addValidators(value?: stake_pb.Validator, index?: number): stake_pb.Validator;

  getAllocationsList(): Array<GenesisAppState.Allocation>;
  setAllocationsList(value: Array<GenesisAppState.Allocation>): GenesisAppState;
  clearAllocationsList(): GenesisAppState;
  addAllocations(value?: GenesisAppState.Allocation, index?: number): GenesisAppState.Allocation;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GenesisAppState.AsObject;
  static toObject(includeInstance: boolean, msg: GenesisAppState): GenesisAppState.AsObject;
  static serializeBinaryToWriter(message: GenesisAppState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GenesisAppState;
  static deserializeBinaryFromReader(message: GenesisAppState, reader: jspb.BinaryReader): GenesisAppState;
}

export namespace GenesisAppState {
  export type AsObject = {
    chainParams?: ChainParameters.AsObject,
    validatorsList: Array<stake_pb.Validator.AsObject>,
    allocationsList: Array<GenesisAppState.Allocation.AsObject>,
  }

  export class Allocation extends jspb.Message {
    getAmount(): number;
    setAmount(value: number): Allocation;

    getDenom(): string;
    setDenom(value: string): Allocation;

    getAddress(): crypto_pb.Address | undefined;
    setAddress(value?: crypto_pb.Address): Allocation;
    hasAddress(): boolean;
    clearAddress(): Allocation;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Allocation.AsObject;
    static toObject(includeInstance: boolean, msg: Allocation): Allocation.AsObject;
    static serializeBinaryToWriter(message: Allocation, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Allocation;
    static deserializeBinaryFromReader(message: Allocation, reader: jspb.BinaryReader): Allocation;
  }

  export namespace Allocation {
    export type AsObject = {
      amount: number,
      denom: string,
      address?: crypto_pb.Address.AsObject,
    }
  }

}

export class Quarantined extends jspb.Message {
  getPerEpochList(): Array<Quarantined.EpochEntry>;
  setPerEpochList(value: Array<Quarantined.EpochEntry>): Quarantined;
  clearPerEpochList(): Quarantined;
  addPerEpoch(value?: Quarantined.EpochEntry, index?: number): Quarantined.EpochEntry;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Quarantined.AsObject;
  static toObject(includeInstance: boolean, msg: Quarantined): Quarantined.AsObject;
  static serializeBinaryToWriter(message: Quarantined, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Quarantined;
  static deserializeBinaryFromReader(message: Quarantined, reader: jspb.BinaryReader): Quarantined;
}

export namespace Quarantined {
  export type AsObject = {
    perEpochList: Array<Quarantined.EpochEntry.AsObject>,
  }

  export class Unbonding extends jspb.Message {
    getNotePayloadsList(): Array<AnnotatedNotePayload>;
    setNotePayloadsList(value: Array<AnnotatedNotePayload>): Unbonding;
    clearNotePayloadsList(): Unbonding;
    addNotePayloads(value?: AnnotatedNotePayload, index?: number): AnnotatedNotePayload;

    getNullifiersList(): Array<crypto_pb.Nullifier>;
    setNullifiersList(value: Array<crypto_pb.Nullifier>): Unbonding;
    clearNullifiersList(): Unbonding;
    addNullifiers(value?: crypto_pb.Nullifier, index?: number): crypto_pb.Nullifier;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Unbonding.AsObject;
    static toObject(includeInstance: boolean, msg: Unbonding): Unbonding.AsObject;
    static serializeBinaryToWriter(message: Unbonding, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Unbonding;
    static deserializeBinaryFromReader(message: Unbonding, reader: jspb.BinaryReader): Unbonding;
  }

  export namespace Unbonding {
    export type AsObject = {
      notePayloadsList: Array<AnnotatedNotePayload.AsObject>,
      nullifiersList: Array<crypto_pb.Nullifier.AsObject>,
    }
  }


  export class ValidatorEntry extends jspb.Message {
    getIdentityKey(): crypto_pb.IdentityKey | undefined;
    setIdentityKey(value?: crypto_pb.IdentityKey): ValidatorEntry;
    hasIdentityKey(): boolean;
    clearIdentityKey(): ValidatorEntry;

    getUnbonding(): Quarantined.Unbonding | undefined;
    setUnbonding(value?: Quarantined.Unbonding): ValidatorEntry;
    hasUnbonding(): boolean;
    clearUnbonding(): ValidatorEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ValidatorEntry.AsObject;
    static toObject(includeInstance: boolean, msg: ValidatorEntry): ValidatorEntry.AsObject;
    static serializeBinaryToWriter(message: ValidatorEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ValidatorEntry;
    static deserializeBinaryFromReader(message: ValidatorEntry, reader: jspb.BinaryReader): ValidatorEntry;
  }

  export namespace ValidatorEntry {
    export type AsObject = {
      identityKey?: crypto_pb.IdentityKey.AsObject,
      unbonding?: Quarantined.Unbonding.AsObject,
    }
  }


  export class Scheduled extends jspb.Message {
    getPerValidatorList(): Array<Quarantined.ValidatorEntry>;
    setPerValidatorList(value: Array<Quarantined.ValidatorEntry>): Scheduled;
    clearPerValidatorList(): Scheduled;
    addPerValidator(value?: Quarantined.ValidatorEntry, index?: number): Quarantined.ValidatorEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Scheduled.AsObject;
    static toObject(includeInstance: boolean, msg: Scheduled): Scheduled.AsObject;
    static serializeBinaryToWriter(message: Scheduled, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Scheduled;
    static deserializeBinaryFromReader(message: Scheduled, reader: jspb.BinaryReader): Scheduled;
  }

  export namespace Scheduled {
    export type AsObject = {
      perValidatorList: Array<Quarantined.ValidatorEntry.AsObject>,
    }
  }


  export class EpochEntry extends jspb.Message {
    getUnbondingEpoch(): number;
    setUnbondingEpoch(value: number): EpochEntry;

    getScheduled(): Quarantined.Scheduled | undefined;
    setScheduled(value?: Quarantined.Scheduled): EpochEntry;
    hasScheduled(): boolean;
    clearScheduled(): EpochEntry;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): EpochEntry.AsObject;
    static toObject(includeInstance: boolean, msg: EpochEntry): EpochEntry.AsObject;
    static serializeBinaryToWriter(message: EpochEntry, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): EpochEntry;
    static deserializeBinaryFromReader(message: EpochEntry, reader: jspb.BinaryReader): EpochEntry;
  }

  export namespace EpochEntry {
    export type AsObject = {
      unbondingEpoch: number,
      scheduled?: Quarantined.Scheduled.AsObject,
    }
  }

}

export class Slashed extends jspb.Message {
  getValidatorsList(): Array<crypto_pb.IdentityKey>;
  setValidatorsList(value: Array<crypto_pb.IdentityKey>): Slashed;
  clearValidatorsList(): Slashed;
  addValidators(value?: crypto_pb.IdentityKey, index?: number): crypto_pb.IdentityKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Slashed.AsObject;
  static toObject(includeInstance: boolean, msg: Slashed): Slashed.AsObject;
  static serializeBinaryToWriter(message: Slashed, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Slashed;
  static deserializeBinaryFromReader(message: Slashed, reader: jspb.BinaryReader): Slashed;
}

export namespace Slashed {
  export type AsObject = {
    validatorsList: Array<crypto_pb.IdentityKey.AsObject>,
  }
}

