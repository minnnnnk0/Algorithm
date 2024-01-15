from sys import stdin
input = stdin.readline
from collections import deque

dx = (-1, 1, 0, 0)
dy = (0, 0, -1, 1)

def bfs(ar, ac, br, bc):
    check = [[[[-1] * M for _ in range(N)] for _ in range(M)] for _ in range(N)]
    check[ar][ac][br][bc] = 0
    q = deque([(ar, ac, br, bc)])

    while q:
        ar, ac, br, bc = q.popleft()
        # 10번보다 많이 눌러야 한다면 실패
        if check[ar][ac][br][bc] >= 10:
            break

    # 사방탐색
        for d in range(4):
            nar = ar + dx[d]
            nac = ac + dy[d]
            nbr = br + dx[d]
            nbc = bc + dy[d]

            # 두 동전 모두 밖으로 떨어지면
            if not (0 <= nar < N and 0 <= nac < M) and not (0 <= nbr < N and 0 <= nbc < M):
                continue

            # 동전 a, b 중에 하나만 밖으로 떨어지면
            # 카운트 카운트 올려서 리턴
            if not (0 <= nar < N and 0 <= nac < M):
                return check[ar][ac][br][bc] + 1
            if not (0 <= nbr < N and 0 <= nbc < M):
                return check[ar][ac][br][bc] + 1

            # 이동할 곳이 벽이면 제자리
            if board[nar][nac] == "#":
                nar -= dx[d]
                nac -= dy[d]
            if board[nbr][nbc] == "#":
                nbr -= dx[d]
                nbc -= dy[d]

            # check 배열의 이동할 위치에 현 횟수 + 1한 횟수 표시, 이동할 위치 큐에 담기
            if check[nar][nac][nbr][nbc] == -1:
                check[nar][nac][nbr][nbc] = check[ar][ac][br][bc] + 1
                q.append((nar, nac, nbr, nbc))
    return -1

N, M = map(int, input().split())
ar, ac, br, bc = 0, 0, 0, 0
board = []
coin = True

# 코인 위치 찾기
for i in range(N):
    board.append(list(input().rstrip()))
    for j in range(M):
        if board[i][j] == "o":
            if coin:
                ar, ac = i, j
                coin = False
            else:
                br, bc = i, j
                
answer = bfs(ar, ac, br, bc)
print(answer)
