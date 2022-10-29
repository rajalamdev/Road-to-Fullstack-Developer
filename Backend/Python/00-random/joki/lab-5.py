import pandas as pd

data = {'Nama': ['Amanda', 'Andi', 'Anton', 'Arini', 'Aziz'],
        'Tugas': [77, 80, 91, 83, 78],
        'UTS': [90, 76, 88, 69, 75],
        'UAS': [80, 87, 77, 90, 88]}

df = pd.DataFrame(data)

# Menambahkan kolom baru dengan assign
df_akhir = df.assign(Nilai_Akhir = df['Tugas']*0.3 + df['UTS']*0.3 + df['UAS']*0.4)

df_predikat = df.assign(Predikat = df_akhir)
print(df_predikat)