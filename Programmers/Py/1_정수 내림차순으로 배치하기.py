def solution(n):
    answer = ''
    
    n = list(map(int, str(n))) # ★str() -> int
    n.sort()
    n.reverse()
    
    for x in n:
        answer += str(x)
    
    return int(answer)

# 타 풀이
def solution(n):
    ls = list(str(n))
    ls.sort(reverse= True) # 안에 reverse
    return int(''.join(ls)) # ★ '구분자'.join(리스트)