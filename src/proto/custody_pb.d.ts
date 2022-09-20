import * as jspb from 'google-protobuf'

import * as transaction_pb from './transaction_pb';
import * as crypto_pb from './crypto_pb';
import * as stake_pb from './stake_pb';
import * as ibc_pb from './ibc_pb';


export class AuthorizeRequest extends jspb.Message {
  getPlan(): transaction_pb.TransactionPlan | undefined;
  setPlan(value?: transaction_pb.TransactionPlan): AuthorizeRequest;
  hasPlan(): boolean;
  clearPlan(): AuthorizeRequest;

  getAccountId(): crypto_pb.AccountID | undefined;
  setAccountId(value?: crypto_pb.AccountID): AuthorizeRequest;
  hasAccountId(): boolean;
  clearAccountId(): AuthorizeRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizeRequest): AuthorizeRequest.AsObject;
  static serializeBinaryToWriter(message: AuthorizeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizeRequest;
  static deserializeBinaryFromReader(message: AuthorizeRequest, reader: jspb.BinaryReader): AuthorizeRequest;
}

export namespace AuthorizeRequest {
  export type AsObject = {
    plan?: transaction_pb.TransactionPlan.AsObject,
    accountId?: crypto_pb.AccountID.AsObject,
  }
}

