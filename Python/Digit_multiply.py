#Write a program to display product of the digits of a number accepted from the user.
num=int(input("Enter any number"))
p=1
while(num):
   r=num%10
   p=p*r
   num=num//10
print("Product of digits is",p)