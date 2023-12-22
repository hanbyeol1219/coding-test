const solution = (A,B) => {
    // ** 최솟값을 만들기 위해 각 배열 요소의 작은 것↑*높은 것↓
    // 1. A는 오름차순, B는 내림차순 정렬
    // 2. for문으로 같은 index 값끼리 곱하고 answer에 더하기
    A.sort((a, b) => a - b);
    B.sort((a, b) => b - a);
    let answer = 0;
    for(let i=0; i<A.length; i++){
        answer += A[i]*B[i];
    }
    return answer;
}