// ★

// 네모갯수까진 어떻게든 풀었지만 이후 로직 실패
function solution(m, n, board) {
    var answer = 0;
    let dx = [1, 1, 0];
    let dy = [0, 1, 1];
    let ck = Array.from({length: m}, ()=>Array.from({length: n}, ()=>0)) // @ 2차원배열
    let xs = [];
    let ys = [];
    
    for (let i=0; i<m-1; i++){ // y
        for (let j=0; j<n-1; j++){ // x
            let cul = board[i][j];
            xs = [j];
            ys = [i];
            for (let k=0; k<3; k++){
                let x = j+dx[k];
                let y = i+dy[k];
                if (x >= 0 && x <=n && y >= 0 && y <= m && cul === board[y][x]) {
                    xs.push(x);
                    ys.push(y);
                }
                else {
                    xs = [];
                    ys = [];
                    break;
                }
            }
            
            for (let l=0; l<xs.length; l++) {
                ck[ys[l]][xs[l]]++;
            }
        }
    }
    
    for (let i=0; i<m; i++) {
        for (let j=0; j<m; j++) {
            
        }
    }
        
    // ck.forEach(v => {
    //     v.forEach(val => {
    //         if (val >= 1) answer++;
    //     })
    // })
    
    return answer;
}

// 타 정답풀이
// 계속해야되니 while문 돌림. 정답로직
const solution = (m, n, board) => {
    let answer = 0;
    board = board.map(v => [...v]); //board 배열분리

    while (true) {
        let arr = [];

        // 네모 찾기
        for (let i=0; i<m-1; i++) {
            for (let j=0; j<n-1; j++) {
                if (
                    board[i][j] &&
                    board[i][j] === board[i+1][j] &&
                    board[i][j] === board[i+1][j+1] &&
                    board[i][j] === board[i][j+1]
                ) arr.push([i, j]);                
            }
        }

        // ★ 정답 로직 - 0으로 바뀐 요소 갯수
        if (!arr.length) {
            return [].concat(...board).filter(v => !v).length;
        } // !0 = true

        // 네모들 0으로 변경
        for (let i=0; i<arr.length; i++) {
            let col = arr[i][0];
            let row = arr[i][1];
            board[col][row] = 0;
            board[col][row+1] = 0;
            board[col+1][row] = 0;
            board[col+1][row+1] = 0;
        }

        // 밑으로 내리기
        for (let i=m-1; i>0; i--) { // col (아래에서부터 탐색)
            for (let j=0; j<n; j++) { // row
                if (board[i][j]) break; // 0이 아니라 값이 있으면 패스
                for (let k=i-1; k>=0 && !board[i][j]; k--) { // col 위의 col
                    if (board[k][j]) { // 위에 값있으면
                        board[i][j] = board[k][j]; // 0대신 윗값 밑으로 내림
                        board[k][j] = 0;
                        break; // 0 위의 첫공간이니 바로 멈춰줌(안그럼 위로계속up)
                    }
                }
            }
        }
    }
};