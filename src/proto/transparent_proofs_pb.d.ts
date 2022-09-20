import * as jspb from 'google-protobuf'

import * as crypto_pb from './crypto_pb';
import * as dex_pb from './dex_pb';


export class SpendProof extends jspb.Message {
  getNoteCommitmentProof(): crypto_pb.NoteCommitmentProof | undefined;
  setNoteCommitmentProof(value?: crypto_pb.NoteCommitmentProof): SpendProof;
  hasNoteCommitmentProof(): boolean;
  clearNoteCommitmentProof(): SpendProof;

  getGD(): Uint8Array | string;
  getGD_asU8(): Uint8Array;
  getGD_asB64(): string;
  setGD(value: Uint8Array | string): SpendProof;

  getPkD(): Uint8Array | string;
  getPkD_asU8(): Uint8Array;
  getPkD_asB64(): string;
  setPkD(value: Uint8Array | string): SpendProof;

  getValueAmount(): number;
  setValueAmount(value: number): SpendProof;

  getValueAssetId(): Uint8Array | string;
  getValueAssetId_asU8(): Uint8Array;
  getValueAssetId_asB64(): string;
  setValueAssetId(value: Uint8Array | string): SpendProof;

  getVBlinding(): Uint8Array | string;
  getVBlinding_asU8(): Uint8Array;
  getVBlinding_asB64(): string;
  setVBlinding(value: Uint8Array | string): SpendProof;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): SpendProof;

  getSpendAuthRandomizer(): Uint8Array | string;
  getSpendAuthRandomizer_asU8(): Uint8Array;
  getSpendAuthRandomizer_asB64(): string;
  setSpendAuthRandomizer(value: Uint8Array | string): SpendProof;

  getAk(): Uint8Array | string;
  getAk_asU8(): Uint8Array;
  getAk_asB64(): string;
  setAk(value: Uint8Array | string): SpendProof;

  getNk(): Uint8Array | string;
  getNk_asU8(): Uint8Array;
  getNk_asB64(): string;
  setNk(value: Uint8Array | string): SpendProof;

  getCkD(): Uint8Array | string;
  getCkD_asU8(): Uint8Array;
  getCkD_asB64(): string;
  setCkD(value: Uint8Array | string): SpendProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendProof.AsObject;
  static toObject(includeInstance: boolean, msg: SpendProof): SpendProof.AsObject;
  static serializeBinaryToWriter(message: SpendProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendProof;
  static deserializeBinaryFromReader(message: SpendProof, reader: jspb.BinaryReader): SpendProof;
}

export namespace SpendProof {
  export type AsObject = {
    noteCommitmentProof?: crypto_pb.NoteCommitmentProof.AsObject,
    gD: Uint8Array | string,
    pkD: Uint8Array | string,
    valueAmount: number,
    valueAssetId: Uint8Array | string,
    vBlinding: Uint8Array | string,
    noteBlinding: Uint8Array | string,
    spendAuthRandomizer: Uint8Array | string,
    ak: Uint8Array | string,
    nk: Uint8Array | string,
    ckD: Uint8Array | string,
  }
}

export class OutputProof extends jspb.Message {
  getGD(): Uint8Array | string;
  getGD_asU8(): Uint8Array;
  getGD_asB64(): string;
  setGD(value: Uint8Array | string): OutputProof;

  getPkD(): Uint8Array | string;
  getPkD_asU8(): Uint8Array;
  getPkD_asB64(): string;
  setPkD(value: Uint8Array | string): OutputProof;

  getValueAmount(): number;
  setValueAmount(value: number): OutputProof;

  getValueAssetId(): Uint8Array | string;
  getValueAssetId_asU8(): Uint8Array;
  getValueAssetId_asB64(): string;
  setValueAssetId(value: Uint8Array | string): OutputProof;

  getVBlinding(): Uint8Array | string;
  getVBlinding_asU8(): Uint8Array;
  getVBlinding_asB64(): string;
  setVBlinding(value: Uint8Array | string): OutputProof;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): OutputProof;

  getEsk(): Uint8Array | string;
  getEsk_asU8(): Uint8Array;
  getEsk_asB64(): string;
  setEsk(value: Uint8Array | string): OutputProof;

  getCkD(): Uint8Array | string;
  getCkD_asU8(): Uint8Array;
  getCkD_asB64(): string;
  setCkD(value: Uint8Array | string): OutputProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputProof.AsObject;
  static toObject(includeInstance: boolean, msg: OutputProof): OutputProof.AsObject;
  static serializeBinaryToWriter(message: OutputProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputProof;
  static deserializeBinaryFromReader(message: OutputProof, reader: jspb.BinaryReader): OutputProof;
}

export namespace OutputProof {
  export type AsObject = {
    gD: Uint8Array | string,
    pkD: Uint8Array | string,
    valueAmount: number,
    valueAssetId: Uint8Array | string,
    vBlinding: Uint8Array | string,
    noteBlinding: Uint8Array | string,
    esk: Uint8Array | string,
    ckD: Uint8Array | string,
  }
}

export class SwapClaimProof extends jspb.Message {
  getSwapNftAssetId(): Uint8Array | string;
  getSwapNftAssetId_asU8(): Uint8Array;
  getSwapNftAssetId_asB64(): string;
  setSwapNftAssetId(value: Uint8Array | string): SwapClaimProof;

