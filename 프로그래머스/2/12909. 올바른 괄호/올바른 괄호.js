const solution = (s) => {
    // 1. '('와 ')'의 갯수가 동일한지 확인 → bool값 지정
    // 2. bool이 true이면 → ')'로 시작하지 않는지, '('로 끝나지 않는지 체크
    // 3. s를 돌면서 '('이면 배열 stack에 넣기
    // → ')'이면 stack에 length 체크 후 length가 0이면 return하여 넘기기
    // → length가 0이 아니면 기존에 들어있던 '('를 pop하여 '()'세트로 지우기
    // → s를 다 돌고나서 stack의 length가 0이면 bool을 true로 return
        let answer = false;
        const stack = [];
        for (let i = 0; i < s.length; i++) {
            if (s[i] === '(') {
                stack.push(s[i]);
            } else if (s[i] === ')') {
                if (stack.length === 0) {
                    return false;
            }
                stack.pop();
            }  
        }
        answer = stack.length === 0 ? true : false;


    return answer;
}