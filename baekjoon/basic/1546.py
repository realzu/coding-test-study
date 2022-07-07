# 평균
n = int(input())

grade = list(map(int, input().split())) #[4, 5, 6]

mg = max(grade)

sum = 0
for i in grade:
    sum += (i / mg) * 100

print(sum / len(grade))