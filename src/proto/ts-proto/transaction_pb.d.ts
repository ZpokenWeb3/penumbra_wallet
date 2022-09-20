import * as jspb from 'google-protobuf'

import * as crypto_pb from './crypto_pb';
import * as stake_pb from './stake_pb';
import * as ibc_pb from './ibc_pb';
import * as dex_pb from './dex_pb';
import * as governance_pb from './governance_pb';


export class AuthHash extends jspb.Message {
  getInner(): Uint8Array | string;
  getInner_asU8(): Uint8Array;
  getInner_asB64(): string;
  setInner(value: Uint8Array | string): AuthHash;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthHash.AsObject;
  static toObject(includeInstance: boolean, msg: AuthHash): AuthHash.AsObject;
  static serializeBinaryToWriter(message: AuthHash, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthHash;
  static deserializeBinaryFromReader(message: AuthHash, reader: jspb.BinaryReader): AuthHash;
}

export namespace AuthHash {
  export type AsObject = {
    inner: Uint8Array | string,
  }
}

export class Transaction extends jspb.Message {
  getBody(): TransactionBody | undefined;
  setBody(value?: TransactionBody): Transaction;
  hasBody(): boolean;
  clearBody(): Transaction;

  getBindingSig(): Uint8Array | string;
  getBindingSig_asU8(): Uint8Array;
  getBindingSig_asB64(): string;
  setBindingSig(value: Uint8Array | string): Transaction;

  getAnchor(): crypto_pb.MerkleRoot | undefined;
  setAnchor(value?: crypto_pb.MerkleRoot): Transaction;
  hasAnchor(): boolean;
  clearAnchor(): Transaction;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Transaction.AsObject;
  static toObject(includeInstance: boolean, msg: Transaction): Transaction.AsObject;
  static serializeBinaryToWriter(message: Transaction, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Transaction;
  static deserializeBinaryFromReader(message: Transaction, reader: jspb.BinaryReader): Transaction;
}

export namespace Transaction {
  export type AsObject = {
    body?: TransactionBody.AsObject,
    bindingSig: Uint8Array | string,
    anchor?: crypto_pb.MerkleRoot.AsObject,
  }
}

export class TransactionBody extends jspb.Message {
  getActionsList(): Array<Action>;
  setActionsList(value: Array<Action>): TransactionBody;
  clearActionsList(): TransactionBody;
  addActions(value?: Action, index?: number): Action;

  getExpiryHeight(): number;
  setExpiryHeight(value: number): TransactionBody;

  getChainId(): string;
  setChainId(value: string): TransactionBody;

  getFee(): crypto_pb.Fee | undefined;
  setFee(value?: crypto_pb.Fee): TransactionBody;
  hasFee(): boolean;
  clearFee(): TransactionBody;

  getFmdCluesList(): Array<crypto_pb.Clue>;
  setFmdCluesList(value: Array<crypto_pb.Clue>): TransactionBody;
  clearFmdCluesList(): TransactionBody;
  addFmdClues(value?: crypto_pb.Clue, index?: number): crypto_pb.Clue;

  getEncryptedMemo(): Uint8Array | string;
  getEncryptedMemo_asU8(): Uint8Array;
  getEncryptedMemo_asB64(): string;
  setEncryptedMemo(value: Uint8Array | string): TransactionBody;
  hasEncryptedMemo(): boolean;
  clearEncryptedMemo(): TransactionBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionBody.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionBody): TransactionBody.AsObject;
  static serializeBinaryToWriter(message: TransactionBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionBody;
  static deserializeBinaryFromReader(message: TransactionBody, reader: jspb.BinaryReader): TransactionBody;
}

export namespace TransactionBody {
  export type AsObject = {
    actionsList: Array<Action.AsObject>,
    expiryHeight: number,
    chainId: string,
    fee?: crypto_pb.Fee.AsObject,
    fmdCluesList: Array<crypto_pb.Clue.AsObject>,
    encryptedMemo?: Uint8Array | string,
  }

  export enum EncryptedMemoCase { 
    _ENCRYPTED_MEMO_NOT_SET = 0,
    ENCRYPTED_MEMO = 6,
  }
}

export class Action extends jspb.Message {
  getSpend(): Spend | undefined;
  setSpend(value?: Spend): Action;
  hasSpend(): boolean;
  clearSpend(): Action;

  getOutput(): Output | undefined;
  setOutput(value?: Output): Action;
  hasOutput(): boolean;
  clearOutput(): Action;

  getDelegate(): stake_pb.Delegate | undefined;
  setDelegate(value?: stake_pb.Delegate): Action;
  hasDelegate(): boolean;
  clearDelegate(): Action;

  getUndelegate(): stake_pb.Undelegate | undefined;
  setUndelegate(value?: stake_pb.Undelegate): Action;
  hasUndelegate(): boolean;
  clearUndelegate(): Action;

  getSwap(): dex_pb.Swap | undefined;
  setSwap(value?: dex_pb.Swap): Action;
  hasSwap(): boolean;
  clearSwap(): Action;

  getSwapClaim(): dex_pb.SwapClaim | undefined;
  setSwapClaim(value?: dex_pb.SwapClaim): Action;
  hasSwapClaim(): boolean;
  clearSwapClaim(): Action;

  getValidatorDefinition(): stake_pb.ValidatorDefinition | undefined;
  setValidatorDefinition(value?: stake_pb.ValidatorDefinition): Action;
  hasValidatorDefinition(): boolean;
  clearValidatorDefinition(): Action;

  getIbcAction(): ibc_pb.IBCAction | undefined;
  setIbcAction(value?: ibc_pb.IBCAction): Action;
  hasIbcAction(): boolean;
  clearIbcAction(): Action;

  getProposalSubmit(): ProposalSubmit | undefined;
  setProposalSubmit(value?: ProposalSubmit): Action;
  hasProposalSubmit(): boolean;
  clearProposalSubmit(): Action;

  getProposalWithdraw(): ProposalWithdraw | undefined;
  setProposalWithdraw(value?: ProposalWithdraw): Action;
  hasProposalWithdraw(): boolean;
  clearProposalWithdraw(): Action;

  getValidatorVote(): ValidatorVote | undefined;
  setValidatorVote(value?: ValidatorVote): Action;
  hasValidatorVote(): boolean;
  clearValidatorVote(): Action;

  getPositionOpen(): dex_pb.PositionOpen | undefined;
  setPositionOpen(value?: dex_pb.PositionOpen): Action;
  hasPositionOpen(): boolean;
  clearPositionOpen(): Action;

  getPositionClose(): dex_pb.PositionClose | undefined;
  setPositionClose(value?: dex_pb.PositionClose): Action;
  hasPositionClose(): boolean;
  clearPositionClose(): Action;

