import * as jspb from 'google-protobuf'



export class Fee extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): Fee;

  getAssetId(): AssetId | undefined;
  setAssetId(value?: AssetId): Fee;
  hasAssetId(): boolean;
  clearAssetId(): Fee;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Fee.AsObject;
  static toObject(includeInstance: boolean, msg: Fee): Fee.AsObject;
  static serializeBinaryToWriter(message: Fee, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Fee;
  static deserializeBinaryFromReader(message: Fee, reader: jspb.BinaryReader): Fee;
}

export namespace Fee {
  export type AsObject = {
    amount: number,
    assetId?: AssetId.AsObject,
  }
}

export class Address extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): Address;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Address.AsObject;
  static toObject(includeInstance: boolean, msg: Address): Address.AsObject;
  static serializeBinaryToWriter(message: Address, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Address;
  static deserializeBinaryFromReader(message: Address, reader: jspb.BinaryReader): Address;
}

export namespace Address {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class SpendKey extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): SpendKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendKey.AsObject;
  static toObject(includeInstance: boolean, msg: SpendKey): SpendKey.AsObject;
  static serializeBinaryToWriter(message: SpendKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendKey;
  static deserializeBinaryFromReader(message: SpendKey, reader: jspb.BinaryReader): SpendKey;
}

export namespace SpendKey {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class SpendVerificationKey extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): SpendVerificationKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendVerificationKey.AsObject;
  static toObject(includeInstance: boolean, msg: SpendVerificationKey): SpendVerificationKey.AsObject;
  static serializeBinaryToWriter(message: SpendVerificationKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendVerificationKey;
  static deserializeBinaryFromReader(message: SpendVerificationKey, reader: jspb.BinaryReader): SpendVerificationKey;
}

export namespace SpendVerificationKey {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class FullViewingKey extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): FullViewingKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FullViewingKey.AsObject;
  static toObject(includeInstance: boolean, msg: FullViewingKey): FullViewingKey.AsObject;
  static serializeBinaryToWriter(message: FullViewingKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FullViewingKey;
  static deserializeBinaryFromReader(message: FullViewingKey, reader: jspb.BinaryReader): FullViewingKey;
}

export namespace FullViewingKey {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class AccountID extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): AccountID;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AccountID.AsObject;
  static toObject(includeInstance: boolean, msg: AccountID): AccountID.AsObject;
  static serializeBinaryToWriter(message: AccountID, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AccountID;
  static deserializeBinaryFromReader(message: AccountID, reader: jspb.BinaryReader): AccountID;
}

export namespace AccountID {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class Diversifier extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): Diversifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Diversifier.AsObject;
  static toObject(includeInstance: boolean, msg: Diversifier): Diversifier.AsObject;
  static serializeBinaryToWriter(message: Diversifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Diversifier;
  static deserializeBinaryFromReader(message: Diversifier, reader: jspb.BinaryReader): Diversifier;
}

export namespace Diversifier {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class AddressIndex extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): AddressIndex;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddressIndex.AsObject;
  static toObject(includeInstance: boolean, msg: AddressIndex): AddressIndex.AsObject;
  static serializeBinaryToWriter(message: AddressIndex, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddressIndex;
  static deserializeBinaryFromReader(message: AddressIndex, reader: jspb.BinaryReader): AddressIndex;
}

export namespace AddressIndex {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class NoteCommitment extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): NoteCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: NoteCommitment): NoteCommitment.AsObject;
  static serializeBinaryToWriter(message: NoteCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteCommitment;
  static deserializeBinaryFromReader(message: NoteCommitment, reader: jspb.BinaryReader): NoteCommitment;
}

export namespace NoteCommitment {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class ValueCommitment extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): ValueCommitment;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValueCommitment.AsObject;
  static toObject(includeInstance: boolean, msg: ValueCommitment): ValueCommitment.AsObject;
  static serializeBinaryToWriter(message: ValueCommitment, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValueCommitment;
  static deserializeBinaryFromReader(message: ValueCommitment, reader: jspb.BinaryReader): ValueCommitment;
}

export namespace ValueCommitment {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class AssetId extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): AssetId;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AssetId.AsObject;
  static toObject(includeInstance: boolean, msg: AssetId): AssetId.AsObject;
  static serializeBinaryToWriter(message: AssetId, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AssetId;
  static deserializeBinaryFromReader(message: AssetId, reader: jspb.BinaryReader): AssetId;
}

export namespace AssetId {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class Denom extends jspb.Message {
  getDenom(): string;
  setDenom(value: string): Denom;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Denom.AsObject;
  static toObject(includeInstance: boolean, msg: Denom): Denom.AsObject;
  static serializeBinaryToWriter(message: Denom, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Denom;
  static deserializeBinaryFromReader(message: Denom, reader: jspb.BinaryReader): Denom;
}

export namespace Denom {
  export type AsObject = {
    denom: string,
  }
}

export class Value extends jspb.Message {
  getAmount(): number;
  setAmount(value: number): Value;

