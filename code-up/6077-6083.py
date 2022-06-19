# 6077  ★
a = int(input())
s = 0
for i in range(1, a):
    i = i + 1
    if i % 2 == 0:
        s += i
print(s)
'''s 라는 새로운 변수를 활용하기'''


# 6078
while True:
    a = input()
    print(a)
    if a == 'q':
        break


# 6079 @
a = int(input())
n = 1
s = 0
while True:
    if s >= a:
        print(n-1)
        break
    s += n
    n += 1
'''
while s < a 으로 조건을 주면 break줄 필요 x
'''


# 6080
a, b = input().split()
a = int(a)
b = int(b)
for aa in range(a): #range(a+1) 하면
    for bb in range(b):
        print(aa+1, bb+1)   #print(a) 할 수 있


# 6081  ★★
a = int(input(), 16)
for i in range(1, 16):
    print('%X*%X=%X'%(a, i, a*i))


# 6082  ★★
a = int(input())
for i in range(1, a+1):
    if i % 10 in (3, 6, 9): #3, 6, 9 가 들어간 수 -> % 10 !!
        print('X', end=' ')
    else:
        print(i, end=' ')


# 6083
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
for aa in range(a):
    for bb in range(b):
        for cc in range(c):
            print(aa, bb, cc)
print(a * b * c)