import sys
input=sys.stdin.readline

# 파라매트릭 서치 함수 만들기
def parametric(start, end):
    global n
    global answer
    # 기저 조건
    if end < start:
        return

    mid = (start + end) // 2
    # 랜선 갯수
    cnt = 0
    for i in lst:
        cnt += i // mid
    # n보다 많은 것도 정답이 되므로 최대 길이를 찾아야함
    if cnt >= n:
        # answer 업데이트
        answer = mid
        parametric(mid + 1, end)
    else:
        # 답이 아니므로 다시 이진탐색 진행
        parametric(start, mid - 1)

k, n = map(int, input().split())
lst = [0] * k
for i in range(k):
    lst[i] = int(input())
# 젤 긴 것 기준으로 시작
lst.sort()
num = lst[-1] * 2

answer = 0
parametric(0, num)
print(answer)