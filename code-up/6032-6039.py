# 6032  ★
# 나의 답안
a = int(input())
if a > 0:
    print('-' + str(a))
elif a == 0:
    print(str(a))
elif a < 0:
    print(str(a)[1:])

# 답안 (한줄로 바뀌어버리는 magic)
a=int(input())
print(-a)   #정수라서 -붙여도됌!


# 6033
a = input()
s = ord(a) + 1
print(chr(s))


# 6034
a, b = input().split()
c = int(a) - int(b)
print(c)


# 6035
a, b = input().split()
c = float(a) * float(b)
print(c)


# 6036  ★
a, b = input().split()

for i in range(int(b)):
    print(a, end='')

# + 답안 방법
# print(a * int(b))   #문자열*정수 / 정수*문자열 은 숫자만큼 문자열 반복 (공백x)


# 6037  @
a = int(input())
b = input()
print(a * b)


# 6038 ★
a, b = input().split()
c = int(a) ** int(b)    #거듭제곱은 ^ 아님!! **임
print(c)


# 6039
a, b = input().split()
c = float(a) ** float(b)
print(c)