import datetime
present_date=int(input("enter present date: "))
present_month=int(input("enter present month: "))
present_year=int(input("enter present year: "))
date_of_birth=int(input("enter date of birth: "))
date_of_month=int(input("enter month of birth: "))
date_of_year=int(input("enter year of birth"))
month=[31,28,31,30,31,30,31,31,30,31,30,31]

if (date_of_birth>present_date):
    present_month=present_month-1
    present_date=present_date+month[i](date_of_birth-1)

if (date_of_month>present_month):
    present_year=present_year-1
    present_month=date_of_month+12



    

age=present_date-date_of_birth

age_month=present_month-date_of_month

age_year=present_year-date_of_year

print("day",age, "month" ,age_month, "yeaer" ,age_year)