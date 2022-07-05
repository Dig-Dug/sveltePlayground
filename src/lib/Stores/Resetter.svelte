<script>
	import { count } from './stores.js';

	function reset() {
		count.set(0);
	}
</script>

<button  class="try" on:click={reset}>
	reset
</button>





<style>
    .try{
        font-family: 'Oswald', sans-serif;
        color: rgb(226, 70, 43);
    }
</style>