# ★
n = int(input())
move = list(input().split())    #★ list안해도 자동으로 리스트됌

x = 1
y = 1
mx = [0, 0, -1, 1]
my = [-1, 1, 0, 0]
j = 0

for i in range(len(move)):
    if move[i] == 'L':
        j == 0
    elif move[i] == 'R':
        j == 1
    elif move[i] == 'U':
        j == 2
    elif move[i] == 'D':
        j == 3

    x += mx[j]
    y += my[j]

    if (x < 1 or x > n) or (y <1 or y > n):
        x -= mx[j]
        y -= my[j]

print(x,y)


# 강의 답안
n = int(input())
x, y = 1,1
plans = input().split()

dx = [0, 0, -1, 1]
dy = [-1, 1, 0, 0]
move_types = ['L', 'R', 'U', 'D']   #★

# 이동 계획 하나씩 확인하기
for plan in plans:      # ★range()는 숫자고. 리스트 가져오려면 in 리스트!!
    # 이동 후 좌표 구하기
    for i in range(len(move_types)):
        if plan == move_types[i]:
            nx = x + dx[i]
            ny = y + dy[i]
    # 공간을 벗어나는 경우 무시
    if nx < 1 or ny < 1 or nx > n or ny > n:
        continue    #--밑의 변수x,y에 안담고 이 자리에서 끝남 = 사라짐
    # 이동 수행
    x, y = nx, ny

print(x, y)