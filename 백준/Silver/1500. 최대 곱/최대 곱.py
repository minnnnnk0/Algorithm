import sys
input = sys.stdin.readline

s, k = input().split()
s = int(s)
k = int(k)

nums = []

for i in range(k):
    nums.append(s // k)

for i in range(s % k):
    nums[i] = nums[i] + 1

ans = 1
for i in nums:
    ans = ans * i

print(ans)
