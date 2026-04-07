function processList() {
  var lis = getData();
  callMap(lis)
  callFilter(lis)
  callReduce(lis)
  callMFR(lis)
}

function getData() {
  return document.getElementById('inputdata').value.split(",").map(Number);
}


// demonstrate map by adding 1 to each item in the list
// and displaying the results in the mapresults <pre> tag
function callMap(lis) {
  var plusonelis = lis.map((a)=>a+1);
  document.getElementById('mapresults').innerHTML = plusonelis.join(',');
}

function callFilter(lis) {
  var lessthan5lis = lis.filter((a)=>a<5);
  document.getElementById('redresults').innerHTML = lessthan5lis.join(',');
}

function callReduce(lis) {
  var sum = lis.reduce((a,b)=>a+b);
  document.getElementById('filresults').innerHTML = sum;
}

// counts how many odds are in a list
function callMFR(lis) {
  var sum = lis.map((a)=>a%2).filter((a)=>a!=0).reduce((a,b)=>a+b);
  document.getElementById('mfrresults').innerHTML = sum;
}
