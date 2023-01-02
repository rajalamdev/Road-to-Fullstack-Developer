def fungsi(tx, ty):
    y = 5*(tx**2) + 4*tx + 8
    if y == ty:
        print("{}, {} => M".format(y, ty))
    else:
        print("{}, {} => TM".format(y, ty))

fungsi(0, 8)
fungsi(1, 17)
fungsi(2, 36)
fungsi(3, 56)
fungsi(4, 145)
fungsi(5, 153)
fungsi(6, 212)
fungsi(7, 381)