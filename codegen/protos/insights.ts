// Code generated by protoc-gen-ts_proto. DO NOT EDIT.
// versions:
//   protoc-gen-ts_proto  v1.181.1
//   protoc               v3.12.4
// source: protos/insights.proto

/* eslint-disable */
import * as _m0 from 'protobufjs/minimal';

export const protobufPackage = 'querent.insights';

export interface InsightAnalystRequest {
	/** Registered ID of the insight; call /insights endpoint for available insights */
	id: string;
	/** Optional discovery session ID */
	discoverySessionId?: string | undefined;
	/** Optional semantic pipeline ID */
	semanticPipelineId?: string | undefined;
	/** Additional insight-specific parameters corresponding to the ID */
	additionalOptions: { [key: string]: string };
}

export interface InsightAnalystRequest_AdditionalOptionsEntry {
	key: string;
	value: string;
}

export interface InsightAnalystResponse {
	/** The ID of the insight session */
	sessionId: string;
}

export interface InsightQuery {
	/** The ID of the insight session */
	sessionId: string;
	/** The query to be used for the insight */
	query: string;
}

export interface InsightQueryResponse {
	/** The ID of the insight session */
	sessionId: string;
	/** Hash of the query */
	queryHash: string;
	/** The response from the insight */
	response: string;
}

export interface StopInsightSessionRequest {
	/** The ID of the insight session */
	sessionId: string;
}

export interface StopInsightSessionResponse {
	/** The ID of the insight session */
	sessionId: string;
}

export interface EmptyInput {}

export interface InsightRequestInfo {
	sessionId: string;
	request: InsightAnalystRequest | undefined;
}

export interface InsightRequestInfoList {
	requests: InsightRequestInfo[];
}

function createBaseInsightAnalystRequest(): InsightAnalystRequest {
	return {
		id: '',
		discoverySessionId: undefined,
		semanticPipelineId: undefined,
		additionalOptions: {}
	};
}

