import pandas as pd

dataMhs = {
    "mhs1": {
        "nama": "alam",
        "nrp": "1152200003",
        "prodi": "informatika",
        "matkul": {
            "statistika": "80",
            "matematika": "85"
        } 
    },
}

df = pd.DataFrame.from_dict(dataMhs, orient='index').reset_index(drop=True)

print(df)