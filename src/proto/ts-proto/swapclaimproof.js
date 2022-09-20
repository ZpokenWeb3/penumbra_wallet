// source: transparent_proofs.proto
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

goog.provide('proto.penumbra.transparent_proofs.SwapClaimProof');

goog.require('jspb.BinaryReader');
goog.require('jspb.BinaryWriter');
goog.require('jspb.Message');
goog.require('proto.penumbra.crypto.Address');
goog.require('proto.penumbra.crypto.NoteCommitmentProof');
goog.require('proto.penumbra.dex.TradingPair');

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
proto.penumbra.transparent_proofs.SwapClaimProof = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.penumbra.transparent_proofs.SwapClaimProof, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.penumbra.transparent_proofs.SwapClaimProof.displayName = 'proto.penumbra.transparent_proofs.SwapClaimProof';
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
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.toObject = function(opt_includeInstance) {
  return proto.penumbra.transparent_proofs.SwapClaimProof.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.penumbra.transparent_proofs.SwapClaimProof} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transparent_proofs.SwapClaimProof.toObject = function(includeInstance, msg) {
  var f, obj = {
    swapNftAssetId: msg.getSwapNftAssetId_asB64(),
    claimAddress: (f = msg.getClaimAddress()) && proto.penumbra.crypto.Address.toObject(includeInstance, f),
    noteCommitmentProof: (f = msg.getNoteCommitmentProof()) && proto.penumbra.crypto.NoteCommitmentProof.toObject(includeInstance, f),
    noteBlinding: msg.getNoteBlinding_asB64(),
    nk: msg.getNk_asB64(),
    tradingPair: (f = msg.getTradingPair()) && proto.penumbra.dex.TradingPair.toObject(includeInstance, f),
    delta1: jspb.Message.getFieldWithDefault(msg, 11, 0),
    delta2: jspb.Message.getFieldWithDefault(msg, 12, 0),
    lambda1: jspb.Message.getFieldWithDefault(msg, 20, 0),
    lambda2: jspb.Message.getFieldWithDefault(msg, 21, 0),
    noteBlinding1: msg.getNoteBlinding1_asB64(),
    esk1: msg.getEsk1_asB64(),
    noteBlinding2: msg.getNoteBlinding2_asB64(),
    esk2: msg.getEsk2_asB64()
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
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.penumbra.transparent_proofs.SwapClaimProof;
  return proto.penumbra.transparent_proofs.SwapClaimProof.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.penumbra.transparent_proofs.SwapClaimProof} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setSwapNftAssetId(value);
      break;
    case 2:
      var value = new proto.penumbra.crypto.Address;
      reader.readMessage(value,proto.penumbra.crypto.Address.deserializeBinaryFromReader);
      msg.setClaimAddress(value);
      break;
    case 4:
      var value = new proto.penumbra.crypto.NoteCommitmentProof;
      reader.readMessage(value,proto.penumbra.crypto.NoteCommitmentProof.deserializeBinaryFromReader);
      msg.setNoteCommitmentProof(value);
      break;
    case 5:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNoteBlinding(value);
      break;
    case 6:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNk(value);
      break;
    case 10:
      var value = new proto.penumbra.dex.TradingPair;
      reader.readMessage(value,proto.penumbra.dex.TradingPair.deserializeBinaryFromReader);
      msg.setTradingPair(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta1(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setDelta2(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLambda1(value);
      break;
    case 21:
      var value = /** @type {number} */ (reader.readUint64());
      msg.setLambda2(value);
      break;
    case 30:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNoteBlinding1(value);
      break;
    case 31:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEsk1(value);
      break;
    case 40:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setNoteBlinding2(value);
      break;
    case 41:
      var value = /** @type {!Uint8Array} */ (reader.readBytes());
      msg.setEsk2(value);
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
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.penumbra.transparent_proofs.SwapClaimProof.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.penumbra.transparent_proofs.SwapClaimProof} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.penumbra.transparent_proofs.SwapClaimProof.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSwapNftAssetId_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      1,
      f
    );
  }
  f = message.getClaimAddress();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto.penumbra.crypto.Address.serializeBinaryToWriter
    );
  }
  f = message.getNoteCommitmentProof();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto.penumbra.crypto.NoteCommitmentProof.serializeBinaryToWriter
    );
  }
  f = message.getNoteBlinding_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      5,
      f
    );
  }
  f = message.getNk_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      6,
      f
    );
  }
  f = message.getTradingPair();
  if (f != null) {
    writer.writeMessage(
      10,
      f,
      proto.penumbra.dex.TradingPair.serializeBinaryToWriter
    );
  }
  f = message.getDelta1();
  if (f !== 0) {
    writer.writeUint64(
      11,
      f
    );
  }
  f = message.getDelta2();
  if (f !== 0) {
    writer.writeUint64(
      12,
      f
    );
  }
  f = message.getLambda1();
  if (f !== 0) {
    writer.writeUint64(
      20,
      f
    );
  }
  f = message.getLambda2();
  if (f !== 0) {
    writer.writeUint64(
      21,
      f
    );
  }
  f = message.getNoteBlinding1_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      30,
      f
    );
  }
  f = message.getEsk1_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      31,
      f
    );
  }
  f = message.getNoteBlinding2_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      40,
      f
    );
  }
  f = message.getEsk2_asU8();
  if (f.length > 0) {
    writer.writeBytes(
      41,
      f
    );
  }
};


