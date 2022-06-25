// 2-5 사용자 정의 함수, 중첩 루프

/*
#include <stdio.h>

int main(void)
{
    // printf("cough\n");
    // printf("cough\n");
    // printf("cough\n");

    for (int i=0; i<3; i++)
    {
        printf("cough\n");
    }
}
*/
// 위의 내용을 사용자 정의 함수로 

#include <stdio.h>

void cough(void);   //top to bottom

int main(void)
{
    for (int i=0; i<3; i++)
    {
        cough();
    }
}

void cough(void)
{
    printf("cough\n");
}