  getPositionWithdraw(): dex_pb.PositionWithdraw | undefined;
  setPositionWithdraw(value?: dex_pb.PositionWithdraw): Action;
  hasPositionWithdraw(): boolean;
  clearPositionWithdraw(): Action;

  getPositionRewardClaim(): dex_pb.PositionRewardClaim | undefined;
  setPositionRewardClaim(value?: dex_pb.PositionRewardClaim): Action;
  hasPositionRewardClaim(): boolean;
  clearPositionRewardClaim(): Action;

  getIcs20Withdrawal(): ibc_pb.ICS20Withdrawal | undefined;
  setIcs20Withdrawal(value?: ibc_pb.ICS20Withdrawal): Action;
  hasIcs20Withdrawal(): boolean;
  clearIcs20Withdrawal(): Action;

  getActionCase(): Action.ActionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Action.AsObject;
  static toObject(includeInstance: boolean, msg: Action): Action.AsObject;
  static serializeBinaryToWriter(message: Action, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Action;
  static deserializeBinaryFromReader(message: Action, reader: jspb.BinaryReader): Action;
}

export namespace Action {
  export type AsObject = {
    spend?: Spend.AsObject,
    output?: Output.AsObject,
    delegate?: stake_pb.Delegate.AsObject,
    undelegate?: stake_pb.Undelegate.AsObject,
    swap?: dex_pb.Swap.AsObject,
    swapClaim?: dex_pb.SwapClaim.AsObject,
    validatorDefinition?: stake_pb.ValidatorDefinition.AsObject,
    ibcAction?: ibc_pb.IBCAction.AsObject,
    proposalSubmit?: ProposalSubmit.AsObject,
    proposalWithdraw?: ProposalWithdraw.AsObject,
    validatorVote?: ValidatorVote.AsObject,
    positionOpen?: dex_pb.PositionOpen.AsObject,
    positionClose?: dex_pb.PositionClose.AsObject,
    positionWithdraw?: dex_pb.PositionWithdraw.AsObject,
    positionRewardClaim?: dex_pb.PositionRewardClaim.AsObject,
    ics20Withdrawal?: ibc_pb.ICS20Withdrawal.AsObject,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    SPEND = 1,
    OUTPUT = 2,
    DELEGATE = 3,
    UNDELEGATE = 4,
    SWAP = 5,
    SWAP_CLAIM = 6,
    VALIDATOR_DEFINITION = 16,
    IBC_ACTION = 17,
    PROPOSAL_SUBMIT = 18,
    PROPOSAL_WITHDRAW = 19,
    VALIDATOR_VOTE = 20,
    POSITION_OPEN = 30,
    POSITION_CLOSE = 31,
    POSITION_WITHDRAW = 32,
    POSITION_REWARD_CLAIM = 34,
    ICS20_WITHDRAWAL = 200,
  }
}

export class Spend extends jspb.Message {
  getBody(): SpendBody | undefined;
  setBody(value?: SpendBody): Spend;
  hasBody(): boolean;
  clearBody(): Spend;

  getAuthSig(): crypto_pb.SpendAuthSignature | undefined;
  setAuthSig(value?: crypto_pb.SpendAuthSignature): Spend;
  hasAuthSig(): boolean;
  clearAuthSig(): Spend;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): Spend;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Spend.AsObject;
  static toObject(includeInstance: boolean, msg: Spend): Spend.AsObject;
  static serializeBinaryToWriter(message: Spend, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Spend;
  static deserializeBinaryFromReader(message: Spend, reader: jspb.BinaryReader): Spend;
}

export namespace Spend {
  export type AsObject = {
    body?: SpendBody.AsObject,
    authSig?: crypto_pb.SpendAuthSignature.AsObject,
    proof: Uint8Array | string,
  }
}

export class SpendBody extends jspb.Message {
  getValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setValueCommitment(value?: crypto_pb.ValueCommitment): SpendBody;
  hasValueCommitment(): boolean;
  clearValueCommitment(): SpendBody;

  getNullifier(): Uint8Array | string;
  getNullifier_asU8(): Uint8Array;
  getNullifier_asB64(): string;
  setNullifier(value: Uint8Array | string): SpendBody;

  getRk(): Uint8Array | string;
  getRk_asU8(): Uint8Array;
  getRk_asB64(): string;
  setRk(value: Uint8Array | string): SpendBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendBody.AsObject;
  static toObject(includeInstance: boolean, msg: SpendBody): SpendBody.AsObject;
  static serializeBinaryToWriter(message: SpendBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendBody;
  static deserializeBinaryFromReader(message: SpendBody, reader: jspb.BinaryReader): SpendBody;
}

export namespace SpendBody {
  export type AsObject = {
    valueCommitment?: crypto_pb.ValueCommitment.AsObject,
    nullifier: Uint8Array | string,
    rk: Uint8Array | string,
  }
}

export class Output extends jspb.Message {
  getBody(): OutputBody | undefined;
  setBody(value?: OutputBody): Output;
  hasBody(): boolean;
  clearBody(): Output;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): Output;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Output.AsObject;
  static toObject(includeInstance: boolean, msg: Output): Output.AsObject;
  static serializeBinaryToWriter(message: Output, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Output;
  static deserializeBinaryFromReader(message: Output, reader: jspb.BinaryReader): Output;
}

export namespace Output {
  export type AsObject = {
    body?: OutputBody.AsObject,
    proof: Uint8Array | string,
  }
}

export class OutputBody extends jspb.Message {
  getNotePayload(): crypto_pb.NotePayload | undefined;
  setNotePayload(value?: crypto_pb.NotePayload): OutputBody;
  hasNotePayload(): boolean;
  clearNotePayload(): OutputBody;

  getValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setValueCommitment(value?: crypto_pb.ValueCommitment): OutputBody;
  hasValueCommitment(): boolean;
  clearValueCommitment(): OutputBody;

  getWrappedMemoKey(): Uint8Array | string;
  getWrappedMemoKey_asU8(): Uint8Array;
  getWrappedMemoKey_asB64(): string;
  setWrappedMemoKey(value: Uint8Array | string): OutputBody;