export const InsightAnalystRequest = {
	encode(message: InsightAnalystRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.id !== '') {
			writer.uint32(10).string(message.id);
		}
		if (message.discoverySessionId !== undefined) {
			writer.uint32(18).string(message.discoverySessionId);
		}
		if (message.semanticPipelineId !== undefined) {
			writer.uint32(26).string(message.semanticPipelineId);
		}
		Object.entries(message.additionalOptions).forEach(([key, value]) => {
			InsightAnalystRequest_AdditionalOptionsEntry.encode(
				{ key: key as any, value },
				writer.uint32(34).fork()
			).ldelim();
		});
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightAnalystRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightAnalystRequest();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.id = reader.string();
					continue;
				case 2:
					if (tag !== 18) {
						break;
					}

					message.discoverySessionId = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.semanticPipelineId = reader.string();
					continue;
				case 4:
					if (tag !== 34) {
						break;
					}

					const entry4 = InsightAnalystRequest_AdditionalOptionsEntry.decode(
						reader,
						reader.uint32()
					);
					if (entry4.value !== undefined) {
						message.additionalOptions[entry4.key] = entry4.value;
					}
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InsightAnalystRequest {
		return {
			id: isSet(object.id) ? globalThis.String(object.id) : '',
			discoverySessionId: isSet(object.discoverySessionId)
				? globalThis.String(object.discoverySessionId)
				: undefined,
			semanticPipelineId: isSet(object.semanticPipelineId)
				? globalThis.String(object.semanticPipelineId)
				: undefined,
			additionalOptions: isObject(object.additionalOptions)
				? Object.entries(object.additionalOptions).reduce<{ [key: string]: string }>(
						(acc, [key, value]) => {
							acc[key] = String(value);
							return acc;
						},
						{}
					)
				: {}
		};
	},

	toJSON(message: InsightAnalystRequest): unknown {
		const obj: any = {};
		if (message.id !== '') {
			obj.id = message.id;
		}
		if (message.discoverySessionId !== undefined) {
			obj.discoverySessionId = message.discoverySessionId;
		}
		if (message.semanticPipelineId !== undefined) {
			obj.semanticPipelineId = message.semanticPipelineId;
		}
		if (message.additionalOptions) {
			const entries = Object.entries(message.additionalOptions);
			if (entries.length > 0) {
				obj.additionalOptions = {};
				entries.forEach(([k, v]) => {
					obj.additionalOptions[k] = v;
				});
			}
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightAnalystRequest>, I>>(base?: I): InsightAnalystRequest {
		return InsightAnalystRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightAnalystRequest>, I>>(
		object: I
	): InsightAnalystRequest {
		const message = createBaseInsightAnalystRequest();
		message.id = object.id ?? '';
		message.discoverySessionId = object.discoverySessionId ?? undefined;
		message.semanticPipelineId = object.semanticPipelineId ?? undefined;
		message.additionalOptions = Object.entries(object.additionalOptions ?? {}).reduce<{
			[key: string]: string;
		}>((acc, [key, value]) => {
			if (value !== undefined) {
				acc[key] = globalThis.String(value);
			}
			return acc;
		}, {});
		return message;
	}
};

function createBaseInsightAnalystRequest_AdditionalOptionsEntry(): InsightAnalystRequest_AdditionalOptionsEntry {
	return { key: '', value: '' };
}

export const InsightAnalystRequest_AdditionalOptionsEntry = {
	encode(
		message: InsightAnalystRequest_AdditionalOptionsEntry,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.key !== '') {
			writer.uint32(10).string(message.key);
		}
		if (message.value !== '') {
			writer.uint32(18).string(message.value);
		}
		return writer;
	},

	decode(
		input: _m0.Reader | Uint8Array,
		length?: number
	): InsightAnalystRequest_AdditionalOptionsEntry {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightAnalystRequest_AdditionalOptionsEntry();
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
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InsightAnalystRequest_AdditionalOptionsEntry {
		return {
			key: isSet(object.key) ? globalThis.String(object.key) : '',
			value: isSet(object.value) ? globalThis.String(object.value) : ''
		};
	},

	toJSON(message: InsightAnalystRequest_AdditionalOptionsEntry): unknown {
		const obj: any = {};
		if (message.key !== '') {
			obj.key = message.key;
		}
		if (message.value !== '') {
			obj.value = message.value;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightAnalystRequest_AdditionalOptionsEntry>, I>>(
		base?: I
	): InsightAnalystRequest_AdditionalOptionsEntry {
		return InsightAnalystRequest_AdditionalOptionsEntry.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightAnalystRequest_AdditionalOptionsEntry>, I>>(
		object: I
	): InsightAnalystRequest_AdditionalOptionsEntry {
		const message = createBaseInsightAnalystRequest_AdditionalOptionsEntry();
		message.key = object.key ?? '';
		message.value = object.value ?? '';
		return message;
	}
};

function createBaseInsightAnalystResponse(): InsightAnalystResponse {
	return { sessionId: '' };
}

export const InsightAnalystResponse = {
	encode(message: InsightAnalystResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightAnalystResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightAnalystResponse();
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

	fromJSON(object: any): InsightAnalystResponse {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: InsightAnalystResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightAnalystResponse>, I>>(
		base?: I
	): InsightAnalystResponse {
		return InsightAnalystResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightAnalystResponse>, I>>(
		object: I
	): InsightAnalystResponse {
		const message = createBaseInsightAnalystResponse();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseInsightQuery(): InsightQuery {
	return { sessionId: '', query: '' };
}

export const InsightQuery = {
	encode(message: InsightQuery, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.query !== '') {
			writer.uint32(18).string(message.query);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightQuery {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightQuery();
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

	fromJSON(object: any): InsightQuery {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			query: isSet(object.query) ? globalThis.String(object.query) : ''
		};
	},

	toJSON(message: InsightQuery): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.query !== '') {
			obj.query = message.query;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightQuery>, I>>(base?: I): InsightQuery {
		return InsightQuery.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightQuery>, I>>(object: I): InsightQuery {
		const message = createBaseInsightQuery();
		message.sessionId = object.sessionId ?? '';
		message.query = object.query ?? '';
		return message;
	}
};

function createBaseInsightQueryResponse(): InsightQueryResponse {
	return { sessionId: '', queryHash: '', response: '' };
}

export const InsightQueryResponse = {
	encode(message: InsightQueryResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.queryHash !== '') {
			writer.uint32(18).string(message.queryHash);
		}
		if (message.response !== '') {
			writer.uint32(26).string(message.response);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightQueryResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightQueryResponse();
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

					message.queryHash = reader.string();
					continue;
				case 3:
					if (tag !== 26) {
						break;
					}

					message.response = reader.string();
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InsightQueryResponse {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			queryHash: isSet(object.queryHash) ? globalThis.String(object.queryHash) : '',
			response: isSet(object.response) ? globalThis.String(object.response) : ''
		};
	},

	toJSON(message: InsightQueryResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.queryHash !== '') {
			obj.queryHash = message.queryHash;
		}
		if (message.response !== '') {
			obj.response = message.response;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightQueryResponse>, I>>(base?: I): InsightQueryResponse {
		return InsightQueryResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightQueryResponse>, I>>(
		object: I
	): InsightQueryResponse {
		const message = createBaseInsightQueryResponse();
		message.sessionId = object.sessionId ?? '';
		message.queryHash = object.queryHash ?? '';
		message.response = object.response ?? '';
		return message;
	}
};

function createBaseStopInsightSessionRequest(): StopInsightSessionRequest {
	return { sessionId: '' };
}

export const StopInsightSessionRequest = {
	encode(message: StopInsightSessionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StopInsightSessionRequest {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStopInsightSessionRequest();
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

	fromJSON(object: any): StopInsightSessionRequest {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: StopInsightSessionRequest): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StopInsightSessionRequest>, I>>(
		base?: I
	): StopInsightSessionRequest {
		return StopInsightSessionRequest.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StopInsightSessionRequest>, I>>(
		object: I
	): StopInsightSessionRequest {
		const message = createBaseStopInsightSessionRequest();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseStopInsightSessionResponse(): StopInsightSessionResponse {
	return { sessionId: '' };
}

export const StopInsightSessionResponse = {
	encode(
		message: StopInsightSessionResponse,
		writer: _m0.Writer = _m0.Writer.create()
	): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): StopInsightSessionResponse {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseStopInsightSessionResponse();
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

	fromJSON(object: any): StopInsightSessionResponse {
		return { sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '' };
	},

	toJSON(message: StopInsightSessionResponse): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<StopInsightSessionResponse>, I>>(
		base?: I
	): StopInsightSessionResponse {
		return StopInsightSessionResponse.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<StopInsightSessionResponse>, I>>(
		object: I
	): StopInsightSessionResponse {
		const message = createBaseStopInsightSessionResponse();
		message.sessionId = object.sessionId ?? '';
		return message;
	}
};

function createBaseEmptyInput(): EmptyInput {
	return {};
}

export const EmptyInput = {
	encode(_: EmptyInput, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): EmptyInput {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseEmptyInput();
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

	fromJSON(_: any): EmptyInput {
		return {};
	},

	toJSON(_: EmptyInput): unknown {
		const obj: any = {};
		return obj;
	},

	create<I extends Exact<DeepPartial<EmptyInput>, I>>(base?: I): EmptyInput {
		return EmptyInput.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<EmptyInput>, I>>(_: I): EmptyInput {
		const message = createBaseEmptyInput();
		return message;
	}
};

function createBaseInsightRequestInfo(): InsightRequestInfo {
	return { sessionId: '', request: undefined };
}

export const InsightRequestInfo = {
	encode(message: InsightRequestInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		if (message.sessionId !== '') {
			writer.uint32(10).string(message.sessionId);
		}
		if (message.request !== undefined) {
			InsightAnalystRequest.encode(message.request, writer.uint32(18).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightRequestInfo {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightRequestInfo();
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

					message.request = InsightAnalystRequest.decode(reader, reader.uint32());
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InsightRequestInfo {
		return {
			sessionId: isSet(object.sessionId) ? globalThis.String(object.sessionId) : '',
			request: isSet(object.request) ? InsightAnalystRequest.fromJSON(object.request) : undefined
		};
	},

	toJSON(message: InsightRequestInfo): unknown {
		const obj: any = {};
		if (message.sessionId !== '') {
			obj.sessionId = message.sessionId;
		}
		if (message.request !== undefined) {
			obj.request = InsightAnalystRequest.toJSON(message.request);
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightRequestInfo>, I>>(base?: I): InsightRequestInfo {
		return InsightRequestInfo.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightRequestInfo>, I>>(object: I): InsightRequestInfo {
		const message = createBaseInsightRequestInfo();
		message.sessionId = object.sessionId ?? '';
		message.request =
			object.request !== undefined && object.request !== null
				? InsightAnalystRequest.fromPartial(object.request)
				: undefined;
		return message;
	}
};

function createBaseInsightRequestInfoList(): InsightRequestInfoList {
	return { requests: [] };
}

export const InsightRequestInfoList = {
	encode(message: InsightRequestInfoList, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
		for (const v of message.requests) {
			InsightRequestInfo.encode(v!, writer.uint32(10).fork()).ldelim();
		}
		return writer;
	},

	decode(input: _m0.Reader | Uint8Array, length?: number): InsightRequestInfoList {
		const reader = input instanceof _m0.Reader ? input : _m0.Reader.create(input);
		let end = length === undefined ? reader.len : reader.pos + length;
		const message = createBaseInsightRequestInfoList();
		while (reader.pos < end) {
			const tag = reader.uint32();
			switch (tag >>> 3) {
				case 1:
					if (tag !== 10) {
						break;
					}

					message.requests.push(InsightRequestInfo.decode(reader, reader.uint32()));
					continue;
			}
			if ((tag & 7) === 4 || tag === 0) {
				break;
			}
			reader.skipType(tag & 7);
		}
		return message;
	},

	fromJSON(object: any): InsightRequestInfoList {
		return {
			requests: globalThis.Array.isArray(object?.requests)
				? object.requests.map((e: any) => InsightRequestInfo.fromJSON(e))
				: []
		};
	},

	toJSON(message: InsightRequestInfoList): unknown {
		const obj: any = {};
		if (message.requests?.length) {
			obj.requests = message.requests.map((e) => InsightRequestInfo.toJSON(e));
		}
		return obj;
	},

	create<I extends Exact<DeepPartial<InsightRequestInfoList>, I>>(
		base?: I
	): InsightRequestInfoList {
		return InsightRequestInfoList.fromPartial(base ?? ({} as any));
	},
	fromPartial<I extends Exact<DeepPartial<InsightRequestInfoList>, I>>(
		object: I
	): InsightRequestInfoList {
		const message = createBaseInsightRequestInfoList();
		message.requests = object.requests?.map((e) => InsightRequestInfo.fromPartial(e)) || [];
		return message;
	}
};

/** InsightService is a service that provides insights from data */
export interface InsightService {
	/** Request creation of an insight session */
	CreateInsightSession(request: InsightAnalystRequest): Promise<InsightAnalystResponse>;
	/** Provide the input for an insight and get a response (for query-based insights) */
	ProvideInsightInput(request: InsightQuery): Promise<InsightQueryResponse>;
	/** Stop an insight session */
	StopInsightSession(request: StopInsightSessionRequest): Promise<StopInsightSessionResponse>;
	/** List all insights requests stored */
	ListInsightRequests(request: EmptyInput): Promise<InsightRequestInfoList>;
}

export const InsightServiceServiceName = 'querent.insights.InsightService';
export class InsightServiceClientImpl implements InsightService {
	private readonly rpc: Rpc;
	private readonly service: string;
	constructor(rpc: Rpc, opts?: { service?: string }) {
		this.service = opts?.service || InsightServiceServiceName;
		this.rpc = rpc;
		this.CreateInsightSession = this.CreateInsightSession.bind(this);
		this.ProvideInsightInput = this.ProvideInsightInput.bind(this);
		this.StopInsightSession = this.StopInsightSession.bind(this);
		this.ListInsightRequests = this.ListInsightRequests.bind(this);
	}
	CreateInsightSession(request: InsightAnalystRequest): Promise<InsightAnalystResponse> {
		const data = InsightAnalystRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'CreateInsightSession', data);
		return promise.then((data) => InsightAnalystResponse.decode(_m0.Reader.create(data)));
	}

	ProvideInsightInput(request: InsightQuery): Promise<InsightQueryResponse> {
		const data = InsightQuery.encode(request).finish();
		const promise = this.rpc.request(this.service, 'ProvideInsightInput', data);
		return promise.then((data) => InsightQueryResponse.decode(_m0.Reader.create(data)));
	}

	StopInsightSession(request: StopInsightSessionRequest): Promise<StopInsightSessionResponse> {
		const data = StopInsightSessionRequest.encode(request).finish();
		const promise = this.rpc.request(this.service, 'StopInsightSession', data);
		return promise.then((data) => StopInsightSessionResponse.decode(_m0.Reader.create(data)));
	}

	ListInsightRequests(request: EmptyInput): Promise<InsightRequestInfoList> {
		const data = EmptyInput.encode(request).finish();
		const promise = this.rpc.request(this.service, 'ListInsightRequests', data);
		return promise.then((data) => InsightRequestInfoList.decode(_m0.Reader.create(data)));
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

function isObject(value: any): boolean {
	return typeof value === 'object' && value !== null;
}

function isSet(value: any): boolean {
	return value !== null && value !== undefined;
}
