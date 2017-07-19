function theBeatlesPlay(musicianArray, musicianInstruments){
  var str = []
  for(let i = 0; i < musicianArray.length; ++i){
    str.push(`${musicianArray[i]} plays ${musicianInstruments[i]}`)
    debugger;
  }
  return str
}

function johnLennonFacts(arr){
  var array = arr.map(function(x){  return(x + '!!!')})
  return array
}

function iLoveTheBeatles(num){
  let counter = 0
  let empty = []
  empty.push("I love the Beatles!")
  if(num < 15){
  while(counter != num){
    empty.push("I love the Beatles!")
    ++counter
  }}
  return empty
}