  getOvkWrappedKey(): Uint8Array | string;
  getOvkWrappedKey_asU8(): Uint8Array;
  getOvkWrappedKey_asB64(): string;
  setOvkWrappedKey(value: Uint8Array | string): OutputBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputBody.AsObject;
  static toObject(includeInstance: boolean, msg: OutputBody): OutputBody.AsObject;
  static serializeBinaryToWriter(message: OutputBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputBody;
  static deserializeBinaryFromReader(message: OutputBody, reader: jspb.BinaryReader): OutputBody;
}

export namespace OutputBody {
  export type AsObject = {
    notePayload?: crypto_pb.NotePayload.AsObject,
    valueCommitment?: crypto_pb.ValueCommitment.AsObject,
    wrappedMemoKey: Uint8Array | string,
    ovkWrappedKey: Uint8Array | string,
  }
}

export class ProposalSubmit extends jspb.Message {
  getProposal(): Proposal | undefined;
  setProposal(value?: Proposal): ProposalSubmit;
  hasProposal(): boolean;
  clearProposal(): ProposalSubmit;

  getDepositRefundAddress(): crypto_pb.Address | undefined;
  setDepositRefundAddress(value?: crypto_pb.Address): ProposalSubmit;
  hasDepositRefundAddress(): boolean;
  clearDepositRefundAddress(): ProposalSubmit;

  getDepositAmount(): number;
  setDepositAmount(value: number): ProposalSubmit;

  getRk(): Uint8Array | string;
  getRk_asU8(): Uint8Array;
  getRk_asB64(): string;
  setRk(value: Uint8Array | string): ProposalSubmit;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalSubmit.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalSubmit): ProposalSubmit.AsObject;
  static serializeBinaryToWriter(message: ProposalSubmit, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalSubmit;
  static deserializeBinaryFromReader(message: ProposalSubmit, reader: jspb.BinaryReader): ProposalSubmit;
}

export namespace ProposalSubmit {
  export type AsObject = {
    proposal?: Proposal.AsObject,
    depositRefundAddress?: crypto_pb.Address.AsObject,
    depositAmount: number,
    rk: Uint8Array | string,
  }
}

export class ProposalWithdraw extends jspb.Message {
  getBody(): ProposalWithdrawBody | undefined;
  setBody(value?: ProposalWithdrawBody): ProposalWithdraw;
  hasBody(): boolean;
  clearBody(): ProposalWithdraw;

  getAuthSig(): crypto_pb.SpendAuthSignature | undefined;
  setAuthSig(value?: crypto_pb.SpendAuthSignature): ProposalWithdraw;
  hasAuthSig(): boolean;
  clearAuthSig(): ProposalWithdraw;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalWithdraw.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalWithdraw): ProposalWithdraw.AsObject;
  static serializeBinaryToWriter(message: ProposalWithdraw, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalWithdraw;
  static deserializeBinaryFromReader(message: ProposalWithdraw, reader: jspb.BinaryReader): ProposalWithdraw;
}

export namespace ProposalWithdraw {
  export type AsObject = {
    body?: ProposalWithdrawBody.AsObject,
    authSig?: crypto_pb.SpendAuthSignature.AsObject,
  }
}

export class ProposalWithdrawBody extends jspb.Message {
  getProposal(): number;
  setProposal(value: number): ProposalWithdrawBody;

  getReason(): string;
  setReason(value: string): ProposalWithdrawBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalWithdrawBody.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalWithdrawBody): ProposalWithdrawBody.AsObject;
  static serializeBinaryToWriter(message: ProposalWithdrawBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalWithdrawBody;
  static deserializeBinaryFromReader(message: ProposalWithdrawBody, reader: jspb.BinaryReader): ProposalWithdrawBody;
}

export namespace ProposalWithdrawBody {
  export type AsObject = {
    proposal: number,
    reason: string,
  }
}

export class ValidatorVote extends jspb.Message {
  getBody(): ValidatorVoteBody | undefined;
  setBody(value?: ValidatorVoteBody): ValidatorVote;
  hasBody(): boolean;
  clearBody(): ValidatorVote;

  getAuthSig(): crypto_pb.SpendAuthSignature | undefined;
  setAuthSig(value?: crypto_pb.SpendAuthSignature): ValidatorVote;
  hasAuthSig(): boolean;
  clearAuthSig(): ValidatorVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorVote.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorVote): ValidatorVote.AsObject;
  static serializeBinaryToWriter(message: ValidatorVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorVote;
  static deserializeBinaryFromReader(message: ValidatorVote, reader: jspb.BinaryReader): ValidatorVote;
}

export namespace ValidatorVote {
  export type AsObject = {
    body?: ValidatorVoteBody.AsObject,
    authSig?: crypto_pb.SpendAuthSignature.AsObject,
  }
}

export class ValidatorVoteBody extends jspb.Message {
  getProposal(): number;
  setProposal(value: number): ValidatorVoteBody;

  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): ValidatorVoteBody;
  hasVote(): boolean;
  clearVote(): ValidatorVoteBody;

  getIdentityKey(): crypto_pb.IdentityKey | undefined;
  setIdentityKey(value?: crypto_pb.IdentityKey): ValidatorVoteBody;
  hasIdentityKey(): boolean;
  clearIdentityKey(): ValidatorVoteBody;

  getGovernanceKey(): crypto_pb.GovernanceKey | undefined;
  setGovernanceKey(value?: crypto_pb.GovernanceKey): ValidatorVoteBody;
  hasGovernanceKey(): boolean;
  clearGovernanceKey(): ValidatorVoteBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ValidatorVoteBody.AsObject;
  static toObject(includeInstance: boolean, msg: ValidatorVoteBody): ValidatorVoteBody.AsObject;
  static serializeBinaryToWriter(message: ValidatorVoteBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ValidatorVoteBody;
  static deserializeBinaryFromReader(message: ValidatorVoteBody, reader: jspb.BinaryReader): ValidatorVoteBody;
}

export namespace ValidatorVoteBody {
  export type AsObject = {
    proposal: number,
    vote?: governance_pb.Vote.AsObject,
    identityKey?: crypto_pb.IdentityKey.AsObject,
    governanceKey?: crypto_pb.GovernanceKey.AsObject,
  }
}

export class DelegatorVote extends jspb.Message {
  getBody(): DelegatorVoteBody | undefined;
  setBody(value?: DelegatorVoteBody): DelegatorVote;
  hasBody(): boolean;
  clearBody(): DelegatorVote;

  getAuthSig(): crypto_pb.SpendAuthSignature | undefined;
  setAuthSig(value?: crypto_pb.SpendAuthSignature): DelegatorVote;
  hasAuthSig(): boolean;
  clearAuthSig(): DelegatorVote;

  getProof(): Uint8Array | string;
  getProof_asU8(): Uint8Array;
  getProof_asB64(): string;
  setProof(value: Uint8Array | string): DelegatorVote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorVote.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorVote): DelegatorVote.AsObject;
  static serializeBinaryToWriter(message: DelegatorVote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorVote;
  static deserializeBinaryFromReader(message: DelegatorVote, reader: jspb.BinaryReader): DelegatorVote;
}

export namespace DelegatorVote {
  export type AsObject = {
    body?: DelegatorVoteBody.AsObject,
    authSig?: crypto_pb.SpendAuthSignature.AsObject,
    proof: Uint8Array | string,
  }
}

export class DelegatorVoteBody extends jspb.Message {
  getProposal(): number;
  setProposal(value: number): DelegatorVoteBody;

