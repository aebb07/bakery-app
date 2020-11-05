import { writable } from 'svelte/store';

export const user = writable();


/**
 * Opcional:
 */
/*user.subscribe(value => {
	console.log(value);
});*/

