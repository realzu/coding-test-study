# ★
# 오븐 시계
h, m = map(int, input().split())
time = int(input())

h += time // 60     #★ 0도 포함되니 애초에 넣고 조건문 추가
m += time % 60      #★ % 생각을 못했

if m >= 60:
    h += 1
    m -= 60

if h > 23:
    h -= 24

print(h, m)


'''
h, m 에 값을 넣고 조건 주기 (어차피 이 부분은 통일이니까)
- 처음부터 조건주고 나누려니 반복만 생겨서 코딩길어졌음
'''