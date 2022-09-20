import * as jspb from 'google-protobuf'

import * as crypto_pb from './crypto_pb';
import * as chain_pb from './chain_pb';
import * as dex_pb from './dex_pb';
import * as stake_pb from './stake_pb';
import * as proofs_pb from './proofs_pb';


export class BatchSwapOutputDataRequest extends jspb.Message {
  getHeight(): number;
  setHeight(value: number): BatchSwapOutputDataRequest;

  getTradingPair(): dex_pb.TradingPair | undefined;
  setTradingPair(value?: dex_pb.TradingPair): BatchSwapOutputDataRequest;
  hasTradingPair(): boolean;
  clearTradingPair(): BatchSwapOutputDataRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchSwapOutputDataRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchSwapOutputDataRequest): BatchSwapOutputDataRequest.AsObject;
  static serializeBinaryToWriter(message: BatchSwapOutputDataRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchSwapOutputDataRequest;
  static deserializeBinaryFromReader(message: BatchSwapOutputDataRequest, reader: jspb.BinaryReader): BatchSwapOutputDataRequest;
}

export namespace BatchSwapOutputDataRequest {
  export type AsObject = {
    height: number,
    tradingPair?: dex_pb.TradingPair.AsObject,
  }
}

export class ValidatorStatusRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): ValidatorStatusRequest;

  getIdentityKey(): crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: crypto_pb.IdentityKey): ValidatorStatusRequest;
  hasIdentityKey(): boolean;
  clearIdentityKey(): ValidatorStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorStatusRequest): ValidatorStatusRequest.AsObject;
  static serializeBinaryToWriter(message: ValidatorStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorStatusRequest;
  static deserializeBinaryFromReader(message: ValidatorStatusRequest, reader: jspb.BinaryReader): ValidatorStatusRequest;
}

export namespace ValidatorStatusRequest {
  export type AsObject = {
    chainId: string,
    identityKey?: crypto_pb.IdentityKey.AsObject,
  }
}

export class KeyValueRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): KeyValueRequest;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): KeyValueRequest;

  getProof(): boolean;
  setProof(value: boolean): KeyValueRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueRequest.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueRequest): KeyValueRequest.AsObject;
  static serializeBinaryToWriter(message: KeyValueRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueRequest;
  static deserializeBinaryFromReader(message: KeyValueRequest, reader: jspb.BinaryReader): KeyValueRequest;
}

export namespace KeyValueRequest {
  export type AsObject = {
    chainId: string,
    key: Uint8Array | string,
    proof: boolean,
  }
}

export class KeyValueResponse extends jspb.Message {
  getValue(): Uint8Array | string;
  getValue_asU8(): Uint8Array;
  getValue_asB64(): string;
  setValue(value: Uint8Array | string): KeyValueResponse;

  getProof(): proofs_pb.CommitmentProof | undefined;
  setProof(value?: proofs_pb.CommitmentProof): KeyValueResponse;
  hasProof(): boolean;
  clearProof(): KeyValueResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): KeyValueResponse.AsObject;
  static toObject(includeInstance: boolean, msg: KeyValueResponse): KeyValueResponse.AsObject;
  static serializeBinaryToWriter(message: KeyValueResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): KeyValueResponse;
  static deserializeBinaryFromReader(message: KeyValueResponse, reader: jspb.BinaryReader): KeyValueResponse;
}

export namespace KeyValueResponse {
  export type AsObject = {
    value: Uint8Array | string,
    proof?: proofs_pb.CommitmentProof.AsObject,
  }
}

