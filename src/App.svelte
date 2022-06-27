<script>

import Events from './lib/events.svelte';
import Binding from './lib/binding.svelte';


//Component Events
function handleMsg(event) {
		alert(event.detail.text);
	}

</script>

<!-- Component Events -->
<Events on:message={handleMsg}/>
<Binding/>
