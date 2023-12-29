const solution = (n) => {
    // 1. n을 2진수로 변환하여 1을 갯수를 파악한다. → nOneCnt
    // 2. n에서 1씩 증가하여 증가된 수를 2진수로 변환한다.
    // 3. 변환한 수의 1의 갯수를 파악한다.
    // 4. 1의 갯수가 nOneCnt와 같으면 증가된 수를 return 한다.
    let answer = 0;
    //------------- 인자로 주어진 수를 2진수로 변환하고 1의 갯수를 파악해주는 함수
    const binaryScaleAndCountOneFunc = (num) => {
        const binaryNum = num.toString(2);
        let oneCnt = 0; // binaryNum의 1의 갯수
        for(let i=0; i<binaryNum.length; i++) {
            if(binaryNum[i]==="1") {
                oneCnt++;
            }
        }
        return oneCnt;
    }
    
    const nOneCnt = binaryScaleAndCountOneFunc(n); // n 이진수 변환 시 1의 갯수
    let resultOneCnt = 0; // 증가된 수의 1의 갯수를 담을 변수
    for(let result = n+1; nOneCnt !== resultOneCnt; result++){
        resultOneCnt=binaryScaleAndCountOneFunc(result);
        if(nOneCnt === resultOneCnt) return answer = result;
    }
    
    return answer;
}