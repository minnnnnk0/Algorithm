import sys
input = sys.stdin.readline

n = int(input())
strings = input()
lst = []
nums = [0] * n
# print(nums)
for i in range(n):
    nums[i] = int(input())

# ord() 함수 사용 : 문자에 대한 유니 코드 정수 반환
for i in strings:
    if i.isupper():
        lst.append(nums[ord(i) - ord('A')])

    elif i == '+':
        a = lst.pop()
        b = lst.pop()
        lst.append(b + a)

    elif i == '-':
        a = lst.pop()
        b = lst.pop()
        lst.append(b - a)

    elif i == '*':
        a = lst.pop()
        b = lst.pop()
        lst.append(b * a)

    elif i == '/':
        a = lst.pop()
        b = lst.pop()
        lst.append(b / a)
answer = lst[0]
# print(answer)
print("{:.2f}".format(answer))
