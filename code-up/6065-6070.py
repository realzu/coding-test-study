# 6065
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
d = []
d.append(a)
d.append(b)
d.append(c)
for i in d:
    if i % 2 == 0:
        print(i)


# 6066
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
d = []
d.append(a)
d.append(b)
d.append(c)
for i in d:
    if i % 2 == 0:
        print('even')
    elif i % 2 == 1:
        print('odd')


# 6067
a = int(input())
if a < 0 and a % 2 == 0:
    print('A')
elif a < 0 and a % 2 == 1:
    print('B')
elif a > 0 and a % 2 == 0:
    print('C')
elif a > 0 and a % 2 == 1:
    print('D')

''' if 중첩문도 가능
if a > 0:
    if a % 2 == 0:
        print('A')
    else:
        print('B')
else:
    if a % 2 == 0:
        print('C')
    else:
        print('D')
'''


# 6068
a = int(input())
if 90 <= a <= 100:
    print('A')
elif 70 <= a <= 89:
    print('B')
elif 40 <= a <= 69:
    print('C')
else:
    print('D')
'''
a >= 90
a >= 70
이런식으로만 하면 됌. 
'''


# 6069
a = input()
if a == 'A':
    print('best!!!')
elif a == 'B':
    print('good!!')
elif a == 'C':
    print('run!')
elif a == 'D':
    print('slowly~')
else:
    print('what?')


# 6070
a = int(input())
if a in (12, 1, 2):
    print('winter')
elif a in (3, 4, 5):
    print('spring')
elif a in (6, 7, 8):
    print('summer')
else:
    print('fall')
'''
in은 True/False를 반환함
'''