import random

board = [
         ["1", "2", "3"],
         ["4", "5", "6"],
         ["7", "8", "9"]
        ]


humanTurn = False

def freeBoard(board):
	free = []	
	for row in range(3):
		for col in range(3):
			if board[row][col] not in ['O','X']: 
				free.append((row,col))
	return free

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

    free = freeBoard(board)
    cnt = len(free)

    computer = str(random.randrange(9))
    for row in range(3):
        for col in range(3):
            if cnt > 0:
                if computer == board[row][col]:
                    board[row][col] = "X"
    humanTurn = True

def playerSelect(board):
    global humanTurn

    player = input("Enter your move: ")   
    for row in range(3):
        for col in range(3):
            if player == board[row][col]:
                board[row][col] = "O"
    humanTurn = False
    displayTicTacToe(board)


free = freeBoard(board)
while len(free):
    if humanTurn:
        playerSelect(board)
    else:
        computerSelect(board)
