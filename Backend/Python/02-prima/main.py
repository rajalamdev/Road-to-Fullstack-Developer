n = int(input("masukan nilai: "))

prima = 0

for i in range(1, n + 1) :
    if(n % i == 0) :
        prima += 1

if(prima == 2) : 
    print("merupakan bilangan prima")
else :
    print("bukan bilangan prima")