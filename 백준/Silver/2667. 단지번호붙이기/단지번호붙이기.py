import sys
from collections import deque

dx = [0, 0, 1, -1]
dy = [1, -1, 0, 0]

def bfs(x, y):
    global cnt
    graph[x][y] = 0
    q = deque([(x, y)])
    while q:
        h = q.popleft()
        for k in range(4):
            nx = h[0] + dx[k]
            ny = h[1] + dy[k]
            if 0 <= nx < n and 0 <= ny < n and graph[nx][ny] == 1:
                graph[nx][ny] = 0
                cnt += 1
                q.append((nx, ny))

n = int(sys.stdin.readline())
graph = []
for _ in range(n):
    graph.append(list(map(int, sys.stdin.readline().strip())))

ans = []

for i in range(n):
    for j in range(n):
        if graph[i][j] == 1:
            cnt = 1
            bfs(i, j)
            ans.append(cnt)

ans.sort()
# 총 단지 수
print(len(ans))
# 집의 수  하나씩 출력
for i in range(len(ans)):
    print(ans[i])