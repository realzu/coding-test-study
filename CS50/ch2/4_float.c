#include <cs50.h>
#include <stdio.h>

int main(void)
{
    float price = get_float("What's the price?\n");
    printf("Your total is %.2f\n", price * 1.0625);
}

/*
$make float : 컴파일
$./float : 실행
*/