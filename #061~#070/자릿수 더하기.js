/*
자연수 N이 주어지면, N의 각 자릿수의 합을 구해서 return 하는 solution 함수를 만들어 주세요.
예를들어 N = 123이면 1 + 2 + 3 = 6을 return 하면 됩니다.
*/


/* 덧셈 연산자 +를 사용할 때, 피연산자 중 어느 하나가 문자열이면 문자열이 아닌 다른 피연산자도 문자열로 타입이 변환되어 문자열을 합친 값이 반환 */

const solution = (n) => {
    return [...(n + '')].reduce((a,b) => a  + b * 1, 0)
}
