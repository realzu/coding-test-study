# 6071
while True:
    a = int(input())
    if a == 0:
        break
    else:
        print(a)


# 6072  ★
a = int(input())
while a != 0:
    print(a)
    a -= 1 #a = a-1


# 6073
a = int(input())
while a != 0:
    print(a-1)
    a -= 1


# 6074 @
a = ord(input())
n = 97
while n != (a+1):   #n <= a
    print('%s'%chr(n), end=' ')
    n += 1

'''
a = ord(input())
n = ord('a')
while n <= a:   --while은 조건문이 참인 동안 반복
    print(chr(n), end=' ')
    n += 1
'''


# 6075
a = int(input())
n = 0
while n <= a:
    print(n)
    n += 1


# 6076
a = int(input())
for i in range(a+1):
    print(i)
'''
range(n) : 0, 1, 2, ..., n-1 까지의 수열
range(시작, 끝, 증감)   --Default는 +1
'''