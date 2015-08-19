var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
function addAndReverseArray(array, arrayReverse){
  var combined = [];
  for(var i = 0; i < array.length; i++) {
    combined.push(array[i] + arrayReverse[(arrayReverse.length - (1 + i))]);
  }
  return combined;
}
console.log(addAndReverseArray(primes, nonPrimes));
