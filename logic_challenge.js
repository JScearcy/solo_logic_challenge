//challenge 1 - combine two arrays, one forwards and one backwards
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

//challenge 2 - combine the two arrays then sort them in numerical order
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

//challenge 3 - make right triangle, third parameter wasn't stated in the notes but I guessed that it was angle. Added SAS Triangle support

function SASorRightTriangle(a, b, angle){
  this.a = a;
  this.b = b;
  this.angle = angle;
}
SASorRightTriangle.prototype.findSideC = function() {
  if(this.angle == 90) {
    this.c =  Math.sqrt(((this.a*this.a) + (this.b*this.b)));
  } else {
    var side1 = this.a * this.a;
    var side2 = this.b * this.b;
    this.c = Math.sqrt((side1 + side2) - 2 * this.a * this.b * Math.cos((this.angle * (Math.PI / 180))));
    this.c = Math.round(this.c * 100) / 100;
  }
}

var testTriangle = new SASorRightTriangle(5, 7, 49);
var rightTriangle = new SASorRightTriangle(3, 4, 90);
testTriangle.findSideC();
rightTriangle.findSideC();
console.log('SAS Triangle: ' + testTriangle.c + ' Right Triangle: ' + rightTriangle.c);
//challenge 4 - recursive function that returns a sum of each number descending down to 0 by calling itself
function recursiveAdd(targetNum){
  if(targetNum == 0){
    return 0
  }
  else{
    return targetNum + recursiveAdd(targetNum - 1);
  }
}
console.log(recursiveAdd(5))
