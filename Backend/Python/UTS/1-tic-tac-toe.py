board = [
         ["1", "2", "3"],
         ["4", "5", "6"],
         ["7", "8", "9"]
        ]

possibleNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

firstPlayer = True

def displayTicTacToe(board):
    print("+-------" * 3, "+", sep="")
    for row in range(3):
        print("|       " * 4)
        for col in range(3):
            print("|   " + str(board[row][col]) + "   ", end="")
        print("|")
        print("|       " * 3,"|",sep="")
        print("+-------" * 3, "+", sep="")
displayTicTacToe(board)

def secondPlayerSelect(board):
    global firstPlayer

    secondPlayer = input("Player 2 Turn: ")
    if secondPlayer not in possibleNumber:
        return
    possibleNumber.remove(secondPlayer)
    for row in range(3):
        for col in range(3):
            if secondPlayer == board[row][col]:
                    board[row][col] = "O"
    firstPlayer = True

def firstPlayerSelect(board):
    global firstPlayer

    firstPlayerPick = input("Player 1 Turn: ")   
    if firstPlayerPick not in possibleNumber:
        return
    possibleNumber.remove(firstPlayerPick)
    for row in range(3):
        for col in range(3):
            if firstPlayerPick == board[row][col]:
                board[row][col] = "X"
    firstPlayer = False

def winner():
    # Player Check
    if board[0][0] == "X" and board[0][1] == "X" and board[0][2] == "X":
        print("Player 1 Win!")
        return True
    elif board[1][0] == "X" and board[1][1] == "X" and board[1][2] == "X":
        print("Player 1 Win!")
        return True
    elif board[2][0] == "X" and board[2][1] == "X" and board[2][2] == "X":
        print("Player 1 Win!")
        return True
    elif board[0][0] == "X" and board[1][1] == "X" and board[2][2] == "X":
        print("Player 1 Win!")
        return True
    elif board[0][2] == "X" and board[1][1] == "X" and board[2][0] == "X":
        print("Player 1 Win!")
        return True
    elif board[0][0] == "X" and board[1][0] == "X" and board[2][0] == "X":
        print("Player 1 Win!")
        return True
    elif board[0][1] == "X" and board[1][1] == "X" and board[2][1] == "X":
        print("Player 1 Win!")
        return True
    elif board[0][2] == "X" and board[1][2] == "X" and board[2][2] == "X":
        print("Player 1 Win!")
        return True
    # Computer Check
    if board[0][0] == "O" and board[0][1] == "O" and board[0][2] == "O":
        print("Player 2 Win!")
        return True
    elif board[1][0] == "O" and board[1][1] == "O" and board[1][2] == "O":
        print("Player 2 Win!")
        return True
    elif board[2][0] == "O" and board[2][1] == "O" and board[2][2] == "O":
        print("Player 2 Win!")
        return True
    elif board[0][0] == "O" and board[1][1] == "O" and board[2][2] == "O":
        print("Player 2 Win!")
        return True
    elif board[0][2] == "O" and board[1][1] == "O" and board[2][0] == "O":
        print("Player 2 Win!")
        return True
    elif board[0][0] == "O" and board[1][0] == "O" and board[2][0] == "O":
        print("Player 2 Win!")
        return True
    elif board[0][1] == "O" and board[1][1] == "O" and board[2][1] == "O":
        print("Player 2 Win!")
        return True
    elif board[0][2] == "O" and board[1][2] == "O" and board[2][2] == "O":
        print("Player 2 Win!")
        return True

while len(possibleNumber):
    if firstPlayer:
        firstPlayerSelect(board)
    else:
        secondPlayerSelect(board)
    displayTicTacToe(board)

    print("Free Number: ", possibleNumber)
    win = winner()
    if win == True:
        break

if win != True:
    print("DRAW")