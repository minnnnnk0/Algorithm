from sys import stdin
input = stdin.readline

n = int(input())
step = [1] * 10

for i in range(n-1):
    for j in range(1, 10):
        step[j] += step[j-1]

print(sum(step) % 10007)