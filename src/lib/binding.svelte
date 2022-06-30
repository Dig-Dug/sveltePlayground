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
let selected; let answer = '';

function handleSubmit() {
		alert(`answered question ${selected.id} 
        (${selected.text}) with "${answer}"`);
	}
////////////////
let html = '<p>Write some text!</p>';
/////////////////

let some =[
   		{ done: false, txt: 'finish Svelte tutorial' },
		{ done: false, txt: 'build an app' },
		{ done: false, txt: 'world domination' }
    ]
function add(){
    some = some.concat({done: false, txt: ''});
}
function clear(){
    some = some.filter(t => !t.done);
}
$: remaining = some.filter(t => !t.done).length;
////////////////////////////////
//AUDIO VIDEO https://svelte.dev/tutorial/media-elements
//////////////////////////////////
let h;
let w;
let size = 42, text ="editMoi";

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
<!--Select Bindings-->
<form on:submit|preventDefault={handleSubmit}>
	<select bind:value={selected} on:change="{() => answer = ''}">
		{#each questions as question}
			<option value={question}>
				{question.text}
			</option>
		{/each}
	</select>
<input bind:value={answer}>
<button disabled={!answer} type=submit>
		Submit
	</button>
</form>
<!--//////////////////////////////-->
<div contenteditable="true" bind:innerHTML={html}></div>
<pre>{html}</pre>
<!--//////////////////////////////-->
<h1>TODO &#9924 </h1>
{#each some as somes}
    <div class:done={somes.done} id="done">
    <input type=checkbox bind:checked={somes.done}>
    <input placeholder="you do wot?" bind:value={somes.txt}>
    </div>
{/each}
<p>{remaining}---Remaining</p> 
<button on:click={add}>Add</button>
<button on:click={clear}>Delete</button>
<!--//////////////////////////////-->
<input type=range bind:value={size}>
<input bind:value={text}>

<p>size: {w}px x {h}px</p>

<div bind:clientWidth={w} bind:clientHeight={h}>
	<span style="font-size: {size}px">{text}</span>
</div>
<!--//////////////////////////////-->




<!--for too many =>  https://svelte.dev/tutorial/group-inputs-->
<!--big file :( https://svelte.dev/tutorial/multiple-select-bindings-->
<!--https://svelte.dev/tutorial/bind-this-->



<style>
    #done{
        display: grid; 
  grid-auto-columns: 1fr; 
  grid-template-rows: 1fr 1fr 1fr; 
  gap: 0px 0px; 
    }
.in{
    position: relative;
    top: 27px;
    right: 131px;

}
label { display: flex }
input, p { margin: 6px; margin-bottom: 0px,}
.done {opacity: 0.4;}

input {
		display: block;
		width: 500px;
		max-width: 100%;

        
	}
[contenteditable] {
		padding: 0.5em;
		border: 1px solid #eee;
		border-radius: 4px;
}
pre{
    margin-top: 0px;
}
div { display: inline-block; }
	span { word-break: break-all; }
</style>