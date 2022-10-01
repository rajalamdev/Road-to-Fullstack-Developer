pascal = 1

def pascalGenerator(n):
    for i in range(1, n + 1):
        for space in range(1, n - i + 1):
            print(" ",end="")
        for j in range(0, i):
            if j == 0 or i == 0:
                pascal = 1
            else:
                pascal = pascal * (i - j) // j
            print(pascal, end = " ")
        print()

pascalGenerator(5)