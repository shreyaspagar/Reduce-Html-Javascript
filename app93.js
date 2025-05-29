// let nums = [1,2,3,4,5,6,7,8,9,10,11];
// let finalvalue  = nums.reduce((res, el) => {
//     // console.log(res);
//     return res + el;
// });
// console.log(finalvalue);


let arr = [1,2,3,1];

// let max = -1;

// for(let i=0; i<arr.length; i++) {
//     if(max < arr[i]) {
//         max = arr[i];
//     }
// }

// console.log(max);

let max = arr.reduce((max , el) => {
    if(max < el) {
        return el;
    } else {
        return max;
    }

        
    
});

console.log(max);