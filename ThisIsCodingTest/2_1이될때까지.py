n, k = map(int, input().split())
count = 0

while n != 1:
    if n % k != 0:
        n = n-1
    else:
        n = n // k
    count += 1

print(count)

'''정당성 분석
가능하면 최대한 많이 나누는 작업이 최적의 해 보장? 생각하기
-> N은 항상 1에 도달. 정수이므로 1씩 빼는 것보다 나누는 게 답
'''

# 강의 답안
n, k = map(int, input().split())
result = 0

while True:
    target = (n // k) * k   # 100//30 * 3 => 3 * 30 => 90     => n이 k로 나누어 떨어지는 수
    result += (n - target) # 100-90 = 10                     => 가 될 때까지 빼기
    n = target
    # n이 k보다 작을 때 (더이상 나눌수없을때) 반복문 탈출
    if n < k:   # 100<30    -> 3<30
        break
    # k로 나누기
    result += 1
    n //= k # 90 //= 30 => 3

# 마지막으로 남은 수에 대하여 1씩 빼기
result += (n - 1)   # 3이 1이 될 수 있도록 -1 연산
print(result)