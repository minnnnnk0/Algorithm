import sys
input = sys.stdin.readline

# n 카드의 개수
n = int(input())
card = [0] + list(map(int, input().split()))

lst = [0 for _ in range(n+1)]

for i in range(1, n+1):
    for j in range(1, i+1):
        lst[i] = max(lst[i], lst[i-j] + card[j])
        # print(lst[i])
print(lst[n])
