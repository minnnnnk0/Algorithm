import sys
input = sys.stdin.readline
from collections import deque

# 사방탐색 좌표
dx = [-1, 0, 1, 0]
dy = [0, 1, 0, -1]

# 방의 크기 n x m
n, m = map(int, input().split())
# 로봇 창소기가 있는 위치 (r, c)
# 로봇 청소기가 바라보는 방향 d (북동남서 0123)
r, c, d = map(int, input().split())
# 배열 input
graph = [list(map(int, input().split())) for _ in range(n)]

visited = [[0 for _ in range(m)] for _ in range(n)]
# 청소한 구역의 수
cnt = 0

def func(i, j, d):
    global cnt
    # 현재 위치
    q = deque()
    q.append((i, j))
    visited[i][j] = 1
    cnt += 1

    while q:
        x, y = q.popleft()
        clean = 0

        for _ in range(4):
            # 반시계방향 구하기... 구글링함
            # 0-3-2-1 순서
            d = (d + 3) % 4
            nx = x + dx[d]
            ny = y + dy[d]

            if 0 <= nx < n and 0 <= ny < m and not graph[nx][ny]:
                if not visited[nx][ny]:
                    visited[nx][ny] = 1
                    q.append((nx, ny))
                    cnt += 1
                    # 반시계 빙글 돌았는데 빈칸
                    clean = 1
                    break
        # 청소할 곳이 없으면?
        if clean == 0:
            # 로봇 청소기는 후진 해야함 !!
            if graph[x-dx[d]][y-dy[d]] != 1:
                q.append((x-dx[d], y-dy[d]))
            else:
                print(cnt)
                break

func(r, c, d)
