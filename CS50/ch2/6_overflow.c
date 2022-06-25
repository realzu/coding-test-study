#include <stdio.h>
#include <unistd.h>

int main(void)
{
    for (int i=1; ; i*=2)   //중간값 ' ' = 무한대
    {
        printf("%i\n", i);
        sleep(1);
    }
}
// 정수 오버플로우

/*
$figlet this is cs50    --아스키아트 통해 콘솔에 출력
$say this is cs50   --sound
*/
