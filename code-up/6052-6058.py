# 6052 ★
a = int(input())
if a == 0:
    print('False')
else:
    print('True')

''' print(bool(a))  
if-else말고 bool로 평가 가능!
정수값 0은 False로 평가되고, 그 외의 값들은 True '''


# 6053 ★
a = int(input())
if bool(a) == False:  #'False'(x)
    print('True')
elif bool(a) == True:
    print('False')
'''
a = bool(int(input()))
-> print(not a)
not으로 반대값 표현
'''


# 6054  @
a, b = input().split()
a = int(a)
b = int(b)
if bool(a) and bool(b):
    print('True')
else:
    print('False')
'''
-> print(bool(a) and bool(b))
print로 T/F안줘도 결과 자체가 boolean이라서 T/F로 나옴!!
'''


# 6055
a, b = input().split()
a = int(a)
b = int(b)
print(bool(a) or bool(b))


# 6056 @
a, b = input().split()
a = int(a)
b = int(b)
print(bool(a) != bool(b))
'''
print((a and (not b)) or (not a) and (b))
!= 기호말고 and/or
'''


# 6057
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print((a and b) or (not a and not b))


# 6058
a, b = input().split()
a = bool(int(a))
b = bool(int(b))
print((not a and not b))
'''
print(not (a or c))
print( a == False and b == False)
도 가능
'''