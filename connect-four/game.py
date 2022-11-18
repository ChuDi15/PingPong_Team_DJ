
import sys


basic =[['·','·','·','·','·','·','·'],
        ['·','·','·','·','·','·','·'],
        ['·','·','·','·','·','·','·'],
        ['·','·','·','·','·','·','·'],
        ['·','·','·','·','·','·','·'],
        ['·','·','·','·','·','·','·'],]
def addToken(table, column, value):
    for a in reversed(table):
        if a[column] == '·':
            a[column] = value
            break
def checkWinColumn(table):
    for i in range(3):
        for j in range(7):
            if table[i][j] == 'X' or table[i][j] == 'O':
                print(table[i][j])           
                if table[i][j] == table[i+1][j] == table[i+2][j] == table[i+3][j]:
                    return True
    return False
def checkWinRow(table):    
    for a in table: 
        for i in range(4):
            if a[i] == 'X' or a[i] == 'O':                
                if a[i] == a[i+1] == a[i+2] == a[i+3]:
                    return True
    print("Returning not win...")
    return False

def checkWinDiag(table):
    for i in range(3):
        for j in range(3):
            if table[i][j] == 'X' or table[i][j] == 'O':   
                print("Checkign:")
                print("i: " + str(i) + " j: " + str(j))

                if table[i][j] == table[i+1][j+1] == table[i+2][j+2] == table[i+3][j+3]:
                    return True
        for j in range(3):
            j = 6 - j
            if table[i][j] == 'X' or table[i][j] == 'O':       
                if table[i][j] == table[i+1][j-1] == table[i+2][j-2] == table[i+3][j-3]:
                    return True
    return False
    return False
def checkWin(table): 
    if checkWinRow(table):
        return True
    elif checkWinColumn(table):
        return True
    elif checkWinDiag(table):
        return True
    return False
def main():
    game = True
    player1 = True
    tokensColumn = [0, 0, 0, 0, 0, 0, 0]
    while(game):
        for a in basic:
            print(a)
        if player1: 
            column = int(input("Player 1-Enter column value: ")) - 1
            if tokensColumn[column] == 6:
                print("Column no valid. no space")
            else:
                addToken(basic, column, 'X')
                tokensColumn[column] +=1
                player1=False
        else:
            column = int(input("Player 2-Enter column value: ")) - 1 
            if tokensColumn[column] == 6:
                print("Column no valid. no space")
            else:
                addToken(basic, column, 'O')
                tokensColumn[column] +=1
                player1=True
        game = not checkWin(basic)
    
    if not player1:
        print("\n================\n\nPLAYER 1 WINS!!!\n")
    else:
        print("\n\nPLAYER 2 WINS!!!\n")
    for a in basic:
        print(a)
    print("\n================")

        

if __name__ == "__main__":
    main()