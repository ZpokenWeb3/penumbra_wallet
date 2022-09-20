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

goog.provide('proto.penumbra.stake.DelegationChanges');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.stake.Delegate');
goog.require('proto.penumbra.stake.Undelegate');

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
proto.penumbra.stake.DelegationChanges = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.stake.DelegationChanges.repeatedFields_, null);
};
goog.inherits(proto.penumbra.stake.DelegationChanges, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.DelegationChanges.displayName = 'proto.penumbra.stake.DelegationChanges';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.stake.DelegationChanges.repeatedFields_ = [1,2];



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
proto.penumbra.stake.DelegationChanges.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.DelegationChanges.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.DelegationChanges} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.DelegationChanges.toObject = function(includeInstance, msg) {
  var f, obj = {
    delegationsList: jspb.Message.toObjectList(msg.getDelegationsList(),
    proto.penumbra.stake.Delegate.toObject, includeInstance),
    undelegationsList: jspb.Message.toObjectList(msg.getUndelegationsList(),
    proto.penumbra.stake.Undelegate.toObject, includeInstance)
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
 * @return {!proto.penumbra.stake.DelegationChanges}
 */
proto.penumbra.stake.DelegationChanges.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.DelegationChanges;
  return proto.penumbra.stake.DelegationChanges.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.DelegationChanges} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.DelegationChanges}
 */
proto.penumbra.stake.DelegationChanges.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.stake.Delegate;
      reader.readMessage(value,proto.penumbra.stake.Delegate.deserializeBinaryFromReader);
      msg.addDelegations(value);
      break;
    case 2:
      var value = new proto.penumbra.stake.Undelegate;
      reader.readMessage(value,proto.penumbra.stake.Undelegate.deserializeBinaryFromReader);
      msg.addUndelegations(value);
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
proto.penumbra.stake.DelegationChanges.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.DelegationChanges.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.DelegationChanges} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.DelegationChanges.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getDelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.stake.Delegate.serializeBinaryToWriter
    );
  }
  f = message.getUndelegationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.penumbra.stake.Undelegate.serializeBinaryToWriter
    );
  }
};


/**
 * repeated Delegate delegations = 1;
 * @return {!Array<!proto.penumbra.stake.Delegate>}
 */
proto.penumbra.stake.DelegationChanges.prototype.getDelegationsList = function() {
  return /** @type{!Array<!proto.penumbra.stake.Delegate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.stake.Delegate, 1));
};


/**
 * @param {!Array<!proto.penumbra.stake.Delegate>} value
 * @return {!proto.penumbra.stake.DelegationChanges} returns this
*/
proto.penumbra.stake.DelegationChanges.prototype.setDelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.stake.Delegate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.stake.Delegate}
 */
proto.penumbra.stake.DelegationChanges.prototype.addDelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.stake.Delegate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.stake.DelegationChanges} returns this
 */
proto.penumbra.stake.DelegationChanges.prototype.clearDelegationsList = function() {
  return this.setDelegationsList([]);
};


/**
 * repeated Undelegate undelegations = 2;
 * @return {!Array<!proto.penumbra.stake.Undelegate>}
 */
proto.penumbra.stake.DelegationChanges.prototype.getUndelegationsList = function() {
  return /** @type{!Array<!proto.penumbra.stake.Undelegate>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.stake.Undelegate, 2));
};


/**
 * @param {!Array<!proto.penumbra.stake.Undelegate>} value
 * @return {!proto.penumbra.stake.DelegationChanges} returns this
*/
proto.penumbra.stake.DelegationChanges.prototype.setUndelegationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.penumbra.stake.Undelegate=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.stake.Undelegate}
 */
proto.penumbra.stake.DelegationChanges.prototype.addUndelegations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.penumbra.stake.Undelegate, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.stake.DelegationChanges} returns this
 */
proto.penumbra.stake.DelegationChanges.prototype.clearUndelegationsList = function() {
  return this.setUndelegationsList([]);
};


