<script>
import App from "src/App.svelte";
import { onMount } from "svelte";


/**With the exception of onDestroy, lifecycle functions don't run during SSR, which means we can avoid fetching data that should be loaded lazily once the component has been mounted in the DOM.*/
//ON MOUNT///////////
let photos = [];
onMount(async () => {
    const res = await
    fetch(`https://dog.ceo/api/breeds/image/random`);
    photos = await res.json();
});/////////////////

//ON DESTROY/////////////

</script>


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
<!--ON MOUNT-->























<style>
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