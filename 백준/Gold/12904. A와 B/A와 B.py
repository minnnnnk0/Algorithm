import sys
input = sys.stdin.readline

s = list(input().rstrip())
t = list(input().rstrip())
# print(s)
# print(t)
# 문자열 뒤에 A 추가
# 문자열 뒤집기
# B 추가
possible = False
while t:
    if t[-1] == 'A':
        t.pop()
    elif t[-1] == 'B':
        t.pop()
        t.reverse()
    if s == t:
        possible = True
        break
# print(possible)
if possible:
    print(1)
else:
    print(0)
  