/*
const raining = true
const cold = false
if (raining){
  console.log("don't forget your umbrella")
}
if (cold){
  console.log("make sure you pick out a scarf")
} else{console.log("Short sleeves are fine.")
}
console.log('Now your ready to go outside')
*/

const temperature = -20

if (temperature < 0) {
  console.log("make sure you pick out a scarf")
} else if(temperature <15){
  console.log("Short sleeves won't cut it.")
}else {
  console.log("Short sleeves are fine.")
}
console.log('Now your ready to go outside')