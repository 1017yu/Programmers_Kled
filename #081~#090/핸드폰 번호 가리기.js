/*
프로그래머스 모바일은 개인정보 보호를 위해 고지서를 보낼 때 고객들의 전화번호의 일부를 가립니다.
전화번호가 문자열 phone_number로 주어졌을 때, 
전화번호의 뒷 4자리를 제외한 나머지 숫자를 전부 *으로 가린 문자열을 리턴하는 함수, solution을 완성해주세요.
*/

const solution = (phone_number) => {
    let answer = [];
    answer = phone_number.split('').reverse()
    for (let i = 4; i < answer.length; i++) {
        answer[i] = '*'
    }
    answer = answer.reverse().join('')
    
    return answer
}

/* 참고해야할 다른 풀이

const solution = (phone_number) => {
    let result = "*".repeat(phone_number.length - 4) + phone_number.slice(-4)
    return result;
  }


const solution = (phone_number) => {
    return [...phone_number].fill("*", 0, phone_number.length - 4).join('')
}
*/
