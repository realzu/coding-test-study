s = input()
s = list(map(int, s)) #★

''' ★문자열 자르기
String[start:end:step] : 인덱스 start번부터 end-1번까지 step대로
ex. String[0:3] = 인덱스 0번~2번 = String[:3]
'''
h = []
for i in range(len(s)):
    h[0] = s[0]
    if (h[i] + s[i+1]) > (h[i] * s[i+1]):
        h[i] += s[i+1]
    else:
        h[i] *= s[i+1]

print(h[i-1])
# 오답 ^ㅠ^

# 강의 답안
'''hint
두 수 중 하나라도 0 or 1이면 더하기
모두 2 이상이면 곱하기
'''

data = input()

# 첫번째 문자를 숫자로 변경하여 대입
result = int(data[0])

for i in range(1, len(data)):
    # 두 수 중에서 하나라도 0 or 1인 경우, 더하기 수행
    num = int(data[i])
    if num <= 1 or result <= 1:
        result += num
    else:
        result *= num

print(result)