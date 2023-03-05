import json
import random
import pandas as pd
from .models import *
from .serializers import *
from rest_framework import status
from rest_framework.response import Response
from rest_framework.parsers import JSONParser
from rest_framework.decorators import api_view
from django.shortcuts import render

# Create your views here.

@api_view(['GET'])
def all_views(request):
    data = pd.read_csv('user_cluster_data.csv')

    i= random.randint(0, 2)
    tup = []
    for j in range(100):
        tup.append(data['_id'].where(data['cluster'] == i))
    
    big_data = pd.read_csv('users.csv')
    big_data = big_data.fillna('')

    for j in tup:
        filter_data = big_data.loc[big_data['_id'] == j]

    filter_data = filter_data.sort_values(by="createdAt", ascending=False)

    return Response(
        {
            "val": True,
            "data" : {"val" : True, "details":filter_data},
        }, status=status.HTTP_200_OK)

@api_view(['GET'])
def male_views(request):
    data = pd.read_csv('male_cluster_data.csv')
    data = data.reset_index(drop=True)

    i= random.randint(0, 2)
    tup = []
    for j in range(100):
        tup.append(data['_id'].where(data['cluster'] == i))
    
    big_data = pd.read_csv('male_data.csv')
    big_data = big_data.fillna('')

    for j in tup:
        filter_data = big_data.loc[big_data['_id'] == j]
        print(filter_data)

    filter_data = filter_data.sort_values(by="createdAt", ascending=False)

    return Response(
        {
            "val": True,
            "data" : {"val" : True, "details":filter_data},
        }, status=status.HTTP_200_OK)

@api_view(['GET'])
def female_views(request):
    data = pd.read_csv('female_cluster_data.csv')

    i= random.randint(0, 2)
    tup = []
    for j in range(100):
        tup.append(data['_id'].where(data['cluster'] == i))
    
    big_data = pd.read_csv('female_data.csv')
    big_data = big_data.fillna('')

    for j in tup:
        filter_data = big_data.loc[big_data['_id'] == j]

    filter_data = filter_data.sort_values(by="createdAt", ascending=False)

    return Response(
        {
            "val": True,
            "data" : {"val" : True, "details":filter_data},
        }, status=status.HTTP_200_OK)


@api_view(['POST'])
def action_views(request):
    temp = JSONParser().parse(request)
    rec_serializer = LikeSerializer(data = temp)
    if rec_serializer.is_valid():
        rec_serializer.save()
        return Response(
            {
                "val": True,
                "data" : {"val" : True, "details":temp},
            }, status=status.HTTP_200_OK)
    else:
        return Response(
            {
                "val": False,
                "data" : {"val" : False, "details":temp},
            }, status=status.HTTP_403_FORBIDDEN)

@api_view(['GET'])
def all_swipes(request):
    records = LikesModel.objects.all()
    print(records)
    rec_serial = LikeSerializer(records, many=True)
    return Response(
        {
            "val": True,
            "data" : {"val" : True, "details":rec_serial.data},
        }, status=status.HTTP_200_OK)