// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file ibc.proto (package penumbra.ibc, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {Any, proto3} from "@bufbuild/protobuf";
import {MsgConnectionOpenAck, MsgConnectionOpenConfirm, MsgConnectionOpenInit, MsgConnectionOpenTry} from "./ibc/core/connection/v1/tx_pb.js";
import {MsgAcknowledgement, MsgChannelCloseConfirm, MsgChannelCloseInit, MsgChannelOpenAck, MsgChannelOpenConfirm, MsgChannelOpenInit, MsgChannelOpenTry, MsgRecvPacket, MsgTimeout} from "./ibc/core/channel/v1/tx_pb.js";
import {MsgCreateClient, MsgSubmitMisbehaviour, MsgUpdateClient, MsgUpgradeClient} from "./ibc/core/client/v1/tx_pb.js";
import {Address, Value} from "./crypto_pb.js";
import {Height} from "./ibc/core/client/v1/client_pb.js";

/**
 * @generated from message penumbra.ibc.IBCAction
 */
export const IBCAction = proto3.makeMessageType(
  "penumbra.ibc.IBCAction",
  () => [
    { no: 1, name: "connectionOpenInit", kind: "message", T: MsgConnectionOpenInit, oneof: "action" },
    { no: 2, name: "connectionOpenTry", kind: "message", T: MsgConnectionOpenTry, oneof: "action" },
    { no: 3, name: "connectionOpenAck", kind: "message", T: MsgConnectionOpenAck, oneof: "action" },
    { no: 4, name: "connectionOpenConfirm", kind: "message", T: MsgConnectionOpenConfirm, oneof: "action" },
    { no: 5, name: "channelOpenInit", kind: "message", T: MsgChannelOpenInit, oneof: "action" },
    { no: 6, name: "channelOpenTry", kind: "message", T: MsgChannelOpenTry, oneof: "action" },
    { no: 7, name: "channelOpenAck", kind: "message", T: MsgChannelOpenAck, oneof: "action" },
    { no: 8, name: "channelOpenConfirm", kind: "message", T: MsgChannelOpenConfirm, oneof: "action" },
    { no: 9, name: "channelCloseInit", kind: "message", T: MsgChannelCloseInit, oneof: "action" },
    { no: 10, name: "channelCloseConfirm", kind: "message", T: MsgChannelCloseConfirm, oneof: "action" },
    { no: 11, name: "recvPacket", kind: "message", T: MsgRecvPacket, oneof: "action" },
    { no: 12, name: "timeout", kind: "message", T: MsgTimeout, oneof: "action" },
    { no: 13, name: "acknowledgement", kind: "message", T: MsgAcknowledgement, oneof: "action" },
    { no: 14, name: "createClient", kind: "message", T: MsgCreateClient, oneof: "action" },
    { no: 15, name: "updateClient", kind: "message", T: MsgUpdateClient, oneof: "action" },
    { no: 16, name: "upgradeClient", kind: "message", T: MsgUpgradeClient, oneof: "action" },
    { no: 17, name: "submitMisbehaviour", kind: "message", T: MsgSubmitMisbehaviour, oneof: "action" },
  ],
);

/**
 * FungibleTokenPacketData defines a struct for the packet payload
 * See FungibleTokenPacketData spec:
 * https://github.com/cosmos/ibc/tree/master/spec/app/ics-020-fungible-token-transfer#data-structures
 *
 * @generated from message penumbra.ibc.FungibleTokenPacketData
 */
export const FungibleTokenPacketData = proto3.makeMessageType(
  "penumbra.ibc.FungibleTokenPacketData",
  () => [
    { no: 1, name: "denom", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "amount", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 3, name: "sender", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "receiver", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);

/**
 * @generated from message penumbra.ibc.ICS20Withdrawal
 */
export const ICS20Withdrawal = proto3.makeMessageType(
  "penumbra.ibc.ICS20Withdrawal",
  () => [
    { no: 1, name: "destination_chain_id", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "value", kind: "message", T: Value },
    { no: 3, name: "destination_chain_address", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 5, name: "return_address", kind: "message", T: Address },
    { no: 6, name: "timeout_height", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
    { no: 7, name: "timeout_time", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message penumbra.ibc.ClientData
 */
export const ClientData = proto3.makeMessageType(
  "penumbra.ibc.ClientData",
  () => [
    { no: 1, name: "clientID", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 2, name: "clientState", kind: "message", T: Any },
    { no: 3, name: "processedTime", kind: "scalar", T: 9 /* ScalarType.STRING */ },
    { no: 4, name: "processedHeight", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message penumbra.ibc.ClientCounter
 */
export const ClientCounter = proto3.makeMessageType(
  "penumbra.ibc.ClientCounter",
  () => [
    { no: 1, name: "counter", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message penumbra.ibc.ConsensusState
 */
export const ConsensusState = proto3.makeMessageType(
  "penumbra.ibc.ConsensusState",
  () => [
    { no: 1, name: "consensusState", kind: "message", T: Any },
  ],
);

/**
 * @generated from message penumbra.ibc.VerifiedHeights
 */
export const VerifiedHeights = proto3.makeMessageType(
  "penumbra.ibc.VerifiedHeights",
  () => [
    { no: 1, name: "heights", kind: "message", T: Height, repeated: true },
  ],
);

/**
 * @generated from message penumbra.ibc.ConnectionCounter
 */
export const ConnectionCounter = proto3.makeMessageType(
  "penumbra.ibc.ConnectionCounter",
  () => [
    { no: 1, name: "counter", kind: "scalar", T: 4 /* ScalarType.UINT64 */ },
  ],
);

/**
 * @generated from message penumbra.ibc.ClientConnections
 */
export const ClientConnections = proto3.makeMessageType(
  "penumbra.ibc.ClientConnections",
  () => [
    { no: 1, name: "connections", kind: "scalar", T: 9 /* ScalarType.STRING */, repeated: true },
  ],
);
