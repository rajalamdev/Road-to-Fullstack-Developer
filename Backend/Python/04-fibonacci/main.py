inputUser = int(input("Masukkan jumlah bilangan: "))

def fibonacci(n):
    listFibonacci = [0, 1]

    for i in range(2, n):
        sumIndex = listFibonacci[i - 2] + listFibonacci[i - 1]
        listFibonacci.append(sumIndex)

    print("List Fibonacci:", listFibonacci)
    print("Total sum", sum(listFibonacci))
    
fibonacci(inputUser)