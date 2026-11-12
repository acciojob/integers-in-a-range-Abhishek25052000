// write your code here
function range(start, end){

	var num = [];
	for(var i=start; i<=end; i++){
		num.push(i);
	}
	return num;
}
// do not change the code below.
let start = parseInt(prompt("Enter Start of the Range."));
let end = parseInt(prompt("Enter End Of the Range."));
alert(range(start, end))
