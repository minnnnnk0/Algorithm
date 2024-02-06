import sys
input = sys.stdin.readline

m = 0
cnt = 0
lst = [0 for _ in range(1001)]

for _ in range(int(input())):
    L, H = map(int, input().split())
    lst[L] = H

    # 가장 높은 기둥 찾기
    if m < H:
        cnt = L
        m = H

temp = 0
answer = 0
for i in range(cnt + 1): # 왼
    temp = max(temp,lst[i])
    answer += temp

temp = 0
for i in range(1000, cnt, -1): # 오
    temp = max(temp, lst[i])
    answer += temp
print(answer)
