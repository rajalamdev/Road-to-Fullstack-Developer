def test(*args):
    terbesar = 0
    sum = 0
    terkecil = 1

    for i in args:
        if i > terbesar:
            terbesar = i
        if i <= terkecil:
            terkecil = i

    for j in args:
        sum += j

    rata_rata = sum / len(args)
    print(f"Panjang Data {len(args)}")
    print(f"Sum: {sum}")
    print(f"Rata rata {rata_rata}")
    print(f"Angka terbesar {terbesar}")
    print(f"Angka terkecil {terkecil}")

test(1, 2, 3, 4, 5, 6, 7, 8, 9)