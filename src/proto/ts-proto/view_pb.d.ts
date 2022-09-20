import * as jspb from 'google-protobuf'

import * as transaction_pb from './transaction_pb';
import * as crypto_pb from './crypto_pb';
import * as chain_pb from './chain_pb';
import * as dex_pb from './dex_pb';


export class TransactionsRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): TransactionsRequest;
  hasAccountId(): boolean;
  clearAccountId(): TransactionsRequest;

  getStartHeight(): number;
  setStartHeight(value: number): TransactionsRequest;
  hasStartHeight(): boolean;
  clearStartHeight(): TransactionsRequest;

  getEndHeight(): number;
  setEndHeight(value: number): TransactionsRequest;
  hasEndHeight(): boolean;
  clearEndHeight(): TransactionsRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionsRequest): TransactionsRequest.AsObject;
  static serializeBinaryToWriter(message: TransactionsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionsRequest;
  static deserializeBinaryFromReader(message: TransactionsRequest, reader: jspb.BinaryReader): TransactionsRequest;
}

export namespace TransactionsRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
    startHeight?: number,
    endHeight?: number,
  }

  export enum StartHeightCase { 
    _START_HEIGHT_NOT_SET = 0,
    START_HEIGHT = 2,
  }

  export enum EndHeightCase { 
    _END_HEIGHT_NOT_SET = 0,
    END_HEIGHT = 3,
  }
}

export class TransactionHashStreamResponse extends jspb.Message {
  getBlockHeight(): number;
  setBlockHeight(value: number): TransactionHashStreamResponse;

  getTxHash(): Uint8Array | string;
  getTxHash_asU8(): Uint8Array;
  getTxHash_asB64(): string;
  setTxHash(value: Uint8Array | string): TransactionHashStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionHashStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionHashStreamResponse): TransactionHashStreamResponse.AsObject;
  static serializeBinaryToWriter(message: TransactionHashStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionHashStreamResponse;
  static deserializeBinaryFromReader(message: TransactionHashStreamResponse, reader: jspb.BinaryReader): TransactionHashStreamResponse;
}

export namespace TransactionHashStreamResponse {
  export type AsObject = {
    blockHeight: number,
    txHash: Uint8Array | string,
  }
}

export class NoteByCommitmentRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): NoteByCommitmentRequest;
  hasAccountId(): boolean;
  clearAccountId(): NoteByCommitmentRequest;

  getNoteCommitment(): crypto_pb.NoteCommitment | undefined;
  setNoteCommitment(value?: crypto_pb.NoteCommitment): NoteByCommitmentRequest;
  hasNoteCommitment(): boolean;
  clearNoteCommitment(): NoteByCommitmentRequest;

  getAwaitDetection(): boolean;
  setAwaitDetection(value: boolean): NoteByCommitmentRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteByCommitmentRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NoteByCommitmentRequest): NoteByCommitmentRequest.AsObject;
  static serializeBinaryToWriter(message: NoteByCommitmentRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteByCommitmentRequest;
  static deserializeBinaryFromReader(message: NoteByCommitmentRequest, reader: jspb.BinaryReader): NoteByCommitmentRequest;
}

export namespace NoteByCommitmentRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
    noteCommitment?: crypto_pb.NoteCommitment.AsObject,
    awaitDetection: boolean,
  }
}

export class ChainParamsRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ChainParamsRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ChainParamsRequest): ChainParamsRequest.AsObject;
  static serializeBinaryToWriter(message: ChainParamsRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ChainParamsRequest;
  static deserializeBinaryFromReader(message: ChainParamsRequest, reader: jspb.BinaryReader): ChainParamsRequest;
}

export namespace ChainParamsRequest {
  export type AsObject = {
  }
}

export class FMDParametersRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FMDParametersRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FMDParametersRequest): FMDParametersRequest.AsObject;
  static serializeBinaryToWriter(message: FMDParametersRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FMDParametersRequest;
  static deserializeBinaryFromReader(message: FMDParametersRequest, reader: jspb.BinaryReader): FMDParametersRequest;
}

