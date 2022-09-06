function solution(arr) {
    var answer = 0;
    let length = arr.length;
    let sum = arr.reduce((a,c) => a+c);
    return answer = sum/length;
}