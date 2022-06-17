# 6025
a, b = input().split()
print(int(a) + int(b))  #입력되는 값은 기본적으로 문자열로 인식


# 6026
a = input()
b = input()
print(float(a) + float(b))


# 6027 ★
a = int(input())
print('%x'%a)   # %x는 16진수(hexadecimal), %o는 8진수(octal)


# 6028  ★
a = int(input())
print('%X'%a)   #x는 소문자, X는 대문자


# 6029  ★
n = input()
x = int(n, 16)  #16진수로 인식
print('%o'%x)


# 6030 ★
a = ord(input())    #ord() : 10진수 유니코드 값으로 변환 (문자->정수) ex.A->65
print(a)


# 6031  ★
n = int(input())    #입력값 확인(ex. int)
print(chr(n))   #chr() : 정수값->문자(chracter) (유니코드 문자로 변환) ex.65->A