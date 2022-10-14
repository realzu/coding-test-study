# ★

def solution(scoville, K):
    answer = 0
    
    while len(scoville) > 2:
        scoville.sort()
        
        if scoville[0] < K:
            answer += 1
            sum = scoville[0] + (scoville[1] * 2)
            del scoville[0 : 2]
            scoville.append(sum)
        elif scoville[0] >= K:
            return answer
        
    if len(scoville) == 2 and scoville[0] < K and scoville[1] < K:
        return -1
    
    return answer # 마지막 16번만 못넘김 ㅜ

# 타 풀이
# ★ heap: 최소/최대 찾기위한 트리형식 자료구조 (데이터 삽입, 반환 시 sort필요없이 자동정렬)
# heapify, heappop, heappush
from heapq import *
def solution(scoville, K):
    answer = 0
    heapify(scoville) # 기존의 리스트 -> 오름차순의 힙 변환

    while scoville[0] < K: # 가장작은수가 K보다 낮을때 계속
        if len(scoville) > 1: # 최소 2
            answer += 1
            num1 = heappop(scoville) # 리스트내 가장작은값
            num2 = heappop(scoville)
            heappush(scoville, num1 + num2 * 2) # 리스트에 value삽입 + 자동정렬
        else:
            return -1

    return answer