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

goog.provide('proto.penumbra.dex.Swap');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.dex.SwapBody');

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
proto.penumbra.dex.Swap = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.dex.Swap, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.dex.Swap.displayName = 'proto.penumbra.dex.Swap';
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
proto.penumbra.dex.Swap.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.dex.Swap.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.dex.Swap} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.Swap.toObject = function(includeInstance, msg) {
  var f, obj = {
    proof: msg.getProof_asB64(),
    body: (f = msg.getBody()) && proto.penumbra.dex.SwapBody.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.dex.Swap}
 */
proto.penumbra.dex.Swap.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.dex.Swap;
  return proto.penumbra.dex.Swap.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.dex.Swap} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.dex.Swap}
 */
proto.penumbra.dex.Swap.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setProof(value);
      break;
    case 4:
      var value = new proto.penumbra.dex.SwapBody;
      reader.readMessage(value,proto.penumbra.dex.SwapBody.deserializeBinaryFromReader);
      msg.setBody(value);
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
proto.penumbra.dex.Swap.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.dex.Swap.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.dex.Swap} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.Swap.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProof_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getBody();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.dex.SwapBody.serializeBinaryToWriter
    );
  }
};


/**
 * optional bytes proof = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.dex.Swap.prototype.getProof = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes proof = 1;
 * This is a type-conversion wrapper around `getProof()`
 * @return {string}
 */
proto.penumbra.dex.Swap.prototype.getProof_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getProof()));
};


/**
 * optional bytes proof = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getProof()`
 * @return {!Uint8Array}
 */
proto.penumbra.dex.Swap.prototype.getProof_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getProof()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.dex.Swap} returns this
 */
proto.penumbra.dex.Swap.prototype.setProof = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional SwapBody body = 4;
 * @return {?proto.penumbra.dex.SwapBody}
 */
proto.penumbra.dex.Swap.prototype.getBody = function() {
  return /** @type{?proto.penumbra.dex.SwapBody} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.dex.SwapBody, 4));
};


/**
 * @param {?proto.penumbra.dex.SwapBody|undefined} value
 * @return {!proto.penumbra.dex.Swap} returns this
*/
proto.penumbra.dex.Swap.prototype.setBody = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.dex.Swap} returns this
 */
proto.penumbra.dex.Swap.prototype.clearBody = function() {
  return this.setBody(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.dex.Swap.prototype.hasBody = function() {
  return jspb.Message.getField(this, 4) != null;
};


