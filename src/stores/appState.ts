// src/store.ts
import { writable, get } from 'svelte/store';
import { CollectorConfig } from '../routes/codegen/protos/semantics';

// Define TypeScript interfaces for clarity and type safety
interface PipelineState {
	mode: 'idle' | 'running' | 'completed' | 'exited';
	results: any | null;
	error: string | null;
}

// Creating writable stores for data sources and the pipeline state
export const dataSources = writable<CollectorConfig[]>([]);
export const pipelineState = writable<PipelineState>({
	mode: 'idle',
	results: null,
	error: null
});

// Function to add a data source
export function addDataSource(source: CollectorConfig): void {
	console.log('Setting the data as ', source);
	dataSources.update((currentSources) => [...currentSources, source]);
}

// Function to update the pipeline state
export function updatePipeline(
	mode: PipelineState['mode'],
	results: any = null,
	error: string = ''
): void {
	pipelineState.set({ mode, results, error });
}

// Functions to get the current state of stores
export function getCurrentDataSources(): CollectorConfig[] {
	console.log('Data sources are ', dataSources);
	return get(dataSources);
}

export function getCurrentPipelineState(): PipelineState {
	return get(pipelineState);
}
