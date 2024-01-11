import sys
input = sys.stdin.readline

n = int(input())
lst = list(map(int, input().split()))
# print(lst)

# 해당하지 않는 경우에는 -1로 둠
arr = [-1] * n
stack = []

for i in range(n):
    while stack and lst[stack[-1]] < lst[i]:
        arr[stack.pop()] = lst[i]
    stack.append(i)

print(*arr)
