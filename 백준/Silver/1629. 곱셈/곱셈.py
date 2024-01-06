import sys
input = sys.stdin.readline

def func(A, B, C):
    # 제곱이 1승이면 바로 계산
    if B == 1:
        return A % C
    # B가 짝수인 경우
    elif B % 2 == 0:
        return (func(A, B // 2, C) ** 2) % C
    # B가 홀수인 경우
    else:
        return ((func(A, B // 2, C) ** 2) * A) % C

arr = list(map(int, input().split()))
answer = func(arr[0], arr[1], arr[2])
print(answer)
