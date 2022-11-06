# def foo(nama = "alam"):
    # print(nama)
# 
# foo("toni")

def rekursif(n):
    if n == 0: 
        return False
    return n + rekursif(n - 1)

print(rekursif(5))

def product(a, *nums):
    result = 0
    for i in nums:
        result += i
    
    print(result)

product(2, 3, 6, 7)