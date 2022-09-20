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

goog.provide('proto.penumbra.stake.ValidatorDefinition');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.stake.Validator');

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
proto.penumbra.stake.ValidatorDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.stake.ValidatorDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.ValidatorDefinition.displayName = 'proto.penumbra.stake.ValidatorDefinition';
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
proto.penumbra.stake.ValidatorDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.ValidatorDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.ValidatorDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.ValidatorDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    validator: (f = msg.getValidator()) && proto.penumbra.stake.Validator.toObject(includeInstance, f),
    authSig: msg.getAuthSig_asB64()
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
 * @return {!proto.penumbra.stake.ValidatorDefinition}
 */
proto.penumbra.stake.ValidatorDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.ValidatorDefinition;
  return proto.penumbra.stake.ValidatorDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.ValidatorDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.ValidatorDefinition}
 */
proto.penumbra.stake.ValidatorDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.stake.Validator;
      reader.readMessage(value,proto.penumbra.stake.Validator.deserializeBinaryFromReader);
      msg.setValidator(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setAuthSig(value);
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
proto.penumbra.stake.ValidatorDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.ValidatorDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.ValidatorDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.ValidatorDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getValidator();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.stake.Validator.serializeBinaryToWriter
    );
  }
  f = message.getAuthSig_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
};


/**
 * optional Validator validator = 1;
 * @return {?proto.penumbra.stake.Validator}
 */
proto.penumbra.stake.ValidatorDefinition.prototype.getValidator = function() {
  return /** @type{?proto.penumbra.stake.Validator} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.stake.Validator, 1));
};


/**
 * @param {?proto.penumbra.stake.Validator|undefined} value
 * @return {!proto.penumbra.stake.ValidatorDefinition} returns this
*/
proto.penumbra.stake.ValidatorDefinition.prototype.setValidator = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.stake.ValidatorDefinition} returns this
 */
proto.penumbra.stake.ValidatorDefinition.prototype.clearValidator = function() {
  return this.setValidator(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.stake.ValidatorDefinition.prototype.hasValidator = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes auth_sig = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.stake.ValidatorDefinition.prototype.getAuthSig = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes auth_sig = 2;
 * This is a type-conversion wrapper around `getAuthSig()`
 * @return {string}
 */
proto.penumbra.stake.ValidatorDefinition.prototype.getAuthSig_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getAuthSig()));
};


/**
 * optional bytes auth_sig = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getAuthSig()`
 * @return {!Uint8Array}
 */
proto.penumbra.stake.ValidatorDefinition.prototype.getAuthSig_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getAuthSig()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.stake.ValidatorDefinition} returns this
 */
proto.penumbra.stake.ValidatorDefinition.prototype.setAuthSig = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


