# 6046 ★
# 정수 1개 입력받아 2배 곱해 출력하기
a = int(input())
print(a * 2)
'''
비트시프트 연산
<< : 오른쪽에 0이 주어진 개수 만큼 추가
>> : 왼쪽에 0 or 1(음의정수)이 개수만큼 추가
n = 10
print(n<<1) : 10을 2배 한 20
print(n>>2) : 10을 반으로 나눈 후 다시 반으로 나눈 값 2 

n = 10 -- 10진수 정수값
n = 10.0 -- 실수
n = 0o10 -- 8진수 10
n = 0xf -- 16진수 f = 10진수 15
'''
# print(a<<1)


# 6047 ★
# 정수 2개(a, b)를 입력받아 a를 2(^b)배 곱한 값으로 출력해보자.
a, b = input().split()
a = int(a)
b = int(b)
print(a << b)
'''
a<<1 = a * 2
a<<2 = a * 2^2
a<<b = a * 2^b
'''


# 6048
a, b = input().split()
a = int(a)
b = int(b)
if a < b:
    print('True')
else:
    print('False')


# 6049
a, b = input().split()
if int(a) == int(b):
    print('True')
else:
    print('False')


# 6050
a, b = input().split()
a = int(a)
b = int(b)
if b >= a:
    print('True')
else:
    print('False')


# 6051
a, b = input().split()
a = int(a)
b = int(b)
if a != b:
    print('True')
else:
    print('False')