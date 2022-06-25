# ★
n, m = map(int, input().split())
ices = []

for i in range(n):
    ice = input()
    for j in ice:
        ices.append(j)  #list(map(int, ~))로 하면 붙어있는애들 리스트로

# print(ices)

graph = []
for i in ices:  #맨앞[0]넣어야함    --★이 부분들이 dfs로 처리
    if (i-1) and (i+1):
        graph[i] = [i-1, i+1, i+m]
    elif (i-1) and not (i+1):
        graph[i] = [i-1, i+m]
    elif not (i-1) and (i+1):
        graph[i] = [i+1, i+m]


# @
# N, M을 공백을 기준으로 구분하여 입력 받기
n, m = map(int, input().split())

# 2차원 리스트의 맵 정보 입력 받기
graph = []
for i in range(n):
    graph.append(list(map(int, input())))

# DFS로 특정 노드를 방문하고 연결된 모든 노드들도 방문
def dfs(x, y):
    # 주어진 범위를 벗어나는 경우에는 즉시 종료
    if x <= -1 or x >= n or y <= -1 or y >= m:  #--인덱스기준 n,m포함(x)
        return False
    # 현재노드를 아직 방문하지 않았다면
    if graph[x][y] == 0:
        # 해당 노드 방문 처리
        graph[x][y] = 1
        # 상하좌우의 위치들도 모두 재귀적으로 호출
        dfs(x-1, y)
        dfs(x, y-1)
        dfs(x+1, y)
        dfs(x, y+1) #상하좌우 함수들은 return값없이 단순히 연결된 모든 노드들의 방문처리 위함
        return True
    return False

# 모든 노드(위치)에 대하여 음료수 채우기
result = 0
for i in range(n):
    for j in range(m):
        # 현재 위치에서 DFS 수행
        if dfs(i, j) == True:   #해당노드와 연결된 노드들 방문처리(=첫 방문) 
            result += 1

print(result)   #정답 출력