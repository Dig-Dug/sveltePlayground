//writable store (set, update and subscribe methods)
import {writable,derived} from 'svelte/store';

import{readable} from 'svelte/store';

//AUTO SUBSCRIPTION
export const count = writable(0);

//READABLE STORES
//1st arg can be null or undefined
  export const time = readable(new Date(), function 
   /*  2nd arg is start function, called when store gets
    first subscription */
    start(set) {
        const interval = setInterval(() => {
            set(new Date());
        }, 1000);
        
    /*stop called when last subscriber unsubscribes*/
    return function stop() {
        clearInterval(interval)
    };
});

//DERIVED STORES
const start = new Date();
export const elapsed = derived(
    time,
     $time => Math.round(($time - start) / 1000)
);

//CUSTOM STORES
 function createCount(){
    const {subscribe, set, update} = writable(0);
    return{subscribe,
    increment:() => update(n => n + 1),
    decrement:() => update(n => n - 1),
    reset:() => set(0),
  };
 }
export const countOther = createCount();

//STORES BINDINGS
export const name = writable('world'); //Writable store
export const greeting = derived(       //derived store
 name,
	$name => `Hello ${$name}!`
);
