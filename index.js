function iterativeLog(array){
  array.forEach((element, index) => {
    // debugger;
    console.log(`${index}: ${element}`);
  })
}

function iterate(callback) {
  var catsArray = ['Casper', 'Journey'];
  return catsArray.forEach(callback);
}
