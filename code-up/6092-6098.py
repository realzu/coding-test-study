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
# 2차원리스트 -> a = [[0 for j in range(20)] for i in range(20)]도 가능

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



# 6097 ★ 설탕과자 뽑기
h, w = input().split()
h = int(h)
w = int(w)

p = []
for i in range(h+1):    #h+1 : (0,0)좌표 포함이라
    p.append([])
    for j in range(w+1):
        p[i].append(0)

n = int(input())
for i in range(n):
    l, d, x, y = input().split()
    l = int(l)
    d = int(d)
    x = int(x)
    y = int(y)
    # int줄 때 -> l, d, x, y = map(int, input().split()) 로 한번에 가능
    if d == 0:
        for j in range(l): #가로길이 증가
            p[x][y+j] = 1 #y는 column이라 가로는 y에 추가.  []안줘도 바로 [x][y] 인식 가능
    else:
        for j in range(l):
            p[x+j][y] = 1

for i in range(1, h+1): #좌표 (0,0)제외해야되서 1부터 h+1
    for j in range(1, w+1):
        print(p[i][j], end=' ')
    print()



# 6098 성실한 개미 ★★
# 개미굴 기본값 생성
p = []

for i in range(10):
    p.append(list(map(int, input().split())))   #★append를 통해 리스트값 넣을수있음!

# 개미 이동경로 (0=갈수있 / 1=벽 / 2=먹이)
x = 1   #(2,2)에서 출발
y = 1

while True:
    if (p[x][y] == 0):  #해당하는 경우에 9 결과 주기
        p[x][y] = 9
    elif (p[x][y] == 2):
        p[x][y] = 9
        break   #(★먹이 찾은 경우 멈춘다는걸 문제에서 인지못함ㅠ)

    # 예외상황  ★ p[x][y] == p[11][11]아니고 (x,y)값을 확인해야함) -> (x, y) == (8, 8)
    if (x==8 and y==8) or (p[x][y+1] == 1 and p[x+1][y] == 1):
        break

    if p[x][y+1] != 1 :  # ★ == 0 이 아니라 != 1로 해야 먹이2도 포함 
        y += 1             # ★ 문제에 따르면 오른쪽으로 먼저 갔다가 안되면 내려가는거라, if문의 우선순위가 오른쪽으로 가는게 먼저여야함(이거때문에 틀)
    elif p[x+1][y] != 1 :
        x += 1

# 출력
for i in range(10):
    for j in range(10):
        print(p[i][j], end=' ')
    print()