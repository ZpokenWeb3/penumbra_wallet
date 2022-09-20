import * as jspb from 'google-protobuf'

import * as ibc_core_connection_v1_tx_pb from './ibc/core/connection/v1/tx_pb';
import * as ibc_core_connection_v1_connection_pb from './ibc/core/connection/v1/connection_pb';
import * as ibc_core_channel_v1_tx_pb from './ibc/core/channel/v1/tx_pb';
import * as ibc_core_client_v1_tx_pb from './ibc/core/client/v1/tx_pb';
import * as ibc_core_client_v1_client_pb from './ibc/core/client/v1/client_pb';
import * as crypto_pb from './crypto_pb';
import * as google_protobuf_any_pb from 'google-protobuf/google/protobuf/any_pb';


export class IBCAction extends jspb.Message {
  getConnectionopeninit(): ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit | undefined;
  setConnectionopeninit(value?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit): IBCAction;
  hasConnectionopeninit(): boolean;
  clearConnectionopeninit(): IBCAction;

  getConnectionopentry(): ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry | undefined;
  setConnectionopentry(value?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry): IBCAction;
  hasConnectionopentry(): boolean;
  clearConnectionopentry(): IBCAction;

  getConnectionopenack(): ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck | undefined;
  setConnectionopenack(value?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck): IBCAction;
  hasConnectionopenack(): boolean;
  clearConnectionopenack(): IBCAction;

  getConnectionopenconfirm(): ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm | undefined;
  setConnectionopenconfirm(value?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm): IBCAction;
  hasConnectionopenconfirm(): boolean;
  clearConnectionopenconfirm(): IBCAction;

  getChannelopeninit(): ibc_core_channel_v1_tx_pb.MsgChannelOpenInit | undefined;
  setChannelopeninit(value?: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit): IBCAction;
  hasChannelopeninit(): boolean;
  clearChannelopeninit(): IBCAction;

  getChannelopentry(): ibc_core_channel_v1_tx_pb.MsgChannelOpenTry | undefined;
  setChannelopentry(value?: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry): IBCAction;
  hasChannelopentry(): boolean;
  clearChannelopentry(): IBCAction;

  getChannelopenack(): ibc_core_channel_v1_tx_pb.MsgChannelOpenAck | undefined;
  setChannelopenack(value?: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck): IBCAction;
  hasChannelopenack(): boolean;
  clearChannelopenack(): IBCAction;

  getChannelopenconfirm(): ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm | undefined;
  setChannelopenconfirm(value?: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm): IBCAction;
  hasChannelopenconfirm(): boolean;
  clearChannelopenconfirm(): IBCAction;

  getChannelcloseinit(): ibc_core_channel_v1_tx_pb.MsgChannelCloseInit | undefined;
  setChannelcloseinit(value?: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit): IBCAction;
  hasChannelcloseinit(): boolean;
  clearChannelcloseinit(): IBCAction;

  getChannelcloseconfirm(): ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm | undefined;
  setChannelcloseconfirm(value?: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm): IBCAction;
  hasChannelcloseconfirm(): boolean;
  clearChannelcloseconfirm(): IBCAction;

  getRecvpacket(): ibc_core_channel_v1_tx_pb.MsgRecvPacket | undefined;
  setRecvpacket(value?: ibc_core_channel_v1_tx_pb.MsgRecvPacket): IBCAction;
  hasRecvpacket(): boolean;
  clearRecvpacket(): IBCAction;

  getTimeout(): ibc_core_channel_v1_tx_pb.MsgTimeout | undefined;
  setTimeout(value?: ibc_core_channel_v1_tx_pb.MsgTimeout): IBCAction;
  hasTimeout(): boolean;
  clearTimeout(): IBCAction;

  getAcknowledgement(): ibc_core_channel_v1_tx_pb.MsgAcknowledgement | undefined;
  setAcknowledgement(value?: ibc_core_channel_v1_tx_pb.MsgAcknowledgement): IBCAction;
  hasAcknowledgement(): boolean;
  clearAcknowledgement(): IBCAction;

  getCreateclient(): ibc_core_client_v1_tx_pb.MsgCreateClient | undefined;
  setCreateclient(value?: ibc_core_client_v1_tx_pb.MsgCreateClient): IBCAction;
  hasCreateclient(): boolean;
  clearCreateclient(): IBCAction;

  getUpdateclient(): ibc_core_client_v1_tx_pb.MsgUpdateClient | undefined;
  setUpdateclient(value?: ibc_core_client_v1_tx_pb.MsgUpdateClient): IBCAction;
  hasUpdateclient(): boolean;
  clearUpdateclient(): IBCAction;

  getUpgradeclient(): ibc_core_client_v1_tx_pb.MsgUpgradeClient | undefined;
  setUpgradeclient(value?: ibc_core_client_v1_tx_pb.MsgUpgradeClient): IBCAction;
  hasUpgradeclient(): boolean;
  clearUpgradeclient(): IBCAction;

