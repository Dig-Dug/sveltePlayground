<script>
  let count = 0
  const increment = () => {
    count += 1
  }

  let countt = 0;
   function incrementt() {
  countt += 1;
}
//reactive declaration $:
  $: double = count * 2;
  let string = `this string contains some <strong>HTML!!!</strong>`; //exposing your users to XSS attacks
  $: console.log(double , string)
  $: if(double > 4){
    console.log("oioioioi")
  } //reactive declaration $:

//trigger reactivity with assignments.
let numbers = [1, 2, 3, 4];
	function addNumber() {
	/*	numbers.push(numbers.length + 1);
		  numbers = numbers;*/
	//	numbers = [...numbers, numbers.length + 1]
	numbers[numbers.length] = numbers.length + 1;
	}
  $: sum = numbers.reduce((t, n) => t + n, 0); //trigger reactivity with assignments.  
</script>

<button on:click={increment}>
  Clicks: {count}
</button>
<!--//trigger reactivity with assignments.-->
<p>{numbers.join(' + ')} = {sum}</p>
<button on:click={addNumber}>Add numbersss</button>
<!--//-->

<p> {count} doubled is: {double}</p>
<button on:click={incrementt}>
  Clikk {countt} {countt === 1 ? 'time': 'timesss'}
  </button>
<p>{@html string}</p>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: #ff3e00;
    background-color: rgba(255, 62, 0, 0.1);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
