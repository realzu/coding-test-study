// 2-6 하드웨어의 한계
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    float x = get_float("x: ");
    float y = get_float("y: ");

    printf("x / y = %.10f\n", x / y);
}
// %.50f 와 같이 소수점 뒷자리를 더욱 길게 할 수록 다른 값이 나옴