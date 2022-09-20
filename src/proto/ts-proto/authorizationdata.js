// source: transaction.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

goog.provide('proto.penumbra.transaction.AuthorizationData');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.SpendAuthSignature');
goog.require('proto.penumbra.transaction.AuthHash');

/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.penumbra.transaction.AuthorizationData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.transaction.AuthorizationData.repeatedFields_, null);
};
goog.inherits(proto.penumbra.transaction.AuthorizationData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.transaction.AuthorizationData.displayName = 'proto.penumbra.transaction.AuthorizationData';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.transaction.AuthorizationData.repeatedFields_ = [2,3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.penumbra.transaction.AuthorizationData.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.transaction.AuthorizationData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.transaction.AuthorizationData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.AuthorizationData.toObject = function(includeInstance, msg) {
  var f, obj = {
    authHash: (f = msg.getAuthHash()) && proto.penumbra.transaction.AuthHash.toObject(includeInstance, f),
    spendAuthsList: jspb.Message.toObjectList(msg.getSpendAuthsList(),
    proto.penumbra.crypto.SpendAuthSignature.toObject, includeInstance),
    withdrawProposalAuthsList: jspb.Message.toObjectList(msg.getWithdrawProposalAuthsList(),
    proto.penumbra.crypto.SpendAuthSignature.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.penumbra.transaction.AuthorizationData}
 */
proto.penumbra.transaction.AuthorizationData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.transaction.AuthorizationData;
  return proto.penumbra.transaction.AuthorizationData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.transaction.AuthorizationData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.transaction.AuthorizationData}
 */
proto.penumbra.transaction.AuthorizationData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.transaction.AuthHash;
      reader.readMessage(value,proto.penumbra.transaction.AuthHash.deserializeBinaryFromReader);
      msg.setAuthHash(value);
      break;
    case 2:
      var value = new proto.penumbra.crypto.SpendAuthSignature;
      reader.readMessage(value,proto.penumbra.crypto.SpendAuthSignature.deserializeBinaryFromReader);
      msg.addSpendAuths(value);
      break;
    case 3:
      var value = new proto.penumbra.crypto.SpendAuthSignature;
      reader.readMessage(value,proto.penumbra.crypto.SpendAuthSignature.deserializeBinaryFromReader);
      msg.addWithdrawProposalAuths(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.penumbra.transaction.AuthorizationData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.transaction.AuthorizationData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.transaction.AuthorizationData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transaction.AuthorizationData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getAuthHash();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.transaction.AuthHash.serializeBinaryToWriter
    );
  }
  f = message.getSpendAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.penumbra.crypto.SpendAuthSignature.serializeBinaryToWriter
    );
  }
  f = message.getWithdrawProposalAuthsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto.penumbra.crypto.SpendAuthSignature.serializeBinaryToWriter
    );
  }
};


/**
 * optional AuthHash auth_hash = 1;
 * @return {?proto.penumbra.transaction.AuthHash}
 */
proto.penumbra.transaction.AuthorizationData.prototype.getAuthHash = function() {
  return /** @type{?proto.penumbra.transaction.AuthHash} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.transaction.AuthHash, 1));
};


/**
 * @param {?proto.penumbra.transaction.AuthHash|undefined} value
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
*/
proto.penumbra.transaction.AuthorizationData.prototype.setAuthHash = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
 */
proto.penumbra.transaction.AuthorizationData.prototype.clearAuthHash = function() {
  return this.setAuthHash(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transaction.AuthorizationData.prototype.hasAuthHash = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * repeated penumbra.crypto.SpendAuthSignature spend_auths = 2;
 * @return {!Array<!proto.penumbra.crypto.SpendAuthSignature>}
 */
proto.penumbra.transaction.AuthorizationData.prototype.getSpendAuthsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.SpendAuthSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.crypto.SpendAuthSignature, 2));
};


/**
 * @param {!Array<!proto.penumbra.crypto.SpendAuthSignature>} value
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
*/
proto.penumbra.transaction.AuthorizationData.prototype.setSpendAuthsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.crypto.SpendAuthSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.SpendAuthSignature}
 */
proto.penumbra.transaction.AuthorizationData.prototype.addSpendAuths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.crypto.SpendAuthSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
 */
proto.penumbra.transaction.AuthorizationData.prototype.clearSpendAuthsList = function() {
  return this.setSpendAuthsList([]);
};


/**
 * repeated penumbra.crypto.SpendAuthSignature withdraw_proposal_auths = 3;
 * @return {!Array<!proto.penumbra.crypto.SpendAuthSignature>}
 */
proto.penumbra.transaction.AuthorizationData.prototype.getWithdrawProposalAuthsList = function() {
  return /** @type{!Array<!proto.penumbra.crypto.SpendAuthSignature>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.crypto.SpendAuthSignature, 3));
};


/**
 * @param {!Array<!proto.penumbra.crypto.SpendAuthSignature>} value
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
*/
proto.penumbra.transaction.AuthorizationData.prototype.setWithdrawProposalAuthsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.penumbra.crypto.SpendAuthSignature=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.crypto.SpendAuthSignature}
 */
proto.penumbra.transaction.AuthorizationData.prototype.addWithdrawProposalAuths = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.penumbra.crypto.SpendAuthSignature, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.transaction.AuthorizationData} returns this
 */
proto.penumbra.transaction.AuthorizationData.prototype.clearWithdrawProposalAuthsList = function() {
  return this.setWithdrawProposalAuthsList([]);
};


