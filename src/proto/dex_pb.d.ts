import * as jspb from 'google-protobuf'

import * as crypto_pb from './crypto_pb';


export class Swap extends jspb.Message {
  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): Swap;

  getBody(): SwapBody | undefined;
  setBody(value?: SwapBody): Swap;
  hasBody(): boolean;
  clearBody(): Swap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Swap.AsObject;
  static toObject(includeInstance: boolean, msg: Swap): Swap.AsObject;
  static serializeBinaryToWriter(message: Swap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Swap;
  static deserializeBinaryFromReader(message: Swap, reader: jspb.BinaryReader): Swap;
}

export namespace Swap {
  export type AsObject = {
    proof: Uint8Array | string,
    body?: SwapBody.AsObject,
  }
}

export class SwapClaim extends jspb.Message {
  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): SwapClaim;

  getBody(): SwapClaimBody | undefined;
  setBody(value?: SwapClaimBody): SwapClaim;
  hasBody(): boolean;
  clearBody(): SwapClaim;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapClaim.AsObject;
  static toObject(includeInstance: boolean, msg: SwapClaim): SwapClaim.AsObject;
  static serializeBinaryToWriter(message: SwapClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapClaim;
  static deserializeBinaryFromReader(message: SwapClaim, reader: jspb.BinaryReader): SwapClaim;
}

export namespace SwapClaim {
  export type AsObject = {
    proof: Uint8Array | string,
    body?: SwapClaimBody.AsObject,
  }
}

export class SwapClaimBody extends jspb.Message {
  getNullifier(): crypto_pb.Nullifier | undefined;
  setNullifier(value?: crypto_pb.Nullifier): SwapClaimBody;
  hasNullifier(): boolean;
  clearNullifier(): SwapClaimBody;

  getFee(): crypto_pb.Fee | undefined;
  setFee(value?: crypto_pb.Fee): SwapClaimBody;
  hasFee(): boolean;
  clearFee(): SwapClaimBody;

  getOutput1(): crypto_pb.NotePayload | undefined;
  setOutput1(value?: crypto_pb.NotePayload): SwapClaimBody;
  hasOutput1(): boolean;
  clearOutput1(): SwapClaimBody;

  getOutput2(): crypto_pb.NotePayload | undefined;
  setOutput2(value?: crypto_pb.NotePayload): SwapClaimBody;
  hasOutput2(): boolean;
  clearOutput2(): SwapClaimBody;

  getOutputData(): BatchSwapOutputData | undefined;
  setOutputData(value?: BatchSwapOutputData): SwapClaimBody;
  hasOutputData(): boolean;
  clearOutputData(): SwapClaimBody;

  getEpochDuration(): number;
  setEpochDuration(value: number): SwapClaimBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapClaimBody.AsObject;
  static toObject(includeInstance: boolean, msg: SwapClaimBody): SwapClaimBody.AsObject;
  static serializeBinaryToWriter(message: SwapClaimBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapClaimBody;
  static deserializeBinaryFromReader(message: SwapClaimBody, reader: jspb.BinaryReader): SwapClaimBody;
}

export namespace SwapClaimBody {
  export type AsObject = {
    nullifier?: crypto_pb.Nullifier.AsObject,
    fee?: crypto_pb.Fee.AsObject,
    output1?: crypto_pb.NotePayload.AsObject,
    output2?: crypto_pb.NotePayload.AsObject,
    outputData?: BatchSwapOutputData.AsObject,
    epochDuration: number,
  }
}

export class ClaimedSwapList extends jspb.Message {
  getClaimsList(): Array<ClaimedSwap>;
  setClaimsList(value: Array<ClaimedSwap>): ClaimedSwapList;
  clearClaimsList(): ClaimedSwapList;
  addClaims(value?: ClaimedSwap, index?: number): ClaimedSwap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimedSwapList.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimedSwapList): ClaimedSwapList.AsObject;
  static serializeBinaryToWriter(message: ClaimedSwapList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimedSwapList;
  static deserializeBinaryFromReader(message: ClaimedSwapList, reader: jspb.BinaryReader): ClaimedSwapList;
}

export namespace ClaimedSwapList {
  export type AsObject = {
    claimsList: Array<ClaimedSwap.AsObject>,
  }
}

export class ClaimedSwap extends jspb.Message {
  getClaim(): SwapClaimBody | undefined;
  setClaim(value?: SwapClaimBody): ClaimedSwap;
  hasClaim(): boolean;
  clearClaim(): ClaimedSwap;