  getSubmitmisbehaviour(): ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour | undefined;
  setSubmitmisbehaviour(value?: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour): IBCAction;
  hasSubmitmisbehaviour(): boolean;
  clearSubmitmisbehaviour(): IBCAction;

  getActionCase(): IBCAction.ActionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IBCAction.AsObject;
  static toObject(includeInstance: boolean, msg: IBCAction): IBCAction.AsObject;
  static serializeBinaryToWriter(message: IBCAction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IBCAction;
  static deserializeBinaryFromReader(message: IBCAction, reader: jspb.BinaryReader): IBCAction;
}

export namespace IBCAction {
  export type AsObject = {
    connectionopeninit?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenInit.AsObject,
    connectionopentry?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenTry.AsObject,
    connectionopenack?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenAck.AsObject,
    connectionopenconfirm?: ibc_core_connection_v1_tx_pb.MsgConnectionOpenConfirm.AsObject,
    channelopeninit?: ibc_core_channel_v1_tx_pb.MsgChannelOpenInit.AsObject,
    channelopentry?: ibc_core_channel_v1_tx_pb.MsgChannelOpenTry.AsObject,
    channelopenack?: ibc_core_channel_v1_tx_pb.MsgChannelOpenAck.AsObject,
    channelopenconfirm?: ibc_core_channel_v1_tx_pb.MsgChannelOpenConfirm.AsObject,
    channelcloseinit?: ibc_core_channel_v1_tx_pb.MsgChannelCloseInit.AsObject,
    channelcloseconfirm?: ibc_core_channel_v1_tx_pb.MsgChannelCloseConfirm.AsObject,
    recvpacket?: ibc_core_channel_v1_tx_pb.MsgRecvPacket.AsObject,
    timeout?: ibc_core_channel_v1_tx_pb.MsgTimeout.AsObject,
    acknowledgement?: ibc_core_channel_v1_tx_pb.MsgAcknowledgement.AsObject,
    createclient?: ibc_core_client_v1_tx_pb.MsgCreateClient.AsObject,
    updateclient?: ibc_core_client_v1_tx_pb.MsgUpdateClient.AsObject,
    upgradeclient?: ibc_core_client_v1_tx_pb.MsgUpgradeClient.AsObject,
    submitmisbehaviour?: ibc_core_client_v1_tx_pb.MsgSubmitMisbehaviour.AsObject,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    CONNECTIONOPENINIT = 1,
    CONNECTIONOPENTRY = 2,
    CONNECTIONOPENACK = 3,
    CONNECTIONOPENCONFIRM = 4,
    CHANNELOPENINIT = 5,
    CHANNELOPENTRY = 6,
    CHANNELOPENACK = 7,
    CHANNELOPENCONFIRM = 8,
    CHANNELCLOSEINIT = 9,
    CHANNELCLOSECONFIRM = 10,
    RECVPACKET = 11,
    TIMEOUT = 12,
    ACKNOWLEDGEMENT = 13,
    CREATECLIENT = 14,
    UPDATECLIENT = 15,
    UPGRADECLIENT = 16,
    SUBMITMISBEHAVIOUR = 17,
  }
}

export class FungibleTokenPacketData extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): FungibleTokenPacketData;

  getAmount(): string;
  setAmount(value: string): FungibleTokenPacketData;

  getSender(): string;
  setSender(value: string): FungibleTokenPacketData;

  getReceiver(): string;
  setReceiver(value: string): FungibleTokenPacketData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FungibleTokenPacketData.AsObject;
  static toObject(includeInstance: boolean, msg: FungibleTokenPacketData): FungibleTokenPacketData.AsObject;
  static serializeBinaryToWriter(message: FungibleTokenPacketData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FungibleTokenPacketData;
  static deserializeBinaryFromReader(message: FungibleTokenPacketData, reader: jspb.BinaryReader): FungibleTokenPacketData;
}

export namespace FungibleTokenPacketData {
  export type AsObject = {
    denom: string,
    amount: string,
    sender: string,
    receiver: string,
  }
}

export class ICS20Withdrawal extends jspb.Message {
  getDestinationChainId(): string;
  setDestinationChainId(value: string): ICS20Withdrawal;

  getValue(): crypto_pb.Value | undefined;
  setValue(value?: crypto_pb.Value): ICS20Withdrawal;
  hasValue(): boolean;
  clearValue(): ICS20Withdrawal;

  getDestinationChainAddress(): string;
  setDestinationChainAddress(value: string): ICS20Withdrawal;

  getReturnAddress(): crypto_pb.Address | undefined;
  setReturnAddress(value?: crypto_pb.Address): ICS20Withdrawal;
  hasReturnAddress(): boolean;
  clearReturnAddress(): ICS20Withdrawal;

  getTimeoutHeight(): number;
  setTimeoutHeight(value: number): ICS20Withdrawal;

