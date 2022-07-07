# ★
# 나머지

s = []

for i in range(10):
    s.append(int(input()) % 42)

# 서로 다른 값 몇개인지
s = set(s)  #★set함수 : 중복함수제거
# print(s)    #{, ,}
print(len(s))   #s의 길이=중복제거하고 남은 갯수