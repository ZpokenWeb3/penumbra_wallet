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

goog.provide('proto.penumbra.stake.Validator');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.GovernanceKey');
goog.require('proto.penumbra.crypto.IdentityKey');
goog.require('proto.penumbra.stake.FundingStream');

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
proto.penumbra.stake.Validator = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.penumbra.stake.Validator.repeatedFields_, null);
};
goog.inherits(proto.penumbra.stake.Validator, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.stake.Validator.displayName = 'proto.penumbra.stake.Validator';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.penumbra.stake.Validator.repeatedFields_ = [6];



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
proto.penumbra.stake.Validator.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.stake.Validator.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.stake.Validator} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.Validator.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityKey: (f = msg.getIdentityKey()) && proto.penumbra.crypto.IdentityKey.toObject(includeInstance, f),
    consensusKey: msg.getConsensusKey_asB64(),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    website: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    enabled: jspb.Message.getBooleanFieldWithDefault(msg, 8, false),
    fundingStreamsList: jspb.Message.toObjectList(msg.getFundingStreamsList(),
    proto.penumbra.stake.FundingStream.toObject, includeInstance),
    sequenceNumber: jspb.Message.getFieldWithDefault(msg, 7, 0),
    governanceKey: (f = msg.getGovernanceKey()) && proto.penumbra.crypto.GovernanceKey.toObject(includeInstance, f)
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
 * @return {!proto.penumbra.stake.Validator}
 */
proto.penumbra.stake.Validator.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.stake.Validator;
  return proto.penumbra.stake.Validator.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.stake.Validator} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.stake.Validator}
 */
proto.penumbra.stake.Validator.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto.penumbra.crypto.IdentityKey;
      reader.readMessage(value,proto.penumbra.crypto.IdentityKey.deserializeBinaryFromReader);
      msg.setIdentityKey(value);
      break;
    case 2:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setConsensusKey(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWebsite(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 8:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setEnabled(value);
      break;
    case 6:
      var value = new proto.penumbra.stake.FundingStream;
      reader.readMessage(value,proto.penumbra.stake.FundingStream.deserializeBinaryFromReader);
      msg.addFundingStreams(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readUint32());
      msg.setSequenceNumber(value);
      break;
    case 9:
      var value = new proto.penumbra.crypto.GovernanceKey;
      reader.readMessage(value,proto.penumbra.crypto.GovernanceKey.deserializeBinaryFromReader);
      msg.setGovernanceKey(value);
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
proto.penumbra.stake.Validator.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.stake.Validator.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.stake.Validator} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.stake.Validator.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityKey();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto.penumbra.crypto.IdentityKey.serializeBinaryToWriter
    );
  }
  f = message.getConsensusKey_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWebsite();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getEnabled();
  if (f) {
    writer.writeBool(
      8,
      f
    );
  }
  f = message.getFundingStreamsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.penumbra.stake.FundingStream.serializeBinaryToWriter
    );
  }
  f = message.getSequenceNumber();
  if (f !== 0) {
    writer.writeUint32(
      7,
      f
    );
  }
  f = message.getGovernanceKey();
  if (f != null) {
    writer.writeMessage(
      9,
      f,
      proto.penumbra.crypto.GovernanceKey.serializeBinaryToWriter
    );
  }
};


/**
 * optional penumbra.crypto.IdentityKey identity_key = 1;
 * @return {?proto.penumbra.crypto.IdentityKey}
 */
proto.penumbra.stake.Validator.prototype.getIdentityKey = function() {
  return /** @type{?proto.penumbra.crypto.IdentityKey} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.IdentityKey, 1));
};


/**
 * @param {?proto.penumbra.crypto.IdentityKey|undefined} value
 * @return {!proto.penumbra.stake.Validator} returns this
*/
proto.penumbra.stake.Validator.prototype.setIdentityKey = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.clearIdentityKey = function() {
  return this.setIdentityKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.stake.Validator.prototype.hasIdentityKey = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional bytes consensus_key = 2;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.stake.Validator.prototype.getConsensusKey = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * optional bytes consensus_key = 2;
 * This is a type-conversion wrapper around `getConsensusKey()`
 * @return {string}
 */
proto.penumbra.stake.Validator.prototype.getConsensusKey_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getConsensusKey()));
};


/**
 * optional bytes consensus_key = 2;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getConsensusKey()`
 * @return {!Uint8Array}
 */
proto.penumbra.stake.Validator.prototype.getConsensusKey_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getConsensusKey()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setConsensusKey = function(value) {
  return jspb.Message.setProto3BytesField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.penumbra.stake.Validator.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string website = 4;
 * @return {string}
 */
proto.penumbra.stake.Validator.prototype.getWebsite = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setWebsite = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.penumbra.stake.Validator.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional bool enabled = 8;
 * @return {boolean}
 */
proto.penumbra.stake.Validator.prototype.getEnabled = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 8, false));
};


/**
 * @param {boolean} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setEnabled = function(value) {
  return jspb.Message.setProto3BooleanField(this, 8, value);
};


/**
 * repeated FundingStream funding_streams = 6;
 * @return {!Array<!proto.penumbra.stake.FundingStream>}
 */
proto.penumbra.stake.Validator.prototype.getFundingStreamsList = function() {
  return /** @type{!Array<!proto.penumbra.stake.FundingStream>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.penumbra.stake.FundingStream, 6));
};


/**
 * @param {!Array<!proto.penumbra.stake.FundingStream>} value
 * @return {!proto.penumbra.stake.Validator} returns this
*/
proto.penumbra.stake.Validator.prototype.setFundingStreamsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.penumbra.stake.FundingStream=} opt_value
 * @param {number=} opt_index
 * @return {!proto.penumbra.stake.FundingStream}
 */
proto.penumbra.stake.Validator.prototype.addFundingStreams = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.penumbra.stake.FundingStream, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.clearFundingStreamsList = function() {
  return this.setFundingStreamsList([]);
};


/**
 * optional uint32 sequence_number = 7;
 * @return {number}
 */
proto.penumbra.stake.Validator.prototype.getSequenceNumber = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.setSequenceNumber = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional penumbra.crypto.GovernanceKey governance_key = 9;
 * @return {?proto.penumbra.crypto.GovernanceKey}
 */
proto.penumbra.stake.Validator.prototype.getGovernanceKey = function() {
  return /** @type{?proto.penumbra.crypto.GovernanceKey} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.GovernanceKey, 9));
};


/**
 * @param {?proto.penumbra.crypto.GovernanceKey|undefined} value
 * @return {!proto.penumbra.stake.Validator} returns this
*/
proto.penumbra.stake.Validator.prototype.setGovernanceKey = function(value) {
  return jspb.Message.setWrapperField(this, 9, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.stake.Validator} returns this
 */
proto.penumbra.stake.Validator.prototype.clearGovernanceKey = function() {
  return this.setGovernanceKey(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.stake.Validator.prototype.hasGovernanceKey = function() {
  return jspb.Message.getField(this, 9) != null;
};


