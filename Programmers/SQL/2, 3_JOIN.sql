-- Lv.2) 상품 별 오프라인 매출 구하기
SELECT A.PRODUCT_CODE AS 'PRODUCT_CODE', SUM(A.PRICE * B.SALES_AMOUNT) AS 'SALES'
FROM PRODUCT A, OFFLINE_SALE B
WHERE A.PRODUCT_ID = B.PRODUCT_ID
GROUP BY A.PRODUCT_CODE
ORDER BY SUM(A.PRICE * B.SALES_AMOUNT) DESC, A.PRODUCT_CODE

-- Lv.3) ★ 없어진 기록 찾기
SELECT B.ANIMAL_ID, B.NAME
FROM ANIMAL_INS A
RIGHT JOIN ANIMAL_OUTS B -- ★ RIGHT
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE A.ANIMAL_ID IS NULL -- ★ join 조건
ORDER BY B.ANIMAL_ID

-- Lv.3) 오랜 기간 보호한 동물(1)
SELECT A.NAME, A.DATETIME
FROM ANIMAL_INS A
LEFT JOIN ANIMAL_OUTS B
ON A.ANIMAL_ID = B.ANIMAL_ID
WHERE B.ANIMAL_ID IS NULL
ORDER BY DATETIME
LIMIT 3