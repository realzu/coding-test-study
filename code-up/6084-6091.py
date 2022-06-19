# 6084
h, b, c, s = input().split()
h = int(h)
b = int(b)
c = int(c)
s = int(s)
print(str(round((h * b * c * s) / (8 * 1024 * 1024), 1)), 'MB')


# 6085
w, h, b = input().split()
w = int(w)
h = int(h)
b = int(b)
print('%.2f'%((w * h * b) / (8 * 1024 * 1024)), 'MB')


# 6086
a = int(input())
i = 0
s = 0
while s < a:
    i += 1
    s += i
print(s)


# 6087
a = int(input())
for i in range(1, a+1):
    if i % 3 != 0:
        print(i, end=' ')
'''
if i % 3 == 0:
    continue
로 해서 다음단계로 넘어가게할수도! 
'''


# 6088
a, d, n = input().split()
a = int(a)
d = int(d)
n = int(n)
print(a + (n-1)*d)

'''
등차수열 공식 말고라면
s = a
for i in range(2, n+1):
    s += d
print(s)
'''


# 6089
a, r, n = input().split()
a = int(a)
r = int(r)
n = int(n)

g = a
for i in range(2, n+1):
    g *= r
print(g)

# or
print(a * (r ** (n-1)))


# 6090
a, m, d, n = input().split()
a = int(a)
m = int(m)
d = int(d)
n = int(n)

s = a
for i in range(1, n):
    s = (s * m) + d
print(s)


# 6091  ★★
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)

d = 1
while d%a != 0 or d%b != 0 or d%c != 0:
    d += 1
print(d)
''' Q: 같은 날 방문한 3명이 일정한 방문 주기에 따라, 다시 한번 모이게 될 날은 언제?
'''