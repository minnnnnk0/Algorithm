import sys
input = sys.stdin.readline

def func(x, y, num):
    if len(num) == 6:
        if num not in result:
            result.append(num)
        return

    dx = [1, -1, 0, 0]
    dy = [0, 0, 1, -1]

    for k in range(4):
        nx = x + dx[k]
        ny = y + dy[k]

        if 0 > nx or nx >= 5 or 0 > ny or ny >= 5:
            continue
        else:
            func(nx, ny, num + numboard[nx][ny])

numboard = []
for _ in range(5):
    numboard.append(list(map(str, input().split())))

result = []
for i in range(5):
    for j in range(5):
        func(i, j, numboard[i][j])

len_res = len(result)
print(len_res)

