// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file client/oblivious.proto (package penumbra.client.oblivious, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Message, proto3, protoInt64} from "@bufbuild/protobuf";

/**
 * Lists all assets in Asset Registry
 *
 * @generated from message penumbra.client.oblivious.AssetListRequest
 */
export class AssetListRequest extends Message<AssetListRequest> {
  /**
   * The expected chain id (empty string if no expectation).
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  constructor(data?: PartialMessage<AssetListRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "penumbra.client.oblivious.AssetListRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): AssetListRequest {
    return new AssetListRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): AssetListRequest {
    return new AssetListRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): AssetListRequest {
    return new AssetListRequest().fromJsonString(jsonString, options);
  }

  static equals(a: AssetListRequest | PlainMessage<AssetListRequest> | undefined, b: AssetListRequest | PlainMessage<AssetListRequest> | undefined): boolean {
    return proto3.util.equals(AssetListRequest, a, b);
  }
}

/**
 * Requests a range of compact block data.
 *
 * @generated from message penumbra.client.oblivious.CompactBlockRangeRequest
 */
export class CompactBlockRangeRequest extends Message<CompactBlockRangeRequest> {
  /**
   * The expected chain id (empty string if no expectation).
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * The start height of the range.
   *
   * @generated from field: uint64 start_height = 2;
   */
  startHeight = protoInt64.zero;

  /**
   * The end height of the range.
   *
   * If unset, defaults to the latest block height.
   *
   * @generated from field: uint64 end_height = 3;
   */
  endHeight = protoInt64.zero;

  /**
   * If set, keep the connection alive past end_height,
   * streaming new compact blocks as they are created.
   *
   * @generated from field: bool keep_alive = 4;
   */
  keepAlive = false;

  constructor(data?: PartialMessage<CompactBlockRangeRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "penumbra.client.oblivious.CompactBlockRangeRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "start_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 3, name: "end_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 4, name: "keep_alive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CompactBlockRangeRequest {
    return new CompactBlockRangeRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CompactBlockRangeRequest {
    return new CompactBlockRangeRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CompactBlockRangeRequest {
    return new CompactBlockRangeRequest().fromJsonString(jsonString, options);
  }

  static equals(a: CompactBlockRangeRequest | PlainMessage<CompactBlockRangeRequest> | undefined, b: CompactBlockRangeRequest | PlainMessage<CompactBlockRangeRequest> | undefined): boolean {
    return proto3.util.equals(CompactBlockRangeRequest, a, b);
  }
}

/**
 * Requests the global configuration data for the chain.
 *
 * @generated from message penumbra.client.oblivious.ChainParamsRequest
 */
export class ChainParamsRequest extends Message<ChainParamsRequest> {
  /**
   * The expected chain id (empty string if no expectation).
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  constructor(data?: PartialMessage<ChainParamsRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "penumbra.client.oblivious.ChainParamsRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ChainParamsRequest {
    return new ChainParamsRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ChainParamsRequest {
    return new ChainParamsRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ChainParamsRequest {
    return new ChainParamsRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ChainParamsRequest | PlainMessage<ChainParamsRequest> | undefined, b: ChainParamsRequest | PlainMessage<ChainParamsRequest> | undefined): boolean {
    return proto3.util.equals(ChainParamsRequest, a, b);
  }
}

/**
 * Requests information on the chain's validators.
 *
 * @generated from message penumbra.client.oblivious.ValidatorInfoRequest
 */
export class ValidatorInfoRequest extends Message<ValidatorInfoRequest> {
  /**
   * The expected chain id (empty string if no expectation).
   *
   * @generated from field: string chain_id = 1;
   */
  chainId = "";

  /**
   * Whether or not to return inactive validators
   *
   * @generated from field: bool show_inactive = 2;
   */
  showInactive = false;

  constructor(data?: PartialMessage<ValidatorInfoRequest>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "penumbra.client.oblivious.ValidatorInfoRequest";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "show_inactive", kind: "scalar", T: 8 /* ScalarType.BOOL */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): ValidatorInfoRequest {
    return new ValidatorInfoRequest().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): ValidatorInfoRequest {
    return new ValidatorInfoRequest().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): ValidatorInfoRequest {
    return new ValidatorInfoRequest().fromJsonString(jsonString, options);
  }

  static equals(a: ValidatorInfoRequest | PlainMessage<ValidatorInfoRequest> | undefined, b: ValidatorInfoRequest | PlainMessage<ValidatorInfoRequest> | undefined): boolean {
    return proto3.util.equals(ValidatorInfoRequest, a, b);
  }
}

