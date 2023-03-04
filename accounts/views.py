import json
from . models import *
from .serializers import *
from django.shortcuts import render
from rest_framework.views import APIView
from django.http.response import JsonResponse
from django.http import HttpResponse



# Create your views here.

def get_all_users(request):
    records = user.objects.all()

    print(records)

    record_serializer = userSeriauslizer(records, many=True)

    return JsonResponse(
        {
            "data": record_serializer.data
        }
    )

def register_view(request):
    data= json.loads(request.body)

    username = data["username"]
    password = data["password"]
    name = data["name"]
    bio = data["bio"]
    college = data["college"]
    country = data["country"]
    # created_at = data["created_at"]
    DateOfBirth = data["dob"]
    print(DateOfBirth)
    contact = data["contact"]
    email = data["email"]
    gender = data["gender"]
    # status = data["status"]
    who_to_date = data["who_to_date"]
    height = data["height"]
    interests = data["interests"]
    is_drinker = data["is_drinker"]
    is_smoker = data["is_smoker"]
    is_verified = data["is_verified"]

    p = user(username=username, password=password, name=name, bio=bio, college=college, country=country, DateOfBirth=DateOfBirth, contact=contact, who_to_date=who_to_date, height=height, interests=interests, is_drinker=is_drinker, is_smoker=is_smoker, is_verified=is_verified, email=email, gender=gender)
    p.save()
    return HttpResponse("data added")





def login_view(request):
    data=request.data

    return data
