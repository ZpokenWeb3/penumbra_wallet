// @generated by protoc-gen-es v0.1.1 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/v1/packet.proto (package ibc.applications.interchain_accounts.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import type {BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage} from "@bufbuild/protobuf";
import {Any, Message, proto3} from "@bufbuild/protobuf";

/**
 * Type defines a classification of message issued from a controller chain to its associated interchain accounts
 * host
 *
 * @generated from enum ibc.applications.interchain_accounts.v1.Type
 */
export enum Type {
  /**
   * Default zero value enumeration
   *
   * @generated from enum value: TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * Execute a transaction on an interchain accounts host chain
   *
   * @generated from enum value: TYPE_EXECUTE_TX = 1;
   */
  EXECUTE_TX = 1,
}
// Retrieve enum metadata with: proto3.getEnumType(Type)
proto3.util.setEnumType(Type, "ibc.applications.interchain_accounts.v1.Type", [
  { no: 0, name: "TYPE_UNSPECIFIED" },
  { no: 1, name: "TYPE_EXECUTE_TX" },
]);

/**
 * InterchainAccountPacketData is comprised of a raw transaction, type of transaction and optional memo field.
 *
 * @generated from message ibc.applications.interchain_accounts.v1.InterchainAccountPacketData
 */
export class InterchainAccountPacketData extends Message<InterchainAccountPacketData> {
  /**
   * @generated from field: ibc.applications.interchain_accounts.v1.Type type = 1;
   */
  type = Type.UNSPECIFIED;

  /**
   * @generated from field: bytes data = 2;
   */
  data = new Uint8Array(0);

  /**
   * @generated from field: string memo = 3;
   */
  memo = "";

  constructor(data?: PartialMessage<InterchainAccountPacketData>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.v1.InterchainAccountPacketData";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "type", kind: "enum", T: proto3.getEnumType(Type) },
    { no: 2, name: "data", kind: "scalar", T: 12 /* ScalarType.BYTES */ },
    { no: 3, name: "memo", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): InterchainAccountPacketData {
    return new InterchainAccountPacketData().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): InterchainAccountPacketData {
    return new InterchainAccountPacketData().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): InterchainAccountPacketData {
    return new InterchainAccountPacketData().fromJsonString(jsonString, options);
  }

  static equals(a: InterchainAccountPacketData | PlainMessage<InterchainAccountPacketData> | undefined, b: InterchainAccountPacketData | PlainMessage<InterchainAccountPacketData> | undefined): boolean {
    return proto3.util.equals(InterchainAccountPacketData, a, b);
  }
}

/**
 * CosmosTx contains a list of sdk.Msg's. It should be used when sending transactions to an SDK host chain.
 *
 * @generated from message ibc.applications.interchain_accounts.v1.CosmosTx
 */
export class CosmosTx extends Message<CosmosTx> {
  /**
   * @generated from field: repeated google.protobuf.Any messages = 1;
   */
  messages: Any[] = [];

  constructor(data?: PartialMessage<CosmosTx>) {
    super();
    proto3.util.initPartial(data, this);
  }

  static readonly runtime = proto3;
  static readonly typeName = "ibc.applications.interchain_accounts.v1.CosmosTx";
  static readonly fields: FieldList = proto3.util.newFieldList(() => [
    { no: 1, name: "messages", kind: "message", T: Any, repeated: true },
  ]);

  static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): CosmosTx {
    return new CosmosTx().fromBinary(bytes, options);
  }

  static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): CosmosTx {
    return new CosmosTx().fromJson(jsonValue, options);
  }

  static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): CosmosTx {
    return new CosmosTx().fromJsonString(jsonString, options);
  }

  static equals(a: CosmosTx | PlainMessage<CosmosTx> | undefined, b: CosmosTx | PlainMessage<CosmosTx> | undefined): boolean {
    return proto3.util.equals(CosmosTx, a, b);
  }
}

