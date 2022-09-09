import * as jspb from 'google-protobuf'

import * as src_proto_crypto_pb from '../../src/proto/crypto_pb';
import * as src_proto_chain_pb from '../../src/proto/chain_pb';
import * as src_proto_stake_pb from '../../src/proto/stake_pb';


export class AssetListRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): AssetListRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetListRequest): AssetListRequest.AsObject;
  static serializeBinaryToWriter(message: AssetListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetListRequest;
  static deserializeBinaryFromReader(message: AssetListRequest, reader: jspb.BinaryReader): AssetListRequest;
}

export namespace AssetListRequest {
  export type AsObject = {
    chainId: string,
  }
}

export class CompactBlockRangeRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): CompactBlockRangeRequest;

  getStartHeight(): number;
  setStartHeight(value: number): CompactBlockRangeRequest;

  getEndHeight(): number;
  setEndHeight(value: number): CompactBlockRangeRequest;

  getKeepAlive(): boolean;
  setKeepAlive(value: boolean): CompactBlockRangeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CompactBlockRangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CompactBlockRangeRequest): CompactBlockRangeRequest.AsObject;
  static serializeBinaryToWriter(message: CompactBlockRangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CompactBlockRangeRequest;
  static deserializeBinaryFromReader(message: CompactBlockRangeRequest, reader: jspb.BinaryReader): CompactBlockRangeRequest;
}

export namespace CompactBlockRangeRequest {
  export type AsObject = {
    chainId: string,
    startHeight: number,
    endHeight: number,
    keepAlive: boolean,
  }
}

export class ChainParamsRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): ChainParamsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChainParamsRequest): ChainParamsRequest.AsObject;
  static serializeBinaryToWriter(message: ChainParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainParamsRequest;
  static deserializeBinaryFromReader(message: ChainParamsRequest, reader: jspb.BinaryReader): ChainParamsRequest;
}

export namespace ChainParamsRequest {
  export type AsObject = {
    chainId: string,
  }
}

export class ValidatorInfoRequest extends jspb.Message {
  getChainId(): string;
  setChainId(value: string): ValidatorInfoRequest;

  getShowInactive(): boolean;
  setShowInactive(value: boolean): ValidatorInfoRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorInfoRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorInfoRequest): ValidatorInfoRequest.AsObject;
  static serializeBinaryToWriter(message: ValidatorInfoRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorInfoRequest;
  static deserializeBinaryFromReader(message: ValidatorInfoRequest, reader: jspb.BinaryReader): ValidatorInfoRequest;
}

export namespace ValidatorInfoRequest {
  export type AsObject = {
    chainId: string,
    showInactive: boolean,
  }
}

