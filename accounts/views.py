from django.shortcuts import render

# Create your views here.
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework import status
from .serializers import MyTokenObtainPairSerializer, RegisterSerializer

from rest_framework_simplejwt.views import TokenObtainPairView

from django.contrib.auth import get_user_model
User = get_user_model()

class RegisterView(APIView):
    permission_classes = [AllowAny]
    
    def post(self, request, format=None):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"data" : {"val" : True, "detail" : "Registration Successful"}}, status=status.HTTP_200_OK)
        return Response({"data" : {"val" : True, "detail" : serializer.errors}}, status=status.HTTP_400_BAD_REQUEST)


#view to authenticate 
class MyTokenObtainPairView(TokenObtainPairView):
    permissions_classes = [AllowAny]
    serializer_class = MyTokenObtainPairSerializer

    def get(self, requests, format=None):
        return(Response({"msg": "Get not allowed"}))

    def post(self, requests, format=None):
        r = super().post(requests)
        
        if r.status_code == 200:
            obj = {}
            obj["email"] = requests.data["email"]
            client = User.objects.get(email=obj["email"])
            obj["name"] = client.name
            obj["bio"] = client.bio
            obj["college"] = client.college
            obj["country"] = client.country
            obj["dob"] = client.dob
            obj["contact"] = client.contact
            obj["gender"] = client.gender
            obj["who_to_date"] = client.who_to_date
            obj["height"] = client.height
            obj["interests"] = client.interests
            obj["is_drinker"] = client.is_drinker
            obj["is_smoker"] = client.is_smoker
            obj["is_verified"] = client.is_verified
            
            return Response({"data" : {"val" : True, "tokens": r.data, "details":obj}}, status=status.HTTP_200_OK)
        return r