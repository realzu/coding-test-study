# 알람 시계
h, m = map(int, input().split())

if m - 45 < 0:
    m = 60 - (45 - m)
    if h == 0:
        h = 23
    else:
        h -= 1
else:
    m = m - 45

print(h, m)