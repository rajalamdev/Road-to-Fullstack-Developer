morseCode = { 
                'A':'.-', 'B':'-...',
                'C':'-.-.', 'D':'-..', 'E':'.',
                'F':'..-.', 'G':'--.', 'H':'....',
                'I':'..', 'J':'.---', 'K':'-.-',
                'L':'.-..', 'M':'--', 'N':'-.',
                'O':'---', 'P':'.--.', 'Q':'--.-',
                'R':'.-.', 'S':'...', 'T':'-',
                'U':'..-', 'V':'...-', 'W':'.--',
                'X':'-..-', 'Y':'-.--', 'Z':'--..',
                '1':'.----', '2':'..---', '3':'...--',
                '4':'....-', '5':'.....', '6':'-....',
                '7':'--...', '8':'---..', '9':'----.',
                '0':'-----', ', ':'--..--', '.':'.-.-.-',
                '?':'..--..', '/':'-..-.', '-':'-....-',
                '(':'-.--.', ')':'-.--.-'
            }

total = int(input("Masukkan banyak karakter: "))

word = []
morse= []

i = 0
while i < total:
  inputUser = input("Masukkan kode morse: ")
  for key, value in morseCode.items():
    if inputUser == value:
      morse.append(value)
      word.append(key)
  i += 1

print("Hasil terjemah dari kode morse: {} adalah: {}".format(morse, "".join(word)), end="")