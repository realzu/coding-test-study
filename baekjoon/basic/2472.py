# 기찍 N
n = int(input())

li = [i for i in range(1, n+1)]
li.sort(reverse=True)

for i in li:
    print(i)

'''
for i in range(n, 0, -1):
    print(i)

range(시작, 끝, 증가폭)
★ 증가폭을 -로 하면 반대로 시작한다!
'''