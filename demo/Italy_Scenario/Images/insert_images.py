import sys
import os
import re

def main():
    d = os.listdir(".")
    fo = open("empty_images.txt", "r")
    fn = open("images.txt", "w")
    lines = fo.readlines()
    for i in range(150):
        string = 'src="Images/' + d[i] + '"'
        newline = re.sub(r'src=""', string, lines[i])
        fn.write(newline )        

    fn.close()
    fo.close()    

if __name__ == "__main__":
    main()
