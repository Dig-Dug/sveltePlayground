<script>

/* import Events from './lib/events.svelte';
import Binding from './lib/binding.svelte';
import Keypad from './lib//Keypad.svelte'; */
import { onMount } from "svelte";
import Timer from './lib/onDestroy/timer.svelte';




//Component Events
/* function handleMsg(event) {
		alert(event.detail.text);
	} */
//ComponentBindings
/* let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
} */

//LIFECYCLES
/**With the exception of onDestroy, lifecycle functions don't run during SSR, which means we can avoid fetching data that should be loaded lazily once the component has been mounted in the DOM.*/
//ON MOUNT///////////
 let photos = [];
  onMount(async () => {
    const res = await
    fetch(`https://dog.ceo/api/breeds/image/random`);
    photos = await res.json();
});/////////////////

//ON DESTROY/////////////
    let open = true;
    let seconds = 0;
    const toggle = () => (open = !open);
    const handleTick = () => (seconds += 1);
///////////
</script>

<!-- Component Events -->
<div class="thre">
    <!-- <div><Events on:message={handleMsg}/></div>	
	<div><Binding/></div>
	<div><h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
    <Keypad bind:value={pin} on:submit={handleSubmit}/>
    </div>-->
</div> 


<!--ON MOUNT-->
<h1>Photos</h1>
 <div class="photos">
	{#each photos as photo}
    <img src={photo} alt={photo}>
		<figure>
			<img src={photo.thumbnailUrl} alt={photo.title}>
			<figcaption>{photo.title}</figcaption>
		</figure>
	{:else}
		<!-- this block renders when photos.length === 0 -->
		<p>loading...</p>
	{/each}
</div>


<!--OnDestroy-->
<div>
	<button on:click={toggle}>{open ? 'Close' : 'Open'} Timer</button>
	<p>
		The Timer component has been open for
		{seconds} {seconds === 1 ? 'second' : 'seconds'}
	</p>
	{#if open}
	<Timer callback={handleTick} />
	{/if}
</div>














<style>
	.thre {  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 0px 0px;
  grid-auto-flow: row;
  grid-template-areas:
    ". . ."
    ". . ."
    ". . .";
}

/**for Lifecycle onMount*/
.photos {
		width: 100%;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 8px;
	}

	figure, img {
		width: 100%;
		margin: 0;
	}

</style>

