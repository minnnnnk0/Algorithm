import sys
input = sys.stdin.readline

n = int(input())
arr = [int(input()) for _ in range(n)]

# print(arr)

stack = []
cnt = 0

for i in range(n):
    while stack and stack[-1] <= arr[i]:
        stack.pop()

    stack.append(arr[i])
    cnt += len(stack) - 1

print(cnt)