import sys
input = sys.stdin.readline

def func(n, m, arr):
    left = 0
    right = 0
    answer = 2000000000

    while right < n:
        diff = arr[right] - arr[left]

        if diff < m:
            right += 1
        elif diff == m:
            return m
        elif diff > m:
            answer = min(diff, answer)
            left += 1

    return answer

n, m = map(int, input().split())
arr = [int(input()) for _ in range(n)]

arr.sort()

result = func(n, m, arr)

print(result)
