<script>
import  {clickOutside}  from "./lib/Stores/clickOutside.js";
import  {longpress}  from "./lib/Stores/longpress.js";

/**actions the use directive*/
    let showModal = true;
//


//Adding parameters
	let duration = 2000;
	let pressed = false;
//Adding parameters
</script>


<div class="cont">

	<!-- actions the use directive -->
		<div>
		<button on:click={() => (showModal = true)}>Show Modal</button>
		{#if showModal}
		<div class="box" use:clickOutside on:outclick={() => (showModal = false)}>
		Click outside me!
		</div>
		{/if}
		</div>
	<!-- actions the use directive -->



	<div>
<!-- Adding parameters -->
	<label>
	<input type=range bind:value={duration} max={2000} step={100}>
	{duration}ms
	</label>

	<button use:longpress={duration}
	on:longpress="{() => pressed = true}"
	on:mouseenter="{() => pressed = false}"
	>press and hold</button>

	{#if pressed}
	<p>congratulations, you pressed and held for {duration}ms</p>
	{/if}
<!-- Adding parameters -->

	</div>
</div>








<style>
	.cont{
  display: grid; 
  grid-template-columns: 1fr 1fr; 
  gap: 0px 0px; 
}
	.box {
		--width: 100px;
		--height: 100px;
		position: absolute;
		width: var(--width);
		height: var(--height);
		left: calc(50% - var(--width) / 2);
		top: calc(50% - var(--height) / 2);
		display: flex;
		align-items: center;
		padding: 8px;
		border-radius: 4px;
		background-color: #ff3e00;
		color: #fff;
		text-align: center;
		font-weight: bold;


		
    left: 49px;
   
    top: 85px;
	}
</style>