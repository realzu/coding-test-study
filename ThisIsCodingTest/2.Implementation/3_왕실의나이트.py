''' 8 * 8
나이트 위치 좌표 -> 이동 경우의 수
col, row = a, 1

좌표입력받음
좌표기준으로 이동경로따지기 - 1,2
정원밖은 제외
가능한 경로 카운트
'''
s = input()

col = s[:1]
row = s[1:]

col = ord(col)
row = int(row)

dc = [2, -2, 1, -1]
dr = [1, -1, 2, -2]

count = 0
while True:
    # if (row + dr[1]) or (row + dr[2]) 
    for i in range(2):
        for j in range(2):
            nc = col + dc[i]
            nr = row + dr[i]
            if ord('a') <= nc <= ord('h') or 1 <= nr <= 8:
                col = nc
                row = nr
                count += 1
    for i in range(2, 4):
        for j in range(2, 4):
            nc = col + dc[i]
            nr = row + dr[i]
            if ord('a') <= nc <= ord('h') or 1 <= nr <= 8:
                col = nc
                row = nr
                count += 1
    if not(ord('a') <= nc <= ord('h')) and not(1 <= nr <= 8):
        break

print(count)
'''
i로 나눠서 루프하는게 더 복잡. 오히려 리스트끼리 i기준으로 짝지으는게 간편
아이디어 진행, 검증 과정은 같았지만 풀이를 복잡하게생각해버림
'''


# 강의답안
# 현재 나이트의 위치 입력받기
input_data = input()
row = int(input_data[1])    #★ slice안해도 [0]or[1]하면 가져오네
column = int(ord(input_data[0])) - int(ord('a')) + 1    #★ 첫값'a'기준으로 빼기. ord->int로 묶어줘야!

# 나이트가 이동할 수 있는 8가지 방향 정의
steps = [(-2, -1), (-1, -2), (1, -2), (2, -1), (2 ,1), (1, 2), (-1, 2), (-2, 1)]

# 8가지 방향에 대하여 각 위치로 이동이 가능한지 확인
result = 0
for step in steps:
    # 이동하고자 하는 위치 확인
    next_row = row + step[0]
    next_column = column + step[1]
    # 해당 위치로 이동이 가능하다면 카운트 증가
    if next_row >= 1 and next_row <= 8 and next_column >= 1 and next_column <= 8:
        result += 1

print(result)