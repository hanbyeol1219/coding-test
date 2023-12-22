const solution = (x) => {
    // 1. x를 string으로 바꾼다. -> strX 생성
    // 2. strX를 돌면서 자릿수 숫자를 다 더한다.  -> totalX
    // 3. x를 totalX로 나눈다.
    // 4. 나머지가 0이면 true, 아니면 false를 return
    const strX = String(x);
    let totalX = 0;
    
    for(let i=0; i<strX.length; i++){
        totalX += Number(strX[i]);
    }
    
    return x%totalX===0? true : false;
}