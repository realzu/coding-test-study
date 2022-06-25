// 앞 파일의 내용을 위치 바꾸어 재정의
#include <stdio.h>

void cough(int n);   //top to bottom    //이 한 문장을 함수 프로토타입(실제 함수에서 그대로 가져옴)

int main(void)
{
    cough(3);
}


// 함수 세부정의
void cough(int n)
{
    for (int i = 0; i < n; i++)
    {
    printf("cough\n");
    }
}
