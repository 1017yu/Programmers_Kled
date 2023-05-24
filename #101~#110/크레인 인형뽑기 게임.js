/*
게임 화면은 "1 x 1" 크기의 칸들로 이루어진 "N x N" 크기의 정사각 격자이며 위쪽에는 크레인이 있고 오른쪽에는 바구니가 있습니다. 
각 격자 칸에는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸입니다. 
모든 인형은 "1 x 1" 크기의 격자 한 칸을 차지하며 격자의 가장 아래 칸부터 차곡차곡 쌓여 있습니다.
게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있습니다. 
집어 올린 인형은 바구니에 쌓이게 되는 데, 이때 바구니의 가장 아래 칸부터 인형이 순서대로 쌓이게 됩니다. 

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다. 

크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는 아무런 일도 일어나지 않습니다. 
또한 바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다. 

게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 
크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 return 하도록 solution 함수를 완성해주세요.
*/

function solution(board, moves) {
    let answer = 0;
    let result = [];
    let column = []
    
    // board 배열을 column으로 정렬
    for (let i = 0; i < board[0].length; i++) {
        let tmp = []
        for (let j = 0; j < board.length; j++) {
            // 0인 value는 push하지 않는다.
            board[j][i] ? tmp.push(board[j][i]) : tmp
        }
        column.push(tmp)
    }
    
    // 크레인 시작
    for (let i = 0; i < moves.length; i++) {
        // 크레인이 집을 인형이 없으면 continue으로 조건화
        if (column[moves[i] - 1].length > 0) {
            result.push((column[moves[i] - 1].shift()))
        } else {
            continue
        }
        
        // 2개가 쌓이면, answer 변수에 2를 더하고 pop으로 걸러냄
        if (result[result.length - 1] === result[result.length - 2]) {
            result.pop()
            result.pop()
            answer += 2
            
        }
    }
    return answer
}
