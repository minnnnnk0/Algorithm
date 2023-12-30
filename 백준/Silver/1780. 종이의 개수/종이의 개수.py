import sys

N = int(input())
paper = [list(map(int, input().split())) for _ in range(N)]

ans_zero = 0
ans_plus = 0
ans_minus = 0

# n = 종이의 한 변의 길이
def func(x, y, n):

    global ans_minus, ans_plus, ans_zero
    num = paper[x][y]

    for i in range(x, x+n):
        for j in range(y, y+n):

            if paper[i][j] != num:
                for k in range(3):
                    for l in range(3):
                        func(x + k * n // 3, y + l * n // 3, n//3)
                return

    if num == 0:
        ans_zero += 1
    elif num == 1:
        ans_plus += 1
    elif num == -1:
        ans_minus += 1

func(0, 0, N)
print(ans_minus)
print(ans_zero)
print(ans_plus)
