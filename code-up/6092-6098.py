# 6092 ★★ 이상한 출석 번호 부르기
n = int(input())
a = input().split() #자동으로 list됌

for i in range(n):
    a[i] = int(a[i])    #입력한 값 list

d = []
for i in range(24):
    d.append(0) #d[0],,,d[23] 으로 값 읽고 저장 가능.  기본값0

for i in range(n):
    d[a[i]] += 1

for i in range(1, 24):
    print(d[i], end=' ')


# 6093
a = int(input())
b = input().split()

for i in range(a):  #정수화 시키기
    b[i] = int(b[i])

for i in range(a-1, -1, -1):    #역순
    print(b[i], end=' ')


# 6094
a = int(input())
b = input().split()

for i in range(a):
    b[i] = int(b[i])

print(min(b))


# 6095 ★★ 바둑판에 흰 돌 놓기
d = []

for i in range(20):
    d.append([])    #큰 리스트(d)안에 비어있는 작은 리스트 19개 넣음
    for j in range(20):
        d[i].append(0)  #거기에 값 0 넣음

n = int(input())
for i in range(n):
    x, y = input().split()
    d[int(x)][int(y)] = 1   #리스트d에서 x,y좌표찍힌곳은 1.  d[1][2]는 d리스트 중 두번째리스트, 그 안에 세번째 선택

for i in range(1, 20):
    for j in range(1, 20):  #2차원 -> 리스트[세로인덱스][가로인덱스]
        print(d[i][j], end=' ') 
    print() #줄바꿈



# 6096 ★★ 바둑알 십자 뒤집기
d = []

for i in range(20):
    d.append([])
    for j in range(20):
        d[i].append(0)

for i in range(19):
    a = input().split()
    for j in range(19):
        d[i+1][j+1] = int(a[j])

n = int(input())
for i in range(n):
    x, y = input().split()
    x = int(x)
    y = int(y)
    for j in range(1, 20):
        if d[j][y] == 0:
            d[j][y] = 1
        else:
            d[j][y] = 0
        
        if d[x][j] == 0:
            d[x][j] = 1
        else:
            d[x][j] = 0

for i in range(1, 20):
    for j in range(1, 20):
        print(d[i][j], end=' ')
    print()