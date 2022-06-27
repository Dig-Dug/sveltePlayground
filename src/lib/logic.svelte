<script>
	let user = { loggedIn: false };

	function toggle() {
		user.loggedIn = !user.loggedIn;
        console.log("wot??")
	}

    let oh = 34;


	//Each block
	let cats = [
		{ id: 'J---aiyznGQ', name: 'Keyboard Cat' },
		{ id: 'z_AbfPXTKms', name: 'Maru' },
		{ id: 'OUtn3pvWmpg', name: 'Henri The Existential Cat' }
	]; 
	//

</script>



<!-- # is block opening, / is block closing, : is else-->
{#if user.loggedIn}
<button on:click={toggle}>
	Log out
</button>
{:else}
<button on:click={toggle}>
	Log in
</button>{/if}


{#if oh > 10}<p class="else">{oh} is bigger than 10</p> 
{:else if oh > 20}<p>{oh} is bigger than 20</p>
{:else}<p>go killyourself</p>
{/if}


<!--Each block-->
<ul>
	{#each cats as cat}
		<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li>	
	{/each}
<!--<li><a target="_blank" href="https://www.youtube.com/watch?v={cat.id}">
			{cat.name}
		</a></li> -->

</ul>

<!--Keyed each block-->
<p>
	<span>The emoji for { names } is { emoji }</span>
</p>



<style>
    .else{
        color: blue;
    }
</style>