  getNullifier(): Uint8Array | string;
  getNullifier_asU8(): Uint8Array;
  getNullifier_asB64(): string;
  setNullifier(value: Uint8Array | string): DelegatorVoteBody;

  getRk(): Uint8Array | string;
  getRk_asU8(): Uint8Array;
  getRk_asB64(): string;
  setRk(value: Uint8Array | string): DelegatorVoteBody;

  getYesValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setYesValueCommitment(value?: crypto_pb.ValueCommitment): DelegatorVoteBody;
  hasYesValueCommitment(): boolean;
  clearYesValueCommitment(): DelegatorVoteBody;

  getNoValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setNoValueCommitment(value?: crypto_pb.ValueCommitment): DelegatorVoteBody;
  hasNoValueCommitment(): boolean;
  clearNoValueCommitment(): DelegatorVoteBody;

  getAbstainValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setAbstainValueCommitment(value?: crypto_pb.ValueCommitment): DelegatorVoteBody;
  hasAbstainValueCommitment(): boolean;
  clearAbstainValueCommitment(): DelegatorVoteBody;

  getNoWithVetoValueCommitment(): crypto_pb.ValueCommitment | undefined;
  setNoWithVetoValueCommitment(value?: crypto_pb.ValueCommitment): DelegatorVoteBody;
  hasNoWithVetoValueCommitment(): boolean;
  clearNoWithVetoValueCommitment(): DelegatorVoteBody;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorVoteBody.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorVoteBody): DelegatorVoteBody.AsObject;
  static serializeBinaryToWriter(message: DelegatorVoteBody, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorVoteBody;
  static deserializeBinaryFromReader(message: DelegatorVoteBody, reader: jspb.BinaryReader): DelegatorVoteBody;
}

export namespace DelegatorVoteBody {
  export type AsObject = {
    proposal: number,
    nullifier: Uint8Array | string,
    rk: Uint8Array | string,
    yesValueCommitment?: crypto_pb.ValueCommitment.AsObject,
    noValueCommitment?: crypto_pb.ValueCommitment.AsObject,
    abstainValueCommitment?: crypto_pb.ValueCommitment.AsObject,
    noWithVetoValueCommitment?: crypto_pb.ValueCommitment.AsObject,
  }
}

export class AuthorizationData extends jspb.Message {
  getAuthHash(): AuthHash | undefined;
  setAuthHash(value?: AuthHash): AuthorizationData;
  hasAuthHash(): boolean;
  clearAuthHash(): AuthorizationData;

  getSpendAuthsList(): Array<crypto_pb.SpendAuthSignature>;
  setSpendAuthsList(value: Array<crypto_pb.SpendAuthSignature>): AuthorizationData;
  clearSpendAuthsList(): AuthorizationData;
  addSpendAuths(value?: crypto_pb.SpendAuthSignature, index?: number): crypto_pb.SpendAuthSignature;

  getWithdrawProposalAuthsList(): Array<crypto_pb.SpendAuthSignature>;
  setWithdrawProposalAuthsList(value: Array<crypto_pb.SpendAuthSignature>): AuthorizationData;
  clearWithdrawProposalAuthsList(): AuthorizationData;
  addWithdrawProposalAuths(value?: crypto_pb.SpendAuthSignature, index?: number): crypto_pb.SpendAuthSignature;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AuthorizationData.AsObject;
  static toObject(includeInstance: boolean, msg: AuthorizationData): AuthorizationData.AsObject;
  static serializeBinaryToWriter(message: AuthorizationData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AuthorizationData;
  static deserializeBinaryFromReader(message: AuthorizationData, reader: jspb.BinaryReader): AuthorizationData;
}

export namespace AuthorizationData {
  export type AsObject = {
    authHash?: AuthHash.AsObject,
    spendAuthsList: Array<crypto_pb.SpendAuthSignature.AsObject>,
    withdrawProposalAuthsList: Array<crypto_pb.SpendAuthSignature.AsObject>,
  }
}

export class WitnessData extends jspb.Message {
  getAnchor(): crypto_pb.MerkleRoot | undefined;
  setAnchor(value?: crypto_pb.MerkleRoot): WitnessData;
  hasAnchor(): boolean;
  clearAnchor(): WitnessData;

  getNoteCommitmentProofsList(): Array<crypto_pb.NoteCommitmentProof>;
  setNoteCommitmentProofsList(value: Array<crypto_pb.NoteCommitmentProof>): WitnessData;
  clearNoteCommitmentProofsList(): WitnessData;
  addNoteCommitmentProofs(value?: crypto_pb.NoteCommitmentProof, index?: number): crypto_pb.NoteCommitmentProof;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): WitnessData.AsObject;
  static toObject(includeInstance: boolean, msg: WitnessData): WitnessData.AsObject;
  static serializeBinaryToWriter(message: WitnessData, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): WitnessData;
  static deserializeBinaryFromReader(message: WitnessData, reader: jspb.BinaryReader): WitnessData;
}

export namespace WitnessData {
  export type AsObject = {
    anchor?: crypto_pb.MerkleRoot.AsObject,
    noteCommitmentProofsList: Array<crypto_pb.NoteCommitmentProof.AsObject>,
  }
}

export class TransactionPlan extends jspb.Message {
  getActionsList(): Array<ActionPlan>;
  setActionsList(value: Array<ActionPlan>): TransactionPlan;
  clearActionsList(): TransactionPlan;
  addActions(value?: ActionPlan, index?: number): ActionPlan;

  getExpiryHeight(): number;
  setExpiryHeight(value: number): TransactionPlan;

  getChainId(): string;
  setChainId(value: string): TransactionPlan;

  getFee(): crypto_pb.Fee | undefined;
  setFee(value?: crypto_pb.Fee): TransactionPlan;
  hasFee(): boolean;
  clearFee(): TransactionPlan;

  getCluePlansList(): Array<CluePlan>;
  setCluePlansList(value: Array<CluePlan>): TransactionPlan;
  clearCluePlansList(): TransactionPlan;
  addCluePlans(value?: CluePlan, index?: number): CluePlan;

