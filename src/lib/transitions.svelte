<script>
import {fade} from 'svelte/transition';
import { fly } from 'svelte/transition';
import { slide } from 'svelte/transition';


//alternative to "fade"import {fly} from 'svelte/transition';
//or -> import { fade, fly } from 'svelte/transition';


//transitionDirective
 let visible = true;

//TypeWriter custom JS transition
    let visiblee = false;

        function typewriter(node, { speed = 1 }) {
            const valid = (
                node.childNodes.length === 1 &&
                node.childNodes[0].nodeType === Node.TEXT_NODE
            );

            if (!valid) {
                throw new Error(`This transition only works on elements with a single text node child`);
            }

            const text = node.textContent;
            const duration = text.length / (speed * 0.01);

            return {
                duration,
                tick: t => {
                    const i = Math.trunc(text.length * t);
                    node.textContent = text.slice(0, i);
                }
            };
        }
//

//Transition Events
    let viisible = true;
    let status = 'waiting...';
//

//Local transitions   **transitions to play only when individual items are added and removed
 let showItems = true;
 let i = 5;
 let items = ['one', 'two', 'three', 'four', 
 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
//


</script>

<!--transitionOptions-->
        <label><input type="checkbox" bind:checked= {visible}>
        visible
        </label>
        {#if visible}
        <p transition:fade>Fades in and out</p>
        <!-- <p transition:fly="{{ y: 200, duration: 2000 }}"></p> -->
        <!-- <p in:fly="{{ y: 200, duration: 2000 }}" out:fade>Flies in, fades out</p> -->
        <!-- https://svelte.dev/tutorial/custom-css-transitions -->
        {/if}
<!---->

<div class="container">
<div>
<!-- Custom Js transition -->
    <label>
        <input type="checkbox" bind:checked={visiblee}>
        visible
    </label>

    {#if visiblee}
        <p transition:typewriter>
            The quick brown fox jumps over the lazy dog
        </p>
    {/if}
<!-- Custom Js transition -->

<!-- Transition Events -->
 <p>status {status}</p>
    <label>
        <input type="checkbox" bind:checked={viisible}>
        visible
    </label>

    {#if viisible}
        <p
            transition:fly="{{ x:10,y: 20, duration: 2000 }}"
            on:introstart="{() => status = 'intro started'}"
            on:outrostart="{() => status = 'outro started'}"
            on:introend="{() => status = 'intro ended'}"
            on:outroend="{() => status = 'outro ended'}"
        >
            Flies in and out
        </p>
    {/if}
<!-- Transition Events -->
</div>
<div>
<!-- local transitions -->
    <label>
        <input type="checkbox" bind:checked={showItems}>
        show list
    </label>

    <label>
        <input type="range" bind:value={i} max=10>

    </label>
    {#if showItems}
	{#each items.slice(0, i) as item}
		<div transition:slide|local>
			{item}
		</div>
	{/each}
 {/if}
 
<!-- local transitions -->
</div>
</div>


<style>
	div {
		padding: 0.5em 0;
		border-top: 1px solid #eee;
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