# ★
# 최댓값
n = []

for i in range(9):
    n.append(int(input()))  #★int! int안해도 왜 나오는진몰겠지만 자료형 잊지말기

print(max(n))
print(n.index(max(n)) + 1)