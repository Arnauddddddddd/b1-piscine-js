function citiesOnly(arr) {
  return arr.map(obj => obj["city"]); 
}

function upperCasingStates(arr) {
  var map1 = arr.map(str => str);
  var arr2 = []
  var arr3 = []
  for (var i = 0; i < map1.length; i++) {
    var txt = ""
    arr2 = (arr[i].split(" "))
    for (var j = 0; j < arr2.length; j++) {
      if (j > 0) { txt += " "}
      txt +=  arr2[j][0].toUpperCase() + arr2[j].slice(1);
    }
    arr3.push(txt)
  }
  
  return arr3         
}


console.log(upperCasingStates(['alabama', 'new jersey d']) // -> ['Alabama', 'New Jersey']
)


// console.log(citiesOnly([
//     {
//       city: 'Los Angeles',
//       temperature: '  101 °F   ',
//     },
//     {
//       city: 'San Francisco',
//       temperature: ' 84 ° F   ',
//     },
//   ]))