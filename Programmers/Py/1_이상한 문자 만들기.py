# ★
# @ upper, lower, isupper, islower
def solution(s):
    answer = ''
    tmp = s.split(' ')
    
    for word in tmp:
        if (word != ''):          
            for i in range(len(word)):                
                if i % 2 == 0:
                    answer += word[i].upper()
                else:
                    answer += word[i].lower()
            if word != tmp[-1]:
                answer += ' '
    
    return answer
    # 문제 잘못 이해 -> 공백으로 나뉜 공백도 포함해야 (문자만이 아니라)

def solution(s):
    answer = ''
    tmp = s.split(' ')
    
    for word in tmp:
        for i in range(len(word)): # 배열 내 ''(공백)은 len = 0이라 for문 안돌음
            if i % 2 == 0:
                answer += word[i].upper()
            else:
                answer += word[i].lower()
        answer += ' ' # 공백인값 + 문자들구분된거

    return answer[0:-1]