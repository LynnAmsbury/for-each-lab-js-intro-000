// function iterativeLog(array) {
//   array.forEach(callback(element, index) {
//     console.log(`${index}: ${element}`);
//   })
// }

function iterativeLog(array){
  array.forEach((element, index, array) => {
    // debugger
    console.log(`${index}: ${element}`)
  })
}

// arraySparse.forEach(function(element, index){
//   console.log(element)
//   numCallbackRuns++
// }) 
