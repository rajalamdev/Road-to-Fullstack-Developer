uang = 250000

pecahahan = [100000, 50000, 20000, 10000, 5000, 2000, 1000, 500, 200, 100]

def fungsi(uang, pecahan):
    sisa = uang

    seratusRibu = 0
    limaPuluhRibu = 0
    
    while sisa > 0:
        if sisa >= 100000:
            sisa -= 100000
            seratusRibu += 1
        elif sisa >= 50000:
            sisa -= 50000
            limaPuluhRibu += 1
        
    # print(sisa)
    print(seratusRibu, limaPuluhRibu)


print(fungsi(uang, pecahahan))