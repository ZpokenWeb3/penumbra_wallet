// @generated by protoc-gen-es v0.1.1 with parameter "target=js"
// @generated from file ibc/applications/interchain_accounts/v1/account.proto (package ibc.applications.interchain_accounts.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {proto3} from "@bufbuild/protobuf";
import {BaseAccount} from "../../../../cosmos/auth/v1beta1/auth_pb.js";

/**
 * An InterchainAccount is defined as a BaseAccount & the address of the account owner on the controller chain
 *
 * @generated from message ibc.applications.interchain_accounts.v1.InterchainAccount
 */
export const InterchainAccount = proto3.makeMessageType(
  "ibc.applications.interchain_accounts.v1.InterchainAccount",
  () => [
    { no: 1, name: "base_account", kind: "message", T: BaseAccount },
    { no: 2, name: "account_owner", kind: "scalar", T: 9 /* ScalarType.STRING */ },
  ],
);
