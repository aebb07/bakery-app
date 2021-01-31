import { writable } from 'svelte/store';

export const user = writable();
export const componente = writable('Login');

export let products = writable( [
	{id: 1, name:'Pan Francés', count: 0, price: 1,componente: "PanFrances"},
	{id: 2, name:'Canillas', count: 0, price: 1,componente: "Canillas"},
	{id: 3, name:'Piñitas Saladas', count: 0, price: 1,componente: "Piñitas Saladas"},
	{id: 4, name:'Bombas Saladas', count: 0, price: 1,componente: "Bombas Saladas"},
	{id: 5, name:'Golfeados', count: 0, price: 1,componente: "Golfeados"}
])




/**
 * Opcional:
 */
/*user.subscribe(value => {
	console.log(value);
});*/

