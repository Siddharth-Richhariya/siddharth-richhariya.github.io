x=(23,43,235,32,53,2,4,54,2,1)

small=x[0]
smallest=0

for i in range(len(x)):
    if x[i]>small:
        small=x[i]
    smallest=small
print(smallest)