const solution = (numbers) => {
    const oneToNine = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let answer = 0;
     for(let i=0; i<oneToNine.length; i++){
       if(!numbers.includes(oneToNine[i])){
         answer += oneToNine[i];
       };
     };
    return answer;
}