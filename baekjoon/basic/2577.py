# @
# 숫자의 개수

a = int(input())
b = int(input())
c = int(input()) #split을 붙이느라 리스트로 나왔던것 ㅠ

result = str(a * b * c)

for i in range(10):
    print(result.count(str(i))) #'i'라 하면 정말 문자 i가 나옴!