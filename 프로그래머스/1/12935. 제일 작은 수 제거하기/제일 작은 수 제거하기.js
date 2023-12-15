const solution = (arr) => {
    const filteredArr = arr.filter((num)=>(num !== Math.min(...arr)));
    return filteredArr.length === 0 ? [-1] : filteredArr;
}