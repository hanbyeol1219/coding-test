const solution = (seoul) => {
    let answer='';
    seoul.map((str,i)=>{
      if(str==="Kim"){
        answer=`김서방은 ${i}에 있다`;
      }
    })
    return answer;
}