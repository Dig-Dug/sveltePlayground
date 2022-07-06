<script>
import {fade} from 'svelte/transition';
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




<label>
	<input type="checkbox" bind:checked={visiblee}>
	visible
</label>

{#if visiblee}
	<p transition:typewriter>
		The quick brown fox jumps over the lazy dog
	</p>
{/if}


