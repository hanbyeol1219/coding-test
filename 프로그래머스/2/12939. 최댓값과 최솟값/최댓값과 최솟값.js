const solution = (s) => {
    let answer = '';
    let splitS = s.split(' ');
    return answer = `${Math.min(...splitS)} ${Math.max(...splitS)}`;
}