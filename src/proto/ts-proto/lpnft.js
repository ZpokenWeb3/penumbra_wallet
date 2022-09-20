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

goog.provide('proto.penumbra.dex.LpNft');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.dex.PositionId');
goog.require('proto.penumbra.dex.PositionState');

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
proto.penumbra.dex.LpNft = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.dex.LpNft, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.dex.LpNft.displayName = 'proto.penumbra.dex.LpNft';
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
proto.penumbra.dex.LpNft.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.dex.LpNft.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.dex.LpNft} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.LpNft.toObject = function(includeInstance, msg) {
  var f, obj = {
    positionId: (f = msg.getPositionId()) && proto.penumbra.dex.PositionId.toObject(includeInstance, f),
    state: (f = msg.getState()) && proto.penumbra.dex.PositionState.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.dex.LpNft}
 */
proto.penumbra.dex.LpNft.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.dex.LpNft;
  return proto.penumbra.dex.LpNft.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.dex.LpNft} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.dex.LpNft}
 */
proto.penumbra.dex.LpNft.deserializeBinaryFromReader = function(msg, reader) {
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
      var value = new proto.penumbra.dex.PositionState;
      reader.readMessage(value,proto.penumbra.dex.PositionState.deserializeBinaryFromReader);
      msg.setState(value);
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
proto.penumbra.dex.LpNft.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.dex.LpNft.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.dex.LpNft} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.LpNft.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPositionId();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.dex.PositionId.serializeBinaryToWriter
    );
  }
  f = message.getState();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.dex.PositionState.serializeBinaryToWriter
    );
  }
};


/**
 * optional PositionId position_id = 1;
 * @return {?proto.penumbra.dex.PositionId}
 */
proto.penumbra.dex.LpNft.prototype.getPositionId = function() {
  return /** @type{?proto.penumbra.dex.PositionId} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.dex.PositionId, 1));
};


/**
 * @param {?proto.penumbra.dex.PositionId|undefined} value
 * @return {!proto.penumbra.dex.LpNft} returns this
*/
proto.penumbra.dex.LpNft.prototype.setPositionId = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.LpNft} returns this
 */
proto.penumbra.dex.LpNft.prototype.clearPositionId = function() {
  return this.setPositionId(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.LpNft.prototype.hasPositionId = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional PositionState state = 2;
 * @return {?proto.penumbra.dex.PositionState}
 */
proto.penumbra.dex.LpNft.prototype.getState = function() {
  return /** @type{?proto.penumbra.dex.PositionState} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.dex.PositionState, 2));
};


/**
 * @param {?proto.penumbra.dex.PositionState|undefined} value
 * @return {!proto.penumbra.dex.LpNft} returns this
*/
proto.penumbra.dex.LpNft.prototype.setState = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.LpNft} returns this
 */
proto.penumbra.dex.LpNft.prototype.clearState = function() {
  return this.setState(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.LpNft.prototype.hasState = function() {
  return jspb.Message.getField(this, 2) != null;
};


