import sys
input = sys.stdin.readline

n = int(input())
minus = [0] + list(map(int, input().split()))
plus = [0] + list(map(int, input().split()))

thanks = [[0 for _ in range(101)] for _ in range(n+1)]

for i in range(1, n+1):
    for j in range(1, 101):

        # 높은 값으로 갱신하기
        if minus[i] <= j:
            thanks[i][j] = max(thanks[i-1][j], thanks[i-1][j-minus[i]]+plus[i])
        else:
            thanks[i][j] = thanks[i-1][j]

print(thanks[n][99])
