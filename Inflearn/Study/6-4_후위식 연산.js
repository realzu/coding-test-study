// ##

function solution(s){
    const stack = [];

    for (let x of s) {
        const val = Number(x);
        if (!isNaN(val)) stack.push(val);
        else {
            const rt = stack.pop();
            const lt = stack.pop();
            switch (x) {
                case '+':
                    stack.push(lt + rt);
                    break;
                case '-':
                    stack.push(lt - rt);
                    break;
                case '*':
                    stack.push(lt * rt);
                    break;
                default:
                    stack.push(lt / rt);
                    break;
            }
        }
    }
    
    return stack[0];
}