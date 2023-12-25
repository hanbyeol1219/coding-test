const solution = (s) => {
    // 0. s가 "1"이 아니면
    // 1. s를 for문으로 돌면서 0제거 + 제거한 0 count
    // 2. 0이 제거된 s의 길이.toString(2) + toString 횟수 count → 다시 s에 담기
    // 3. 2번의 결과 값이 1이 될 때까지 반복 - while
    // 4. 배열에 [toString 횟수 count, 제거한 0 count] 담아서 return
    let zeroCnt = 0;
    let loopCnt = 0;
    
    while(s !== "1") {
        if(s.includes("0")){
            for(let i=0; i<s.length; i++){
                if(s[i] === "0") zeroCnt++;
            }
            s=s.replace(/0/gi, "");
        } 
        s=s.length.toString(2);
        loopCnt++;
        if(s==="1") break;
    }
    
    let answer = [loopCnt, zeroCnt];
    return answer;
}