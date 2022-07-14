<script>

    let current = 'foo';
    let big = false;
    let bgOpacity = 0.5;
    $: color = bgOpacity < 0.6 ? '#000' : '#fff';
</script>

<!-- theClassDirective -->
    <button
        class:selected="{current === 'foo'}"
        on:click="{() => current = 'foo'}"
    >foo</button>

    <button
        class:selected="{current === 'bar'}"
        on:click="{() => current = 'bar'}"
    >bar</button>

    <button
        class:selected="{current === 'baz'}"
        on:click="{() => current = 'baz'}"
    >baz</button>
<!-- theClassDirective -->

<!-- shortHandClassDirective -->
    <label>
        <input type=checkbox bind:checked={big}>
        big
    </label>

    <div class:big>
        some {big ? 'big' : 'small'} text
    </div>
<!-- shortHandClassDirective -->


<!-- inlineStyles -->
 <input type="range" min="0" max="1" step="0.1" bind:value={bgOpacity} />
  <p style="color: {color}; --opacity: {bgOpacity};">This is a paragraph.</p>
<!-- inlineStyles -->
<!-- theStyleDirective -->
 <p style:color style:--opacity={bgOpacity}>write inline style with style directive </p>
<!-- theStyleDirective -->





<style>
	button {
		display: block;
	}

	.selected {
		background-color: #ff3e00;
		color: white;
	}

    .big {
		font-size: 4em;
	}
    p {
		font-family: "Comic Sans MS", cursive;
		background: rgba(255, 62, 0, var(--opacity));
	}
</style>