  getMemoPlan(): MemoPlan | undefined;
  setMemoPlan(value?: MemoPlan): TransactionPlan;
  hasMemoPlan(): boolean;
  clearMemoPlan(): TransactionPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TransactionPlan.AsObject;
  static toObject(includeInstance: boolean, msg: TransactionPlan): TransactionPlan.AsObject;
  static serializeBinaryToWriter(message: TransactionPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TransactionPlan;
  static deserializeBinaryFromReader(message: TransactionPlan, reader: jspb.BinaryReader): TransactionPlan;
}

export namespace TransactionPlan {
  export type AsObject = {
    actionsList: Array<ActionPlan.AsObject>,
    expiryHeight: number,
    chainId: string,
    fee?: crypto_pb.Fee.AsObject,
    cluePlansList: Array<CluePlan.AsObject>,
    memoPlan?: MemoPlan.AsObject,
  }
}

export class ActionPlan extends jspb.Message {
  getSpend(): SpendPlan | undefined;
  setSpend(value?: SpendPlan): ActionPlan;
  hasSpend(): boolean;
  clearSpend(): ActionPlan;

  getOutput(): OutputPlan | undefined;
  setOutput(value?: OutputPlan): ActionPlan;
  hasOutput(): boolean;
  clearOutput(): ActionPlan;

  getDelegate(): stake_pb.Delegate | undefined;
  setDelegate(value?: stake_pb.Delegate): ActionPlan;
  hasDelegate(): boolean;
  clearDelegate(): ActionPlan;

  getUndelegate(): stake_pb.Undelegate | undefined;
  setUndelegate(value?: stake_pb.Undelegate): ActionPlan;
  hasUndelegate(): boolean;
  clearUndelegate(): ActionPlan;

  getValidatorDefinition(): stake_pb.ValidatorDefinition | undefined;
  setValidatorDefinition(value?: stake_pb.ValidatorDefinition): ActionPlan;
  hasValidatorDefinition(): boolean;
  clearValidatorDefinition(): ActionPlan;

  getIbcAction(): ibc_pb.IBCAction | undefined;
  setIbcAction(value?: ibc_pb.IBCAction): ActionPlan;
  hasIbcAction(): boolean;
  clearIbcAction(): ActionPlan;

  getProposalSubmit(): ProposalSubmit | undefined;
  setProposalSubmit(value?: ProposalSubmit): ActionPlan;
  hasProposalSubmit(): boolean;
  clearProposalSubmit(): ActionPlan;

  getProposalWithdraw(): ProposalWithdrawPlan | undefined;
  setProposalWithdraw(value?: ProposalWithdrawPlan): ActionPlan;
  hasProposalWithdraw(): boolean;
  clearProposalWithdraw(): ActionPlan;

  getValidatorVote(): ValidatorVote | undefined;
  setValidatorVote(value?: ValidatorVote): ActionPlan;
  hasValidatorVote(): boolean;
  clearValidatorVote(): ActionPlan;

  getDelegatorVote(): DelegatorVotePlan | undefined;
  setDelegatorVote(value?: DelegatorVotePlan): ActionPlan;
  hasDelegatorVote(): boolean;
  clearDelegatorVote(): ActionPlan;

  getPositionOpen(): dex_pb.PositionOpen | undefined;
  setPositionOpen(value?: dex_pb.PositionOpen): ActionPlan;
  hasPositionOpen(): boolean;
  clearPositionOpen(): ActionPlan;

  getPositionClose(): dex_pb.PositionClose | undefined;
  setPositionClose(value?: dex_pb.PositionClose): ActionPlan;
  hasPositionClose(): boolean;
  clearPositionClose(): ActionPlan;

  getPositionWithdraw(): dex_pb.PositionWithdraw | undefined;
  setPositionWithdraw(value?: dex_pb.PositionWithdraw): ActionPlan;
  hasPositionWithdraw(): boolean;
  clearPositionWithdraw(): ActionPlan;

  getPositionRewardClaim(): dex_pb.PositionRewardClaim | undefined;
  setPositionRewardClaim(value?: dex_pb.PositionRewardClaim): ActionPlan;
  hasPositionRewardClaim(): boolean;
  clearPositionRewardClaim(): ActionPlan;

  getSwap(): SwapPlan | undefined;
  setSwap(value?: SwapPlan): ActionPlan;
  hasSwap(): boolean;
  clearSwap(): ActionPlan;

  getSwapClaim(): SwapClaimPlan | undefined;
  setSwapClaim(value?: SwapClaimPlan): ActionPlan;
  hasSwapClaim(): boolean;
  clearSwapClaim(): ActionPlan;

  getActionCase(): ActionPlan.ActionCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ActionPlan.AsObject;
  static toObject(includeInstance: boolean, msg: ActionPlan): ActionPlan.AsObject;
  static serializeBinaryToWriter(message: ActionPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ActionPlan;
  static deserializeBinaryFromReader(message: ActionPlan, reader: jspb.BinaryReader): ActionPlan;
}

export namespace ActionPlan {
  export type AsObject = {
    spend?: SpendPlan.AsObject,
    output?: OutputPlan.AsObject,
    delegate?: stake_pb.Delegate.AsObject,
    undelegate?: stake_pb.Undelegate.AsObject,
    validatorDefinition?: stake_pb.ValidatorDefinition.AsObject,
    ibcAction?: ibc_pb.IBCAction.AsObject,
    proposalSubmit?: ProposalSubmit.AsObject,
    proposalWithdraw?: ProposalWithdrawPlan.AsObject,
    validatorVote?: ValidatorVote.AsObject,
    delegatorVote?: DelegatorVotePlan.AsObject,
    positionOpen?: dex_pb.PositionOpen.AsObject,
    positionClose?: dex_pb.PositionClose.AsObject,
    positionWithdraw?: dex_pb.PositionWithdraw.AsObject,
    positionRewardClaim?: dex_pb.PositionRewardClaim.AsObject,
    swap?: SwapPlan.AsObject,
    swapClaim?: SwapClaimPlan.AsObject,
  }

  export enum ActionCase { 
    ACTION_NOT_SET = 0,
    SPEND = 1,
    OUTPUT = 2,
    DELEGATE = 3,
    UNDELEGATE = 4,
    VALIDATOR_DEFINITION = 16,
    IBC_ACTION = 17,
    PROPOSAL_SUBMIT = 18,
    PROPOSAL_WITHDRAW = 19,
    VALIDATOR_VOTE = 20,
    DELEGATOR_VOTE = 21,
    POSITION_OPEN = 30,
    POSITION_CLOSE = 31,
    POSITION_WITHDRAW = 32,
    POSITION_REWARD_CLAIM = 34,
    SWAP = 40,
    SWAP_CLAIM = 41,
  }
}

export class CluePlan extends jspb.Message {
  getAddress(): crypto_pb.Address | undefined;
  setAddress(value?: crypto_pb.Address): CluePlan;
  hasAddress(): boolean;
  clearAddress(): CluePlan;

