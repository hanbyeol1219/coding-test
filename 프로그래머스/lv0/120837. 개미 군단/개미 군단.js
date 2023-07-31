/*
const solution = (hp) => {
 let count1 = parseInt(hp/5);
 console.log("장군개미가 몇 마리 필요하냐면 : ", count1) 
 let count2 = hp - (count1 * 5)
 console.log("장군개미를 제외하면 남는 hp : ", count2) 
 
 let count3 = parseInt(count2/3)
 console.log("장군개미 제외 후 병정개미가 몇 마리 필요하냐면 : ", count3)
 let count4 = hp - ((count3 * 3)+(count1 *5))
 console.log("장군개미와 병정개미를 제외하면 남는 hp이자 일개미 수 : ", count4)

 let answer = count1+count3+count4;
 return answer;
}
*/

const solution = (hp) => {

let answer = parseInt(hp/5) + parseInt(hp%5/3) + parseInt(hp%5%3)

 return answer;
}