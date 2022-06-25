# ★
# 완전 탐색 유형 : 가능한 경우의 수 모두 검사
n = int(input())

for h in range(n):
    for m in range(60):
        for s in range(60): 
            hh = str(h)
            mm = str(m)
            ss = str(s)
            hc = hh.count('3')
            mc = mm.count('3') 
            sc = ss.count('3')
            # if hc = 0 or
            sum =  mm.count('3') * ss.count('3')

'''
중첩for문, str로 바꾸는 아이디어 (o)
count로 하려니 0일때가 문제 -> h,m,s를 하나로 합쳐서 진행 (++ 각각의자리에서 count곱하는게 아니라 전체시간 기준!)
count말고 in 사용가능한것 상기
'''


# 강의 답안
h = int(input())

count = 0
for i in range(h + 1):  #-- 00시 포함이라 +1
    for j in range(60):
        for k in range(60):
            # 매 시각 안에 '3'이 포함되어 있다면 카운트 증가
            if '3' in str(i) + str(j) + str(k):
                count += 1

print(count)