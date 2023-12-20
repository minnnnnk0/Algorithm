import sys
input = sys.stdin.readline

n = int(input())
top = list(map(int, input().split()))

stack = []
arr = [0] * n

for i in range(len(top)):
    while stack:
        # 레이저 높이보다 낮으면 통과 -> stack 에서 제거
        if top[stack[-1][0]] < top[i]:
            stack.pop()
        # 레이저 맞음 -> 인덱스 저장
        else:
            arr[i] = stack[-1][0] + 1
            break
    # (인덱스, 탑의 높이) stack 에 저장
    stack.append((i, top[i]))

print(*arr)
