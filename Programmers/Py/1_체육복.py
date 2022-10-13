def solution(n, lost, reserve):   
    set_reserve = set(reserve) - set(lost) # set은 -(차집합 연산자)가 가능  / cf. list(x) Counter(o)
    set_lost = set(lost) - set(reserve)

    for i in set_reserve:
        if i-1 in set_lost: # i가 숫자로 주어졌으니 연산가능
            set_lost.remove(i-1)
        elif i+1 in set_lost:
            set_lost.remove(i+1)
        
    return n - len(set_lost)