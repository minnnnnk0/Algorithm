process.stdin.setEncoding('utf8');
process.stdin.on('data', data => {
    const n = data.split(" "); 
    const a = Number(n[0]), b = Number(n[1]); 
    // console.log(a, b)
    
    for(let i=0; i<b; i++){ 
        let star = "";
        for(let j=0; j<a; j++){
            star = star + "*"
        } 
    console.log(star) // 출력
    }


});