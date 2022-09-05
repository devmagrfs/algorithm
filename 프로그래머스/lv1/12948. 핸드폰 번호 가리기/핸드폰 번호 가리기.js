function solution(phone_number) {
    var answer = '';
    let length = phone_number.length;
    let phoneArray = phone_number.split('')
    for(let i = 0; i < length-4; i++) {
        phoneArray[i] = '*';
    }
    answer = phoneArray.join('');
    return answer;
}