const solution = (n) => {
    let answer = 0; // 표현의 갯수
    let num = 1; // 덧셈 시작 숫자 (while문 반복 시 1씩 증가 할 것)
    while(num <= n){
        let sum = 0; // 15가 될 때까지 i를 더할 변수
        for(let i = num; i <= n && sum <= n; i++){
            sum += i;
            if(sum === n) {
                answer++;
            }   
        }
        num++; // 한 번 반복 될 때마다 num을 1씩 증가
    }
    return answer;
}