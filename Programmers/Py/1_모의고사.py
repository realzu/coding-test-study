def solution(answers):
    answer = []
    n = len(answers)
    
    a = [1,2,3,4,5]
    b = [2,1,2,3,2,4,2,5]
    c = [3,3,1,1,2,2,4,4,5,5]
    
    ma = int(n / len(a)) + 1
    mb = int(n / len(b)) + 1
    mc = int(n / len(c)) + 1
    
    a = a * ma
    b = b * mb
    c = c * mc
    
    sa = 0
    sb = 0
    sc = 0
    
    for i in range(n):
        if (a[i] == answers[i]):
            sa = sa + 1
        if (b[i] == answers[i]):
            sb = sb + 1
        if (c[i] == answers[i]):
            sc = sc + 1
            
    val = max(sa,sb,sc)
    if (sa == val) :
        answer.append(1)
    if (sb == val) : 
        answer.append(2)
    if (sc == val) : 
        answer.append(3)
    
    return answer

# 타 풀이
# ★ enumerate
def solution(answers):
    pattern1 = [1,2,3,4,5]
    pattern2 = [2,1,2,3,2,4,2,5]
    pattern3 = [3,3,1,1,2,2,4,4,5,5]
    score = [0, 0, 0] # 추후 score의 인덱스 사용해 결과도출
    result = []

    for idx, answer in enumerate(answers):
        if answer == pattern1[idx % len(pattern1)]: # %를 이용한 식
            score[0] += 1
        if answer == pattern2[idx % len(pattern2)]:
            score[1] += 1
        if answer == pattern3[idx % len(pattern3)]:
            score[2] += 1
    
    for idx, s in enumerate(score):
        if s == max(score):
            result.append(idx + 1)
    
    return result