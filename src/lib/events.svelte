<script>
import { createEventDispatcher } from 'svelte';    
	let m = { x: 0, y: 0 };

	function handleMousemove(event) {
		m.x = event.clientX;
		m.y = event.clientY;
	}
    //Event Modifier complete list https://svelte.dev/tutorial/event-modifiers: 
     let handleClick =() =>{
		alert('no more alerts')
	}
    //Component Events
    const dispatch = createEventDispatcher();
	function sayHello() {
		dispatch('message', {
			text: 'Hello!'
		});
	}
    //Event forwarding https://svelte.dev/tutorial/event-forwarding
    //Event forwarding https://svelte.dev/tutorial/dom-event-forwarding
</script>

<div on:mousemove={handleMousemove}>
<!--<div on:mousemove="{e => m = { x: e.clientX, y: e.clientY }}"> alternative-->
	The mouse position is {m.x} x {m.y}
</div>

<!-- //Event Modifier only once-->
<button on:click|once = {handleClick}>Click it</button>
<!--Component Events-->
<button on:click = {sayHello}>sayHello</button>


















<style>
	div { width: 100%; height: 100%; }
</style>