  getAssetId(): AssetId | undefined;
  setAssetId(value?: AssetId): Value;
  hasAssetId(): boolean;
  clearAssetId(): Value;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Value.AsObject;
  static toObject(includeInstance: boolean, msg: Value): Value.AsObject;
  static serializeBinaryToWriter(message: Value, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Value;
  static deserializeBinaryFromReader(message: Value, reader: jspb.BinaryReader): Value;
}

export namespace Value {
  export type AsObject = {
    amount: number,
    assetId?: AssetId.AsObject,
  }
}

export class MerkleRoot extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): MerkleRoot;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerkleRoot.AsObject;
  static toObject(includeInstance: boolean, msg: MerkleRoot): MerkleRoot.AsObject;
  static serializeBinaryToWriter(message: MerkleRoot, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerkleRoot;
  static deserializeBinaryFromReader(message: MerkleRoot, reader: jspb.BinaryReader): MerkleRoot;
}

export namespace MerkleRoot {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class Asset extends jspb.Message {
  getId(): AssetId | undefined;
  setId(value?: AssetId): Asset;
  hasId(): boolean;
  clearId(): Asset;

  getDenom(): Denom | undefined;
  setDenom(value?: Denom): Asset;
  hasDenom(): boolean;
  clearDenom(): Asset;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Asset.AsObject;
  static toObject(includeInstance: boolean, msg: Asset): Asset.AsObject;
  static serializeBinaryToWriter(message: Asset, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Asset;
  static deserializeBinaryFromReader(message: Asset, reader: jspb.BinaryReader): Asset;
}

export namespace Asset {
  export type AsObject = {
    id?: AssetId.AsObject,
    denom?: Denom.AsObject,
  }
}

export class IdentityKey extends jspb.Message {
  getIk(): Uint8Array | string;
  getIk_asU8(): Uint8Array;
  getIk_asB64(): string;
  setIk(value: Uint8Array | string): IdentityKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): IdentityKey.AsObject;
  static toObject(includeInstance: boolean, msg: IdentityKey): IdentityKey.AsObject;
  static serializeBinaryToWriter(message: IdentityKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): IdentityKey;
  static deserializeBinaryFromReader(message: IdentityKey, reader: jspb.BinaryReader): IdentityKey;
}

export namespace IdentityKey {
  export type AsObject = {
    ik: Uint8Array | string,
  }
}

export class GovernanceKey extends jspb.Message {
  getGk(): Uint8Array | string;
  getGk_asU8(): Uint8Array;
  getGk_asB64(): string;
  setGk(value: Uint8Array | string): GovernanceKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GovernanceKey.AsObject;
  static toObject(includeInstance: boolean, msg: GovernanceKey): GovernanceKey.AsObject;
  static serializeBinaryToWriter(message: GovernanceKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GovernanceKey;
  static deserializeBinaryFromReader(message: GovernanceKey, reader: jspb.BinaryReader): GovernanceKey;
}

export namespace GovernanceKey {
  export type AsObject = {
    gk: Uint8Array | string,
  }
}

export class ConsensusKey extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): ConsensusKey;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ConsensusKey.AsObject;
  static toObject(includeInstance: boolean, msg: ConsensusKey): ConsensusKey.AsObject;
  static serializeBinaryToWriter(message: ConsensusKey, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ConsensusKey;
  static deserializeBinaryFromReader(message: ConsensusKey, reader: jspb.BinaryReader): ConsensusKey;
}

export namespace ConsensusKey {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class Note extends jspb.Message {
  getValue(): Value | undefined;
  setValue(value?: Value): Note;
  hasValue(): boolean;
  clearValue(): Note;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): Note;

  getAddress(): Address | undefined;
  setAddress(value?: Address): Note;
  hasAddress(): boolean;
  clearAddress(): Note;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Note.AsObject;
  static toObject(includeInstance: boolean, msg: Note): Note.AsObject;
  static serializeBinaryToWriter(message: Note, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Note;
  static deserializeBinaryFromReader(message: Note, reader: jspb.BinaryReader): Note;
}

export namespace Note {
  export type AsObject = {
    value?: Value.AsObject,
    noteBlinding: Uint8Array | string,
    address?: Address.AsObject,
  }
}

export class Nullifier extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): Nullifier;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Nullifier.AsObject;
  static toObject(includeInstance: boolean, msg: Nullifier): Nullifier.AsObject;
  static serializeBinaryToWriter(message: Nullifier, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Nullifier;
  static deserializeBinaryFromReader(message: Nullifier, reader: jspb.BinaryReader): Nullifier;
}

export namespace Nullifier {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class SpendAuthSignature extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): SpendAuthSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendAuthSignature.AsObject;
  static toObject(includeInstance: boolean, msg: SpendAuthSignature): SpendAuthSignature.AsObject;
  static serializeBinaryToWriter(message: SpendAuthSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendAuthSignature;
  static deserializeBinaryFromReader(message: SpendAuthSignature, reader: jspb.BinaryReader): SpendAuthSignature;
}

export namespace SpendAuthSignature {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class BindingSignature extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): BindingSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BindingSignature.AsObject;
  static toObject(includeInstance: boolean, msg: BindingSignature): BindingSignature.AsObject;
  static serializeBinaryToWriter(message: BindingSignature, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BindingSignature;
  static deserializeBinaryFromReader(message: BindingSignature, reader: jspb.BinaryReader): BindingSignature;
}

export namespace BindingSignature {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class NotePayload extends jspb.Message {
  getNoteCommitment(): NoteCommitment | undefined;
  setNoteCommitment(value?: NoteCommitment): NotePayload;
  hasNoteCommitment(): boolean;
  clearNoteCommitment(): NotePayload;