  getClaimAddress(): crypto_pb.Address | undefined;
  setClaimAddress(value?: crypto_pb.Address): SwapClaimProof;
  hasClaimAddress(): boolean;
  clearClaimAddress(): SwapClaimProof;

  getNoteCommitmentProof(): crypto_pb.NoteCommitmentProof | undefined;
  setNoteCommitmentProof(value?: crypto_pb.NoteCommitmentProof): SwapClaimProof;
  hasNoteCommitmentProof(): boolean;
  clearNoteCommitmentProof(): SwapClaimProof;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): SwapClaimProof;

  getNk(): Uint8Array | string;
  getNk_asU8(): Uint8Array;
  getNk_asB64(): string;
  setNk(value: Uint8Array | string): SwapClaimProof;

  getTradingPair(): dex_pb.TradingPair | undefined;
  setTradingPair(value?: dex_pb.TradingPair): SwapClaimProof;
  hasTradingPair(): boolean;
  clearTradingPair(): SwapClaimProof;

  getDelta1(): number;
  setDelta1(value: number): SwapClaimProof;

  getDelta2(): number;
  setDelta2(value: number): SwapClaimProof;

  getLambda1(): number;
  setLambda1(value: number): SwapClaimProof;

  getLambda2(): number;
  setLambda2(value: number): SwapClaimProof;

  getNoteBlinding1(): Uint8Array | string;
  getNoteBlinding1_asU8(): Uint8Array;
  getNoteBlinding1_asB64(): string;
  setNoteBlinding1(value: Uint8Array | string): SwapClaimProof;

  getEsk1(): Uint8Array | string;
  getEsk1_asU8(): Uint8Array;
  getEsk1_asB64(): string;
  setEsk1(value: Uint8Array | string): SwapClaimProof;

  getNoteBlinding2(): Uint8Array | string;
  getNoteBlinding2_asU8(): Uint8Array;
  getNoteBlinding2_asB64(): string;
  setNoteBlinding2(value: Uint8Array | string): SwapClaimProof;

  getEsk2(): Uint8Array | string;
  getEsk2_asU8(): Uint8Array;
  getEsk2_asB64(): string;
  setEsk2(value: Uint8Array | string): SwapClaimProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapClaimProof.AsObject;
  static toObject(includeInstance: boolean, msg: SwapClaimProof): SwapClaimProof.AsObject;
  static serializeBinaryToWriter(message: SwapClaimProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapClaimProof;
  static deserializeBinaryFromReader(message: SwapClaimProof, reader: jspb.BinaryReader): SwapClaimProof;
}

export namespace SwapClaimProof {
  export type AsObject = {
    swapNftAssetId: Uint8Array | string,
    claimAddress?: crypto_pb.Address.AsObject,
    noteCommitmentProof?: crypto_pb.NoteCommitmentProof.AsObject,
    noteBlinding: Uint8Array | string,
    nk: Uint8Array | string,
    tradingPair?: dex_pb.TradingPair.AsObject,
    delta1: number,
    delta2: number,
    lambda1: number,
    lambda2: number,
    noteBlinding1: Uint8Array | string,
    esk1: Uint8Array | string,
    noteBlinding2: Uint8Array | string,
    esk2: Uint8Array | string,
  }
}

export class SwapProof extends jspb.Message {
  getDelta1(): number;
  setDelta1(value: number): SwapProof;

  getT1(): Uint8Array | string;
  getT1_asU8(): Uint8Array;
  getT1_asB64(): string;
  setT1(value: Uint8Array | string): SwapProof;

  getDelta2(): number;
  setDelta2(value: number): SwapProof;

  getT2(): Uint8Array | string;
  getT2_asU8(): Uint8Array;
  getT2_asB64(): string;
  setT2(value: Uint8Array | string): SwapProof;

  getFee(): crypto_pb.Fee | undefined;
  setFee(value?: crypto_pb.Fee): SwapProof;
  hasFee(): boolean;
  clearFee(): SwapProof;

  getSwapNftAssetId(): Uint8Array | string;
  getSwapNftAssetId_asU8(): Uint8Array;
  getSwapNftAssetId_asB64(): string;
  setSwapNftAssetId(value: Uint8Array | string): SwapProof;

  getClaimAddress(): crypto_pb.Address | undefined;
  setClaimAddress(value?: crypto_pb.Address): SwapProof;
  hasClaimAddress(): boolean;
  clearClaimAddress(): SwapProof;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): SwapProof;

  getEsk(): Uint8Array | string;
  getEsk_asU8(): Uint8Array;
  getEsk_asB64(): string;
  setEsk(value: Uint8Array | string): SwapProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapProof.AsObject;
  static toObject(includeInstance: boolean, msg: SwapProof): SwapProof.AsObject;
  static serializeBinaryToWriter(message: SwapProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapProof;
  static deserializeBinaryFromReader(message: SwapProof, reader: jspb.BinaryReader): SwapProof;
}

export namespace SwapProof {
  export type AsObject = {
    delta1: number,
    t1: Uint8Array | string,
    delta2: number,
    t2: Uint8Array | string,
    fee?: crypto_pb.Fee.AsObject,
    swapNftAssetId: Uint8Array | string,
    claimAddress?: crypto_pb.Address.AsObject,
    noteBlinding: Uint8Array | string,
    esk: Uint8Array | string,
  }
}

