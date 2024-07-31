import { writable, get } from 'svelte/store';
import { CollectorConfig } from '../routes/codegen/protos/semantics';

export const isVisible = writable(false);

//collector metadata - id, name, type

function saveToLocalStorage(key: string, value: any) {
	if (typeof window !== 'undefined') {
		localStorage.setItem(key, JSON.stringify(value));
	}
}

function getFromLocalStorage(key: string, defaultValue: any) {
	if (typeof window !== 'undefined') {
		const storedValue = localStorage.getItem(key);
		if (storedValue) {
			return JSON.parse(storedValue);
		}
		return defaultValue;
	}
}

export function clearDataSources(): void {
	dataSources.set([]);
	saveToLocalStorage('dataSources', []);
}

const initialStateDataSources: CollectorConfig[] = getFromLocalStorage('dataSources', []);
const initialStatePipeline: PipelineState = getFromLocalStorage('pipelineState', {
	mode: 'idle',
	results: null,
	error: null
});

interface PipelineState {
	mode: 'idle' | 'running' | 'completed' | 'exited';
	results: any | null;
	error: string | null;
}

export const dataSources = writable<CollectorConfig[]>(initialStateDataSources);
export const pipelineState = writable<PipelineState>(initialStatePipeline);

dataSources.subscribe(($dataSources) => {
	saveToLocalStorage('dataSources', $dataSources);
});

pipelineState.subscribe(($pipelineState) => {
	saveToLocalStorage('pipelineState', $pipelineState);
});

// Function to add a data source
export function addDataSource(source: CollectorConfig): void {
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
	return get(dataSources);
}

export function getCurrentPipelineState(): PipelineState {
	return get(pipelineState);
}
