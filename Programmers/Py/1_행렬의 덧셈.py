# @
# import copy
def solution(arr1, arr2):
    answer = [item[:] for item in arr1] # ★ 2차원리스트의 깊은 복사!
    # answer = copy.deepcopy(arr1) # ★ 이 방법도 가능 (속도 조금 느림)
    
    for i in range(len(arr1)): #행
        for j in range(len(arr1[i])): #열
            answer[i][j] = arr1[i][j] + arr2[i][j]
    
    return answer