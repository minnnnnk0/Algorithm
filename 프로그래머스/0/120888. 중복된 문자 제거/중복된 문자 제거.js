function solution(my_string) {    
    const str_arr = [...new Set(my_string)]
    console.log(str_arr)
    return str_arr.join("");
}