  getRseed(): Uint8Array | string;
  getRseed_asU8(): Uint8Array;
  getRseed_asB64(): string;
  setRseed(value: Uint8Array | string): CluePlan;

  getPrecisionBits(): number;
  setPrecisionBits(value: number): CluePlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CluePlan.AsObject;
  static toObject(includeInstance: boolean, msg: CluePlan): CluePlan.AsObject;
  static serializeBinaryToWriter(message: CluePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CluePlan;
  static deserializeBinaryFromReader(message: CluePlan, reader: jspb.BinaryReader): CluePlan;
}

export namespace CluePlan {
  export type AsObject = {
    address?: crypto_pb.Address.AsObject,
    rseed: Uint8Array | string,
    precisionBits: number,
  }
}

export class MemoPlan extends jspb.Message {
  getPlaintext(): Uint8Array | string;
  getPlaintext_asU8(): Uint8Array;
  getPlaintext_asB64(): string;
  setPlaintext(value: Uint8Array | string): MemoPlan;

  getKey(): Uint8Array | string;
  getKey_asU8(): Uint8Array;
  getKey_asB64(): string;
  setKey(value: Uint8Array | string): MemoPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MemoPlan.AsObject;
  static toObject(includeInstance: boolean, msg: MemoPlan): MemoPlan.AsObject;
  static serializeBinaryToWriter(message: MemoPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MemoPlan;
  static deserializeBinaryFromReader(message: MemoPlan, reader: jspb.BinaryReader): MemoPlan;
}

export namespace MemoPlan {
  export type AsObject = {
    plaintext: Uint8Array | string,
    key: Uint8Array | string,
  }
}

export class SpendPlan extends jspb.Message {
  getNote(): crypto_pb.Note | undefined;
  setNote(value?: crypto_pb.Note): SpendPlan;
  hasNote(): boolean;
  clearNote(): SpendPlan;

  getPosition(): number;
  setPosition(value: number): SpendPlan;

  getRandomizer(): Uint8Array | string;
  getRandomizer_asU8(): Uint8Array;
  getRandomizer_asB64(): string;
  setRandomizer(value: Uint8Array | string): SpendPlan;

  getValueBlinding(): Uint8Array | string;
  getValueBlinding_asU8(): Uint8Array;
  getValueBlinding_asB64(): string;
  setValueBlinding(value: Uint8Array | string): SpendPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SpendPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SpendPlan): SpendPlan.AsObject;
  static serializeBinaryToWriter(message: SpendPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SpendPlan;
  static deserializeBinaryFromReader(message: SpendPlan, reader: jspb.BinaryReader): SpendPlan;
}

export namespace SpendPlan {
  export type AsObject = {
    note?: crypto_pb.Note.AsObject,
    position: number,
    randomizer: Uint8Array | string,
    valueBlinding: Uint8Array | string,
  }
}

export class OutputPlan extends jspb.Message {
  getValue(): crypto_pb.Value | undefined;
  setValue(value?: crypto_pb.Value): OutputPlan;
  hasValue(): boolean;
  clearValue(): OutputPlan;

  getDestAddress(): crypto_pb.Address | undefined;
  setDestAddress(value?: crypto_pb.Address): OutputPlan;
  hasDestAddress(): boolean;
  clearDestAddress(): OutputPlan;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): OutputPlan;

  getValueBlinding(): Uint8Array | string;
  getValueBlinding_asU8(): Uint8Array;
  getValueBlinding_asB64(): string;
  setValueBlinding(value: Uint8Array | string): OutputPlan;

  getEsk(): Uint8Array | string;
  getEsk_asU8(): Uint8Array;
  getEsk_asB64(): string;
  setEsk(value: Uint8Array | string): OutputPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OutputPlan.AsObject;
  static toObject(includeInstance: boolean, msg: OutputPlan): OutputPlan.AsObject;
  static serializeBinaryToWriter(message: OutputPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OutputPlan;
  static deserializeBinaryFromReader(message: OutputPlan, reader: jspb.BinaryReader): OutputPlan;
}

export namespace OutputPlan {
  export type AsObject = {
    value?: crypto_pb.Value.AsObject,
    destAddress?: crypto_pb.Address.AsObject,
    noteBlinding: Uint8Array | string,
    valueBlinding: Uint8Array | string,
    esk: Uint8Array | string,
  }
}

export class SwapPlan extends jspb.Message {
  getSwapPlaintext(): dex_pb.SwapPlaintext | undefined;
  setSwapPlaintext(value?: dex_pb.SwapPlaintext): SwapPlan;
  hasSwapPlaintext(): boolean;
  clearSwapPlaintext(): SwapPlan;

  getFeeBlinding(): Uint8Array | string;
  getFeeBlinding_asU8(): Uint8Array;
  getFeeBlinding_asB64(): string;
  setFeeBlinding(value: Uint8Array | string): SwapPlan;

  getNoteBlinding(): Uint8Array | string;
  getNoteBlinding_asU8(): Uint8Array;
  getNoteBlinding_asB64(): string;
  setNoteBlinding(value: Uint8Array | string): SwapPlan;

  getEsk(): Uint8Array | string;
  getEsk_asU8(): Uint8Array;
  getEsk_asB64(): string;
  setEsk(value: Uint8Array | string): SwapPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SwapPlan): SwapPlan.AsObject;
  static serializeBinaryToWriter(message: SwapPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapPlan;
  static deserializeBinaryFromReader(message: SwapPlan, reader: jspb.BinaryReader): SwapPlan;
}

export namespace SwapPlan {
  export type AsObject = {
    swapPlaintext?: dex_pb.SwapPlaintext.AsObject,
    feeBlinding: Uint8Array | string,
    noteBlinding: Uint8Array | string,
    esk: Uint8Array | string,
  }
}

export class SwapClaimPlan extends jspb.Message {
  getSwapNftNote(): crypto_pb.Note | undefined;
  setSwapNftNote(value?: crypto_pb.Note): SwapClaimPlan;
  hasSwapNftNote(): boolean;
  clearSwapNftNote(): SwapClaimPlan;

  getSwapNftPosition(): number;
  setSwapNftPosition(value: number): SwapClaimPlan;

  getSwapPlaintext(): dex_pb.SwapPlaintext | undefined;
  setSwapPlaintext(value?: dex_pb.SwapPlaintext): SwapClaimPlan;
  hasSwapPlaintext(): boolean;
  clearSwapPlaintext(): SwapClaimPlan;

