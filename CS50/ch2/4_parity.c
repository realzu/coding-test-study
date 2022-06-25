#include <cs50.h>
#include <stdio.h>

int main(void)
{
    int n = get_int("n: ");

    if (n % 2 == 0)
    {
        printf("even\n");
    }
    else
    {
        printf("odd\n");
    }
}

/*
$ls -- 오늘만든파일들
$cd src1 -- cd = 디렉토리 변경(change directory)    --전체파일들
$pwd
$cd -- 기본설정 디렉토리로 돌아감 (현재 어느파일에있는지 모르겠다)
*/