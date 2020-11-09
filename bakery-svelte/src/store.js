import { writable } from 'svelte/store';

export const user = writable();
export const componente = writable('Login');


/**
 * Opcional:
 */
/*user.subscribe(value => {
	console.log(value);
});*/

