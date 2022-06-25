// 2-4 자료형, 형식 지정자, 연산자
#include <cs50.h>   //cs50 수업 위한 라이브러리
#include <stdio.h>  //표준라이브러리

int main(void)
{
    int age = get_int("What's your age?\n");    //get_~ : cs50 라이브러리의 함수
    int days = age * 365;
    printf("You are at least %i days old.\n", days);

    // printf("You are at least %i days old.\n", get_int("What's your age?\n") * 365);
}