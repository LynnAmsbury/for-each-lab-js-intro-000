function iterativeLog(array){
  array.forEach((element, index) => {
    // debugger;
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var catsArray = ['Casper', 'Journey'];
  catsArray.forEach(callback);
  return catsArray;
}
