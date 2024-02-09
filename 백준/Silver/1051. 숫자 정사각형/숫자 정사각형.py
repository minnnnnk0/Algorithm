import sys
input = sys.stdin.readline

N, M = map(int, input().split())
nemo = []
s = min(N, M)
for _ in range(N):
    nemo.append(list(input()))

for k in range(s, 0, -1):
    for i in range(N):
        for j in range(M):
            if ((i + k) < N) and ((j + k) < M) and (nemo[i][j] == nemo[i][j + k] == nemo[i + k][j] == nemo[i + k][j + k]):
                print((k + 1) ** 2)
                exit()
else:
    print(1)