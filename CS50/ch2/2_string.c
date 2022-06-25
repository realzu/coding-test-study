// 2-2 문자열
#include <cs50.h>
#include <stdio.h>

int main(void)
{
    string answer = get_string("What's your name?\n");  //get_string은 CS50 샌드박스의 자체 함수
    printf("hello, %s\n", answer);
}

/*
$ clang -o string string.c -lcs50
-o string = string.c 를 string.out 이라는 머신코드로 저장시키는 명령어
-lcs50에서 -l은 'link' 의미 + cs50 파일을 합친 것

또는

$make 파일명 (ex. make string) 를 통해 컴파일 수행 -> 프로그램 실행(o)
string.c = 소스코드, string = 머신코드
*/

/*
Q) "좋아하는 동물을 알려주세요"로 질문하여 동물 이름을 animal이라는 변수에 저장하고, 이를 "내가 좋아하는 동물은"으로 출력해주는 코드를 작성해보세요.

A)
#include <cs50.h>
#include <stdio.h>

int main(void){
    animal = get_string("좋아하는 동물을 알려주세요\n");
    printf("내가 좋아하는 동물은 %s\n", animal);
}
*/
