import pandas as pd
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.shortcuts import render

# Create your views here.

@api_view(['GET'])
def all_views(request):
    data = pd.read_csv('user_cluster_data.csv')
    print(data)

    return Response({"data" : {"val" : True, "details":data}}, status=status.HTTP_200_OK)