  getOutputData(): dex_pb.BatchSwapOutputData | undefined;
  setOutputData(value?: dex_pb.BatchSwapOutputData): SwapClaimPlan;
  hasOutputData(): boolean;
  clearOutputData(): SwapClaimPlan;

  getOutput1Blinding(): Uint8Array | string;
  getOutput1Blinding_asU8(): Uint8Array;
  getOutput1Blinding_asB64(): string;
  setOutput1Blinding(value: Uint8Array | string): SwapClaimPlan;

  getOutput2Blinding(): Uint8Array | string;
  getOutput2Blinding_asU8(): Uint8Array;
  getOutput2Blinding_asB64(): string;
  setOutput2Blinding(value: Uint8Array | string): SwapClaimPlan;

  getEsk1(): Uint8Array | string;
  getEsk1_asU8(): Uint8Array;
  getEsk1_asB64(): string;
  setEsk1(value: Uint8Array | string): SwapClaimPlan;

  getEsk2(): Uint8Array | string;
  getEsk2_asU8(): Uint8Array;
  getEsk2_asB64(): string;
  setEsk2(value: Uint8Array | string): SwapClaimPlan;

  getEpochDuration(): number;
  setEpochDuration(value: number): SwapClaimPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SwapClaimPlan.AsObject;
  static toObject(includeInstance: boolean, msg: SwapClaimPlan): SwapClaimPlan.AsObject;
  static serializeBinaryToWriter(message: SwapClaimPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SwapClaimPlan;
  static deserializeBinaryFromReader(message: SwapClaimPlan, reader: jspb.BinaryReader): SwapClaimPlan;
}

export namespace SwapClaimPlan {
  export type AsObject = {
    swapNftNote?: crypto_pb.Note.AsObject,
    swapNftPosition: number,
    swapPlaintext?: dex_pb.SwapPlaintext.AsObject,
    outputData?: dex_pb.BatchSwapOutputData.AsObject,
    output1Blinding: Uint8Array | string,
    output2Blinding: Uint8Array | string,
    esk1: Uint8Array | string,
    esk2: Uint8Array | string,
    epochDuration: number,
  }
}

export class ProposalWithdrawPlan extends jspb.Message {
  getBody(): ProposalWithdrawBody | undefined;
  setBody(value?: ProposalWithdrawBody): ProposalWithdrawPlan;
  hasBody(): boolean;
  clearBody(): ProposalWithdrawPlan;

  getRandomizer(): Uint8Array | string;
  getRandomizer_asU8(): Uint8Array;
  getRandomizer_asB64(): string;
  setRandomizer(value: Uint8Array | string): ProposalWithdrawPlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalWithdrawPlan.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalWithdrawPlan): ProposalWithdrawPlan.AsObject;
  static serializeBinaryToWriter(message: ProposalWithdrawPlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalWithdrawPlan;
  static deserializeBinaryFromReader(message: ProposalWithdrawPlan, reader: jspb.BinaryReader): ProposalWithdrawPlan;
}

export namespace ProposalWithdrawPlan {
  export type AsObject = {
    body?: ProposalWithdrawBody.AsObject,
    randomizer: Uint8Array | string,
  }
}

export class DelegatorVotePlan extends jspb.Message {
  getProposal(): number;
  setProposal(value: number): DelegatorVotePlan;

  getVote(): governance_pb.Vote | undefined;
  setVote(value?: governance_pb.Vote): DelegatorVotePlan;
  hasVote(): boolean;
  clearVote(): DelegatorVotePlan;

  getStakedNote(): crypto_pb.Note | undefined;
  setStakedNote(value?: crypto_pb.Note): DelegatorVotePlan;
  hasStakedNote(): boolean;
  clearStakedNote(): DelegatorVotePlan;

  getPosition(): number;
  setPosition(value: number): DelegatorVotePlan;

  getRandomizer(): Uint8Array | string;
  getRandomizer_asU8(): Uint8Array;
  getRandomizer_asB64(): string;
  setRandomizer(value: Uint8Array | string): DelegatorVotePlan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DelegatorVotePlan.AsObject;
  static toObject(includeInstance: boolean, msg: DelegatorVotePlan): DelegatorVotePlan.AsObject;
  static serializeBinaryToWriter(message: DelegatorVotePlan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DelegatorVotePlan;
  static deserializeBinaryFromReader(message: DelegatorVotePlan, reader: jspb.BinaryReader): DelegatorVotePlan;
}

export namespace DelegatorVotePlan {
  export type AsObject = {
    proposal: number,
    vote?: governance_pb.Vote.AsObject,
    stakedNote?: crypto_pb.Note.AsObject,
    position: number,
    randomizer: Uint8Array | string,
  }
}

export class Proposal extends jspb.Message {
  getTitle(): string;
  setTitle(value: string): Proposal;

  getDescription(): string;
  setDescription(value: string): Proposal;

  getPayload(): Proposal.Payload | undefined;
  setPayload(value?: Proposal.Payload): Proposal;
  hasPayload(): boolean;
  clearPayload(): Proposal;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Proposal.AsObject;
  static toObject(includeInstance: boolean, msg: Proposal): Proposal.AsObject;
  static serializeBinaryToWriter(message: Proposal, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Proposal;
  static deserializeBinaryFromReader(message: Proposal, reader: jspb.BinaryReader): Proposal;
}

export namespace Proposal {
  export type AsObject = {
    title: string,
    description: string,
    payload?: Proposal.Payload.AsObject,
  }

  export class Payload extends jspb.Message {
    getSignaling(): Proposal.Signaling | undefined;
    setSignaling(value?: Proposal.Signaling): Payload;
    hasSignaling(): boolean;
    clearSignaling(): Payload;

    getEmergency(): Proposal.Emergency | undefined;
    setEmergency(value?: Proposal.Emergency): Payload;
    hasEmergency(): boolean;
    clearEmergency(): Payload;

    getParameterChange(): Proposal.ParameterChange | undefined;
    setParameterChange(value?: Proposal.ParameterChange): Payload;
    hasParameterChange(): boolean;
    clearParameterChange(): Payload;

    getDaoSpend(): Proposal.DaoSpend | undefined;
    setDaoSpend(value?: Proposal.DaoSpend): Payload;
    hasDaoSpend(): boolean;
    clearDaoSpend(): Payload;

    getPayloadCase(): Payload.PayloadCase;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Payload.AsObject;
    static toObject(includeInstance: boolean, msg: Payload): Payload.AsObject;
    static serializeBinaryToWriter(message: Payload, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Payload;
    static deserializeBinaryFromReader(message: Payload, reader: jspb.BinaryReader): Payload;
  }

  export namespace Payload {
    export type AsObject = {
      signaling?: Proposal.Signaling.AsObject,
      emergency?: Proposal.Emergency.AsObject,
      parameterChange?: Proposal.ParameterChange.AsObject,
      daoSpend?: Proposal.DaoSpend.AsObject,
    }

