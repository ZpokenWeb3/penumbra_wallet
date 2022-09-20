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

goog.provide('proto.penumbra.dex.ClaimedSwapList');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.dex.ClaimedSwap');

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
proto.penumbra.dex.ClaimedSwapList = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.dex.ClaimedSwapList.repeatedFields_, null);
};
goog.inherits(proto.penumbra.dex.ClaimedSwapList, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.dex.ClaimedSwapList.displayName = 'proto.penumbra.dex.ClaimedSwapList';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.dex.ClaimedSwapList.repeatedFields_ = [1];



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
proto.penumbra.dex.ClaimedSwapList.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.dex.ClaimedSwapList.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.dex.ClaimedSwapList} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.ClaimedSwapList.toObject = function(includeInstance, msg) {
  var f, obj = {
    claimsList: jspb.Message.toObjectList(msg.getClaimsList(),
    proto.penumbra.dex.ClaimedSwap.toObject, includeInstance)
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
 * @return {!proto.penumbra.dex.ClaimedSwapList}
 */
proto.penumbra.dex.ClaimedSwapList.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.dex.ClaimedSwapList;
  return proto.penumbra.dex.ClaimedSwapList.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.dex.ClaimedSwapList} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.dex.ClaimedSwapList}
 */
proto.penumbra.dex.ClaimedSwapList.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.dex.ClaimedSwap;
      reader.readMessage(value,proto.penumbra.dex.ClaimedSwap.deserializeBinaryFromReader);
      msg.addClaims(value);
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
proto.penumbra.dex.ClaimedSwapList.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.dex.ClaimedSwapList.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.dex.ClaimedSwapList} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.dex.ClaimedSwapList.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClaimsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      1,
      f,
      proto.penumbra.dex.ClaimedSwap.serializeBinaryToWriter
    );
  }
};


/**
 * repeated ClaimedSwap claims = 1;
 * @return {!Array<!proto.penumbra.dex.ClaimedSwap>}
 */
proto.penumbra.dex.ClaimedSwapList.prototype.getClaimsList = function() {
  return /** @type{!Array<!proto.penumbra.dex.ClaimedSwap>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.dex.ClaimedSwap, 1));
};


/**
 * @param {!Array<!proto.penumbra.dex.ClaimedSwap>} value
 * @return {!proto.penumbra.dex.ClaimedSwapList} returns this
*/
proto.penumbra.dex.ClaimedSwapList.prototype.setClaimsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 1, value);
};


/**
 * @param {!proto.penumbra.dex.ClaimedSwap=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.dex.ClaimedSwap}
 */
proto.penumbra.dex.ClaimedSwapList.prototype.addClaims = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 1, opt_value, proto.penumbra.dex.ClaimedSwap, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.dex.ClaimedSwapList} returns this
 */
proto.penumbra.dex.ClaimedSwapList.prototype.clearClaimsList = function() {
  return this.setClaimsList([]);
};


