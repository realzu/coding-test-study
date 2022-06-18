# # 6040
# a, b = input().split()
# c = int(a) // int(b)    # /는 float, //는 int
# print(c)


# # 6041
# a, b = input().split()
# c = int(a) % int(b) # %는 나머지
# print(c)


# # 6042
# a = float(input())
# b = round(a, 2)
# print(b)
# # print(format(a, '.2f')) -- 얘도 가능!


# # 6043  ★
# a, b = input().split()
# c = float(a) / float(b)
# print(format(c, '.3f')) # round()는 오차 더 발생할수도
# print('%.3f'%c)


# # 6044
# a, b = input().split()
# a = int(a)
# b = int(b)
# print(a + b)
# print(a - b)
# print(a * b)
# print(a // b)
# print(a % b)
# print(format(a / b, '.2f'))


# 6045 @
a, b, c = input().split()
a = int(a)
b = int(b)
c = int(c)
sum = a + b + c
avg = format(((a+b+c) / 3), '.2f')
print('{0} {1}'.format(sum, avg))
# 공백 출력은 print(sum, avg)하면 됌!!