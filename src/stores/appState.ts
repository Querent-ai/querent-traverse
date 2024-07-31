import { writable, get } from 'svelte/store';
import { CollectorConfig } from '../routes/codegen/protos/semantics';

interface PipelineState {
	mode: 'idle' | 'running' | 'completed' | 'exited';
	results: any | null;
	error: string | null;
}

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

export function updatePipeline(
	mode: PipelineState['mode'],
	results: any = null,
	error: string = ''
): void {
	pipelineState.set({ mode, results, error });
}

export function getCurrentDataSources(): CollectorConfig[] {
	console.log('Data sources are ', dataSources);
	return get(dataSources);
}

export function getCurrentPipelineState(): PipelineState {
	return get(pipelineState);
}
