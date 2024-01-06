const solution = (brown, yellow) => {
  // 0. brown과 yellow를 더한 수(sumByBrownAndYellow)의 약수를 구하여 divisorArr에 넣는다.
  // 1. 약수의 길이가 짝수이면 --> 1,3,9 / 1,5,25 등의 경우를 구분
  // 1-1. 곱하면 sumByBrownAndYellow가 되는 약수들로 짝을 지어서 배열 pairs에 push한다.
  // * 이 때 큰 수를 앞으로 보내기 위해 for문의 i를 큰 수부터 순회하도록 한다.
  // 1-2. pairs를 순회하면서 각 배열 내부의 두 수를 2씩 뺀 후 곱한 수가 주어진 yellow와 같은지
  //      bool값을 반환하는 배열 pairMinusTwo를 생성한다.
  // 1-3. pairMinusTwo에서 true 값을 담은 index를 찾는다.
  // 1-4. pairs에서 1-3에서 찾은 index의 값을 return한다.
  // 2. 약수의 길이가 홀수이면 --> 약수의 가운데 순서의 수를 pairs에 두 번 담아서 return한다.
  // * 예를 들면, 1,(3), 9 / 1, (5), 25 의 경우 3과 5
    
  // 0
  let sumByBrownAndYellow = brown + yellow;
  let divisorArr = [];
  for (let i = 0; i <= sumByBrownAndYellow; i++) {
    if (sumByBrownAndYellow % i === 0) {
      divisorArr.push(i);
    }
  }

  let pairs = [];
  // 1
  if (divisorArr.length % 2 === 0) {
    let j = 0;
    // 1-1
    for (let i = divisorArr.length - 1; i >= divisorArr.length / 2; i--) {
      pairs.push([divisorArr[i], divisorArr[j]]);
      j++;
    }

    // 1-2
    const pairMinusTwo = pairs.map((pair) => {
      return (pair[0] - 2) * (pair[1] - 2) === yellow;
    });
      
    // 1-3
    const trueIndex = pairMinusTwo.indexOf(true);
    // 1-4
    return pairs[trueIndex];
  } else { // 2
    pairs.push(
      divisorArr[(divisorArr.length - 1) / 2],
      divisorArr[(divisorArr.length - 1) / 2]
    );
  }
  return pairs;
};