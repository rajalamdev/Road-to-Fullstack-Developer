import random

board = [
         ["1", "2", "3"],
         ["4", "5", "6"],
         ["7", "8", "9"]
        ]

possibleNumber = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]

humanTurn = False

def winner():
    # Player Check
    if board[0][0] == "O" and board[0][1] == "O" and board[0][2] == "O":
        print("Player Win!")
        return True
    elif board[1][0] == "O" and board[1][1] == "O" and board[1][2] == "O":
        print("Player Win!")
        return True
    elif board[2][0] == "O" and board[2][1] == "O" and board[2][2] == "O":
        print("Player Win!")
        return True
    elif board[0][0] == "O" and board[1][1] == "O" and board[2][2] == "O":
        print("Player Win!")
        return True
    elif board[0][2] == "O" and board[1][1] == "O" and board[2][0] == "O":
        print("Player Win!")
        return True
    elif board[0][0] == "O" and board[1][0] == "O" and board[2][0] == "O":
        print("Player Win!")
        return True
    elif board[0][1] == "O" and board[1][1] == "O" and board[2][1] == "O":
        print("Player Win!")
        return True
    elif board[0][2] == "O" and board[1][2] == "O" and board[2][2] == "O":
        print("Player Win!")
        return True
    # Computer Check
    if board[0][0] == "X" and board[0][1] == "X" and board[0][2] == "X":
        print("Computer Win!")
        return True
    elif board[1][0] == "X" and board[1][1] == "X" and board[1][2] == "X":
        print("Computer Win!")
        return True
    elif board[2][0] == "X" and board[2][1] == "X" and board[2][2] == "X":
        print("Computer Win!")
        return True
    elif board[0][0] == "X" and board[1][1] == "X" and board[2][2] == "X":
        print("Computer Win!")
        return True
    elif board[0][2] == "X" and board[1][1] == "X" and board[2][0] == "X":
        print("Player Win!")
        return True
    elif board[0][0] == "X" and board[1][0] == "X" and board[2][0] == "X":
        print("Computer Win!")
        return True
    elif board[0][1] == "X" and board[1][1] == "X" and board[2][1] == "X":
        print("Computer Win!")
        return True
    elif board[0][2] == "X" and board[1][2] == "X" and board[2][2] == "X":
        print("Computer Win!")
        return True

def displayTicTacToe(board):
    print("+-------" * 3, "+", sep="")
    for row in range(3):
        print("|       " * 4)
        for col in range(3):
            print("|   " + str(board[row][col]) + "   ", end="")
        print("|")
        print("|       " * 3,"|",sep="")
        print("+-------" * 3, "+", sep="")

def computerSelect(board):
    global humanTurn

    computer = str(random.choice(possibleNumber))
    if computer not in possibleNumber:
        return
    possibleNumber.remove(computer)
    for row in range(3):
        for col in range(3):
            if computer == board[row][col]:
                    board[row][col] = "X"
    humanTurn = True

def playerSelect(board):
    global humanTurn

    player = input("Enter your move: ")   
    if player not in possibleNumber:
        return
    possibleNumber.remove(player)
    for row in range(3):
        for col in range(3):
            if player == board[row][col]:
                board[row][col] = "O"
    humanTurn = False
    
while len(possibleNumber):
    if humanTurn:
        playerSelect(board)
    else:
        computerSelect(board)
    displayTicTacToe(board)

    print("Free Number: ", possibleNumber)
    win = winner()
    if win == True:
        break

if win != True:
    print("DRAW")