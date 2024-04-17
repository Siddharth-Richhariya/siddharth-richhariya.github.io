a={1:"nitesh", 2:"shivam",3: "Sid",4:"shivu",5:"rohity"}


b={1:"nitesh", 2:"shivam",3: "Sid",4:"vinod",5:"aim"}

for key in a.keys():
    
    if a[key]== b[key]:
        print('same',a[key])
    elif  a[key]!= b[key]:
        print('not same',b[key])