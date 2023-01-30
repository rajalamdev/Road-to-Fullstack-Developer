userYoutube = {
    "user123": {
        "password": "123",
        "video": [],
        "subs": 0
    },
    "user000": {
        "password": "000",
        "video": [],
        "subs": 0
    }
}
def login(currentUser, currentValue):
    while True:
        print()
        print("SELAMAT DATANG DI YOUTUBE\nSILAHKAN PILIH MENU:\n\n1. Subscribe users\n2. Upload Video\n3. My profile\n4. Search Channel\n5. Change Password\n6. Logout")
        select = input("Masukkan pilihan: ")
        if select == "1": 
            channelTujuan = input("Masukkan user yang ingin di subscribe: ")
            userYoutube[channelTujuan]["subs"] += 1
        elif select == "2":
            judulVideo = input("Masukkan judul video yang ingin diupload: ")
            userYoutube[currentUser]["video"].append(judulVideo)
        elif select == "3":
            print("="*50)
            print(f"Username: {currentUser}")
            print(f"Video: {currentValue['video']}")
            print(f"Password: {currentValue['password']}")
            print("Subs: ", currentValue['subs'])
            print("="*50)
        elif select == "4":
            searchUser = input("Masukkan user: ")
            if searchUser in userYoutube:
                print("="*50)
                print(f"Username: {userYoutube[searchUser]}")
                print(f"Video: {userYoutube[searchUser]['video']}")
                print("Subs: ", userYoutube[searchUser]['subs'])
                print("="*50)
        elif select == "5":
            inputOldPass = input("Masukkan password lama: ")
            if inputOldPass == currentValue["password"]:
                inputNewPass = input("Masukkan password baru: ")
                currentValue["password"] = inputNewPass
        elif select == "6":
            return youtube()
def youtube():
    inputUsername = input("Masukkan username: ")
    inputPassword = input("Masukkan password: ")

    if inputUsername not in userYoutube:
        print("Username tersebut belum terdaftar!")
    
    for key, value in userYoutube.items():
        if key == inputUsername:
            if inputPassword == value["password"]:
                return login(key, value)

youtube()