// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.12.4
// source: protos/discovery.proto

/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'querent.discovery';

/**
 * Start a discovery agent to query insights from data
 * The agent will respond with insights discovered based on the user's query
 * The agent use vector and graph embeddings to discover insights from data
 */
export interface DiscoverySessionRequest {
	/** Name of the discovery agent */
	agentName: string;
	/** Semantic pipeline ID */
	semanticPipelineId: string;
	/** Discovery Session Type */
	sessionType: DiscoveryAgentType | undefined;
}

/** Enum for DiscoverySessionType, either Retriever or Traverser */
export interface DiscoveryAgentType {
	sessionType: string;
}

/** Session AgentID as a response */
export interface DiscoverySessionResponse {
	/** The ID of the discovery session */
	sessionId: string;
}

/** Request message for querying insights from data */
export interface DiscoveryRequest {
	/** The ID of the discovery session */
	sessionId: string;
	/** The query or question posed by the user */
	query: string;
}

/** Response message containing insights discovered from the data */
export interface DiscoveryResponse {
	/** The ID of the discovery session */
	sessionId: string;
	/** Query or question posed by the user */
	query: string;
	/** The insights discovered based on the user's query */
	insights: Insight[];
}

/** Request to stop the discovery session */
export interface StopDiscoverySessionRequest {
	/** The ID of the discovery session */
	sessionId: string;
}

/** Response to stop the discovery session */
export interface StopDiscoverySessionResponse {
	/** The ID of the discovery session */
	sessionId: string;
}

/** Represents an insight discovered from the data */
export interface Insight {
	/** The document id of the search result */
	document: string;
	/** The document source */
	source: string;
	/** The attention score retrieved from the search result */
	relationshipStrength: string;
	/** The sentence retrieved from the search resulty */
	sentence: string;
	/** The tags of the search result, comma separated subject, object , predicate */
	tags: string;
}

export interface DiscoverySessionRequestInfo {
	sessionId: string;
	request: DiscoverySessionRequest | undefined;
}

export interface DiscoverySessionRequestInfoList {
	requests: DiscoverySessionRequestInfo[];
}

export interface Empty {}

export interface DiscoveryQueryInput {
	maxSuggestions: number;
}

export interface QuerySuggestion {
	query: string;
	frequency: number;
}

export interface DiscoveryQueryOutput {
	suggestions: QuerySuggestion[];
}

function createBaseDiscoverySessionRequest(): DiscoverySessionRequest {
	return { agentName: '', semanticPipelineId: '', sessionType: undefined };
}

