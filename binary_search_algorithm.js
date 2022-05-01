// * ========== Binary Search Algorithm ==========

const values = [0,1,2,3,4,5,6,7,8,9,10]

//* naive approach




const search = (val, arr) => {
  for(let i = 0; i < arr.length; i++) {
    console.log(i);
    if (val === arr[i]){
      return i;
    }
  }
  return -1;
}

// console.log(search(7, values));

//* Binary Search Algorithm

const binary = (val, arr) => {
  let lower = 0;
  let upper = arr.length - 1;

  while(lower <= upper){
    console.log("try");
      const middle = lower + Math.floor((upper - lower)/2);
      if(val === arr[middle]){
        return middle;
      }
      if(val<arr[middle]){
        upper = middle -1;
      }else{
        lower = middle + 1;
      }
  }
  return -1;
}

console.log(binary(7, values));


