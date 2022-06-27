<script>
  import logo from './assets/svelte.png'
  import InternalState from './lib/internalState.svelte'

  import Props from './lib/props.svelte';
  import InfoProp from './lib/infoProp.svelte';
  import Logiko from './lib/logic.svelte';
  import Keyed from './lib/keyedBlock.svelte';

  import App from './AppFirst.svelte';
import Logic from './lib/logic.svelte';

  let you = "YOU";
  let age = 12

const pkg = {
  name: "ypi", version: 3, speed: 'oh no',
  website: 'https://svelte.dev'
};
	//Keyed each blocks
	let things = [
		{ id: 1, names: 'apple' },
		{ id: 2, names: 'banana' },
		{ id: 3, names: 'carrot' },
		{ id: 4, names: 'doughnut' },
		{ id: 5, names: 'egg' },
	];
	let handleClick = () => {
		things = things.slice(1);
	} //
</script>

<main>
 <!--  <img src={logo} alt="Svelte Logo" /> -->
  <h1>Hello {you.toLowerCase() + age}</h1>


<!--Propssss-->
<Props yes= {" --> " + 23 + " <---opopopo"}/>
<!--Default props-->
  <Props/>
  
 <!--  <InfoProp name={pkg.name} version={pkg.version} speed={pkg.speed} website={pkg.website}/> -->
  <InfoProp {...pkg}/>
  <InternalState />
  <Logiko/>

  <!--Keyed each block(remove only first item)-->
<button on:click={handleClick}>Remove first thing</button>
{#each things as thing (thing.id)}
<Keyed names={thing.names}/>
{/each}




<!--   <p>
    Visit <a href="https://svelte.dev">svelte.dev</a> to learn how to build Svelte
    apps.
  </p>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme">SvelteKit</a> for
    the officially supported framework, also powered by Vite!
  </p> -->
</main>

<style>
  :root {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  main {
    text-align: center;
    padding: 1em;
    margin: 0 auto;
  }

  img {
    height: 16rem;
    width: 16rem;
  }

  h1 {
    color: #a200ff;
   /*  text-transform: uppercase; */
    font-size: 4rem;
    font-weight: 100;
    line-height: 1.1;
    margin: 2rem auto;
    max-width: 14rem;
  }

  p {
    max-width: 14rem;
    margin: 1rem auto;
    line-height: 1.35;
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }
</style>
