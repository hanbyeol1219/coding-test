const solution = (q, r, code) => {
    let a = '';
    for(let i=0;i<code.length;i++){
      if(i%q === r){
        a+=code[i];
      }
    }
    return a;
}