import { writable, get } from 'svelte/store';
export const isVisible = writable(false);

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

const initialStateDataSources: CollectorMetadata[] = getFromLocalStorage('dataSources', []);
const initialStatePipeline: PipelineState = getFromLocalStorage('pipelineState', {
	mode: 'idle',
	results: null,
	error: null
});

export interface CollectorMetadata {
	id: string;
	name: string;
	type: string;
}

interface PipelineState {
	mode: 'idle' | 'running' | 'completed' | 'exited';
	results: any | null;
	error: string | null;
}

export const dataSources = writable<CollectorMetadata[]>(initialStateDataSources);
export const pipelineState = writable<PipelineState>(initialStatePipeline);

dataSources.subscribe(($dataSources) => {
	saveToLocalStorage('dataSources', $dataSources);
});

pipelineState.subscribe(($pipelineState) => {
	saveToLocalStorage('pipelineState', $pipelineState);
});

export function addDataSource(source: CollectorMetadata): void {
	dataSources.update((currentSources) => [...currentSources, source]);
}

export function updatePipeline(
	mode: PipelineState['mode'],
	results: any = null,
	error: string = ''
): void {
	pipelineState.set({ mode, results, error });
}

export function getCurrentDataSources(): CollectorMetadata[] {
	return get(dataSources);
}

export function getCurrentPipelineState(): PipelineState {
	return get(pipelineState);
}

export function deleteSourcefromList(id: string): void {
	dataSources.update((currentSources) => {
		const updatedSources = currentSources.filter((source) => source.id !== id);
		saveToLocalStorage('dataSources', updatedSources);
		return updatedSources;
	});
}
