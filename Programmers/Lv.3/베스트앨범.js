function solution(genres, plays) {
    var answer = [];
    
    // 장르
    let song = {};
    genres.forEach((g, i) => {
        if (song[g]) song[g] += plays[i];
        else song[g] = plays[i];
    })
    
    song = Object.entries(song);
    song.sort((a, b) => {
        return b[1] - a[1];
    })
    
    // 노래
    song.forEach(v => {
        let play = [];
        genres.forEach((g, i) => {
            if (v[0] === g) play.push([i, plays[i]]);
        })
        play.sort((a, b) => {
            if (b[1] === a[1]) return a[0] - b[0];
            else return b[1] - a[1];
        })
        
        play.length === 1 ? answer.push(play[0][0]) : answer.push(play[0][0], play[1][0]);
    })
    
    return answer;
}