function sort(arr) {
     for (var i = 0; i < arr.length; i++) {
          for (var j = i; j < arr.length; j++) {
               if (arr[i] < arr[j]) {
                    var temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
               }
          }
     }
     return arr

}

var res = sort(["a", "b", "c"])
console.log(res);