def terjemahkan(kata, kamus):
    kata_slice = kata.split(" ")
    
    result = []

    for i in kata_slice:
        if i in kamus:
            result.append(kamus[i])
        else:
            result.append(i)

    return " ".join(result)

kata = 'i love you'
kamus = {'love': 'cinta', 'i': 'saya'}
kata_baru = terjemahkan(kata, kamus)
print(kata_baru)