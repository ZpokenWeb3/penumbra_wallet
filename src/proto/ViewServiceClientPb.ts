/**
 * @fileoverview gRPC-Web generated client stub for penumbra.view
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chain_pb from './chain_pb';
import * as crypto_pb from './crypto_pb';
import * as transaction_pb from './transaction_pb';
import * as view_pb from './view_pb';


export class ViewProtocolClient {
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

  methodDescriptorStatus = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/Status',
    grpcWeb.MethodType.UNARY,
    view_pb.StatusRequest,
    view_pb.StatusResponse,
    (request: view_pb.StatusRequest) => {
      return request.serializeBinary();
    },
    view_pb.StatusResponse.deserializeBinary
  );

  status(
    request: view_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<view_pb.StatusResponse>;

  status(
    request: view_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: view_pb.StatusResponse) => void): grpcWeb.ClientReadableStream<view_pb.StatusResponse>;

  status(
    request: view_pb.StatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: view_pb.StatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/Status',
        request,
        metadata || {},
        this.methodDescriptorStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/Status',
    request,
    metadata || {},
    this.methodDescriptorStatus);
  }

  methodDescriptorStatusStream = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/StatusStream',
    grpcWeb.MethodType.SERVER_STREAMING,
    view_pb.StatusStreamRequest,
    view_pb.StatusStreamResponse,
    (request: view_pb.StatusStreamRequest) => {
      return request.serializeBinary();
    },
    view_pb.StatusStreamResponse.deserializeBinary
  );

  statusStream(
    request: view_pb.StatusStreamRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<view_pb.StatusStreamResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.view.ViewProtocol/StatusStream',
      request,
      metadata || {},
      this.methodDescriptorStatusStream);
  }

  methodDescriptorNotes = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/Notes',
    grpcWeb.MethodType.SERVER_STREAMING,
    view_pb.NotesRequest,
    view_pb.SpendableNoteRecord,
    (request: view_pb.NotesRequest) => {
      return request.serializeBinary();
    },
    view_pb.SpendableNoteRecord.deserializeBinary
  );

  notes(
    request: view_pb.NotesRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<view_pb.SpendableNoteRecord> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.view.ViewProtocol/Notes',
      request,
      metadata || {},
      this.methodDescriptorNotes);
  }

  methodDescriptorQuarantinedNotes = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/QuarantinedNotes',
    grpcWeb.MethodType.SERVER_STREAMING,
    view_pb.QuarantinedNotesRequest,
    view_pb.QuarantinedNoteRecord,
    (request: view_pb.QuarantinedNotesRequest) => {
      return request.serializeBinary();
    },
    view_pb.QuarantinedNoteRecord.deserializeBinary
  );

  quarantinedNotes(
    request: view_pb.QuarantinedNotesRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<view_pb.QuarantinedNoteRecord> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.view.ViewProtocol/QuarantinedNotes',
      request,
      metadata || {},
      this.methodDescriptorQuarantinedNotes);
  }

  methodDescriptorWitness = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/Witness',
    grpcWeb.MethodType.UNARY,
    view_pb.WitnessRequest,
    transaction_pb.WitnessData,
    (request: view_pb.WitnessRequest) => {
      return request.serializeBinary();
    },
    transaction_pb.WitnessData.deserializeBinary
  );

  witness(
    request: view_pb.WitnessRequest,
    metadata: grpcWeb.Metadata | null): Promise<transaction_pb.WitnessData>;

  witness(
    request: view_pb.WitnessRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: transaction_pb.WitnessData) => void): grpcWeb.ClientReadableStream<transaction_pb.WitnessData>;

  witness(
    request: view_pb.WitnessRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: transaction_pb.WitnessData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/Witness',
        request,
        metadata || {},
        this.methodDescriptorWitness,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/Witness',
    request,
    metadata || {},
    this.methodDescriptorWitness);
  }

  methodDescriptorAssets = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/Assets',
    grpcWeb.MethodType.SERVER_STREAMING,
    view_pb.AssetRequest,
    crypto_pb.Asset,
    (request: view_pb.AssetRequest) => {
      return request.serializeBinary();
    },
    crypto_pb.Asset.deserializeBinary
  );

  assets(
    request: view_pb.AssetRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<crypto_pb.Asset> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.view.ViewProtocol/Assets',
      request,
      metadata || {},
      this.methodDescriptorAssets);
  }

  methodDescriptorChainParameters = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/ChainParameters',
    grpcWeb.MethodType.UNARY,
    view_pb.ChainParamsRequest,
    chain_pb.ChainParameters,
    (request: view_pb.ChainParamsRequest) => {
      return request.serializeBinary();
    },
    chain_pb.ChainParameters.deserializeBinary
  );

  chainParameters(
    request: view_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<chain_pb.ChainParameters>;

  chainParameters(
    request: view_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chain_pb.ChainParameters) => void): grpcWeb.ClientReadableStream<chain_pb.ChainParameters>;

  chainParameters(
    request: view_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chain_pb.ChainParameters) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/ChainParameters',
        request,
        metadata || {},
        this.methodDescriptorChainParameters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/ChainParameters',
    request,
    metadata || {},
    this.methodDescriptorChainParameters);
  }

  methodDescriptorFMDParameters = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/FMDParameters',
    grpcWeb.MethodType.UNARY,
    view_pb.FMDParametersRequest,
    chain_pb.FmdParameters,
    (request: view_pb.FMDParametersRequest) => {
      return request.serializeBinary();
    },
    chain_pb.FmdParameters.deserializeBinary
  );

  fMDParameters(
    request: view_pb.FMDParametersRequest,
    metadata: grpcWeb.Metadata | null): Promise<chain_pb.FmdParameters>;

  fMDParameters(
    request: view_pb.FMDParametersRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chain_pb.FmdParameters) => void): grpcWeb.ClientReadableStream<chain_pb.FmdParameters>;

  fMDParameters(
    request: view_pb.FMDParametersRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chain_pb.FmdParameters) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/FMDParameters',
        request,
        metadata || {},
        this.methodDescriptorFMDParameters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/FMDParameters',
    request,
    metadata || {},
    this.methodDescriptorFMDParameters);
  }

  methodDescriptorNoteByCommitment = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/NoteByCommitment',
    grpcWeb.MethodType.UNARY,
    view_pb.NoteByCommitmentRequest,
    view_pb.SpendableNoteRecord,
    (request: view_pb.NoteByCommitmentRequest) => {
      return request.serializeBinary();
    },
    view_pb.SpendableNoteRecord.deserializeBinary
  );

  noteByCommitment(
    request: view_pb.NoteByCommitmentRequest,
    metadata: grpcWeb.Metadata | null): Promise<view_pb.SpendableNoteRecord>;

  noteByCommitment(
    request: view_pb.NoteByCommitmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: view_pb.SpendableNoteRecord) => void): grpcWeb.ClientReadableStream<view_pb.SpendableNoteRecord>;

  noteByCommitment(
    request: view_pb.NoteByCommitmentRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: view_pb.SpendableNoteRecord) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/NoteByCommitment',
        request,
        metadata || {},
        this.methodDescriptorNoteByCommitment,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/NoteByCommitment',
    request,
    metadata || {},
    this.methodDescriptorNoteByCommitment);
  }

  methodDescriptorNullifierStatus = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/NullifierStatus',
    grpcWeb.MethodType.UNARY,
    view_pb.NullifierStatusRequest,
    view_pb.NullifierStatusResponse,
    (request: view_pb.NullifierStatusRequest) => {
      return request.serializeBinary();
    },
    view_pb.NullifierStatusResponse.deserializeBinary
  );

  nullifierStatus(
    request: view_pb.NullifierStatusRequest,
    metadata: grpcWeb.Metadata | null): Promise<view_pb.NullifierStatusResponse>;

  nullifierStatus(
    request: view_pb.NullifierStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: view_pb.NullifierStatusResponse) => void): grpcWeb.ClientReadableStream<view_pb.NullifierStatusResponse>;

  nullifierStatus(
    request: view_pb.NullifierStatusRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: view_pb.NullifierStatusResponse) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.view.ViewProtocol/NullifierStatus',
        request,
        metadata || {},
        this.methodDescriptorNullifierStatus,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.view.ViewProtocol/NullifierStatus',
    request,
    metadata || {},
    this.methodDescriptorNullifierStatus);
  }

  methodDescriptorTransactions = new grpcWeb.MethodDescriptor(
    '/penumbra.view.ViewProtocol/Transactions',
    grpcWeb.MethodType.SERVER_STREAMING,
    view_pb.TransactionsRequest,
    view_pb.TransactionHashStreamResponse,
    (request: view_pb.TransactionsRequest) => {
      return request.serializeBinary();
    },
    view_pb.TransactionHashStreamResponse.deserializeBinary
  );

  transactions(
    request: view_pb.TransactionsRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<view_pb.TransactionHashStreamResponse> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.view.ViewProtocol/Transactions',
      request,
      metadata || {},
      this.methodDescriptorTransactions);
  }

}

