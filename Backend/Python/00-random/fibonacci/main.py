inputUser = int(input("Masukkan jumlah bilangan: "))

def fibonacci(n):
    listFibonacci = []

    for i in range(0, n): 
        if (len(listFibonacci) == 0):
            listFibonacci.append(0)
        elif (len(listFibonacci) == 1):
            listFibonacci.append(1)
        else:
            listFibonacci.append(listFibonacci[i - 2] + listFibonacci[i - 1])

    print("List Fibonacci:", listFibonacci)
    print("Total sum", sum(listFibonacci))
    
fibonacci(inputUser)