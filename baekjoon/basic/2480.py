# 주사위 세개
a, b, c = map(int, input().split())
ju = [a, b, c]

if ju.count(a) == 3:
    print(10000 + (a * 1000))
elif ju.count(a) == 2:
    print(1000 + (a * 100))
elif ju.count(b) == 2:
    print(1000 + (b * 100))
else:
    print(max(ju) * 100)