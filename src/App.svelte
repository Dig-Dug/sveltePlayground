<script>
    import Folder from './lib2/svelteSelf/Folder.svelte';
  
    import RedThing from './lib2/RedThing.svelte';
	import GreenThing from './lib2/GreenThing.svelte';
	import BlueThing from './lib2/BlueThing.svelte';

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
</script>
<!-- svelteSelf -->
 <Folder name="Home" files={root} expanded/>
<!-- svelteSelf -->

<!-- <svelte:component> The this value can be any component constructor, or a falsy value -->
    <select bind:value={selected}>
        {#each options as option}
            <option value={option}>{option.color}</option>
        {/each}
    </select>
    <svelte:component this={selected.component}/>
<!-- <svelte:component>-->

<!-- svelte:element -->
    <select bind:value={sellected}>
        {#each optionss as option}
            <option value={option}>{option}</option>
        {/each}
    </select>
    <svelte:element this={sellected}>I'm a {sellected} tag</svelte:element>
<!-- svelte:element -->
