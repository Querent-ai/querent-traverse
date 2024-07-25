// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.12.4
// source: protos/cluster.proto

/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'querent.cluster';

export enum DeletionStatus {
	Set = 0,
	Deleted = 1,
	DeleteAfterTtl = 2,
	UNRECOGNIZED = -1
}

export function deletionStatusFromJSON(object: any): DeletionStatus {
	switch (object) {
		case 0:
		case 'Set':
			return DeletionStatus.Set;
		case 1:
		case 'Deleted':
			return DeletionStatus.Deleted;
		case 2:
		case 'DeleteAfterTtl':
			return DeletionStatus.DeleteAfterTtl;
		case -1:
		case 'UNRECOGNIZED':
		default:
			return DeletionStatus.UNRECOGNIZED;
	}
}

export function deletionStatusToJSON(object: DeletionStatus): string {
	switch (object) {
		case DeletionStatus.Set:
			return 'Set';
		case DeletionStatus.Deleted:
			return 'Deleted';
		case DeletionStatus.DeleteAfterTtl:
			return 'DeleteAfterTtl';
		case DeletionStatus.UNRECOGNIZED:
		default:
			return 'UNRECOGNIZED';
	}
}

export interface ChitchatId {
	nodeId: string;
	generationId: number;
	gossipAdvertiseAddr: string;
}

export interface VersionedKeyValue {
	key: string;
	value: string;
	version: number;
	status: DeletionStatus;
}

export interface NodeState {
	chitchatId: ChitchatId | undefined;
	keyValues: VersionedKeyValue[];
	maxVersion: number;
	lastGcVersion: number;
}

export interface FetchClusterStateRequest {
	clusterId: string;
}

export interface FetchClusterStateResponse {
	clusterId: string;
	nodeStates: NodeState[];
}

function createBaseChitchatId(): ChitchatId {
	return { nodeId: '', generationId: 0, gossipAdvertiseAddr: '' };
}

