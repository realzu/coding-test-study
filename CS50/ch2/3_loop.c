// 2-3 조건문과 루프
#include <stdio.h>

int main(void){

    while (true)
    {
        printf("hello, world\n");
    }

    int i = 0;
    while (i < 50)
    {
        printf("hello, world\n");
        i = i + 1;
    }

    for (int i=0; i<50; i=i+1)
    {
        printf("hello, world\n");
    }
}

/*
Q) 학습한 다양한 방법을 이용하여 "개발공부는 재미있다!"를 10번 출력하는 코드를 작성해보세요.

A)
#include <stdio.h>

int main(void){
    
    for (int i=0; i<10; i++)
    {
        printf("개발공부는 재미있다!");
    }
}
*/
