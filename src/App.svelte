<script>
import {count} from './lib/Stores/stores.js';
import {countOther,name,greeting} from './lib/Stores/stores.js';

import {time, elapsed} from './lib/Stores/stores.js';
import Incrementer from './lib/Stores/Incrementer.svelte';
import Decrementer from './lib/Stores/Decrementer.svelte';
import Resetter from './lib/Stores/Resetter.svelte';

//import {onDestroy} from 'svelte';
let countValue; //not used
  count.subscribe( value => {
  countValue = value;
  }
)
//auto-subscriptions//when component instantiated and destroyed
 //many times would result in memory leak, call it in onDestroy hook
 /* const unsubscribe = count.subscribe(
    value => {countValue = value;}
 );
onDestroy(unsubscribe);  <--replace it with store value reference($count) */

const formatter = new Intl.DateTimeFormat('en',{
    hour12: true,
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit'
});
</script>
<h1 class="try">the count is {$count}</h1>  <!--$count --> 
<Incrementer/>
<Decrementer/>
<Resetter/>
<!-- Readable Stores -->
<h1>The time is {formatter.format($time)}</h1>
<!-- Derived Stores -->
<p>
	This page has been open for
	{$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
</p>
<!-- Custom Stores -->
<h1 class="to">the count is {$countOther}</h1>
<button on:click = {countOther.increment}>+</button>
<button on:click = {countOther.decrement}>-</button>
<button on:click = {countOther.reset}>=</button>

<!-- Store Bindings -->
<h1>{$greeting}</h1>
<input bind:value={$name}>
<button on:click="{() => $name += '!'}">Click and add !!!</button>


<style>
    .try{
        font-family: 'Oswald', sans-serif;
        color: blueviolet;
    }
    .to{
        color: burlywood;
    }
</style>