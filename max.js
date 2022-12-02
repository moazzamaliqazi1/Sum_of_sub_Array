let a = [5,0,0,0,0];
let result = SubArray(a);
document.getElementById("array").innerHTML ="Result is :" + result;

function SubArray(a){
    let maxSum = 0;
    let curSum = 0;

    for(let i = 0; i<a.length; i++){
        curSum =curSum + a[i];
        if(curSum>maxSum){
            maxSum = curSum;
        }
        if(curSum < 0)
        {
            curSum = 0;
        }
        // 
        
        
    }
    return maxSum;

}
// document.write(result);