  getTimeoutTime(): number;
  setTimeoutTime(value: number): ICS20Withdrawal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ICS20Withdrawal.AsObject;
  static toObject(includeInstance: boolean, msg: ICS20Withdrawal): ICS20Withdrawal.AsObject;
  static serializeBinaryToWriter(message: ICS20Withdrawal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ICS20Withdrawal;
  static deserializeBinaryFromReader(message: ICS20Withdrawal, reader: jspb.BinaryReader): ICS20Withdrawal;
}

export namespace ICS20Withdrawal {
  export type AsObject = {
    destinationChainId: string,
    value?: crypto_pb.Value.AsObject,
    destinationChainAddress: string,
    returnAddress?: crypto_pb.Address.AsObject,
    timeoutHeight: number,
    timeoutTime: number,
  }
}

export class ClientData extends jspb.Message {
  getClientid(): string;
  setClientid(value: string): ClientData;

  getClientstate(): google_protobuf_any_pb.Any | undefined;
  setClientstate(value?: google_protobuf_any_pb.Any): ClientData;
  hasClientstate(): boolean;
  clearClientstate(): ClientData;

  getProcessedtime(): string;
  setProcessedtime(value: string): ClientData;

  getProcessedheight(): number;
  setProcessedheight(value: number): ClientData;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientData.AsObject;
  static toObject(includeInstance: boolean, msg: ClientData): ClientData.AsObject;
  static serializeBinaryToWriter(message: ClientData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientData;
  static deserializeBinaryFromReader(message: ClientData, reader: jspb.BinaryReader): ClientData;
}

export namespace ClientData {
  export type AsObject = {
    clientid: string,
    clientstate?: google_protobuf_any_pb.Any.AsObject,
    processedtime: string,
    processedheight: number,
  }
}

export class ClientCounter extends jspb.Message {
  getCounter(): number;
  setCounter(value: number): ClientCounter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientCounter.AsObject;
  static toObject(includeInstance: boolean, msg: ClientCounter): ClientCounter.AsObject;
  static serializeBinaryToWriter(message: ClientCounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientCounter;
  static deserializeBinaryFromReader(message: ClientCounter, reader: jspb.BinaryReader): ClientCounter;
}

export namespace ClientCounter {
  export type AsObject = {
    counter: number,
  }
}

export class ConsensusState extends jspb.Message {
  getConsensusstate(): google_protobuf_any_pb.Any | undefined;
  setConsensusstate(value?: google_protobuf_any_pb.Any): ConsensusState;
  hasConsensusstate(): boolean;
  clearConsensusstate(): ConsensusState;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusState.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusState): ConsensusState.AsObject;
  static serializeBinaryToWriter(message: ConsensusState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusState;
  static deserializeBinaryFromReader(message: ConsensusState, reader: jspb.BinaryReader): ConsensusState;
}

export namespace ConsensusState {
  export type AsObject = {
    consensusstate?: google_protobuf_any_pb.Any.AsObject,
  }
}

export class VerifiedHeights extends jspb.Message {
  getHeightsList(): Array<ibc_core_client_v1_client_pb.Height>;
  setHeightsList(value: Array<ibc_core_client_v1_client_pb.Height>): VerifiedHeights;
  clearHeightsList(): VerifiedHeights;
  addHeights(value?: ibc_core_client_v1_client_pb.Height, index?: number): ibc_core_client_v1_client_pb.Height;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): VerifiedHeights.AsObject;
  static toObject(includeInstance: boolean, msg: VerifiedHeights): VerifiedHeights.AsObject;
  static serializeBinaryToWriter(message: VerifiedHeights, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): VerifiedHeights;
  static deserializeBinaryFromReader(message: VerifiedHeights, reader: jspb.BinaryReader): VerifiedHeights;
}

export namespace VerifiedHeights {
  export type AsObject = {
    heightsList: Array<ibc_core_client_v1_client_pb.Height.AsObject>,
  }
}

export class ConnectionCounter extends jspb.Message {
  getCounter(): number;
  setCounter(value: number): ConnectionCounter;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConnectionCounter.AsObject;
  static toObject(includeInstance: boolean, msg: ConnectionCounter): ConnectionCounter.AsObject;
  static serializeBinaryToWriter(message: ConnectionCounter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConnectionCounter;
  static deserializeBinaryFromReader(message: ConnectionCounter, reader: jspb.BinaryReader): ConnectionCounter;
}

export namespace ConnectionCounter {
  export type AsObject = {
    counter: number,
  }
}

export class ClientConnections extends jspb.Message {
  getConnectionsList(): Array<string>;
  setConnectionsList(value: Array<string>): ClientConnections;
  clearConnectionsList(): ClientConnections;
  addConnections(value: string, index?: number): ClientConnections;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientConnections.AsObject;
  static toObject(includeInstance: boolean, msg: ClientConnections): ClientConnections.AsObject;
  static serializeBinaryToWriter(message: ClientConnections, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientConnections;
  static deserializeBinaryFromReader(message: ClientConnections, reader: jspb.BinaryReader): ClientConnections;
}

export namespace ClientConnections {
  export type AsObject = {
    connectionsList: Array<string>,
  }
}

