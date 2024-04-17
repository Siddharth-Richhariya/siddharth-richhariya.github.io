thislist= ["hemant","shreyansh","shivam","avneesh"]
tat=("hemu","shre","shivu","aneesh")
thislist.extend(tat) 
thislist.sort()
print(thislist)
thislist.reverse()
print(thislist)
thislist.remove("shre")
print(thislist)
thislist.append("shre")
print(thislist)
for x in thislist:
      print(x)

for i in range(len(thislist)):
       print(thislist[i])

i=0
while i< len(thislist):
       print(i)
       i=i+1

[print(x) for x in thislist]

nwelist=[]
for x in thislist:
       if "a"in x:
            nwelist.append(x)
print(nwelist)

newlist=[x for x in thislist if "a" in x]

newlist=[x for x in thislist if x!="hemant"]
print(newlist)

new=[ x for x in range(10)]
print(new)

new=[ x for x in range(10) if x<5]
print(new)