export const ChitchatId = {
	encode(message: ChitchatId, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.nodeId !== '') {
			writer.uint32(10).string(message.nodeId);
		}
		if (message.generationId !== 0) {
			writer.uint32(16).uint64(message.generationId);
		}
		if (message.gossipAdvertiseAddr !== '') {
			writer.uint32(26).string(message.gossipAdvertiseAddr);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): ChitchatId {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseChitchatId();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.nodeId = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.generationId = longToNumber(reader.uint64() as Long);
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.gossipAdvertiseAddr = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): ChitchatId {
		return {
			nodeId: isSet(object.nodeId) ? globalThis.String(object.nodeId) : '',
			generationId: isSet(object.generationId) ? globalThis.Number(object.generationId) : 0,
			gossipAdvertiseAddr: isSet(object.gossipAdvertiseAddr)
				? globalThis.String(object.gossipAdvertiseAddr)
				: ''
		};
	},

	toJSON(message: ChitchatId): unknown {
		const obj: any = {};
		if (message.nodeId !== '') {
			obj.nodeId = message.nodeId;
		}
		if (message.generationId !== 0) {
			obj.generationId = Math.round(message.generationId);
		}
		if (message.gossipAdvertiseAddr !== '') {
			obj.gossipAdvertiseAddr = message.gossipAdvertiseAddr;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<ChitchatId>, I>>(base?: I): ChitchatId {
		return ChitchatId.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<ChitchatId>, I>>(object: I): ChitchatId {
		const message = createBaseChitchatId();
		message.nodeId = object.nodeId ?? '';
		message.generationId = object.generationId ?? 0;
		message.gossipAdvertiseAddr = object.gossipAdvertiseAddr ?? '';
		return message;
	}
};

function createBaseVersionedKeyValue(): VersionedKeyValue {
	return { key: '', value: '', version: 0, status: 0 };
}

export const VersionedKeyValue = {
	encode(message: VersionedKeyValue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.key !== '') {
			writer.uint32(10).string(message.key);
		}
		if (message.value !== '') {
			writer.uint32(18).string(message.value);
		}
		if (message.version !== 0) {
			writer.uint32(24).uint64(message.version);
		}
		if (message.status !== 0) {
			writer.uint32(32).int32(message.status);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): VersionedKeyValue {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseVersionedKeyValue();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.key = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.value = reader.string();
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.version = longToNumber(reader.uint64() as Long);
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.status = reader.int32() as any;
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): VersionedKeyValue {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : '',
			value: isSet(object.value) ? globalThis.String(object.value) : '',
			version: isSet(object.version) ? globalThis.Number(object.version) : 0,
			status: isSet(object.status) ? deletionStatusFromJSON(object.status) : 0
		};
	},

	toJSON(message: VersionedKeyValue): unknown {
		const obj: any = {};
		if (message.key !== '') {
			obj.key = message.key;
		}
		if (message.value !== '') {
			obj.value = message.value;
		}
		if (message.version !== 0) {
			obj.version = Math.round(message.version);
		}
		if (message.status !== 0) {
			obj.status = deletionStatusToJSON(message.status);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<VersionedKeyValue>, I>>(base?: I): VersionedKeyValue {
		return VersionedKeyValue.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<VersionedKeyValue>, I>>(object: I): VersionedKeyValue {
		const message = createBaseVersionedKeyValue();
		message.key = object.key ?? '';
		message.value = object.value ?? '';
		message.version = object.version ?? 0;
		message.status = object.status ?? 0;
		return message;
	}
};

function createBaseNodeState(): NodeState {
	return { chitchatId: undefined, keyValues: [], maxVersion: 0, lastGcVersion: 0 };
}

export const NodeState = {
	encode(message: NodeState, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.chitchatId !== undefined) {
			ChitchatId.encode(message.chitchatId, writer.uint32(10).fork()).ldelim();
		}
		for (const v of message.keyValues) {
			VersionedKeyValue.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		if (message.maxVersion !== 0) {
			writer.uint32(24).uint64(message.maxVersion);
		}
		if (message.lastGcVersion !== 0) {
			writer.uint32(32).uint64(message.lastGcVersion);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): NodeState {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseNodeState();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.chitchatId = ChitchatId.decode(reader, reader.uint32());
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.keyValues.push(VersionedKeyValue.decode(reader, reader.uint32()));
					continue;
				case 3:
					if (tag !== 24) {
						break;
					}

					message.maxVersion = longToNumber(reader.uint64() as Long);
					continue;
				case 4:
					if (tag !== 32) {
						break;
					}

					message.lastGcVersion = longToNumber(reader.uint64() as Long);
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): NodeState {
		return {
			chitchatId: isSet(object.chitchatId) ? ChitchatId.fromJSON(object.chitchatId) : undefined,
			keyValues: globalThis.Array.isArray(object?.keyValues)
				? object.keyValues.map((e: any) => VersionedKeyValue.fromJSON(e))
				: [],
			maxVersion: isSet(object.maxVersion) ? globalThis.Number(object.maxVersion) : 0,
			lastGcVersion: isSet(object.lastGcVersion) ? globalThis.Number(object.lastGcVersion) : 0
		};
	},

	toJSON(message: NodeState): unknown {
		const obj: any = {};
		if (message.chitchatId !== undefined) {
			obj.chitchatId = ChitchatId.toJSON(message.chitchatId);
		}
		if (message.keyValues?.length) {
			obj.keyValues = message.keyValues.map((e) => VersionedKeyValue.toJSON(e));
		}
		if (message.maxVersion !== 0) {
			obj.maxVersion = Math.round(message.maxVersion);
		}
		if (message.lastGcVersion !== 0) {
			obj.lastGcVersion = Math.round(message.lastGcVersion);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<NodeState>, I>>(base?: I): NodeState {
		return NodeState.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<NodeState>, I>>(object: I): NodeState {
		const message = createBaseNodeState();
		message.chitchatId =
			object.chitchatId !== undefined && object.chitchatId !== null
				? ChitchatId.fromPartial(object.chitchatId)
				: undefined;
		message.keyValues = object.keyValues?.map((e) => VersionedKeyValue.fromPartial(e)) || [];
		message.maxVersion = object.maxVersion ?? 0;
		message.lastGcVersion = object.lastGcVersion ?? 0;
		return message;
	}
};

function createBaseFetchClusterStateRequest(): FetchClusterStateRequest {
	return { clusterId: '' };
}

export const FetchClusterStateRequest = {
	encode(message: FetchClusterStateRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.clusterId !== '') {
			writer.uint32(10).string(message.clusterId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): FetchClusterStateRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFetchClusterStateRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.clusterId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FetchClusterStateRequest {
		return { clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : '' };
	},

	toJSON(message: FetchClusterStateRequest): unknown {
		const obj: any = {};
		if (message.clusterId !== '') {
			obj.clusterId = message.clusterId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FetchClusterStateRequest>, I>>(
		base?: I
	): FetchClusterStateRequest {
		return FetchClusterStateRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FetchClusterStateRequest>, I>>(
		object: I
	): FetchClusterStateRequest {
		const message = createBaseFetchClusterStateRequest();
		message.clusterId = object.clusterId ?? '';
		return message;
	}
};

function createBaseFetchClusterStateResponse(): FetchClusterStateResponse {
	return { clusterId: '', nodeStates: [] };
}

export const FetchClusterStateResponse = {
	encode(message: FetchClusterStateResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.clusterId !== '') {
			writer.uint32(10).string(message.clusterId);
		}
		for (const v of message.nodeStates) {
			NodeState.encode(v!, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): FetchClusterStateResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseFetchClusterStateResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.clusterId = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.nodeStates.push(NodeState.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): FetchClusterStateResponse {
		return {
			clusterId: isSet(object.clusterId) ? globalThis.String(object.clusterId) : '',
			nodeStates: globalThis.Array.isArray(object?.nodeStates)
				? object.nodeStates.map((e: any) => NodeState.fromJSON(e))
				: []
		};
	},

	toJSON(message: FetchClusterStateResponse): unknown {
		const obj: any = {};
		if (message.clusterId !== '') {
			obj.clusterId = message.clusterId;
		}
		if (message.nodeStates?.length) {
			obj.nodeStates = message.nodeStates.map((e) => NodeState.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<FetchClusterStateResponse>, I>>(
		base?: I
	): FetchClusterStateResponse {
		return FetchClusterStateResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<FetchClusterStateResponse>, I>>(
		object: I
	): FetchClusterStateResponse {
		const message = createBaseFetchClusterStateResponse();
		message.clusterId = object.clusterId ?? '';
		message.nodeStates = object.nodeStates?.map((e) => NodeState.fromPartial(e)) || [];
		return message;
	}
};

export interface ClusterService {
	FetchClusterState(request: FetchClusterStateRequest): Promise<FetchClusterStateResponse>;
}

export const ClusterServiceServiceName = 'querent.cluster.ClusterService';
export class ClusterServiceClientImpl implements ClusterService {
	private readonly rpc: Rpc;
	private readonly service: string;
	constructor(rpc: Rpc, opts?: { service?: string }) {
		this.service = opts?.service || ClusterServiceServiceName;
		this.rpc = rpc;
		this.FetchClusterState = this.FetchClusterState.bind(this);
	}
	FetchClusterState(request: FetchClusterStateRequest): Promise<FetchClusterStateResponse> {
		const data = FetchClusterStateRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'FetchClusterState', data);
		return promise.then((data) => FetchClusterStateResponse.decode(_m0.Reader.create(data)));
	}
}

interface Rpc {
	request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin
	? T
	: T extends globalThis.Array<infer U>
		? globalThis.Array<DeepPartial<U>>
		: T extends ReadonlyArray<infer U>
			? ReadonlyArray<DeepPartial<U>>
			: T extends {}
				? { [K in keyof T]?: DeepPartial<T[K]> }
				: Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
	? P
	: P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

function longToNumber(long: Long): number {
	if (long.gt(globalThis.Number.MAX_SAFE_INTEGER)) {
		throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER');
	}
	if (long.lt(globalThis.Number.MIN_SAFE_INTEGER)) {
		throw new globalThis.Error('Value is smaller than Number.MIN_SAFE_INTEGER');
	}
	return long.toNumber();
}

if (_m0.util.Long !== Long) {
	_m0.util.Long = Long as any;
	_m0.configure();
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
