# ★
# 더하기 사이클
n = input()

a = n
count = 0

while True: #@while 1도 같음

    # 방법 1    --case중 시간초과 발생 可
    if len(n) == 1: #★len으로 확인하기
        a = '0' + n #★8 -> 08로 앞에 str넣어주면 자동 +로 합쳐짐!
    b = str(int(a[0]) + int(a[1]))   #b는 숫자합

    a = a[-1] + b[-1] #a는 문자합 = 새로운 수   ★인덱스가 1이 아니라 -1을 해줘야 한자리 수여도 문제없음

    # 방법 2 ★ -- 생각못했음
    x = a // 10 #첫째자리(ex. 5)
    y = a % 10  #둘째자리(ex.7)
    z = (x + y) % 10 #5 + 7 = 1'2'
    a = (b * 10) + z #70 + 2 = 72

    # ---------------
    count += 1

    if a == n:
        break

print(count)