  getTxid(): Uint8Array | string;
  getTxid_asU8(): Uint8Array;
  getTxid_asB64(): string;
  setTxid(value: Uint8Array | string): ClaimedSwap;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClaimedSwap.AsObject;
  static toObject(includeInstance: boolean, msg: ClaimedSwap): ClaimedSwap.AsObject;
  static serializeBinaryToWriter(message: ClaimedSwap, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClaimedSwap;
  static deserializeBinaryFromReader(message: ClaimedSwap, reader: jspb.BinaryReader): ClaimedSwap;
}

export namespace ClaimedSwap {
  export type AsObject = {
    claim?: SwapClaimBody.AsObject,
    txid: Uint8Array | string,
  }
}

export class SwapBody extends jspb.Message {
  getTradingPair(): TradingPair | undefined;
  setTradingPair(value?: TradingPair): SwapBody;
  hasTradingPair(): boolean;
  clearTradingPair(): SwapBody;

  getDelta1(): number;
  setDelta1(value: number): SwapBody;

  getDelta2(): number;
  setDelta2(value: number): SwapBody;

  getFeeCommitment(): Uint8Array | string;
  getFeeCommitment_asU8(): Uint8Array;
  getFeeCommitment_asB64(): string;
  setFeeCommitment(value: Uint8Array | string): SwapBody;

  getSwapNft(): crypto_pb.NotePayload | undefined;
  setSwapNft(value?: crypto_pb.NotePayload): SwapBody;
  hasSwapNft(): boolean;
  clearSwapNft(): SwapBody;

  getSwapCiphertext(): Uint8Array | string;
  getSwapCiphertext_asU8(): Uint8Array;
  getSwapCiphertext_asB64(): string;
  setSwapCiphertext(value: Uint8Array | string): SwapBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapBody.AsObject;
  static toObject(includeInstance: boolean, msg: SwapBody): SwapBody.AsObject;
  static serializeBinaryToWriter(message: SwapBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapBody;
  static deserializeBinaryFromReader(message: SwapBody, reader: jspb.BinaryReader): SwapBody;
}

export namespace SwapBody {
  export type AsObject = {
    tradingPair?: TradingPair.AsObject,
    delta1: number,
    delta2: number,
    feeCommitment: Uint8Array | string,
    swapNft?: crypto_pb.NotePayload.AsObject,
    swapCiphertext: Uint8Array | string,
  }
}

export class SwapPlaintext extends jspb.Message {
  getTradingPair(): TradingPair | undefined;
  setTradingPair(value?: TradingPair): SwapPlaintext;
  hasTradingPair(): boolean;
  clearTradingPair(): SwapPlaintext;

  getDelta1(): number;
  setDelta1(value: number): SwapPlaintext;

  getDelta2(): number;
  setDelta2(value: number): SwapPlaintext;

  getClaimFee(): crypto_pb.Fee | undefined;
  setClaimFee(value?: crypto_pb.Fee): SwapPlaintext;
  hasClaimFee(): boolean;
  clearClaimFee(): SwapPlaintext;

  getClaimAddress(): crypto_pb.Address | undefined;
  setClaimAddress(value?: crypto_pb.Address): SwapPlaintext;
  hasClaimAddress(): boolean;
  clearClaimAddress(): SwapPlaintext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapPlaintext.AsObject;
  static toObject(includeInstance: boolean, msg: SwapPlaintext): SwapPlaintext.AsObject;
  static serializeBinaryToWriter(message: SwapPlaintext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapPlaintext;
  static deserializeBinaryFromReader(message: SwapPlaintext, reader: jspb.BinaryReader): SwapPlaintext;
}

export namespace SwapPlaintext {
  export type AsObject = {
    tradingPair?: TradingPair.AsObject,
    delta1: number,
    delta2: number,
    claimFee?: crypto_pb.Fee.AsObject,
    claimAddress?: crypto_pb.Address.AsObject,
  }
}

export class MockFlowCiphertext extends jspb.Message {
  getValue(): number;
  setValue(value: number): MockFlowCiphertext;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MockFlowCiphertext.AsObject;
  static toObject(includeInstance: boolean, msg: MockFlowCiphertext): MockFlowCiphertext.AsObject;
  static serializeBinaryToWriter(message: MockFlowCiphertext, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MockFlowCiphertext;
  static deserializeBinaryFromReader(message: MockFlowCiphertext, reader: jspb.BinaryReader): MockFlowCiphertext;
}

export namespace MockFlowCiphertext {
  export type AsObject = {
    value: number,
  }
}

export class TradingPair extends jspb.Message {
  getAsset1(): crypto_pb.AssetId | undefined;
  setAsset1(value?: crypto_pb.AssetId): TradingPair;
  hasAsset1(): boolean;
  clearAsset1(): TradingPair;

