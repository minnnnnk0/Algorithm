import sys
input = sys.stdin.readline
from collections import deque

def func(num):
    q = deque()
    q.append(num)
    visit[num] = 1

    while q:
        num = q.popleft()

        for i in arr[num]:
            # 방문 안 한 노드면 적힌 숫자만큼 +
            if visit[i] == 0:
                visit[i] = visit[num] + 1
                q.append(i)

N, M = map(int, input().split())

arr = [[] for _ in range(N + 1)]
visit = [0] * (N + 1)

# x = A_i, y = B_i
for _ in range(M):
    x, y = map(int, input().split())
    arr[x].append(y)
    arr[y].append(x)

func(1)
# 최대한 숨길 수 있는 ....
answer = max(visit)
# 출력
# print(visit.index(answer)) # answer 번호
# print(answer - 1) # answer까지의 거리
# print(visit.count(answer)) # answer이랑 같은 수 몇개

print(visit.index(answer), answer - 1, visit.count(answer))