  getEphemeralKey(): Uint8Array | string;
  getEphemeralKey_asU8(): Uint8Array;
  getEphemeralKey_asB64(): string;
  setEphemeralKey(value: Uint8Array | string): NotePayload;

  getEncryptedNote(): Uint8Array | string;
  getEncryptedNote_asU8(): Uint8Array;
  getEncryptedNote_asB64(): string;
  setEncryptedNote(value: Uint8Array | string): NotePayload;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NotePayload.AsObject;
  static toObject(includeInstance: boolean, msg: NotePayload): NotePayload.AsObject;
  static serializeBinaryToWriter(message: NotePayload, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NotePayload;
  static deserializeBinaryFromReader(message: NotePayload, reader: jspb.BinaryReader): NotePayload;
}

export namespace NotePayload {
  export type AsObject = {
    noteCommitment?: NoteCommitment.AsObject,
    ephemeralKey: Uint8Array | string,
    encryptedNote: Uint8Array | string,
  }
}

export class NoteCommitmentProof extends jspb.Message {
  getNoteCommitment(): NoteCommitment | undefined;
  setNoteCommitment(value?: NoteCommitment): NoteCommitmentProof;
  hasNoteCommitment(): boolean;
  clearNoteCommitment(): NoteCommitmentProof;

  getPosition(): number;
  setPosition(value: number): NoteCommitmentProof;

  getAuthPathList(): Array<MerklePathChunk>;
  setAuthPathList(value: Array<MerklePathChunk>): NoteCommitmentProof;
  clearAuthPathList(): NoteCommitmentProof;
  addAuthPath(value?: MerklePathChunk, index?: number): MerklePathChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): NoteCommitmentProof.AsObject;
  static toObject(includeInstance: boolean, msg: NoteCommitmentProof): NoteCommitmentProof.AsObject;
  static serializeBinaryToWriter(message: NoteCommitmentProof, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): NoteCommitmentProof;
  static deserializeBinaryFromReader(message: NoteCommitmentProof, reader: jspb.BinaryReader): NoteCommitmentProof;
}

export namespace NoteCommitmentProof {
  export type AsObject = {
    noteCommitment?: NoteCommitment.AsObject,
    position: number,
    authPathList: Array<MerklePathChunk.AsObject>,
  }
}

export class MerklePathChunk extends jspb.Message {
  getSibling1(): Uint8Array | string;
  getSibling1_asU8(): Uint8Array;
  getSibling1_asB64(): string;
  setSibling1(value: Uint8Array | string): MerklePathChunk;

  getSibling2(): Uint8Array | string;
  getSibling2_asU8(): Uint8Array;
  getSibling2_asB64(): string;
  setSibling2(value: Uint8Array | string): MerklePathChunk;

  getSibling3(): Uint8Array | string;
  getSibling3_asU8(): Uint8Array;
  getSibling3_asB64(): string;
  setSibling3(value: Uint8Array | string): MerklePathChunk;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MerklePathChunk.AsObject;
  static toObject(includeInstance: boolean, msg: MerklePathChunk): MerklePathChunk.AsObject;
  static serializeBinaryToWriter(message: MerklePathChunk, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MerklePathChunk;
  static deserializeBinaryFromReader(message: MerklePathChunk, reader: jspb.BinaryReader): MerklePathChunk;
}

export namespace MerklePathChunk {
  export type AsObject = {
    sibling1: Uint8Array | string,
    sibling2: Uint8Array | string,
    sibling3: Uint8Array | string,
  }
}

export class Clue extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): Clue;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Clue.AsObject;
  static toObject(includeInstance: boolean, msg: Clue): Clue.AsObject;
  static serializeBinaryToWriter(message: Clue, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Clue;
  static deserializeBinaryFromReader(message: Clue, reader: jspb.BinaryReader): Clue;
}

export namespace Clue {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

