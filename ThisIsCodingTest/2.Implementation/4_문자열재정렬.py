# ★
s = input()

s_group = []
i_group = []    #문제잘못읽(숫자나열x 숫자합)

for i in s: #리스트s에서 바로 빼오는거라 s[i]놉.. 그냥 i
    if int(ord('A')) <= int(ord(s[i])) <= int(ord('Z')):    # ★isalpha()하면 바로 확인!!wow
        s_group.append(str(s[i]))   
    else:
        i_group.append(int(s[i]))

print(s_group.sort() + i_group.sort())


# 강의답안
data = input()
result = []
value = 0

# 문자를 하나씩 확인하며
for x in data:
    # 알파벳인 경우 결과 리스트에 삽입
    if x.isalpha():
        result.append(x)
    # 숫자는 따로 더하기
    else:
        value += int(x)

# 알파벳을 오름차순으로 정렬
result.sort()

# 숫자가 하나라도 존재하는 경우 가장 뒤에 삽입
if value != 0:
    result.append(str(value))

# 최종 결과 출력(리스트를 문자열로 변환하여 출력)
print(''.join(result))

'''★
'구분자'.join(리스트) 
['a','b','c'] => 'abc'
'''