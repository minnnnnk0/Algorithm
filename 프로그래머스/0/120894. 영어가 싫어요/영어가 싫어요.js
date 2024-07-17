function solution(numbers) {
  const english = ["zero", "one", "two", "three", "four", "five",
                 'six', "seven", "eight", "nine"]
    
  english.forEach((num, idx) => {
    numbers = numbers.split(num).join(idx)}) 
  
  return Number(numbers)
}