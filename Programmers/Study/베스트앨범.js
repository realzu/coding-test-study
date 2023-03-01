function solution(genres, plays) {
    const genre = new Set(genres);
    const obj = new Map();
    
    // 초기화
    genre.forEach((x) => {
        obj[x] = [0, []];
    })
    
    // 장르별 묶기
    for (let i=0; i<genres.length; i++) {
        const playCount = plays[i]
        obj[genres[i]][0] = obj[genres[i]][0] + playCount;
        obj[genres[i]][1] = [...obj[genres[i]][1], [playCount, i]];
    }
    
    // 재생수 정렬, max 2곡
    Object.keys(obj).forEach((x) => {
        obj[x][1].sort((a, b) => b[0] - a[0]);
        obj[x] = [obj[x][0], obj[x][1].splice(0, 2)];
    })
    
    // 장르 정렬
    const arr = Object.entries(obj);
    arr.sort((a, b) => b[1][0] - a[1][0]);
    
    // 값 도출
    const answer = [];
    arr.forEach((x) => {
        x[1][1].forEach((i) => {
            answer.push(i[1])
        })
    })

    return answer;
}

// @
// '묶는 것', 정렬
function solution(genres, plays) {
    const genreMap = new Map();

    genres
        .map((genre, index) => [genre, plays[index]])
        .forEach(([genre, play], index) => {
            const data = genreMap.get(genre) || { total: 0, songs: [] }; // 초기값 없으면 ||로 처리
            genreMap.set(genre, {
                total: data.total + play,
                songs: [...data.songs, { play, index }]
                    .sort((a, b) => b.play - a.play)
                    .slice(0, 2)
            })
        })

    return [...genreMap.entries()]
        .sort((a, b) => b[1].total - a[1].total)
        .flatMap(item => item[1].songs)
        .map(song => song.index)
}
/*
    묶는다 like HashTable
    비구조화할당 []
    {key: value}
    ||
    return .sort.map
*/