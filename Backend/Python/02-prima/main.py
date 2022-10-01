inputUser = int(input("Masukan angka: "))

def isPrima(n):
    prima = 0
    primaNumber = []
    message = """{n} merupakan bilangan PRIMA
        \nberikut list bilangan prima kurang dari {n}:""".format(n = n)

    for i in range(1, n + 1):
        if(n % i == 0):
            prima += 1
            primaNumber.append(i)
    
    if(prima == 2):
        print(message)
        print(primaNumber)
    else:
        print(message)
        primaNumber.pop() 
        print(primaNumber)

isPrima(inputUser)