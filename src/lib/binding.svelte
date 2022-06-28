<script>
    
    let input = "wold"; //ONE

    let a = 2; let b = 2; //TWO

    let  yes = false;  //THREE


//FOUR
 let questions = [
		{ id: 1, text: `Where did you go to school?` },
		{ id: 2, text: `What is your mother's name?` },
		{ id: 3, text: `What is another personal fact that an attacker could easily find with Google?` }
	];

	let selected;

	let answer = '';

	function handleSubmit() {
		alert(`answered question ${selected.id} (${selected.text}) with "${answer}"`);
	}





</script>

<!--ONE  <input class="in" bind:value={input}>
 <h1>hi {input}</h1> 
-->

<!--TWO <label>
    <input type=number bind:value={a} min = 0>
    <input type=range bind:value={a} max = 10>
 </label>
 <label>
    <input type=number bind:value={b} min = 0>
    <input type=range bind:value={b} max = 10>
    </label>
 <p>{a} + {b} = {a + b}</p> 
-->


<!--THREE <label>
    <input type=checkbox bind:checked={yes}>
    Yes! Send me regular email spam
    </label>
    {#if yes}
    <p>Thank you. We will bombard your inbox and sell your personal details.</p>
    {:else}
    <p>You must opt in to continue. If you're not paying, you're the product.</p>
    {/if}
 <button disabled={!yes}>Subscribe</button> 
-->



<!--for too many =>  https://svelte.dev/tutorial/group-inputs-->
<!--can#t get it =>  https://svelte.dev/tutorial/textarea-inputs-->


<style>
.in{
    position: relative;
    top: 27px;
    right: 131px;

}
label { display: flex }
input, p { margin: 6px }
</style>