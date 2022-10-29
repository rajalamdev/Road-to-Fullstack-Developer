print(
"""
+================================+
| Welcome to my game, muggle!    |
|                                |
| Masukkan bilangan integermu    |
|                                |
| dan tebak bilangan apa yang    |
|                                |   
| aku ambil untukmu              |
|                                |
| Jadi, apakah bilangan          |
|                                |
| rahasianya?                    |
|                                |
+================================+
""")

bilangan_rahasia = 777

play = True
while play == True:
    tebak = int(input("Masukkan tebakan anda: "))
    if tebak == 777:
        print("Kerja bagus, muggle! Kamu bebas sekarang.")
        play = False
    else:
        print("Ha ha! Kamu terjebak di dalam loopku!")
        play = True