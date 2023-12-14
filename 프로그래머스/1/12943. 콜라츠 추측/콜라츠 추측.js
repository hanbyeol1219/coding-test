const solution = (num) => {
    let answer = 0;
    let copyNum = num;
     for(let i=0; num!==1; i++){  
        if(num%2===0){
           num = num/2;
           answer++;
        } else {
            num = num*3+1;
            answer++;
        }
      }
    return copyNum === 1 ? 0: answer >= 500 ? -1 : answer;
}