    export enum PayloadCase { 
      PAYLOAD_NOT_SET = 0,
      SIGNALING = 2,
      EMERGENCY = 3,
      PARAMETER_CHANGE = 4,
      DAO_SPEND = 5,
    }
  }


  export class Signaling extends jspb.Message {
    getCommit(): string;
    setCommit(value: string): Signaling;
    hasCommit(): boolean;
    clearCommit(): Signaling;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Signaling.AsObject;
    static toObject(includeInstance: boolean, msg: Signaling): Signaling.AsObject;
    static serializeBinaryToWriter(message: Signaling, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Signaling;
    static deserializeBinaryFromReader(message: Signaling, reader: jspb.BinaryReader): Signaling;
  }

  export namespace Signaling {
    export type AsObject = {
      commit?: string,
    }

    export enum CommitCase { 
      _COMMIT_NOT_SET = 0,
      COMMIT = 1,
    }
  }


  export class Emergency extends jspb.Message {
    getHaltChain(): boolean;
    setHaltChain(value: boolean): Emergency;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Emergency.AsObject;
    static toObject(includeInstance: boolean, msg: Emergency): Emergency.AsObject;
    static serializeBinaryToWriter(message: Emergency, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Emergency;
    static deserializeBinaryFromReader(message: Emergency, reader: jspb.BinaryReader): Emergency;
  }

  export namespace Emergency {
    export type AsObject = {
      haltChain: boolean,
    }
  }


  export class ParameterChange extends jspb.Message {
    getEffectiveHeight(): number;
    setEffectiveHeight(value: number): ParameterChange;

    getNewParametersList(): Array<Proposal.ParameterChange.SetParameter>;
    setNewParametersList(value: Array<Proposal.ParameterChange.SetParameter>): ParameterChange;
    clearNewParametersList(): ParameterChange;
    addNewParameters(value?: Proposal.ParameterChange.SetParameter, index?: number): Proposal.ParameterChange.SetParameter;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParameterChange.AsObject;
    static toObject(includeInstance: boolean, msg: ParameterChange): ParameterChange.AsObject;
    static serializeBinaryToWriter(message: ParameterChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParameterChange;
    static deserializeBinaryFromReader(message: ParameterChange, reader: jspb.BinaryReader): ParameterChange;
  }

  export namespace ParameterChange {
    export type AsObject = {
      effectiveHeight: number,
      newParametersList: Array<Proposal.ParameterChange.SetParameter.AsObject>,
    }

    export class SetParameter extends jspb.Message {
      getParameter(): string;
      setParameter(value: string): SetParameter;

      getValue(): string;
      setValue(value: string): SetParameter;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): SetParameter.AsObject;
      static toObject(includeInstance: boolean, msg: SetParameter): SetParameter.AsObject;
      static serializeBinaryToWriter(message: SetParameter, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): SetParameter;
      static deserializeBinaryFromReader(message: SetParameter, reader: jspb.BinaryReader): SetParameter;
    }

    export namespace SetParameter {
      export type AsObject = {
        parameter: string,
        value: string,
      }
    }

  }


  export class DaoSpend extends jspb.Message {
    getScheduleTransactionsList(): Array<Proposal.DaoSpend.ScheduleTransaction>;
    setScheduleTransactionsList(value: Array<Proposal.DaoSpend.ScheduleTransaction>): DaoSpend;
    clearScheduleTransactionsList(): DaoSpend;
    addScheduleTransactions(value?: Proposal.DaoSpend.ScheduleTransaction, index?: number): Proposal.DaoSpend.ScheduleTransaction;

    getCancelTransactionsList(): Array<Proposal.DaoSpend.CancelTransaction>;
    setCancelTransactionsList(value: Array<Proposal.DaoSpend.CancelTransaction>): DaoSpend;
    clearCancelTransactionsList(): DaoSpend;
    addCancelTransactions(value?: Proposal.DaoSpend.CancelTransaction, index?: number): Proposal.DaoSpend.CancelTransaction;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DaoSpend.AsObject;
    static toObject(includeInstance: boolean, msg: DaoSpend): DaoSpend.AsObject;
    static serializeBinaryToWriter(message: DaoSpend, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DaoSpend;
    static deserializeBinaryFromReader(message: DaoSpend, reader: jspb.BinaryReader): DaoSpend;
  }

  export namespace DaoSpend {
    export type AsObject = {
      scheduleTransactionsList: Array<Proposal.DaoSpend.ScheduleTransaction.AsObject>,
      cancelTransactionsList: Array<Proposal.DaoSpend.CancelTransaction.AsObject>,
    }

    export class ScheduleTransaction extends jspb.Message {
      getExecuteAtHeight(): number;
      setExecuteAtHeight(value: number): ScheduleTransaction;

      getTransaction(): TransactionPlan | undefined;
      setTransaction(value?: TransactionPlan): ScheduleTransaction;
      hasTransaction(): boolean;
      clearTransaction(): ScheduleTransaction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): ScheduleTransaction.AsObject;
      static toObject(includeInstance: boolean, msg: ScheduleTransaction): ScheduleTransaction.AsObject;
      static serializeBinaryToWriter(message: ScheduleTransaction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): ScheduleTransaction;
      static deserializeBinaryFromReader(message: ScheduleTransaction, reader: jspb.BinaryReader): ScheduleTransaction;
    }

    export namespace ScheduleTransaction {
      export type AsObject = {
        executeAtHeight: number,
        transaction?: TransactionPlan.AsObject,
      }
    }


    export class CancelTransaction extends jspb.Message {
      getScheduledAtHeight(): number;
      setScheduledAtHeight(value: number): CancelTransaction;

      getAuthHash(): AuthHash | undefined;
      setAuthHash(value?: AuthHash): CancelTransaction;
      hasAuthHash(): boolean;
      clearAuthHash(): CancelTransaction;

      serializeBinary(): Uint8Array;
      toObject(includeInstance?: boolean): CancelTransaction.AsObject;
      static toObject(includeInstance: boolean, msg: CancelTransaction): CancelTransaction.AsObject;
      static serializeBinaryToWriter(message: CancelTransaction, writer: jspb.BinaryWriter): void;
      static deserializeBinary(bytes: Uint8Array): CancelTransaction;
      static deserializeBinaryFromReader(message: CancelTransaction, reader: jspb.BinaryReader): CancelTransaction;
    }

    export namespace CancelTransaction {
      export type AsObject = {
        scheduledAtHeight: number,
        authHash?: AuthHash.AsObject,
      }
    }

  }

}

