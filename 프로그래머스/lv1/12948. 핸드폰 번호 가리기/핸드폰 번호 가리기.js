const solution = (phone_number) => {

 // 문자열 뒤 4자리 잘라내기
 const lastFourNum = phone_number.substr(phone_number.length-4)
 console.log(lastFourNum) // ex. 4444 8888

 let answer = '';

 // 문자열의 길이에서 뒤 4자리를 제외한 앞의 수의 길이와 같은
 // * 로 구성된 문자열 만들기 // ex. ******
 for(let i=0; i<phone_number.length-4; i++){
  answer += "*";
 }
 
 // 둘이 더해주고 리턴하기
 return answer+=lastFourNum;
}