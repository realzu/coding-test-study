#include <stdio.h>

int main(void)
{
    string answer = get_string("What's your name?\n");  //get_string은 CS50 샌드박스의 자체 함수
    printf("hello, %s\n", answer);
}