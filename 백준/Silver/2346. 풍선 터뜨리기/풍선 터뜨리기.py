import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))

start = 0
idx = [i for i in range(1, n + 1)]

answer = []
temp = lst.pop(start)
answer.append(idx.pop(start))

while lst:
    if temp < 0:
        start = (start + temp) % len(lst)
    else:
        start = (start + temp - 1) % len(lst)
    temp = lst.pop(start)
    answer.append(idx.pop(start))
    # print(answer)

for i in answer:
    print(i, end=' ')
