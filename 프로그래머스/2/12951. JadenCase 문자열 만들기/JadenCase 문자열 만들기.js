const solution = (s) => {
    // 첫 번째 요소의 첫 번째 글자가 number 타입인지 확인하지 않아도 되는데
    // 확인하려다가 오래걸려버렸다.. 좀 더 잘 생각해보고 하면 시간 단축에 좋을 것
    // const bool = isNaN(parseInt(splitS[0][0])) ? false : true;
    
    const splitS = s.split(" ");
    const changeS = splitS.map((item, index)=>{
      if ( index === 0 || item !== "") {
        const lowerCaseItem = item.toLowerCase();
        const upperCaseItem = lowerCaseItem[0].toUpperCase();
        const newItem =  upperCaseItem + lowerCaseItem.slice(1);
        return newItem;
      } else {
          return "";
      }
    });
    return changeS.join(' ');
}