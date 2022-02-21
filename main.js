function sort(arr) {
     for (var i = 0; i < arr.length; i++) {
          for (var j = i; j < arr.length; j++) {
               if (arr[i] < arr[j]) {
                    var p = arr[i];
                    arr[i] = arr[j];
                    arr[j] = p;
               }
          }
     }
     return arr

}

var res = sort(["a", "b", "c"])
console.log(res);