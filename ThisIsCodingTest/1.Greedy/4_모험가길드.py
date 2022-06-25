# ★
# 공포도 X인 모험가는 반드시 X명 이상 -- 그룹수 최댓값
n = int(input())
x = list(map(int, input().split()))

g = 0   #그룹 수
a = 0   #min

# while True:
#     x.sort()
#     p = 0   #그룹당 인원
#     for i in range(len(x)):   #★len(X)놉. for i in x하면 리스트 모든 요소 출력 (range도 필요x)
#         a = min(x)
#         for j in range(len(x-1)):
#             if a == x[j]
#         x.remove(a)

# 애초에 while문이 아니라 for문을 통해 밑에서부터 하나하나 찾아갔으면 됐음 => min할 필요가 없던 것
# 변수 세팅, sort 사용 아이디어 (o)

'''★
리스트.count(a) = a값 세기
리스트.remove(a) = a값 제거
del 리스트[인덱스] = 리스트.pop(인덱스) = 인덱스요소 제거
리스트.sort() = 오름차순 정렬(1 2 3) !!
리스트.sort(reverse=True) = 내림차순 정렬(3 2 1)
'''

# 강의 답안
n = int(input())
data = list(map(int, input().split()))  #--공포도
data.sort()

result = 0 #총 그릅의 수
count = 0 #현재 그룹에 포함된 모험가의 수

for i in data:  #공포도를 낮은 것부터 하나씩 확인하며
    count += 1  #현재 그룹에 해당 모험가를 포함시키기
    if count >= i: #현재 그룹에 포함된 모험가의 수가 현재의 공포도 이상이라면, 그룹 결성
        result += 1 #총 그룹의 수 증가시키기
        count = 0   #현재 그룹에 포함된 모험가의 수 초기화

print(result)   #총 그룹의 수 출력