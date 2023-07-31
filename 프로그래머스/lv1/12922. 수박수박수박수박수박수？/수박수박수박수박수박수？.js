const solution = (n) => {
 const wm = '수박'
 let answer = '';
 for(let i=0;i<n;i++){
  i%2==0 ? answer+=wm[0] : answer+=wm[1];
 }
 return answer;
}