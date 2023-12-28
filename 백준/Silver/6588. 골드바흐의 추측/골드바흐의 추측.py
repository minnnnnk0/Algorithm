import sys
input = sys.stdin.readline

num = [True] * 1000001

# 소수 list
for i in range(2, int(len(num) ** 0.5) + 1):
    if num[i]:
        for j in range(2 * i, 1000001, i):
            num[j] = False

while True:
    n = int(input())
    if n == 0:
        break
    # 두 홀수의 소수합 -> 2 제외
    # 2씩 띄워서 홀수만 계산
    for i in range(3, n-2, 2):
        if num[i] and num[n-i]:
            print(f"{n} = {i} + {n-i}")
            break
    else:
        print('"Goldbach\'s conjecture is wrong."')
        