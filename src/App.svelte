<script>

import Events from './lib/events.svelte';
import Binding from './lib/binding.svelte';
import Keypad from './lib//Keypad.svelte';

//Component Events
function handleMsg(event) {
		alert(event.detail.text);
	}
//ComponentBindings
let pin;
	$: view = pin ? pin.replace(/\d(?!$)/g, '•') : 'enter your pin';

	function handleSubmit() {
		alert(`submitted ${pin}`);
	}

</script>

<!-- Component Events -->
<div class="thre">
<div><Events on:message={handleMsg}/></div>	
	<div><Binding/></div>
	
	<div><h1 style="color: {pin ? '#333' : '#ccc'}">{view}</h1>
	
		<Keypad bind:value={pin} on:submit={handleSubmit}/></div>
	
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

</style>

