const solution = (s) => {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (stack.length === 0 || stack[stack.length - 1] !== s[i]) {
      // stack 배열에 아무것도 없으면 s의 i번째를 stack에 push한다.
      // 또는 stack의 최상단 요소와 s의 i번째가 같지 않으면 stack에 push한다.
      stack.push(s[i]);
    } else if (stack[stack.length - 1] === s[i]) {
      // stack의 최상단 요소와 s의 i번째가 같으면 stack 최상단 요소를 제거한다.
      stack.pop();
    }
  }
  return stack.length === 0 ? 1 : 0;
};