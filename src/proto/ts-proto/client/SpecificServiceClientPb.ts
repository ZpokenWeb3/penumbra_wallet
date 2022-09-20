/**
 * @fileoverview gRPC-Web generated client stub for penumbra.client.specific
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chain_pb from '../chain_pb';
import * as client_specific_pb from '../client/specific_pb';
import * as crypto_pb from '../crypto_pb';
import * as dex_pb from '../dex_pb';
import * as stake_pb from '../stake_pb';


export class SpecificQueryClient {
  client_: grpcWeb.AbstractClientBase;
  hostname_: string;
  credentials_: null | { [index: string]: string; };
  options_: null | { [index: string]: any; };

  constructor (hostname: string,
               credentials?: null | { [index: string]: string; },
               options?: null | { [index: string]: any; }) {
    if (!options) options = {};
    if (!credentials) credentials = {};
    options['format'] = 'text';

    this.client_ = new grpcWeb.GrpcWebClientBase(options);
    this.hostname_ = hostname;
    this.credentials_ = credentials;
    this.options_ = options;
  }

  methodDescriptorTransactionByNote = new grpcWeb.MethodDescriptor(
    '/penumbra.client.specific.SpecificQuery/TransactionByNote',
    grpcWeb.MethodType.UNARY,
    crypto_pb.NoteCommitment,
    chain_pb.NoteSource,
    (request: crypto_pb.NoteCommitment) => {
      return request.serializeBinary();
    },
    chain_pb.NoteSource.deserializeBinary
  );

  transactionByNote(
    request: crypto_pb.NoteCommitment,
    metadata: grpcWeb.Metadata | null): Promise<chain_pb.NoteSource>;

  transactionByNote(
    request: crypto_pb.NoteCommitment,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chain_pb.NoteSource) => void): grpcWeb.ClientReadableStream<chain_pb.NoteSource>;

  transactionByNote(
    request: crypto_pb.NoteCommitment,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chain_pb.NoteSource) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.specific.SpecificQuery/TransactionByNote',
        request,
        metadata || {},
        this.methodDescriptorTransactionByNote,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.specific.SpecificQuery/TransactionByNote',
    request,
    metadata || {},
    this.methodDescriptorTransactionByNote);
  }

  methodDescriptorValidatorStatus = new grpcWeb.MethodDescriptor(
    '/penumbra.client.specific.SpecificQuery/ValidatorStatus',
    grpcWeb.MethodType.UNARY,
    client_specific_pb.ValidatorStatusRequest,
    stake_pb.ValidatorStatus,
    (request: client_specific_pb.ValidatorStatusRequest) => {
      return request.serializeBinary();
    },
    stake_pb.ValidatorStatus.deserializeBinary
  );

  validatorStatus(
    request: client_specific_pb.ValidatorStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<stake_pb.ValidatorStatus>;

  validatorStatus(
    request: client_specific_pb.ValidatorStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stake_pb.ValidatorStatus) => void): grpcWeb.ClientReadableStream<stake_pb.ValidatorStatus>;

  validatorStatus(
    request: client_specific_pb.ValidatorStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stake_pb.ValidatorStatus) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.specific.SpecificQuery/ValidatorStatus',
        request,
        metadata || {},
        this.methodDescriptorValidatorStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.specific.SpecificQuery/ValidatorStatus',
    request,
    metadata || {},
    this.methodDescriptorValidatorStatus);
  }

  methodDescriptorNextValidatorRate = new grpcWeb.MethodDescriptor(
    '/penumbra.client.specific.SpecificQuery/NextValidatorRate',
    grpcWeb.MethodType.UNARY,
    crypto_pb.IdentityKey,
    stake_pb.RateData,
    (request: crypto_pb.IdentityKey) => {
      return request.serializeBinary();
    },
    stake_pb.RateData.deserializeBinary
  );

  nextValidatorRate(
    request: crypto_pb.IdentityKey,
    metadata: grpcWeb.Metadata | null): Promise<stake_pb.RateData>;

  nextValidatorRate(
    request: crypto_pb.IdentityKey,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: stake_pb.RateData) => void): grpcWeb.ClientReadableStream<stake_pb.RateData>;

  nextValidatorRate(
    request: crypto_pb.IdentityKey,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: stake_pb.RateData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.specific.SpecificQuery/NextValidatorRate',
        request,
        metadata || {},
        this.methodDescriptorNextValidatorRate,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.specific.SpecificQuery/NextValidatorRate',
    request,
    metadata || {},
    this.methodDescriptorNextValidatorRate);
  }

  methodDescriptorBatchSwapOutputData = new grpcWeb.MethodDescriptor(
    '/penumbra.client.specific.SpecificQuery/BatchSwapOutputData',
    grpcWeb.MethodType.UNARY,
    client_specific_pb.BatchSwapOutputDataRequest,
    dex_pb.BatchSwapOutputData,
    (request: client_specific_pb.BatchSwapOutputDataRequest) => {
      return request.serializeBinary();
    },
    dex_pb.BatchSwapOutputData.deserializeBinary
  );

  batchSwapOutputData(
    request: client_specific_pb.BatchSwapOutputDataRequest,
    metadata: grpcWeb.Metadata | null): Promise<dex_pb.BatchSwapOutputData>;

  batchSwapOutputData(
    request: client_specific_pb.BatchSwapOutputDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: dex_pb.BatchSwapOutputData) => void): grpcWeb.ClientReadableStream<dex_pb.BatchSwapOutputData>;

  batchSwapOutputData(
    request: client_specific_pb.BatchSwapOutputDataRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: dex_pb.BatchSwapOutputData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.specific.SpecificQuery/BatchSwapOutputData',
        request,
        metadata || {},
        this.methodDescriptorBatchSwapOutputData,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.specific.SpecificQuery/BatchSwapOutputData',
    request,
    metadata || {},
    this.methodDescriptorBatchSwapOutputData);
  }

  methodDescriptorKeyValue = new grpcWeb.MethodDescriptor(
    '/penumbra.client.specific.SpecificQuery/KeyValue',
    grpcWeb.MethodType.UNARY,
    client_specific_pb.KeyValueRequest,
    client_specific_pb.KeyValueResponse,
    (request: client_specific_pb.KeyValueRequest) => {
      return request.serializeBinary();
    },
    client_specific_pb.KeyValueResponse.deserializeBinary
  );

  keyValue(
    request: client_specific_pb.KeyValueRequest,
    metadata: grpcWeb.Metadata | null): Promise<client_specific_pb.KeyValueResponse>;

  keyValue(
    request: client_specific_pb.KeyValueRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: client_specific_pb.KeyValueResponse) => void): grpcWeb.ClientReadableStream<client_specific_pb.KeyValueResponse>;

  keyValue(
    request: client_specific_pb.KeyValueRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: client_specific_pb.KeyValueResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.specific.SpecificQuery/KeyValue',
        request,
        metadata || {},
        this.methodDescriptorKeyValue,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.specific.SpecificQuery/KeyValue',
    request,
    metadata || {},
    this.methodDescriptorKeyValue);
  }

}

