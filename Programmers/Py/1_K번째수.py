def solution(array, commands):
    answer = []
    
    for c in commands:
        num = array[c[0]-1 : c[1]]
        num.sort()
        answer.append(num[c[2]-1])
        
    return answer

# 타 풀이
def solution(array, commands):
    answer = []

    for i, j, k in commands: # ★ i,j,k를 한번에
        answer.append(list(sorted(array[i-1 : j]))[k-1])
    
    return answer


# 타 풀이
def solution(array, commands):
    return list(map(lambda x: sorted(array[x[0] - 1 : x[1]]), commands)) # ★ lambda, sorted