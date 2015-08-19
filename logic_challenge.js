function addAndReverseArray(array, arrayReverse){
  var combined = [];
  for(var i = 0; i < array.length; i++) {
    combined.push(array[i] + arrayReverse[(arrayReverse.length - (1 + i))]);
  }
  return combined;
}
var primes = [2, 3, 5, 7, 11, 13, 17, 19];
var nonPrimes = [1, 4, 6, 8, 9, 10, 12, 14];
console.log(addAndReverseArray(primes, nonPrimes));

function combineAndSort(array, secondArray){
  var combinedSort = [];
  for(var i = 0; i < array.length; i++) {
    combinedSort.push(array[i]);
    combinedSort.push(secondArray[i]);
  }
  combinedSort.sort(function(a, b){
    if(a > b){
      return 1
    }
    else if(a < b){
      return -1
    }
    else {
      return 0
    }
  })
  return combinedSort;
}
var numbers1 = [4, 1, 6, 5, 8];
var numbers2 = [7, 3, 2, 9, 10];
console.log(combineAndSort(numbers1, numbers2));

function rightTriangle(a, b, angle) {
  this.a = a;
  this.b = b;
  this.angle = angle;
}
rightTriangle.prototype.hypotenuse = function(){
  if(this.angle == 90){
    this.c = Math.sqrt(((this.a*this.a) + (this.b*this.b)));
  }
}
var newTriangle = new rightTriangle(3, 4, 90);
newTriangle.hypotenuse();
console.log(newTriangle.c);
