
import sys

def miles(num): 
    s = ""
    n = num/1000
    for a in range(int(n)):
        s = s + "M"
    return s 

def cientos(number):
    s = ""
    num = int(number/100)
    if num == 9:
        s = "CM"
    elif num == 8:
        s = "DIII"
    elif num == 7:
        s = "DII"
    elif num == 6:
        s = "DI"
    elif num == 5:
        s = "D"
    elif num == 4:
        s = "CD"
    elif num == 3:
        s = "CCC"
    elif num == 2:
        s = "CC"
    elif num == 1:
        s = "C"
    return s
def decenas(number):
    s = ""
    num = int(number/10)
    if num == 9:
        s = "XC"
    elif num == 8:
        s = "LXXX"
    elif num == 7:
        s = "LXX"
    elif num == 6:
        s = "LX"
    elif num == 5:
        s = "L"
    elif num == 4:
        s = "XL"
    elif num == 3:
        s = "XXX"
    elif num == 2:
        s = "XX"
    elif num == 1:
        s = "X"
    return s

def unidades(num):
    
    s = ""
    if num == 9:
        s = "IX"
    elif num == 8:
        s = "VIII"
    elif num == 7:
        s = "VII"
    elif num == 6:
        s = "VI"
    elif num == 5:
        s = "V"
    elif num == 4:
        s = "IV"
    elif num == 3:
        s = "III"
    elif num == 2:
        s = "II"
    elif num == 1:
        s = "I"
    return s    
    
def transform(num):
    s = miles(num) + cientos(num%1000) + decenas(num%100) + unidades(num%10)
    return s

def main():
    
    print(transform(int(sys.argv[1])))

if __name__ == "__main__":
    main()