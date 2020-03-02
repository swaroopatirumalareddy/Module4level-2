console.log('INFO: Reading App.js');

console.log('INFO: Getting access to elements');


const inputElementTipAns = document.getElementById("countOfStories")
const inputElementTaxAns = document.getElementById("averageTasksPerStory");




console.log('INFO: Configuring event handlers');

btnElement.onclick = async function ()
{
    function average(itemCost) 
    {
                    
    var total = 0;
    var itemCost;
    for(var i = 0; i < itemCost.length; i++) {
        total += itemCost[i];
                }
    var avg = total / source.length;
        alert(avg)
    document.getElementById("result").innerHTML = avg;
    }

</script>


}

console.log('INFO: Done loading, waiting for an event'); 
