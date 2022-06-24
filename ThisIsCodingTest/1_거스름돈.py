n = 1260
count = 0

# 큰 단위의 화폐부터 차례대로 확인하기
array = [500, 100, 50, 10]

for coin in array:
    count += n // coin #해당 화폐로 거슬러 줄 수 있는 동전의 개수 세기
    n %= coin

print(count)

'''시간복잡도 분석
화폐 종류 = k -> 시간복잡도 = O(k) --반복문은 화폐의 개수만큼 진행
'''