  getAsset2(): crypto_pb.AssetId | undefined;
  setAsset2(value?: crypto_pb.AssetId): TradingPair;
  hasAsset2(): boolean;
  clearAsset2(): TradingPair;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingPair.AsObject;
  static toObject(includeInstance: boolean, msg: TradingPair): TradingPair.AsObject;
  static serializeBinaryToWriter(message: TradingPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingPair;
  static deserializeBinaryFromReader(message: TradingPair, reader: jspb.BinaryReader): TradingPair;
}

export namespace TradingPair {
  export type AsObject = {
    asset1?: crypto_pb.AssetId.AsObject,
    asset2?: crypto_pb.AssetId.AsObject,
  }
}

export class BatchSwapOutputData extends jspb.Message {
  getDelta1(): number;
  setDelta1(value: number): BatchSwapOutputData;

  getDelta2(): number;
  setDelta2(value: number): BatchSwapOutputData;

  getLambda1(): number;
  setLambda1(value: number): BatchSwapOutputData;

  getLambda2(): number;
  setLambda2(value: number): BatchSwapOutputData;

  getSuccess(): boolean;
  setSuccess(value: boolean): BatchSwapOutputData;

  getHeight(): number;
  setHeight(value: number): BatchSwapOutputData;

  getTradingPair(): TradingPair | undefined;
  setTradingPair(value?: TradingPair): BatchSwapOutputData;
  hasTradingPair(): boolean;
  clearTradingPair(): BatchSwapOutputData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSwapOutputData.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSwapOutputData): BatchSwapOutputData.AsObject;
  static serializeBinaryToWriter(message: BatchSwapOutputData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSwapOutputData;
  static deserializeBinaryFromReader(message: BatchSwapOutputData, reader: jspb.BinaryReader): BatchSwapOutputData;
}

export namespace BatchSwapOutputData {
  export type AsObject = {
    delta1: number,
    delta2: number,
    lambda1: number,
    lambda2: number,
    success: boolean,
    height: number,
    tradingPair?: TradingPair.AsObject,
  }
}

export class TradingFunction extends jspb.Message {
  getFee(): number;
  setFee(value: number): TradingFunction;

  getK(): number;
  setK(value: number): TradingFunction;

  getP(): number;
  setP(value: number): TradingFunction;

  getQ(): number;
  setQ(value: number): TradingFunction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TradingFunction.AsObject;
  static toObject(includeInstance: boolean, msg: TradingFunction): TradingFunction.AsObject;
  static serializeBinaryToWriter(message: TradingFunction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TradingFunction;
  static deserializeBinaryFromReader(message: TradingFunction, reader: jspb.BinaryReader): TradingFunction;
}

export namespace TradingFunction {
  export type AsObject = {
    fee: number,
    k: number,
    p: number,
    q: number,
  }
}

export class Reserves extends jspb.Message {
  getR1(): number;
  setR1(value: number): Reserves;

  getR2(): number;
  setR2(value: number): Reserves;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Reserves.AsObject;
  static toObject(includeInstance: boolean, msg: Reserves): Reserves.AsObject;
  static serializeBinaryToWriter(message: Reserves, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Reserves;
  static deserializeBinaryFromReader(message: Reserves, reader: jspb.BinaryReader): Reserves;
}

export namespace Reserves {
  export type AsObject = {
    r1: number,
    r2: number,
  }
}

export class Position extends jspb.Message {
  getPair(): TradingPair | undefined;
  setPair(value?: TradingPair): Position;
  hasPair(): boolean;
  clearPair(): Position;

  getPhi(): TradingFunction | undefined;
  setPhi(value?: TradingFunction): Position;
  hasPhi(): boolean;
  clearPhi(): Position;

  getNonce(): Uint8Array | string;
  getNonce_asU8(): Uint8Array;
  getNonce_asB64(): string;
  setNonce(value: Uint8Array | string): Position;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Position.AsObject;
  static toObject(includeInstance: boolean, msg: Position): Position.AsObject;
  static serializeBinaryToWriter(message: Position, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Position;
  static deserializeBinaryFromReader(message: Position, reader: jspb.BinaryReader): Position;
}

export namespace Position {
  export type AsObject = {
    pair?: TradingPair.AsObject,
    phi?: TradingFunction.AsObject,
    nonce: Uint8Array | string,
  }
}

export class PositionId extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): PositionId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionId.AsObject;
  static toObject(includeInstance: boolean, msg: PositionId): PositionId.AsObject;
  static serializeBinaryToWriter(message: PositionId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionId;
  static deserializeBinaryFromReader(message: PositionId, reader: jspb.BinaryReader): PositionId;
}

export namespace PositionId {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class PositionState extends jspb.Message {
  getState(): PositionState.PositionStateEnum;
  setState(value: PositionState.PositionStateEnum): PositionState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionState.AsObject;
  static toObject(includeInstance: boolean, msg: PositionState): PositionState.AsObject;
  static serializeBinaryToWriter(message: PositionState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionState;
  static deserializeBinaryFromReader(message: PositionState, reader: jspb.BinaryReader): PositionState;
}

export namespace PositionState {
  export type AsObject = {
    state: PositionState.PositionStateEnum,
  }