export const DiscoverySessionRequest = {
	encode(message: DiscoverySessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.agentName !== '') {
			writer.uint32(10).string(message.agentName);
		}
		if (message.semanticPipelineId !== '') {
			writer.uint32(18).string(message.semanticPipelineId);
		}
		if (message.sessionType !== undefined) {
			DiscoveryAgentType.encode(message.sessionType, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoverySessionRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoverySessionRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.agentName = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.semanticPipelineId = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.sessionType = DiscoveryAgentType.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoverySessionRequest {
		return {
			agentName: isSet(object.agentName) ? globalThis.String(object.agentName) : '',
			semanticPipelineId: isSet(object.semanticPipelineId)
				? globalThis.String(object.semanticPipelineId)
				: '',
			sessionType: isSet(object.sessionType)
				? DiscoveryAgentType.fromJSON(object.sessionType)
				: undefined
		};
	},

	toJSON(message: DiscoverySessionRequest): unknown {
		const obj: any = {};
		if (message.agentName !== '') {
			obj.agentName = message.agentName;
		}
		if (message.semanticPipelineId !== '') {
			obj.semanticPipelineId = message.semanticPipelineId;
		}
		if (message.sessionType !== undefined) {
			obj.sessionType = DiscoveryAgentType.toJSON(message.sessionType);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoverySessionRequest>, I>>(
		base?: I
	): DiscoverySessionRequest {
		return DiscoverySessionRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoverySessionRequest>, I>>(
		object: I
	): DiscoverySessionRequest {
		const message = createBaseDiscoverySessionRequest();
		message.agentName = object.agentName ?? '';
		message.semanticPipelineId = object.semanticPipelineId ?? '';
		message.sessionType =
			object.sessionType !== undefined && object.sessionType !== null
				? DiscoveryAgentType.fromPartial(object.sessionType)
				: undefined;
		return message;
	}
};

function createBaseDiscoveryAgentType(): DiscoveryAgentType {
	return { sessionType: '' };
}

export const DiscoveryAgentType = {
	encode(message: DiscoveryAgentType, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionType !== '') {
			writer.uint32(10).string(message.sessionType);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveryAgentType {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoveryAgentType();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionType = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoveryAgentType {
		return { sessionType: isSet(object.sessionType) ? globalThis.String(object.sessionType) : '' };
	},

	toJSON(message: DiscoveryAgentType): unknown {
		const obj: any = {};
		if (message.sessionType !== '') {
			obj.sessionType = message.sessionType;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoveryAgentType>, I>>(base?: I): DiscoveryAgentType {
		return DiscoveryAgentType.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoveryAgentType>, I>>(object: I): DiscoveryAgentType {
		const message = createBaseDiscoveryAgentType();
		message.sessionType = object.sessionType ?? '';
		return message;
	}
};

function createBaseDiscoverySessionResponse(): DiscoverySessionResponse {
	return { sessionId: '' };
}

export const DiscoverySessionResponse = {
	encode(message: DiscoverySessionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoverySessionResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoverySessionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoverySessionResponse {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: DiscoverySessionResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoverySessionResponse>, I>>(
		base?: I
	): DiscoverySessionResponse {
		return DiscoverySessionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoverySessionResponse>, I>>(
		object: I
	): DiscoverySessionResponse {
		const message = createBaseDiscoverySessionResponse();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseDiscoveryRequest(): DiscoveryRequest {
	return { sessionId: '', query: '' };
}

export const DiscoveryRequest = {
	encode(message: DiscoveryRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.query !== '') {
			writer.uint32(18).string(message.query);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveryRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoveryRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.query = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoveryRequest {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			query: isSet(object.query) ? globalThis.String(object.query) : ''
		};
	},

	toJSON(message: DiscoveryRequest): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.query !== '') {
			obj.query = message.query;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoveryRequest>, I>>(base?: I): DiscoveryRequest {
		return DiscoveryRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoveryRequest>, I>>(object: I): DiscoveryRequest {
		const message = createBaseDiscoveryRequest();
		message.sessionId = object.sessionId ?? '';
		message.query = object.query ?? '';
		return message;
	}
};

function createBaseDiscoveryResponse(): DiscoveryResponse {
	return { sessionId: '', query: '', insights: [] };
}

export const DiscoveryResponse = {
	encode(message: DiscoveryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.query !== '') {
			writer.uint32(18).string(message.query);
		}
		for (const v of message.insights) {
			Insight.encode(v!, writer.uint32(26).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveryResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoveryResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.query = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.insights.push(Insight.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoveryResponse {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			query: isSet(object.query) ? globalThis.String(object.query) : '',
			insights: globalThis.Array.isArray(object?.insights)
				? object.insights.map((e: any) => Insight.fromJSON(e))
				: []
		};
	},

	toJSON(message: DiscoveryResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.query !== '') {
			obj.query = message.query;
		}
		if (message.insights?.length) {
			obj.insights = message.insights.map((e) => Insight.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoveryResponse>, I>>(base?: I): DiscoveryResponse {
		return DiscoveryResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoveryResponse>, I>>(object: I): DiscoveryResponse {
		const message = createBaseDiscoveryResponse();
		message.sessionId = object.sessionId ?? '';
		message.query = object.query ?? '';
		message.insights = object.insights?.map((e) => Insight.fromPartial(e)) || [];
		return message;
	}
};

function createBaseStopDiscoverySessionRequest(): StopDiscoverySessionRequest {
	return { sessionId: '' };
}

export const StopDiscoverySessionRequest = {
	encode(
		message: StopDiscoverySessionRequest,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StopDiscoverySessionRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStopDiscoverySessionRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): StopDiscoverySessionRequest {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: StopDiscoverySessionRequest): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StopDiscoverySessionRequest>, I>>(
		base?: I
	): StopDiscoverySessionRequest {
		return StopDiscoverySessionRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StopDiscoverySessionRequest>, I>>(
		object: I
	): StopDiscoverySessionRequest {
		const message = createBaseStopDiscoverySessionRequest();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseStopDiscoverySessionResponse(): StopDiscoverySessionResponse {
	return { sessionId: '' };
}

export const StopDiscoverySessionResponse = {
	encode(
		message: StopDiscoverySessionResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StopDiscoverySessionResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStopDiscoverySessionResponse();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): StopDiscoverySessionResponse {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: StopDiscoverySessionResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StopDiscoverySessionResponse>, I>>(
		base?: I
	): StopDiscoverySessionResponse {
		return StopDiscoverySessionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StopDiscoverySessionResponse>, I>>(
		object: I
	): StopDiscoverySessionResponse {
		const message = createBaseStopDiscoverySessionResponse();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseInsight(): Insight {
	return { document: '', source: '', relationshipStrength: '', sentence: '', tags: '' };
}

export const Insight = {
	encode(message: Insight, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.document !== '') {
			writer.uint32(10).string(message.document);
		}
		if (message.source !== '') {
			writer.uint32(18).string(message.source);
		}
		if (message.relationshipStrength !== '') {
			writer.uint32(26).string(message.relationshipStrength);
		}
		if (message.sentence !== '') {
			writer.uint32(34).string(message.sentence);
		}
		if (message.tags !== '') {
			writer.uint32(42).string(message.tags);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): Insight {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsight();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.document = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.source = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.relationshipStrength = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					message.sentence = reader.string();
					continue;
				case 5:
					if (tag !== 42) {
						break;
					}

					message.tags = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): Insight {
		return {
			document: isSet(object.document) ? globalThis.String(object.document) : '',
			source: isSet(object.source) ? globalThis.String(object.source) : '',
			relationshipStrength: isSet(object.relationshipStrength)
				? globalThis.String(object.relationshipStrength)
				: '',
			sentence: isSet(object.sentence) ? globalThis.String(object.sentence) : '',
			tags: isSet(object.tags) ? globalThis.String(object.tags) : ''
		};
	},

	toJSON(message: Insight): unknown {
		const obj: any = {};
		if (message.document !== '') {
			obj.document = message.document;
		}
		if (message.source !== '') {
			obj.source = message.source;
		}
		if (message.relationshipStrength !== '') {
			obj.relationshipStrength = message.relationshipStrength;
		}
		if (message.sentence !== '') {
			obj.sentence = message.sentence;
		}
		if (message.tags !== '') {
			obj.tags = message.tags;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<Insight>, I>>(base?: I): Insight {
		return Insight.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Insight>, I>>(object: I): Insight {
		const message = createBaseInsight();
		message.document = object.document ?? '';
		message.source = object.source ?? '';
		message.relationshipStrength = object.relationshipStrength ?? '';
		message.sentence = object.sentence ?? '';
		message.tags = object.tags ?? '';
		return message;
	}
};

function createBaseDiscoverySessionRequestInfo(): DiscoverySessionRequestInfo {
	return { sessionId: '', request: undefined };
}

export const DiscoverySessionRequestInfo = {
	encode(
		message: DiscoverySessionRequestInfo,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.request !== undefined) {
			DiscoverySessionRequest.encode(message.request, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoverySessionRequestInfo {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoverySessionRequestInfo();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.sessionId = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.request = DiscoverySessionRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoverySessionRequestInfo {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			request: isSet(object.request) ? DiscoverySessionRequest.fromJSON(object.request) : undefined
		};
	},

	toJSON(message: DiscoverySessionRequestInfo): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.request !== undefined) {
			obj.request = DiscoverySessionRequest.toJSON(message.request);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoverySessionRequestInfo>, I>>(
		base?: I
	): DiscoverySessionRequestInfo {
		return DiscoverySessionRequestInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoverySessionRequestInfo>, I>>(
		object: I
	): DiscoverySessionRequestInfo {
		const message = createBaseDiscoverySessionRequestInfo();
		message.sessionId = object.sessionId ?? '';
		message.request =
			object.request !== undefined && object.request !== null
				? DiscoverySessionRequest.fromPartial(object.request)
				: undefined;
		return message;
	}
};

function createBaseDiscoverySessionRequestInfoList(): DiscoverySessionRequestInfoList {
	return { requests: [] };
}

export const DiscoverySessionRequestInfoList = {
	encode(
		message: DiscoverySessionRequestInfoList,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		for (const v of message.requests) {
			DiscoverySessionRequestInfo.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoverySessionRequestInfoList {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoverySessionRequestInfoList();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.requests.push(DiscoverySessionRequestInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoverySessionRequestInfoList {
		return {
			requests: globalThis.Array.isArray(object?.requests)
				? object.requests.map((e: any) => DiscoverySessionRequestInfo.fromJSON(e))
				: []
		};
	},

	toJSON(message: DiscoverySessionRequestInfoList): unknown {
		const obj: any = {};
		if (message.requests?.length) {
			obj.requests = message.requests.map((e) => DiscoverySessionRequestInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoverySessionRequestInfoList>, I>>(
		base?: I
	): DiscoverySessionRequestInfoList {
		return DiscoverySessionRequestInfoList.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoverySessionRequestInfoList>, I>>(
		object: I
	): DiscoverySessionRequestInfoList {
		const message = createBaseDiscoverySessionRequestInfoList();
		message.requests =
			object.requests?.map((e) => DiscoverySessionRequestInfo.fromPartial(e)) || [];
		return message;
	}
};

function createBaseEmpty(): Empty {
	return {};
}

export const Empty = {
	encode(_: Empty, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): Empty {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEmpty();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(_: any): Empty {
		return {};
	},

	toJSON(_: Empty): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<Empty>, I>>(base?: I): Empty {
		return Empty.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<Empty>, I>>(_: I): Empty {
		const message = createBaseEmpty();
		return message;
	}
};

function createBaseDiscoveryQueryInput(): DiscoveryQueryInput {
	return { maxSuggestions: 0 };
}

export const DiscoveryQueryInput = {
	encode(message: DiscoveryQueryInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.maxSuggestions !== 0) {
			writer.uint32(8).int32(message.maxSuggestions);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveryQueryInput {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoveryQueryInput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 8) {
						break;
					}

					message.maxSuggestions = reader.int32();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoveryQueryInput {
		return {
			maxSuggestions: isSet(object.maxSuggestions) ? globalThis.Number(object.maxSuggestions) : 0
		};
	},

	toJSON(message: DiscoveryQueryInput): unknown {
		const obj: any = {};
		if (message.maxSuggestions !== 0) {
			obj.maxSuggestions = Math.round(message.maxSuggestions);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoveryQueryInput>, I>>(base?: I): DiscoveryQueryInput {
		return DiscoveryQueryInput.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoveryQueryInput>, I>>(
		object: I
	): DiscoveryQueryInput {
		const message = createBaseDiscoveryQueryInput();
		message.maxSuggestions = object.maxSuggestions ?? 0;
		return message;
	}
};

function createBaseQuerySuggestion(): QuerySuggestion {
	return { query: '', frequency: 0 };
}

export const QuerySuggestion = {
	encode(message: QuerySuggestion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.query !== '') {
			writer.uint32(10).string(message.query);
		}
		if (message.frequency !== 0) {
			writer.uint32(16).int64(message.frequency);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): QuerySuggestion {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseQuerySuggestion();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.query = reader.string();
					continue;
				case 2:
					if (tag !== 16) {
						break;
					}

					message.frequency = longToNumber(reader.int64() as Long);
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): QuerySuggestion {
		return {
			query: isSet(object.query) ? globalThis.String(object.query) : '',
			frequency: isSet(object.frequency) ? globalThis.Number(object.frequency) : 0
		};
	},

	toJSON(message: QuerySuggestion): unknown {
		const obj: any = {};
		if (message.query !== '') {
			obj.query = message.query;
		}
		if (message.frequency !== 0) {
			obj.frequency = Math.round(message.frequency);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<QuerySuggestion>, I>>(base?: I): QuerySuggestion {
		return QuerySuggestion.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<QuerySuggestion>, I>>(object: I): QuerySuggestion {
		const message = createBaseQuerySuggestion();
		message.query = object.query ?? '';
		message.frequency = object.frequency ?? 0;
		return message;
	}
};

function createBaseDiscoveryQueryOutput(): DiscoveryQueryOutput {
	return { suggestions: [] };
}

export const DiscoveryQueryOutput = {
	encode(message: DiscoveryQueryOutput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		for (const v of message.suggestions) {
			QuerySuggestion.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): DiscoveryQueryOutput {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseDiscoveryQueryOutput();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.suggestions.push(QuerySuggestion.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): DiscoveryQueryOutput {
		return {
			suggestions: globalThis.Array.isArray(object?.suggestions)
				? object.suggestions.map((e: any) => QuerySuggestion.fromJSON(e))
				: []
		};
	},

	toJSON(message: DiscoveryQueryOutput): unknown {
		const obj: any = {};
		if (message.suggestions?.length) {
			obj.suggestions = message.suggestions.map((e) => QuerySuggestion.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<DiscoveryQueryOutput>, I>>(base?: I): DiscoveryQueryOutput {
		return DiscoveryQueryOutput.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<DiscoveryQueryOutput>, I>>(
		object: I
	): DiscoveryQueryOutput {
		const message = createBaseDiscoveryQueryOutput();
		message.suggestions = object.suggestions?.map((e) => QuerySuggestion.fromPartial(e)) || [];
		return message;
	}
};

/** The Discovery service provides a method to query insights from data */
export interface Discovery {
	/** Start a discovery session to query insights from data */
	StartDiscoverySession(request: DiscoverySessionRequest): Promise<DiscoverySessionResponse>;
	/** Query insights from data */
	DiscoverInsights(request: DiscoveryRequest): Promise<DiscoveryResponse>;
	/** Stop the discovery session */
	StopDiscoverySession(request: StopDiscoverySessionRequest): Promise<StopDiscoverySessionResponse>;
	/** List all discovery sessions */
	ListDiscoverySessions(request: Empty): Promise<DiscoverySessionRequestInfoList>;
	/** Autogenerate discovery queries */
	AutogenerateDiscoveryQueries(request: DiscoveryQueryInput): Promise<DiscoveryQueryOutput>;
}

export const DiscoveryServiceName = 'querent.discovery.Discovery';
export class DiscoveryClientImpl implements Discovery {
	private readonly rpc: Rpc;
	private readonly service: string;
	constructor(rpc: Rpc, opts?: { service?: string }) {
		this.service = opts?.service || DiscoveryServiceName;
		this.rpc = rpc;
		this.StartDiscoverySession = this.StartDiscoverySession.bind(this);
		this.DiscoverInsights = this.DiscoverInsights.bind(this);
		this.StopDiscoverySession = this.StopDiscoverySession.bind(this);
		this.ListDiscoverySessions = this.ListDiscoverySessions.bind(this);
		this.AutogenerateDiscoveryQueries = this.AutogenerateDiscoveryQueries.bind(this);
	}
	StartDiscoverySession(request: DiscoverySessionRequest): Promise<DiscoverySessionResponse> {
		const data = DiscoverySessionRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'StartDiscoverySession', data);
		return promise.then((data) => DiscoverySessionResponse.decode(_m0.Reader.create(data)));
	}

	DiscoverInsights(request: DiscoveryRequest): Promise<DiscoveryResponse> {
		const data = DiscoveryRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'DiscoverInsights', data);
		return promise.then((data) => DiscoveryResponse.decode(_m0.Reader.create(data)));
	}

	StopDiscoverySession(
		request: StopDiscoverySessionRequest
	): Promise<StopDiscoverySessionResponse> {
		const data = StopDiscoverySessionRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'StopDiscoverySession', data);
		return promise.then((data) => StopDiscoverySessionResponse.decode(_m0.Reader.create(data)));
	}

	ListDiscoverySessions(request: Empty): Promise<DiscoverySessionRequestInfoList> {
		const data = Empty.encode(request).finish();
		const promise = this.rpc.request(this.service, 'ListDiscoverySessions', data);
		return promise.then((data) => DiscoverySessionRequestInfoList.decode(_m0.Reader.create(data)));
	}

	AutogenerateDiscoveryQueries(request: DiscoveryQueryInput): Promise<DiscoveryQueryOutput> {
		const data = DiscoveryQueryInput.encode(request).finish();
		const promise = this.rpc.request(this.service, 'AutogenerateDiscoveryQueries', data);
		return promise.then((data) => DiscoveryQueryOutput.decode(_m0.Reader.create(data)));
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
