# Program Python untuk menemukan FPB dua buah bilangan
# mendefinisikan fungsi
def hitung_FPB(x, y):
# memilih bilangan yang paling kecil
    if x > y:
        smaller = y
    else:
        smaller = x
    for i in range(1, smaller+1):
        if((x % i == 0) and (y % i == 0)):
            fpb = i
            
    return fpb
num1 = 96
num2 = 24
# hilangkan tanda # untuk meminta inputan dari user
# num1 = int(input("Enter first number: "))
# num2 = int(input("Enter second number: "))
print("FPB dari", num1,"dan", num2," =", hitung_FPB(num1, num2))