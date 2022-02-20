function sort(arr) {
     for (let i = 0; i < arr.length; i++) {
          for (let j = i; j < arr.length; j++) {
               if (arr[i] < arr[j]) {
                    let t = arr[i];
                    arr[i] = arr[j];
                    arr[j] = t;
               }
          }
     }
     return arr

}

var res = sort(["a", "b", "c"])
console.log(res);