# 사분면 고르기
x = int(input())
y = int(input())

if x > 0 and y > 0:
    print(1)
elif x < 0 and y > 0:
    print(2)
elif x < 0 and y < 0:
    print(3)
else:
    print(4)

'''
이렇게도 가능
if x > 0:
    print(1 if y > 0 else 4)
elif x < 0:
    print(2 if y > 0 else 3)
'''