export namespace FMDParametersRequest {
  export type AsObject = {
  }
}

export class AssetRequest extends jspb.Message {
  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AssetRequest): AssetRequest.AsObject;
  static serializeBinaryToWriter(message: AssetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetRequest;
  static deserializeBinaryFromReader(message: AssetRequest, reader: jspb.BinaryReader): AssetRequest;
}

export namespace AssetRequest {
  export type AsObject = {
  }
}

export class StatusRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): StatusRequest;
  hasAccountId(): boolean;
  clearAccountId(): StatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusRequest): StatusRequest.AsObject;
  static serializeBinaryToWriter(message: StatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusRequest;
  static deserializeBinaryFromReader(message: StatusRequest, reader: jspb.BinaryReader): StatusRequest;
}

export namespace StatusRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
  }
}

export class StatusResponse extends jspb.Message {
  getSyncHeight(): number;
  setSyncHeight(value: number): StatusResponse;

  getCatchingUp(): boolean;
  setCatchingUp(value: boolean): StatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusResponse): StatusResponse.AsObject;
  static serializeBinaryToWriter(message: StatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusResponse;
  static deserializeBinaryFromReader(message: StatusResponse, reader: jspb.BinaryReader): StatusResponse;
}

export namespace StatusResponse {
  export type AsObject = {
    syncHeight: number,
    catchingUp: boolean,
  }
}

export class StatusStreamRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): StatusStreamRequest;
  hasAccountId(): boolean;
  clearAccountId(): StatusStreamRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusStreamRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusStreamRequest): StatusStreamRequest.AsObject;
  static serializeBinaryToWriter(message: StatusStreamRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusStreamRequest;
  static deserializeBinaryFromReader(message: StatusStreamRequest, reader: jspb.BinaryReader): StatusStreamRequest;
}

export namespace StatusStreamRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
  }
}

export class StatusStreamResponse extends jspb.Message {
  getLatestKnownBlockHeight(): number;
  setLatestKnownBlockHeight(value: number): StatusStreamResponse;

  getSyncHeight(): number;
  setSyncHeight(value: number): StatusStreamResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusStreamResponse.AsObject;
  static toObject(includeInstance: boolean, msg: StatusStreamResponse): StatusStreamResponse.AsObject;
  static serializeBinaryToWriter(message: StatusStreamResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusStreamResponse;
  static deserializeBinaryFromReader(message: StatusStreamResponse, reader: jspb.BinaryReader): StatusStreamResponse;
}

export namespace StatusStreamResponse {
  export type AsObject = {
    latestKnownBlockHeight: number,
    syncHeight: number,
  }
}

export class SpendableNoteRecord extends jspb.Message {
  getNoteCommitment(): crypto_pb.NoteCommitment | undefined;
  setNoteCommitment(value?: crypto_pb.NoteCommitment): SpendableNoteRecord;
  hasNoteCommitment(): boolean;
  clearNoteCommitment(): SpendableNoteRecord;

  getNote(): crypto_pb.Note | undefined;
  setNote(value?: crypto_pb.Note): SpendableNoteRecord;
  hasNote(): boolean;
  clearNote(): SpendableNoteRecord;

  getAddressIndex(): crypto_pb.AddressIndex | undefined;
  setAddressIndex(value?: crypto_pb.AddressIndex): SpendableNoteRecord;
  hasAddressIndex(): boolean;
  clearAddressIndex(): SpendableNoteRecord;

  getNullifier(): crypto_pb.Nullifier | undefined;
  setNullifier(value?: crypto_pb.Nullifier): SpendableNoteRecord;
  hasNullifier(): boolean;
  clearNullifier(): SpendableNoteRecord;

  getHeightCreated(): number;
  setHeightCreated(value: number): SpendableNoteRecord;

  getHeightSpent(): number;
  setHeightSpent(value: number): SpendableNoteRecord;
  hasHeightSpent(): boolean;
  clearHeightSpent(): SpendableNoteRecord;

  getPosition(): number;
  setPosition(value: number): SpendableNoteRecord;

