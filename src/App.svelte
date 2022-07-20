<script>
    import Folder from './lib2/svelteSelf/Folder.svelte';
  
    import RedThing from './lib2/RedThing.svelte';
	import GreenThing from './lib2/GreenThing.svelte';
	import BlueThing from './lib2/BlueThing.svelte';

    import Todo from './lib2/Todo.svelte';
    import Box from './Box.svelte';
//<svelte:self>
    let root = [
            {
                name: 'Important work stuff',
                files: [
                    { name: 'quarterly-results.xlsx' }
                ]
            },
            {
                name: 'Animal GIFs',
                files: [
                    {
                        name: 'Dogs',
                        files: [
                            { name: 'treadmill.gif' },
                            { name: 'rope-jumping.gif' }
                        ]
                    },
                    {
                        name: 'Goats',
                        files: [
                            { name: 'parkour.gif' },
                            { name: 'rampage.gif' }
                        ]
                    },
                    { name: 'cat-roomba.gif' },
                    { name: 'duck-shuffle.gif' },
                    { name: 'monkey-on-a-pig.gif' }
                ]
            },
            { name: 'TODO.md' }
    ];
//<svelte:self>

/* svelte:component*/
    const options = [
            { color: 'red',   component: RedThing   },
            { color: 'green', component: GreenThing },
            { color: 'blue',  component: BlueThing  },
        ];
        let selected = options[0];
/* svelte:component */

/* svelte:element  Sometimes we don't know in advance what kind of DOM element to render*/
    const optionss = ['h1', 'h3', 'p'];
	let sellected = optionss[0];
/* svelte:element */

/**svelte:window*/
    let key;
	let keyCode;

	function handleKeydown(event) {
		key = event.key;
		keyCode = event.keyCode;
	}
/**svelte:window*/

/**svelte:window bindings*/
    const layers = [0, 1, 2, 3, 4, 5, 6, 7, 8];
    let y;
/**svelte:window bindings*/

/**svelte:body*/
    let hereKitty = false;

    const handleMouseenter = () => hereKitty = true;
    const handleMouseleave = () => hereKitty = false;
/**svelte:body*/

/**svelte:options*/
    let todos = [
		{ id: 1, done: true, text: 'wash the car' },
		{ id: 2, done: false, text: 'take the dog for a walk' },
		{ id: 3, done: false, text: 'mow the lawn' }
	];
    function toggle(toggled) {
		todos = todos.map(todo => {
			if (todo === toggled) {
				// return a new object
				return {
					id: todo.id,
					text: todo.text,
					done: !todo.done
				};
			}

			// return the same object
			return todo;
		});
	}
/**svelte:options*/
</script>

<svelte:window on:keydown={handleKeydown} bind:scrollY={y}/>
<svelte:body 
on:mouseenter={handleMouseenter}
on:mouseleave={handleMouseleave}						 
/>

<svelte:head>  <!-- FIX IT -->
	<link rel="stylesheet" href="./dark-theme.css">
</svelte:head> <h1>Hello world!</h1>

<div class="container">
<div>
<!-- svelteSelf -->
  <Folder name="Home" files={root} expanded/>
<!-- svelteSelf -->

<!-- svelteWindow -->

    <div class="divo" style="text-align: center">
        {#if key}
            <kbd>{key === ' ' ? 'Space' : key}</kbd>
            <p>{keyCode}</p>
        {:else}
            <p>Focus this window and press any key</p>
        {/if}
    </div>
<!-- svelteWindow -->


</div>
    <div>
<!-- <svelte:component> The this value can be any component constructor, or a falsy value -->
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>
    <svelte:component this={selected.component}/>
<!-- <svelte:component>-->

<!-- svelte:body  FIX IT!!!!-->
    <img id="dun"
    class:curious={hereKitty}
    alt="Kitten wants to know what's going on"
    src="./kitten.png"
    >
<!-- svelte:body -->


<!-- svelte:options -->
    <h2>Todos</h2>
    {#each todos as todo}
        <Todo {todo} on:click={() => toggle(todo)}/>
    {/each}
<!-- svelte:options -->

<!-- svelte:fragment -->
<Box>
    <svelte:fragment slot="footer">
        <p>All rights reserved.</p>
		<p>Copyright (c) 2019 Svelte Industries</p>
    </svelte:fragment>
</Box>
<!-- svelte:fragment -->
    </div>
    <div>
<!-- svelte:element -->
    <select bind:value={sellected}>
        {#each optionss as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
    <svelte:element this={sellected}>I'm a {sellected} tag</svelte:element>
<!-- svelte:element -->


    </div>
</div>

<!-- svelteWindowBingings -->
    <a class="parallax-container" href="https://www.firewatchgame.com">
        {#each layers as layer}
            <img
                style="transform: translate(0,{-y * layer / (layers.length - 1)}px)"
                src="https://www.firewatchgame.com/images/parallax/parallax{layer}.png"
                alt="parallax layer {layer}"
            >
        {/each}
    </a>

    <div class="text">
        <span style="opacity: {1 - Math.max(0, y / 40)}">
            scroll down
        </span>

        <div class="foreground">
            You have scrolled {y} pixels
        </div>
    </div>
<!-- svelteWindowBingings -->









<style>
    .container {
    display: grid; 
    grid-template-columns: 1fr 1fr 1fr; 
    grid-template-rows: 1fr 1fr 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        ". . ."
        ". . ."
        ". . ."; 
    }

    .divo {
            display: flex;
            height: 100%;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        kbd {
            background-color: #eee;
            border-radius: 4px;
            font-size: 6em;
            padding: 0.2em 0.5em;
            border-top: 5px solid rgba(255, 255, 255, 0.5);
            border-left: 5px solid rgba(255, 255, 255, 0.5);
            border-right: 5px solid rgba(0, 0, 0, 0.2);
            border-bottom: 5px solid rgba(0, 0, 0, 0.2);
            color: #555;
    }


    .parallax-container {
            position: fixed;
            width: 2400px;
            height: 712px;
            left: 50%;
            transform: translate(-50%,0);
        }

        .parallax-container img {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            will-change: transform;
        }

        .parallax-container img:last-child::after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: rgb(10, 45, 42);
        }

        .text {
            position: relative;
            width: 100%;
            height: 300vh;
            color: rgb(220,113,43);
            text-align: center;
            padding: 4em 0.5em 0.5em 0.5em;
            box-sizing: border-box;
            pointer-events: none;
        }

        span {
            display: block;
            font-size: 1em;
            text-transform: uppercase;
            will-change: transform, opacity;
        }

        .foreground {
            position: absolute;
            top: 711px;
            left: 0;
            width: 100%;
            height: calc(100% - 712px);
            background-color: rgb(32,0,1);
            color: white;
            padding: 50vh 0 0 0;
        }

       :global(body) {
            margin: 0;
            padding: 0;
            background-color: rgb(253, 174, 51);
    }   
  
#dun{
		position: absolute;
		left: 0;
		bottom: -60px;
		transform: translate(-80%, 0) rotate(-30deg);
		transform-origin: 100% 100%;
		transition: transform 0.4s;
	}

	.curious {
		transform: translate(-15%, 0) rotate(0deg);
	}

	/* :global(body) {
		overflow: hidden;
} */
</style>