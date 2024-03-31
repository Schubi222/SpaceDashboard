import { type Writable, writable } from 'svelte/store';

export const outestError: Writable<string> = writable();
export function setOutestError(string: string) {
	console.error('OUTEST ERROR: ', string);
	outestError.set(string);
}
