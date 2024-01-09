import sys
input = sys.stdin.readline

def func(w, cnt):
    check[w] = 1
    d = graph[w][0]
    # 값이 0일 경우에 함수 다시 돌림
    if check[d] == 0:
        cnt = func(d, cnt + 1)
    return cnt

N = int(input())
graph = [[] for _ in range(N + 1)]
# 함수 돌릴 결과 값 넣을 배열
answer = [0] * (N + 1)

# 인풋 받은 숫자들 배열에 넣어준다
for i in range(1, N + 1):
    num = int(input())
    graph[i].append(num)
# print(graph)
for i in range(1, N + 1):
    check = [0] * (N + 1)
    answer[i] = func(i, 1)

max_ans = max(answer)
print(answer.index(max_ans))