  getSource(): chain_pb.NoteSource | undefined;
  setSource(value?: chain_pb.NoteSource): SpendableNoteRecord;
  hasSource(): boolean;
  clearSource(): SpendableNoteRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendableNoteRecord.AsObject;
  static toObject(includeInstance: boolean, msg: SpendableNoteRecord): SpendableNoteRecord.AsObject;
  static serializeBinaryToWriter(message: SpendableNoteRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendableNoteRecord;
  static deserializeBinaryFromReader(message: SpendableNoteRecord, reader: jspb.BinaryReader): SpendableNoteRecord;
}

export namespace SpendableNoteRecord {
  export type AsObject = {
    noteCommitment?: crypto_pb.NoteCommitment.AsObject,
    note?: crypto_pb.Note.AsObject,
    addressIndex?: crypto_pb.AddressIndex.AsObject,
    nullifier?: crypto_pb.Nullifier.AsObject,
    heightCreated: number,
    heightSpent?: number,
    position: number,
    source?: chain_pb.NoteSource.AsObject,
  }

  export enum HeightSpentCase { 
    _HEIGHT_SPENT_NOT_SET = 0,
    HEIGHT_SPENT = 6,
  }
}

export class NotesRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): NotesRequest;
  hasAccountId(): boolean;
  clearAccountId(): NotesRequest;

  getIncludeSpent(): boolean;
  setIncludeSpent(value: boolean): NotesRequest;

  getAssetId(): crypto_pb.AssetId | undefined;
  setAssetId(value?: crypto_pb.AssetId): NotesRequest;
  hasAssetId(): boolean;
  clearAssetId(): NotesRequest;

  getAddressIndex(): crypto_pb.AddressIndex | undefined;
  setAddressIndex(value?: crypto_pb.AddressIndex): NotesRequest;
  hasAddressIndex(): boolean;
  clearAddressIndex(): NotesRequest;

  getAmountToSpend(): number;
  setAmountToSpend(value: number): NotesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NotesRequest): NotesRequest.AsObject;
  static serializeBinaryToWriter(message: NotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotesRequest;
  static deserializeBinaryFromReader(message: NotesRequest, reader: jspb.BinaryReader): NotesRequest;
}

export namespace NotesRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
    includeSpent: boolean,
    assetId?: crypto_pb.AssetId.AsObject,
    addressIndex?: crypto_pb.AddressIndex.AsObject,
    amountToSpend: number,
  }
}

export class WitnessRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): WitnessRequest;
  hasAccountId(): boolean;
  clearAccountId(): WitnessRequest;

  getNoteCommitmentsList(): Array<crypto_pb.NoteCommitment>;
  setNoteCommitmentsList(value: Array<crypto_pb.NoteCommitment>): WitnessRequest;
  clearNoteCommitmentsList(): WitnessRequest;
  addNoteCommitments(value?: crypto_pb.NoteCommitment, index?: number): crypto_pb.NoteCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WitnessRequest.AsObject;
  static toObject(includeInstance: boolean, msg: WitnessRequest): WitnessRequest.AsObject;
  static serializeBinaryToWriter(message: WitnessRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WitnessRequest;
  static deserializeBinaryFromReader(message: WitnessRequest, reader: jspb.BinaryReader): WitnessRequest;
}

export namespace WitnessRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
    noteCommitmentsList: Array<crypto_pb.NoteCommitment.AsObject>,
  }
}

export class QuarantinedNoteRecord extends jspb.Message {
  getNoteCommitment(): crypto_pb.NoteCommitment | undefined;
  setNoteCommitment(value?: crypto_pb.NoteCommitment): QuarantinedNoteRecord;
  hasNoteCommitment(): boolean;
  clearNoteCommitment(): QuarantinedNoteRecord;

  getNote(): crypto_pb.Note | undefined;
  setNote(value?: crypto_pb.Note): QuarantinedNoteRecord;
  hasNote(): boolean;
  clearNote(): QuarantinedNoteRecord;

