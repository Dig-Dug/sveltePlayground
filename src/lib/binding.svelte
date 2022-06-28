<script>
    let input = "wold";

    let a = 2; let b = 2;

    let  yes = false;

</script>

<input class="in" bind:value={input}>
<h1>hi {input}</h1>

<label>
    <input type=number bind:value={a} min = 0>
    <input type=range bind:value={a} max = 10>
</label>
<label>
    <input type=number bind:value={b} min = 0>
    <input type=range bind:value={b} max = 10>
</label>
<p>{a} + {b} = {a + b}</p>


<label>
    <input type=checkbox bind:checked={yes}>
    Yes! Send me regular email spam
</label>
{#if yes}
<p>Thank you. We will bombard your inbox and sell your personal details.</p>
{:else}
<p>You must opt in to continue. If you're not paying, you're the product.</p>
{/if}
<button disabled={!yes}>Subscribe</button>




<style>
.in{
    position: relative;
    top: 27px;
    right: 131px;

}
label { display: flex }
input, p { margin: 6px }
</style>