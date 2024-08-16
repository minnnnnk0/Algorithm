function solution(arr1, arr2) {
    let arr = [];

    for(let i = 0; i < arr1.length; i++) {
        let result = [];
        
        for(let j = 0; j < arr2[0].length; j++) {
            let tmp = 0;
            
            for(let k = 0; k < arr1[0].length; k++) { 
                tmp += arr1[i][k] * arr2[k][j];
            }
            result.push(tmp);
        }
        arr.push(result);
    }
    return arr;
}