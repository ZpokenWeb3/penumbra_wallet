import * as jspb from 'google-protobuf'



export class Vote extends jspb.Message {
  getVote(): Vote.Vote;
  setVote(value: Vote.Vote): Vote;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Vote.AsObject;
  static toObject(includeInstance: boolean, msg: Vote): Vote.AsObject;
  static serializeBinaryToWriter(message: Vote, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Vote;
  static deserializeBinaryFromReader(message: Vote, reader: jspb.BinaryReader): Vote;
}

export namespace Vote {
  export type AsObject = {
    vote: Vote.Vote,
  }

  export enum Vote { 
    ABSTAIN = 0,
    YES = 1,
    NO = 2,
    NO_WITH_VETO = 3,
  }
}

export class ProposalState extends jspb.Message {
  getVoting(): ProposalState.Voting | undefined;
  setVoting(value?: ProposalState.Voting): ProposalState;
  hasVoting(): boolean;
  clearVoting(): ProposalState;

  getWithdrawn(): ProposalState.Withdrawn | undefined;
  setWithdrawn(value?: ProposalState.Withdrawn): ProposalState;
  hasWithdrawn(): boolean;
  clearWithdrawn(): ProposalState;

  getFinished(): ProposalState.Finished | undefined;
  setFinished(value?: ProposalState.Finished): ProposalState;
  hasFinished(): boolean;
  clearFinished(): ProposalState;

  getStateCase(): ProposalState.StateCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalState.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalState): ProposalState.AsObject;
  static serializeBinaryToWriter(message: ProposalState, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalState;
  static deserializeBinaryFromReader(message: ProposalState, reader: jspb.BinaryReader): ProposalState;
}

export namespace ProposalState {
  export type AsObject = {
    voting?: ProposalState.Voting.AsObject,
    withdrawn?: ProposalState.Withdrawn.AsObject,
    finished?: ProposalState.Finished.AsObject,
  }

  export class Voting extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Voting.AsObject;
    static toObject(includeInstance: boolean, msg: Voting): Voting.AsObject;
    static serializeBinaryToWriter(message: Voting, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Voting;
    static deserializeBinaryFromReader(message: Voting, reader: jspb.BinaryReader): Voting;
  }

  export namespace Voting {
    export type AsObject = {
    }
  }


  export class Withdrawn extends jspb.Message {
    getReason(): string;
    setReason(value: string): Withdrawn;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Withdrawn.AsObject;
    static toObject(includeInstance: boolean, msg: Withdrawn): Withdrawn.AsObject;
    static serializeBinaryToWriter(message: Withdrawn, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Withdrawn;
    static deserializeBinaryFromReader(message: Withdrawn, reader: jspb.BinaryReader): Withdrawn;
  }

  export namespace Withdrawn {
    export type AsObject = {
      reason: string,
    }
  }


  export class Finished extends jspb.Message {
    getOutcome(): ProposalOutcome | undefined;
    setOutcome(value?: ProposalOutcome): Finished;
    hasOutcome(): boolean;
    clearOutcome(): Finished;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Finished.AsObject;
    static toObject(includeInstance: boolean, msg: Finished): Finished.AsObject;
    static serializeBinaryToWriter(message: Finished, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Finished;
    static deserializeBinaryFromReader(message: Finished, reader: jspb.BinaryReader): Finished;
  }

  export namespace Finished {
    export type AsObject = {
      outcome?: ProposalOutcome.AsObject,
    }
  }


  export enum StateCase { 
    STATE_NOT_SET = 0,
    VOTING = 2,
    WITHDRAWN = 3,
    FINISHED = 4,
  }
}

export class ProposalOutcome extends jspb.Message {
  getPassed(): ProposalOutcome.Passed | undefined;
  setPassed(value?: ProposalOutcome.Passed): ProposalOutcome;
  hasPassed(): boolean;
  clearPassed(): ProposalOutcome;