  export enum PositionStateEnum { 
    OPENED = 0,
    CLOSED = 1,
    WITHDRAWN = 2,
    CLAIMED = 3,
  }
}

export class LpNft extends jspb.Message {
  getPositionId(): PositionId | undefined;
  setPositionId(value?: PositionId): LpNft;
  hasPositionId(): boolean;
  clearPositionId(): LpNft;

  getState(): PositionState | undefined;
  setState(value?: PositionState): LpNft;
  hasState(): boolean;
  clearState(): LpNft;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): LpNft.AsObject;
  static toObject(includeInstance: boolean, msg: LpNft): LpNft.AsObject;
  static serializeBinaryToWriter(message: LpNft, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): LpNft;
  static deserializeBinaryFromReader(message: LpNft, reader: jspb.BinaryReader): LpNft;
}

export namespace LpNft {
  export type AsObject = {
    positionId?: PositionId.AsObject,
    state?: PositionState.AsObject,
  }
}

export class PositionOpen extends jspb.Message {
  getPosition(): Position | undefined;
  setPosition(value?: Position): PositionOpen;
  hasPosition(): boolean;
  clearPosition(): PositionOpen;

  getInitialReserves(): Reserves | undefined;
  setInitialReserves(value?: Reserves): PositionOpen;
  hasInitialReserves(): boolean;
  clearInitialReserves(): PositionOpen;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionOpen.AsObject;
  static toObject(includeInstance: boolean, msg: PositionOpen): PositionOpen.AsObject;
  static serializeBinaryToWriter(message: PositionOpen, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionOpen;
  static deserializeBinaryFromReader(message: PositionOpen, reader: jspb.BinaryReader): PositionOpen;
}

export namespace PositionOpen {
  export type AsObject = {
    position?: Position.AsObject,
    initialReserves?: Reserves.AsObject,
  }
}

export class PositionClose extends jspb.Message {
  getPositionId(): PositionId | undefined;
  setPositionId(value?: PositionId): PositionClose;
  hasPositionId(): boolean;
  clearPositionId(): PositionClose;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionClose.AsObject;
  static toObject(includeInstance: boolean, msg: PositionClose): PositionClose.AsObject;
  static serializeBinaryToWriter(message: PositionClose, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionClose;
  static deserializeBinaryFromReader(message: PositionClose, reader: jspb.BinaryReader): PositionClose;
}

export namespace PositionClose {
  export type AsObject = {
    positionId?: PositionId.AsObject,
  }
}

export class PositionWithdraw extends jspb.Message {
  getPositionId(): PositionId | undefined;
  setPositionId(value?: PositionId): PositionWithdraw;
  hasPositionId(): boolean;
  clearPositionId(): PositionWithdraw;

  getReservesCommitment(): crypto_pb.ValueCommitment | undefined;
  setReservesCommitment(value?: crypto_pb.ValueCommitment): PositionWithdraw;
  hasReservesCommitment(): boolean;
  clearReservesCommitment(): PositionWithdraw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionWithdraw.AsObject;
  static toObject(includeInstance: boolean, msg: PositionWithdraw): PositionWithdraw.AsObject;
  static serializeBinaryToWriter(message: PositionWithdraw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionWithdraw;
  static deserializeBinaryFromReader(message: PositionWithdraw, reader: jspb.BinaryReader): PositionWithdraw;
}

export namespace PositionWithdraw {
  export type AsObject = {
    positionId?: PositionId.AsObject,
    reservesCommitment?: crypto_pb.ValueCommitment.AsObject,
  }
}

export class PositionRewardClaim extends jspb.Message {
  getPositionId(): PositionId | undefined;
  setPositionId(value?: PositionId): PositionRewardClaim;
  hasPositionId(): boolean;
  clearPositionId(): PositionRewardClaim;

  getRewardsCommitment(): crypto_pb.ValueCommitment | undefined;
  setRewardsCommitment(value?: crypto_pb.ValueCommitment): PositionRewardClaim;
  hasRewardsCommitment(): boolean;
  clearRewardsCommitment(): PositionRewardClaim;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PositionRewardClaim.AsObject;
  static toObject(includeInstance: boolean, msg: PositionRewardClaim): PositionRewardClaim.AsObject;
  static serializeBinaryToWriter(message: PositionRewardClaim, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PositionRewardClaim;
  static deserializeBinaryFromReader(message: PositionRewardClaim, reader: jspb.BinaryReader): PositionRewardClaim;
}

export namespace PositionRewardClaim {
  export type AsObject = {
    positionId?: PositionId.AsObject,
    rewardsCommitment?: crypto_pb.ValueCommitment.AsObject,
  }
}

