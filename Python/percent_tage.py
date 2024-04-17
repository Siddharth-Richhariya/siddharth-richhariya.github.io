x=int(input("enter the percentage\n"))
if x>=90:
    Grade= "EX"
elif x>80 and x<=90:
    Grade= "A"
elif x >70 and x<=80:
    Grade="B"
elif x>60 and x<=70:
    Grade="C"
elif x>=50:
    Grade="D"
else:
    Grade= "fail"

print("your Grade is:  "+ Grade)