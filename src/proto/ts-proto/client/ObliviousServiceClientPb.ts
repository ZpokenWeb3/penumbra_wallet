/**
 * @fileoverview gRPC-Web generated client stub for penumbra.client.oblivious
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck


import * as grpcWeb from 'grpc-web';

import * as chain_pb from '../chain_pb';
import * as client_oblivious_pb from '../client/oblivious_pb';
import * as stake_pb from '../stake_pb';


export class ObliviousQueryClient {
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

  methodDescriptorCompactBlockRange = new grpcWeb.MethodDescriptor(
    '/penumbra.client.oblivious.ObliviousQuery/CompactBlockRange',
    grpcWeb.MethodType.SERVER_STREAMING,
    client_oblivious_pb.CompactBlockRangeRequest,
    chain_pb.CompactBlock,
    (request: client_oblivious_pb.CompactBlockRangeRequest) => {
      return request.serializeBinary();
    },
    chain_pb.CompactBlock.deserializeBinary
  );

  compactBlockRange(
    request: client_oblivious_pb.CompactBlockRangeRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<chain_pb.CompactBlock> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.client.oblivious.ObliviousQuery/CompactBlockRange',
      request,
      metadata || {},
      this.methodDescriptorCompactBlockRange);
  }

  methodDescriptorChainParameters = new grpcWeb.MethodDescriptor(
    '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
    grpcWeb.MethodType.UNARY,
    client_oblivious_pb.ChainParamsRequest,
    chain_pb.ChainParameters,
    (request: client_oblivious_pb.ChainParamsRequest) => {
      return request.serializeBinary();
    },
    chain_pb.ChainParameters.deserializeBinary
  );

  chainParameters(
    request: client_oblivious_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null): Promise<chain_pb.ChainParameters>;

  chainParameters(
    request: client_oblivious_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chain_pb.ChainParameters) => void): grpcWeb.ClientReadableStream<chain_pb.ChainParameters>;

  chainParameters(
    request: client_oblivious_pb.ChainParamsRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chain_pb.ChainParameters) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
        request,
        metadata || {},
        this.methodDescriptorChainParameters,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
    request,
    metadata || {},
    this.methodDescriptorChainParameters);
  }

  methodDescriptorValidatorInfo = new grpcWeb.MethodDescriptor(
    '/penumbra.client.oblivious.ObliviousQuery/ValidatorInfo',
    grpcWeb.MethodType.SERVER_STREAMING,
    client_oblivious_pb.ValidatorInfoRequest,
    stake_pb.ValidatorInfo,
    (request: client_oblivious_pb.ValidatorInfoRequest) => {
      return request.serializeBinary();
    },
    stake_pb.ValidatorInfo.deserializeBinary
  );

  validatorInfo(
    request: client_oblivious_pb.ValidatorInfoRequest,
    metadata?: grpcWeb.Metadata): grpcWeb.ClientReadableStream<stake_pb.ValidatorInfo> {
    return this.client_.serverStreaming(
      this.hostname_ +
        '/penumbra.client.oblivious.ObliviousQuery/ValidatorInfo',
      request,
      metadata || {},
      this.methodDescriptorValidatorInfo);
  }

  methodDescriptorAssetList = new grpcWeb.MethodDescriptor(
    '/penumbra.client.oblivious.ObliviousQuery/AssetList',
    grpcWeb.MethodType.UNARY,
    client_oblivious_pb.AssetListRequest,
    chain_pb.KnownAssets,
    (request: client_oblivious_pb.AssetListRequest) => {
      return request.serializeBinary();
    },
    chain_pb.KnownAssets.deserializeBinary
  );

  assetList(
    request: client_oblivious_pb.AssetListRequest,
    metadata: grpcWeb.Metadata | null): Promise<chain_pb.KnownAssets>;

  assetList(
    request: client_oblivious_pb.AssetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback: (err: grpcWeb.RpcError,
               response: chain_pb.KnownAssets) => void): grpcWeb.ClientReadableStream<chain_pb.KnownAssets>;

  assetList(
    request: client_oblivious_pb.AssetListRequest,
    metadata: grpcWeb.Metadata | null,
    callback?: (err: grpcWeb.RpcError,
               response: chain_pb.KnownAssets) => void) {
    if (callback !== undefined) {
      return this.client_.rpcCall(
        this.hostname_ +
          '/penumbra.client.oblivious.ObliviousQuery/AssetList',
        request,
        metadata || {},
        this.methodDescriptorAssetList,
        callback);
    }
    return this.client_.unaryCall(
    this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/AssetList',
    request,
    metadata || {},
    this.methodDescriptorAssetList);
  }

}

