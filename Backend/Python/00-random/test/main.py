print("NAMA : IKHWAN EL FARIS")
print("NRP : 1152200009")
print("PRODI : INFORMATIKA")

n = int(input("Masukan jumlah bintang: "))
s = ""
for i in range(n):
    s += "*"
    print(s)

n = int(input("Masukkan jumlah bilangan: "))

fibo = [0, 1]

for i in range(2, n + 1):
    fibo.append(fibo[i - 2] + fibo[i - 1])

print(fibo)

# Print Pascal's Triangle in Python
from math import factorial

# input n
n = int(input("Masukkan bilangan: "))
for i in range(n):
	for j in range(n-i+1):

		# for left spacing
		print(end=" ")

	for j in range(i+1):

		# nCr = n!/((n-r)!*r!)
		print(factorial(i)//(factorial(j)*factorial(i-j)), end=" ")

	# for new line
	print()

n = int(int(input("masukan bilangan: ")))

prima = 0
primaList = []
for i in range(1, n + 1):
    if(n % i == 0):
        prima += 1
    
if prima == 2:
    print("PRIMA")
else:
    print("BUKAN PRIMA")