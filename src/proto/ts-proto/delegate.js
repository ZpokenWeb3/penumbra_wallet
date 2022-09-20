// source: stake.proto
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

goog.provide('proto.penumbra.stake.Delegate');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.IdentityKey');

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
proto.penumbra.stake.Delegate = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.stake.Delegate, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.Delegate.displayName = 'proto.penumbra.stake.Delegate';
}



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
proto.penumbra.stake.Delegate.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.Delegate.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.Delegate} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.Delegate.toObject = function(includeInstance, msg) {
  var f, obj = {
    validatorIdentity: (f = msg.getValidatorIdentity()) && proto.penumbra.crypto.IdentityKey.toObject(includeInstance, f),
    epochIndex: jspb.Message.getFieldWithDefault(msg, 2, 0),
    unbondedAmount: jspb.Message.getFieldWithDefault(msg, 3, 0),
    delegationAmount: jspb.Message.getFieldWithDefault(msg, 4, 0)
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
 * @return {!proto.penumbra.stake.Delegate}
 */
proto.penumbra.stake.Delegate.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.Delegate;
  return proto.penumbra.stake.Delegate.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.Delegate} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.Delegate}
 */
proto.penumbra.stake.Delegate.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.IdentityKey;
      reader.readMessage(value,proto.penumbra.crypto.IdentityKey.deserializeBinaryFromReader);
      msg.setValidatorIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setEpochIndex(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setUnbondedAmount(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelegationAmount(value);
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
proto.penumbra.stake.Delegate.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.Delegate.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.Delegate} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.Delegate.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidatorIdentity();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.IdentityKey.serializeBinaryToWriter
    );
  }
  f = message.getEpochIndex();
  if (f !== 0) {
    writer.writeUint64(
      2,
      f
    );
  }
  f = message.getUnbondedAmount();
  if (f !== 0) {
    writer.writeUint64(
      3,
      f
    );
  }
  f = message.getDelegationAmount();
  if (f !== 0) {
    writer.writeUint64(
      4,
      f
    );
  }
};


/**
 * optional penumbra.crypto.IdentityKey validator_identity = 1;
 * @return {?proto.penumbra.crypto.IdentityKey}
 */
proto.penumbra.stake.Delegate.prototype.getValidatorIdentity = function() {
  return /** @type{?proto.penumbra.crypto.IdentityKey} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.IdentityKey, 1));
};


/**
 * @param {?proto.penumbra.crypto.IdentityKey|undefined} value
 * @return {!proto.penumbra.stake.Delegate} returns this
*/
proto.penumbra.stake.Delegate.prototype.setValidatorIdentity = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.stake.Delegate} returns this
 */
proto.penumbra.stake.Delegate.prototype.clearValidatorIdentity = function() {
  return this.setValidatorIdentity(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.stake.Delegate.prototype.hasValidatorIdentity = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional uint64 epoch_index = 2;
 * @return {number}
 */
proto.penumbra.stake.Delegate.prototype.getEpochIndex = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.Delegate} returns this
 */
proto.penumbra.stake.Delegate.prototype.setEpochIndex = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional uint64 unbonded_amount = 3;
 * @return {number}
 */
proto.penumbra.stake.Delegate.prototype.getUnbondedAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.Delegate} returns this
 */
proto.penumbra.stake.Delegate.prototype.setUnbondedAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional uint64 delegation_amount = 4;
 * @return {number}
 */
proto.penumbra.stake.Delegate.prototype.getDelegationAmount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.Delegate} returns this
 */
proto.penumbra.stake.Delegate.prototype.setDelegationAmount = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