  getFailed(): ProposalOutcome.Failed | undefined;
  setFailed(value?: ProposalOutcome.Failed): ProposalOutcome;
  hasFailed(): boolean;
  clearFailed(): ProposalOutcome;

  getVetoed(): ProposalOutcome.Vetoed | undefined;
  setVetoed(value?: ProposalOutcome.Vetoed): ProposalOutcome;
  hasVetoed(): boolean;
  clearVetoed(): ProposalOutcome;

  getOutcomeCase(): ProposalOutcome.OutcomeCase;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalOutcome.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalOutcome): ProposalOutcome.AsObject;
  static serializeBinaryToWriter(message: ProposalOutcome, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalOutcome;
  static deserializeBinaryFromReader(message: ProposalOutcome, reader: jspb.BinaryReader): ProposalOutcome;
}

export namespace ProposalOutcome {
  export type AsObject = {
    passed?: ProposalOutcome.Passed.AsObject,
    failed?: ProposalOutcome.Failed.AsObject,
    vetoed?: ProposalOutcome.Vetoed.AsObject,
  }

  export class Passed extends jspb.Message {
    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Passed.AsObject;
    static toObject(includeInstance: boolean, msg: Passed): Passed.AsObject;
    static serializeBinaryToWriter(message: Passed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Passed;
    static deserializeBinaryFromReader(message: Passed, reader: jspb.BinaryReader): Passed;
  }

  export namespace Passed {
    export type AsObject = {
    }
  }


  export class Failed extends jspb.Message {
    getWithdrawnWithReason(): string;
    setWithdrawnWithReason(value: string): Failed;
    hasWithdrawnWithReason(): boolean;
    clearWithdrawnWithReason(): Failed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Failed.AsObject;
    static toObject(includeInstance: boolean, msg: Failed): Failed.AsObject;
    static serializeBinaryToWriter(message: Failed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Failed;
    static deserializeBinaryFromReader(message: Failed, reader: jspb.BinaryReader): Failed;
  }

  export namespace Failed {
    export type AsObject = {
      withdrawnWithReason?: string,
    }

    export enum WithdrawnWithReasonCase { 
      _WITHDRAWN_WITH_REASON_NOT_SET = 0,
      WITHDRAWN_WITH_REASON = 1,
    }
  }


  export class Vetoed extends jspb.Message {
    getWithdrawnWithReason(): string;
    setWithdrawnWithReason(value: string): Vetoed;
    hasWithdrawnWithReason(): boolean;
    clearWithdrawnWithReason(): Vetoed;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Vetoed.AsObject;
    static toObject(includeInstance: boolean, msg: Vetoed): Vetoed.AsObject;
    static serializeBinaryToWriter(message: Vetoed, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Vetoed;
    static deserializeBinaryFromReader(message: Vetoed, reader: jspb.BinaryReader): Vetoed;
  }

  export namespace Vetoed {
    export type AsObject = {
      withdrawnWithReason?: string,
    }

    export enum WithdrawnWithReasonCase { 
      _WITHDRAWN_WITH_REASON_NOT_SET = 0,
      WITHDRAWN_WITH_REASON = 1,
    }
  }


  export enum OutcomeCase { 
    OUTCOME_NOT_SET = 0,
    PASSED = 1,
    FAILED = 2,
    VETOED = 3,
  }
}

export class ProposalList extends jspb.Message {
  getProposalsList(): Array<number>;
  setProposalsList(value: Array<number>): ProposalList;
  clearProposalsList(): ProposalList;
  addProposals(value: number, index?: number): ProposalList;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ProposalList.AsObject;
  static toObject(includeInstance: boolean, msg: ProposalList): ProposalList.AsObject;
  static serializeBinaryToWriter(message: ProposalList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ProposalList;
  static deserializeBinaryFromReader(message: ProposalList, reader: jspb.BinaryReader): ProposalList;
}

export namespace ProposalList {
  export type AsObject = {
    proposalsList: Array<number>,
  }
}

