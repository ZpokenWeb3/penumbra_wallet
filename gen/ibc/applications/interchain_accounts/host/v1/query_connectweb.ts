// @generated by protoc-gen-connect-web v0.2.1 with parameter "target=ts"
// @generated from file ibc/applications/interchain_accounts/host/v1/query.proto (package ibc.applications.interchain_accounts.host.v1, syntax proto3)
/* eslint-disable */
/* @ts-nocheck */

import {QueryParamsRequest, QueryParamsResponse} from "./query_pb.js";
import {MethodKind} from "@bufbuild/protobuf";

/**
 * Query provides defines the gRPC querier service.
 *
 * @generated from service ibc.applications.interchain_accounts.host.v1.Query
 */
export const Query = {
  typeName: "ibc.applications.interchain_accounts.host.v1.Query",
  methods: {
    /**
     * Params queries all parameters of the ICA host submodule.
     *
     * @generated from rpc ibc.applications.interchain_accounts.host.v1.Query.Params
     */
    params: {
      name: "Params",
      I: QueryParamsRequest,
      O: QueryParamsResponse,
      kind: MethodKind.Unary,
    },
  }
} as const;

