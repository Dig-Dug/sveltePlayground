<script>
import {count} from './lib/Stores/stores.js';
import {countOther,name,greeting} from './lib/Stores/stores.js';

import {time, elapsed} from './lib/Stores/stores.js';
import Incrementer from './lib/Stores/Incrementer.svelte';
import Decrementer from './lib/Stores/Decrementer.svelte';
import Resetter from './lib/Stores/Resetter.svelte';

import { tweened } from 'svelte/motion';
import { cubicOut } from 'svelte/easing';
import {spring} from 'svelte/motion';
import AppFirst from './AppFirst.svelte';

import Transitions from './lib/transitions.svelte';
import TransitionToDo from  './lib/transitionToDo.svelte';
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


//Motion Tweened
 const progress = tweened(0, {
		duration: 400,
		easing: cubicOut
	});
//Motion Tweened    
//Motion Spring
 let coords = spring({ x: 25, y: 50 }, {
		stiffness: 0.1,
		damping: 0.25
	});
 let size = spring(10);
//Motion Spring


</script>
<div class="container">
<div>
    <h1 class="try">the count is {$count}</h1>  <!--$count --> 
    <Incrementer/>
    <Decrementer/>
    <Resetter/>

    <!-- Custom Stores -->
        <h1 class="to">the count is {$countOther}</h1>
        <button on:click = {countOther.increment}>+</button>
        <button on:click = {countOther.decrement}>-</button>
        <button on:click = {countOther.reset}>=</button>
    <!-- Custom Stores -->

    <!-- Store Bindings -->
        <h1>{$greeting}</h1>
        <input bind:value={$name}>
        <button on:click="{() => $name += '!'}">Click and add !!!</button>
    <!-- Store Bindings -->

    <!--Motion tweened  https://svelte.dev/tutorial/tweened-->
        <progress value={$progress}></progress>

        <button on:click="{() => progress.set(0)}">
            0%
        </button>

        <button on:click="{() => progress.set(0.25)}">
            25%
        </button>

        <button on:click="{() => progress.set(0.5)}">
            50%
        </button>

        <button on:click="{() => progress.set(0.75)}">
            75%
        </button>

        <button on:click="{() => progress.set(1)}">
            100%
        </button>
    <!--Motion tweened -->
    <h1>Transitions</h1>
    <Transitions/>

</div>
<div>
        <!-- Readable Stores -->
        <h1>The time is {formatter.format($time)}</h1>
        <!-- Derived Stores -->
        <p>
            This page has been open for
            {$elapsed} {$elapsed === 1 ? 'second' : 'seconds'}
        </p>

<!--Motion spring https://svelte.dev/tutorial/spring-->
    <div style="position: absolute; right: 1em;">
        <label>
            <h3>stiffness ({coords.stiffness})</h3>
            <input bind:value={coords.stiffness} type="range" min="0" max="1" step="0.01">
        </label>

        <label>
            <h3>damping ({coords.damping})</h3>
            <input bind:value={coords.damping} type="range" min="0" max="1" step="0.01">
        </label>
    </div>

    <svg
        on:mousemove="{e => coords.set({ x: e.clientX, y: e.clientY })}"
        on:mousedown="{() => size.set(30)}"
        on:mouseup="{() => size.set(10)}"
    >
        <circle cx={$coords.x} cy={$coords.y} r={$size}/>
    </svg>
<!--Motion spring-->


</div> 
<div>
    <TransitionToDo/>
</div>
<div>
   
</div>
</div>













<style>
    .try{
        font-family: 'Oswald', sans-serif;
        color: blueviolet;
    }
    .to{
        color: burlywood;
    }
    progress {
        margin-top: 12px;
		display: block;
		width: 38%;
	}
    svg {
        background-color: rgba(0, 255, 255, 0.137);
		width: 100%;
		height: 100%;
	}
	circle {
		fill: #ff3e00;
	}
    .container {
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  grid-template-rows: 1fr 1fr; 
  gap: 0px 0px; 
  grid-template-areas: 
    ". ."
    ". ."; 
}
</style>