# OX퀴즈
n = int(input())

ox = []
for i in range(n):
    ox.append(input())

for i in ox:    #한 줄
    su = 0
    sum = 0
    for j in range(len(i)): #0,1,2...
        if i[j] == 'X':
            continue
        elif i[j] == 'O' and i[j-1] == 'O':
            su += 1 #앞이 O이면 점점 증가하니까 su로 누적
            sum += su
        elif i[j] == 'O' and i[j-1] != 'O': 
            su = 1  #앞이 x면 su가 다시 1로 초기화
            sum += su
    print(sum)

'''
두 개의 for문 합쳐서 해도 됌
X일 때는 상관없으니 조건문에 안넣어줘도됌
for j in i:
    if j == 'O':
        su += 1
        sum += su
    else:
        su = 0
else인 경우는 x가 중간에 들어왔다는거니까 0으로 초기화해주면되서 간단하게 표현 가능
'''