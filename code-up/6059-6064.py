# 6059    @
a = int(input())
print(~a)
''' 
-- 입력 된 정수를 비트단위로 참/거짓을 바꾼 후 정수로 출력해보자.
비트단위 연산자 : ~, &, ^, |, <<, >>
~n = -n -1  (ex. ~ 2 = -2 -1 = -3)
-n = ~n + 1 (ex. -3 = ~3 + 1 = 2)
'''


# 6060
a, b = input().split()
a = int(a)
b = int(b)
print(a & b)


# 6061
a, b = input().split()
a = int(a)
b = int(b)
print(a | b)


# 6062 ★
a, b = input().split()
a = int(a)
b = int(b)
print(a ^ b)
'''
^(xor, circumflex/caret, 서컴플렉스/카릿) -> 서로 다를 때 1
ex-두 장의 이미지가 겹칠 때, 색이 서로 다른 부분만 처리
'''


# 6063 ★
a, b = input().split()
a = int(a)
b = int(b)
print(max(a, b))
'''
c = a if a >= b else b
print(c)
if-else문 조건 한 줄로 가능
'''


# 6064 @
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
# print(min(a, b, c))
if a <= b and a <= c:
    print(a)
elif b <= a and b <= c:
    print(b)
elif c <= a and c <= b:
    print(c)
'''
d = a if a < b else b
e = d if d < c else c
print(e)
'''