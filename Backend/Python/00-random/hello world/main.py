helloWorld = ""
target = "hello world"

alphabetList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']

i = 0
while True:
    for alphabet in alphabetList:
        if helloWorld == target:
            break
        else:
            print(helloWorld, alphabet, sep="")        
            if target[i] == alphabet:
                helloWorld += alphabet
                i += 1


    # if target[i] == alphabetRandom:
    #     helloWorld += alphabetRandom
    #     i += 1


# while helloWorld != target:
#     if alphabetRandom in target:
#         helloWorld += alphabetRandom 
    
#     print(helloWorld)

    