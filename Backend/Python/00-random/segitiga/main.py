inputUser = int(input("Masukkan jumlah bintang: "))

def triangleGenerator(n):
    result = ""

    if n < 0:
        result = "Input tidak boleh kurang dari 0"
    elif n == 0:
        result = "Input tidak boleh 0"
    else:
        for i in range(0, n + 1):
            for j in range(0, i):
                result += "*"
            result += "\n"  

    return result

print(triangleGenerator(inputUser))