  getAddressIndex(): crypto_pb.AddressIndex | undefined;
  setAddressIndex(value?: crypto_pb.AddressIndex): QuarantinedNoteRecord;
  hasAddressIndex(): boolean;
  clearAddressIndex(): QuarantinedNoteRecord;

  getHeightCreated(): number;
  setHeightCreated(value: number): QuarantinedNoteRecord;

  getUnbondingEpoch(): number;
  setUnbondingEpoch(value: number): QuarantinedNoteRecord;

  getIdentityKey(): crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: crypto_pb.IdentityKey): QuarantinedNoteRecord;
  hasIdentityKey(): boolean;
  clearIdentityKey(): QuarantinedNoteRecord;

  getSource(): chain_pb.NoteSource | undefined;
  setSource(value?: chain_pb.NoteSource): QuarantinedNoteRecord;
  hasSource(): boolean;
  clearSource(): QuarantinedNoteRecord;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuarantinedNoteRecord.AsObject;
  static toObject(includeInstance: boolean, msg: QuarantinedNoteRecord): QuarantinedNoteRecord.AsObject;
  static serializeBinaryToWriter(message: QuarantinedNoteRecord, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuarantinedNoteRecord;
  static deserializeBinaryFromReader(message: QuarantinedNoteRecord, reader: jspb.BinaryReader): QuarantinedNoteRecord;
}

export namespace QuarantinedNoteRecord {
  export type AsObject = {
    noteCommitment?: crypto_pb.NoteCommitment.AsObject,
    note?: crypto_pb.Note.AsObject,
    addressIndex?: crypto_pb.AddressIndex.AsObject,
    heightCreated: number,
    unbondingEpoch: number,
    identityKey?: crypto_pb.IdentityKey.AsObject,
    source?: chain_pb.NoteSource.AsObject,
  }
}

export class QuarantinedNotesRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): QuarantinedNotesRequest;
  hasAccountId(): boolean;
  clearAccountId(): QuarantinedNotesRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): QuarantinedNotesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: QuarantinedNotesRequest): QuarantinedNotesRequest.AsObject;
  static serializeBinaryToWriter(message: QuarantinedNotesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): QuarantinedNotesRequest;
  static deserializeBinaryFromReader(message: QuarantinedNotesRequest, reader: jspb.BinaryReader): QuarantinedNotesRequest;
}

export namespace QuarantinedNotesRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
  }
}

export class NullifierStatusRequest extends jspb.Message {
  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): NullifierStatusRequest;
  hasAccountId(): boolean;
  clearAccountId(): NullifierStatusRequest;

  getNullifier(): crypto_pb.Nullifier | undefined;
  setNullifier(value?: crypto_pb.Nullifier): NullifierStatusRequest;
  hasNullifier(): boolean;
  clearNullifier(): NullifierStatusRequest;

  getAwaitDetection(): boolean;
  setAwaitDetection(value: boolean): NullifierStatusRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullifierStatusRequest.AsObject;
  static toObject(includeInstance: boolean, msg: NullifierStatusRequest): NullifierStatusRequest.AsObject;
  static serializeBinaryToWriter(message: NullifierStatusRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullifierStatusRequest;
  static deserializeBinaryFromReader(message: NullifierStatusRequest, reader: jspb.BinaryReader): NullifierStatusRequest;
}

export namespace NullifierStatusRequest {
  export type AsObject = {
    accountId?: crypto_pb.AccountID.AsObject,
    nullifier?: crypto_pb.Nullifier.AsObject,
    awaitDetection: boolean,
  }
}

export class NullifierStatusResponse extends jspb.Message {
  getSpent(): boolean;
  setSpent(value: boolean): NullifierStatusResponse;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NullifierStatusResponse.AsObject;
  static toObject(includeInstance: boolean, msg: NullifierStatusResponse): NullifierStatusResponse.AsObject;
  static serializeBinaryToWriter(message: NullifierStatusResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NullifierStatusResponse;
  static deserializeBinaryFromReader(message: NullifierStatusResponse, reader: jspb.BinaryReader): NullifierStatusResponse;
}

export namespace NullifierStatusResponse {
  export type AsObject = {
    spent: boolean,
  }
}

