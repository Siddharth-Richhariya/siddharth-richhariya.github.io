num=int(input("Enter any number"))
s=0
while(num):
   r=num%10
   s=s+r
   num=num//10
print("digits is",s)