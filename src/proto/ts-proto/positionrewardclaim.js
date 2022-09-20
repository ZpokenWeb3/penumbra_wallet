// source: dex.proto
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

goog.provide('proto.penumbra.dex.PositionRewardClaim');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.ValueCommitment');
goog.require('proto.penumbra.dex.PositionId');

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
proto.penumbra.dex.PositionRewardClaim = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.dex.PositionRewardClaim, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.dex.PositionRewardClaim.displayName = 'proto.penumbra.dex.PositionRewardClaim';
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
proto.penumbra.dex.PositionRewardClaim.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.dex.PositionRewardClaim.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.dex.PositionRewardClaim} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.PositionRewardClaim.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.dex.PositionId.toObject(includeInstance, f),
    rewardsCommitment: (f = msg.getRewardsCommitment()) && proto.penumbra.crypto.ValueCommitment.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.dex.PositionRewardClaim}
 */
proto.penumbra.dex.PositionRewardClaim.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.dex.PositionRewardClaim;
  return proto.penumbra.dex.PositionRewardClaim.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.dex.PositionRewardClaim} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.dex.PositionRewardClaim}
 */
proto.penumbra.dex.PositionRewardClaim.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.dex.PositionId;
      reader.readMessage(value,proto.penumbra.dex.PositionId.deserializeBinaryFromReader);
      msg.setPositionId(value);
      break;
    case 2:
      var value = new proto.penumbra.crypto.ValueCommitment;
      reader.readMessage(value,proto.penumbra.crypto.ValueCommitment.deserializeBinaryFromReader);
      msg.setRewardsCommitment(value);
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
proto.penumbra.dex.PositionRewardClaim.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.dex.PositionRewardClaim.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.dex.PositionRewardClaim} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.PositionRewardClaim.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.dex.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getRewardsCommitment();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.crypto.ValueCommitment.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.dex.PositionId}
 */
proto.penumbra.dex.PositionRewardClaim.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.dex.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.dex.PositionId, 1));
};


/**
 * @param {?proto.penumbra.dex.PositionId|undefined} value
 * @return {!proto.penumbra.dex.PositionRewardClaim} returns this
*/
proto.penumbra.dex.PositionRewardClaim.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.PositionRewardClaim} returns this
 */
proto.penumbra.dex.PositionRewardClaim.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.PositionRewardClaim.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional penumbra.crypto.ValueCommitment rewards_commitment = 2;
 * @return {?proto.penumbra.crypto.ValueCommitment}
 */
proto.penumbra.dex.PositionRewardClaim.prototype.getRewardsCommitment = function() {
  return /** @type{?proto.penumbra.crypto.ValueCommitment} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.ValueCommitment, 2));
};


/**
 * @param {?proto.penumbra.crypto.ValueCommitment|undefined} value
 * @return {!proto.penumbra.dex.PositionRewardClaim} returns this
*/
proto.penumbra.dex.PositionRewardClaim.prototype.setRewardsCommitment = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.PositionRewardClaim} returns this
 */
proto.penumbra.dex.PositionRewardClaim.prototype.clearRewardsCommitment = function() {
  return this.setRewardsCommitment(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.PositionRewardClaim.prototype.hasRewardsCommitment = function() {
  return jspb.Message.getField(this, 2) != null;
};


