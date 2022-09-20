/**
 * @fileoverview gRPC-Web generated client stub for penumbra.custody
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as custody_pb from './custody_pb';
import * as transaction_pb from './transaction_pb';


export class CustodyProtocolClient {
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

  methodDescriptorAuthorize = new grpcWeb.MethodDescriptor(
    '/penumbra.custody.CustodyProtocol/Authorize',
    grpcWeb.MethodType.UNARY,
    custody_pb.AuthorizeRequest,
    transaction_pb.AuthorizationData,
    (request: custody_pb.AuthorizeRequest) => {
      return request.serializeBinary();
    },
    transaction_pb.AuthorizationData.deserializeBinary
  );

  authorize(
    request: custody_pb.AuthorizeRequest,
    metadata: grpcWeb.Metadata | null): Promise<transaction_pb.AuthorizationData>;

  authorize(
    request: custody_pb.AuthorizeRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: transaction_pb.AuthorizationData) => void): grpcWeb.ClientReadableStream<transaction_pb.AuthorizationData>;

  authorize(
    request: custody_pb.AuthorizeRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: transaction_pb.AuthorizationData) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.custody.CustodyProtocol/Authorize',
        request,
        metadata || {},
        this.methodDescriptorAuthorize,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.custody.CustodyProtocol/Authorize',
    request,
    metadata || {},
    this.methodDescriptorAuthorize);
  }

}

