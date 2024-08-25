function solution(array) {
    const cnt = new Map();
    array.forEach(num => {
        if (cnt.has(num)) {
            cnt.set(num, cnt.get(num) + 1)
        } else {
            cnt.set(num, 1)
        }
    });
    const max = Math.max(...cnt.values());
    let count = 0;
    let result = 0;
    
    for (const [key, value] of cnt) {
        if (max === value) {
            count++;
            result = key;
        }
    }
    
    if(count > 1) {
        return -1;
    } else {
        return result;
    }

}