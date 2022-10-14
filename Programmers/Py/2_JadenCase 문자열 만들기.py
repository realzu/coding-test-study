def solution(s):
    answer = ''
    ns = s.lower().split(' ')
    
    for word in ns:
        if len(word) > 0:
            nw = word.replace(word[0], word[0].upper(), 1) # ★ replace맨 뒤에 1해줘야 다른 문자랑 겹쳐도 처리안됌!
            answer += nw
        answer += ' '
    
    return answer[0:-1]