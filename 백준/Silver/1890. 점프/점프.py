
n = int(input())
arr = [list(map(int, input().split())) for _ in range(n)]

visitied = [[0] * n for _ in range(n)]
visitied[0][0] = 1

for i in range(n):
    for j in range(n):
        # 끝지점에 도착하면 종료
        if i == n - 1 and j == n - 1:
            print(visitied[i][j])
            break
        # 오른쪽 이동
        if j + arr[i][j] < n:
            visitied[i][j+arr[i][j]] += visitied[i][j]
        # 아래쪽 이동
        if i + arr[i][j] < n:
            visitied[i+arr[i][j]][j] += visitied[i][j]