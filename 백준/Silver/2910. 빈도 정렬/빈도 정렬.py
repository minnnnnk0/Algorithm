import sys
input = sys.stdin.readline
from collections import Counter

n, c = map(int, input().split())
num_lst = list(map(int, input().split()))

# 최빈값 구하는 라이브러리
# numbers = [1, 2, 3, 3, 4, 4, 4, 5, 5]
# >>> from collections import Counter
# >>> cnt = Counter(numbers)
# >>> cnt.most_common()
# [(4, 3), (3, 2), (5, 2), (1, 1), (2, 1)]

cnt = Counter(num_lst).most_common()
# print(cnt)
for a, b in cnt:
    for _ in range(b):
        # print(a, b)
        print(a, end=' ')
        