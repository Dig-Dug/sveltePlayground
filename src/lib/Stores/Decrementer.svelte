<script>
	import { count } from './stores.js';

	function decrement() {
		count.update(n => n - 1);
	}
</script>

<button  class="try" on:click={decrement}>
	-
</button>