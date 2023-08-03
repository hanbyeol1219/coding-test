const solution = (participant, completion) => {
    var answer = '';
    participant.sort();
    completion.sort();
    for(var i = 0 ; i < participant.length; i++){
        if(participant[i] !== completion[i]){
            answer = participant[i];
            break; // 다른 값을 찾는 순간 뒤의 값을 비교할 필요x
        }
    }
    return answer;
}