/**
 * optional bytes swap_nft_asset_id = 1;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getSwapNftAssetId = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * optional bytes swap_nft_asset_id = 1;
 * This is a type-conversion wrapper around `getSwapNftAssetId()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getSwapNftAssetId_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getSwapNftAssetId()));
};


/**
 * optional bytes swap_nft_asset_id = 1;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getSwapNftAssetId()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getSwapNftAssetId_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getSwapNftAssetId()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setSwapNftAssetId = function(value) {
  return jspb.Message.setProto3BytesField(this, 1, value);
};


/**
 * optional penumbra.crypto.Address claim_address = 2;
 * @return {?proto.penumbra.crypto.Address}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getClaimAddress = function() {
  return /** @type{?proto.penumbra.crypto.Address} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.Address, 2));
};


/**
 * @param {?proto.penumbra.crypto.Address|undefined} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
*/
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setClaimAddress = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.clearClaimAddress = function() {
  return this.setClaimAddress(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.hasClaimAddress = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional penumbra.crypto.NoteCommitmentProof note_commitment_proof = 4;
 * @return {?proto.penumbra.crypto.NoteCommitmentProof}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteCommitmentProof = function() {
  return /** @type{?proto.penumbra.crypto.NoteCommitmentProof} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.crypto.NoteCommitmentProof, 4));
};


/**
 * @param {?proto.penumbra.crypto.NoteCommitmentProof|undefined} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
*/
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setNoteCommitmentProof = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.clearNoteCommitmentProof = function() {
  return this.setNoteCommitmentProof(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.hasNoteCommitmentProof = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional bytes note_blinding = 5;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * optional bytes note_blinding = 5;
 * This is a type-conversion wrapper around `getNoteBlinding()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNoteBlinding()));
};


/**
 * optional bytes note_blinding = 5;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNoteBlinding()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNoteBlinding()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setNoteBlinding = function(value) {
  return jspb.Message.setProto3BytesField(this, 5, value);
};


/**
 * optional bytes nk = 6;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNk = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * optional bytes nk = 6;
 * This is a type-conversion wrapper around `getNk()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNk_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNk()));
};


/**
 * optional bytes nk = 6;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNk()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNk_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNk()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setNk = function(value) {
  return jspb.Message.setProto3BytesField(this, 6, value);
};


/**
 * optional penumbra.dex.TradingPair trading_pair = 10;
 * @return {?proto.penumbra.dex.TradingPair}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getTradingPair = function() {
  return /** @type{?proto.penumbra.dex.TradingPair} */ (
    jspb.Message.getWrapperField(this, proto.penumbra.dex.TradingPair, 10));
};


/**
 * @param {?proto.penumbra.dex.TradingPair|undefined} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
*/
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setTradingPair = function(value) {
  return jspb.Message.setWrapperField(this, 10, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.clearTradingPair = function() {
  return this.setTradingPair(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.hasTradingPair = function() {
  return jspb.Message.getField(this, 10) != null;
};


/**
 * optional uint64 delta_1 = 11;
 * @return {number}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getDelta1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setDelta1 = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional uint64 delta_2 = 12;
 * @return {number}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getDelta2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setDelta2 = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional uint64 lambda_1 = 20;
 * @return {number}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getLambda1 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setLambda1 = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


/**
 * optional uint64 lambda_2 = 21;
 * @return {number}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getLambda2 = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 21, 0));
};


/**
 * @param {number} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setLambda2 = function(value) {
  return jspb.Message.setProto3IntField(this, 21, value);
};


/**
 * optional bytes note_blinding_1 = 30;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding1 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 30, ""));
};


/**
 * optional bytes note_blinding_1 = 30;
 * This is a type-conversion wrapper around `getNoteBlinding1()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding1_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNoteBlinding1()));
};


/**
 * optional bytes note_blinding_1 = 30;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNoteBlinding1()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding1_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNoteBlinding1()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setNoteBlinding1 = function(value) {
  return jspb.Message.setProto3BytesField(this, 30, value);
};


/**
 * optional bytes esk_1 = 31;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk1 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 31, ""));
};


/**
 * optional bytes esk_1 = 31;
 * This is a type-conversion wrapper around `getEsk1()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk1_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEsk1()));
};


/**
 * optional bytes esk_1 = 31;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEsk1()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk1_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEsk1()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setEsk1 = function(value) {
  return jspb.Message.setProto3BytesField(this, 31, value);
};


/**
 * optional bytes note_blinding_2 = 40;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding2 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 40, ""));
};


/**
 * optional bytes note_blinding_2 = 40;
 * This is a type-conversion wrapper around `getNoteBlinding2()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding2_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getNoteBlinding2()));
};


/**
 * optional bytes note_blinding_2 = 40;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getNoteBlinding2()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getNoteBlinding2_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getNoteBlinding2()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setNoteBlinding2 = function(value) {
  return jspb.Message.setProto3BytesField(this, 40, value);
};


/**
 * optional bytes esk_2 = 41;
 * @return {!(string|Uint8Array)}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk2 = function() {
  return /** @type {!(string|Uint8Array)} */ (jspb.Message.getFieldWithDefault(this, 41, ""));
};


/**
 * optional bytes esk_2 = 41;
 * This is a type-conversion wrapper around `getEsk2()`
 * @return {string}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk2_asB64 = function() {
  return /** @type {string} */ (jspb.Message.bytesAsB64(
      this.getEsk2()));
};


/**
 * optional bytes esk_2 = 41;
 * Note that Uint8Array is not supported on all browsers.
 * @see http://caniuse.com/Uint8Array
 * This is a type-conversion wrapper around `getEsk2()`
 * @return {!Uint8Array}
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.getEsk2_asU8 = function() {
  return /** @type {!Uint8Array} */ (jspb.Message.bytesAsU8(
      this.getEsk2()));
};


/**
 * @param {!(string|Uint8Array)} value
 * @return {!proto.penumbra.transparent_proofs.SwapClaimProof} returns this
 */
proto.penumbra.transparent_proofs.SwapClaimProof.prototype.setEsk2 = function(value) {
  return jspb.Message.setProto3BytesField(this, 41, value);
};


