
    
//    const obj={
//       a:10,
//       y:()=>{
//         z=10;
//         x=()=>{
//             console.log(this);
//           }
//           x()
//       }
      
//     }
//     obj.y();

//   const obj={
//       a:10,
//       x:function(){
//         //enclosing lexical context
//         const y=()=>{
//           console.log(this);
//         }
//         y();
//       }
//     }
//     obj.x();

// let arr1 = [1,2,[3,4,[5,6,7,[8,9]]]];
// let result=[];
// function flattenArrays(arr1){
//   for(let i=0; i<arr1.length; i++){
//     if(Array.isArray(arr1[i])){
//         flattenArrays(arr1[i]);
//     }else{
//         result.push(arr1[i]);
//     }
//   }
//   return result;
// }
// console.log(flattenArrays(arr1))


// let arr2 = [1,2,[3,4,[5,6,7,[8,9]]]];//  let arr1 = [1,2,[3,4,[5,6,7,[8,9]]]];
// let output=[];
//  function flattenArray(arr1){
//     for(let i=0; i<arr1.length;i++){
//         if(Array.isArray(arr1[i])){
//             flattenArray(arr1[i])
//         }else{
//             output+=arr1[i];
//         }
//     }
//     return output;
// }
// console.log(flattenArray(arr1))

let str = 'abc'
//3*2*1
let permutation = function (str, result) {
    if (str.length == 0) {
        console.log(result)
    }
    for (let i = 0; i < str.length; i++) {
        let res = str.substring(0, i) + str.substring(i + 1)
        permutation(res, result + str[i])
    }
}
permutation(str, '');


    
