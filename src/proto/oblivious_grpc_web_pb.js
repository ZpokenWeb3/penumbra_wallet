/**
 * @fileoverview gRPC-Web generated client stub for penumbra.client.oblivious
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var src_proto_crypto_pb = require('../../src/proto/crypto_pb.js')

var src_proto_chain_pb = require('../../src/proto/chain_pb.js')

var src_proto_stake_pb = require('../../src/proto/stake_pb.js')
const proto = {};
proto.penumbra = {};
proto.penumbra.client = {};
proto.penumbra.client.oblivious = require('./oblivious_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.penumbra.client.oblivious.ObliviousQueryClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.penumbra.client.oblivious.ObliviousQueryPromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.penumbra.client.oblivious.CompactBlockRangeRequest,
 *   !proto.penumbra.chain.CompactBlock>}
 */
const methodDescriptor_ObliviousQuery_CompactBlockRange = new grpc.web.MethodDescriptor(
  '/penumbra.client.oblivious.ObliviousQuery/CompactBlockRange',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.penumbra.client.oblivious.CompactBlockRangeRequest,
  src_proto_chain_pb.CompactBlock,
  /**
   * @param {!proto.penumbra.client.oblivious.CompactBlockRangeRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_proto_chain_pb.CompactBlock.deserializeBinary
);


/**
 * @param {!proto.penumbra.client.oblivious.CompactBlockRangeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.chain.CompactBlock>}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryClient.prototype.compactBlockRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/CompactBlockRange',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_CompactBlockRange);
};


/**
 * @param {!proto.penumbra.client.oblivious.CompactBlockRangeRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.chain.CompactBlock>}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryPromiseClient.prototype.compactBlockRange =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/CompactBlockRange',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_CompactBlockRange);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.penumbra.client.oblivious.ChainParamsRequest,
 *   !proto.penumbra.chain.ChainParameters>}
 */
const methodDescriptor_ObliviousQuery_ChainParameters = new grpc.web.MethodDescriptor(
  '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
  grpc.web.MethodType.UNARY,
  proto.penumbra.client.oblivious.ChainParamsRequest,
  src_proto_chain_pb.ChainParameters,
  /**
   * @param {!proto.penumbra.client.oblivious.ChainParamsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_proto_chain_pb.ChainParameters.deserializeBinary
);


/**
 * @param {!proto.penumbra.client.oblivious.ChainParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.penumbra.chain.ChainParameters)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.chain.ChainParameters>|undefined}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryClient.prototype.chainParameters =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_ChainParameters,
      callback);
};


/**
 * @param {!proto.penumbra.client.oblivious.ChainParamsRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.penumbra.chain.ChainParameters>}
 *     Promise that resolves to the response
 */
proto.penumbra.client.oblivious.ObliviousQueryPromiseClient.prototype.chainParameters =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/ChainParameters',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_ChainParameters);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.penumbra.client.oblivious.ValidatorInfoRequest,
 *   !proto.penumbra.stake.ValidatorInfo>}
 */
const methodDescriptor_ObliviousQuery_ValidatorInfo = new grpc.web.MethodDescriptor(
  '/penumbra.client.oblivious.ObliviousQuery/ValidatorInfo',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.penumbra.client.oblivious.ValidatorInfoRequest,
  src_proto_stake_pb.ValidatorInfo,
  /**
   * @param {!proto.penumbra.client.oblivious.ValidatorInfoRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_proto_stake_pb.ValidatorInfo.deserializeBinary
);


/**
 * @param {!proto.penumbra.client.oblivious.ValidatorInfoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.stake.ValidatorInfo>}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryClient.prototype.validatorInfo =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/ValidatorInfo',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_ValidatorInfo);
};


/**
 * @param {!proto.penumbra.client.oblivious.ValidatorInfoRequest} request The request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.stake.ValidatorInfo>}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryPromiseClient.prototype.validatorInfo =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/ValidatorInfo',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_ValidatorInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.penumbra.client.oblivious.AssetListRequest,
 *   !proto.penumbra.chain.KnownAssets>}
 */
const methodDescriptor_ObliviousQuery_AssetList = new grpc.web.MethodDescriptor(
  '/penumbra.client.oblivious.ObliviousQuery/AssetList',
  grpc.web.MethodType.UNARY,
  proto.penumbra.client.oblivious.AssetListRequest,
  src_proto_chain_pb.KnownAssets,
  /**
   * @param {!proto.penumbra.client.oblivious.AssetListRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  src_proto_chain_pb.KnownAssets.deserializeBinary
);


/**
 * @param {!proto.penumbra.client.oblivious.AssetListRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.penumbra.chain.KnownAssets)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.penumbra.chain.KnownAssets>|undefined}
 *     The XHR Node Readable Stream
 */
proto.penumbra.client.oblivious.ObliviousQueryClient.prototype.assetList =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/AssetList',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_AssetList,
      callback);
};


/**
 * @param {!proto.penumbra.client.oblivious.AssetListRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.penumbra.chain.KnownAssets>}
 *     Promise that resolves to the response
 */
proto.penumbra.client.oblivious.ObliviousQueryPromiseClient.prototype.assetList =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/penumbra.client.oblivious.ObliviousQuery/AssetList',
      request,
      metadata || {},
      methodDescriptor_ObliviousQuery_AssetList);
};


module.exports = proto.penumbra.client.oblivious;

