# ★
def solution(participant, completion):
    answer = ''
    
    for x in participant:
        if (participant.count(x) == 2 and completion.count(x) == 1):
            return x
        elif (completion.count(x) == 0):
            return x
    
    return answer
    # 테케 몇 개 못넘김

# 타 풀이 : Hash Map
def solution(participant, completion):
    hashDict = {} # 딕셔너리 생성 = dict()
    sumHash = 0

    for part in participant:
        hashDict[hash(part)] = part # 값 넣기 dict[key] = value
        sumHash += hash(part)
    
    for comp in completion:
        sumHash -= hash(comp)
    
    return hashDict[sumHash]

# 타 풀이 : Counter
import collections

def solution(participant, completion):
    answer = collections.Counter(participant) - collections.Counter(completion) # 각각의 Counter끼리 빼면 남아있는 1개의 답 -> 딕셔너리형태의 반환

    return list(answer.keys())[0] # {"A" : 1} -> ['A'] -> [0] = 'A'