import sys
input = sys.stdin.readline
# 휴게소의 개수 n, 더 지으려고 하는 휴게소 개수 m, 고속도로 길이 l
n, m, l = map(int, input().split())
# 고속도로 시작점과 끝점 추가해서 리스트 input 받기
shell = [0] + list(map(int, input().split())) + [l]
# 오름차순 정렬
shell.sort()
# print(shell)

start = 1
end = l-1
# 최솟값
result = 0

while start <= end:
    dist = 0
    mid = (start + end) // 2
    for i in range(1, len(shell)):
        if shell[i] - shell[i-1] > mid:
            dist += ((shell[i] - shell[i-1]) - 1) // mid
    # 이분 탐색
    if dist > m:
        start = mid + 1
    else:
        end = mid - 1
        result = mid
        # print(result)

# print()
print(result)
