function solution(x) {
    var answer = true;
    const sum = x.toString().split('').reduce((a,c) => Number(a)+Number(c));
    if(x % sum !== 0) answer = false;
    return answer;
}