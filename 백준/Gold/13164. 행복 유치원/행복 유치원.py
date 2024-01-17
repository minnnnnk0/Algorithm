import sys
input = sys.stdin.readline

# n 원생의 수 k 나누려고 하는 조의 수
n, k = map(int, input().split())
lst = list(map(int, input().split()))

# 키 차이 저장하는 리스트
tall = []
for i in range(n-1):
    diff = lst[i+1] - lst[i]
    tall.append(diff)
# print(tall)
tall.sort()
# print(tall)
cost = 0
for i in range(n-k):
    cost += tall[i]
print(cost)
