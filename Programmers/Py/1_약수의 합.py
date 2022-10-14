def solution(n):
    answer = 0
    
    for x in range(n):
        if (n % (x+1) == 0):
            answer += (x+1)
    
    return answer

# 타 풀이
def solution(n):
    return sum([i for i in range(1, n+1) if n % i == 0])
# ★ sum, comprehension, range(1, n+1)