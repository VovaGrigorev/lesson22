var arr = [3,4,5,6,2,1,9];
console.log(arr);
arr.length = 0;
console.log(arr);

var arr1 = [1,2,3,4,5,6,7,0,9,8];
arr1.reverse();
console.log(arr1);

var  fruits = ["Banana", "Orange", "Apple", "Mango"];
var howmany = (fruits.length - 1)
for(var i = 0; i <= howmany; i++){
  console.log(fruits[i]);
}

var start = 100;
var result = [100];
for(; start >= 0; start--) {
  result.push(start);
}

arr[arr.length-2] = "raspberry";
