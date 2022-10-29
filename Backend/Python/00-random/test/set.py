# 1
a = {"c", "d", "e", "f"}

# 2
b = {"e", "f", "g", "h"}

# 3
a_gab_b = a.union(b)
print("{a_gab_b}\n".format(a_gab_b = a_gab_b))

# 4
a_ir_b = a.intersection(b)
print("{a_ir_b}\n".format(a_ir_b = a_ir_b))

# 5
print(a_gab_b - a_ir_b, "\n")

# 6
print(a - a_ir_b, "\n")

# 7
print(b - a_ir_b, "\n")

# 8
s = a_gab_b
s.add("a")
print(s)