import sys
input = sys.stdin.readline

def func(x):
    answer = 0
    for i in x:
        if i.isdigit():
            answer += int(i)
    return answer

n = int(input())
nums = [input().rstrip() for _ in range(n)]

# def add(x, y):
#     return x + y

# add = lambda x, y: x + y

nums.sort(key=lambda x:(len(x), func(x), x))

for i in nums:
    print(i)
    