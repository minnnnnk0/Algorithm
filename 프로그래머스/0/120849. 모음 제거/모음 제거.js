function solution(my_string) {
    const alpha = ["a", "e", "i", "o", "u"]
    
    for (let i = 0; i < my_string.length; i++) {
        for (let v of alpha) my_string = my_string.replaceAll(v, "");
    }
    return my_string;
}