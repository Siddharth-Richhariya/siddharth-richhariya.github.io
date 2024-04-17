x=[25,32,15,21,41,14,7,5,2,4]

small=x[0]
smallest=0

for i in range(len(x)):

    if x[i]<small:
        small=x[i]
    smallest=small
print(smallest)



