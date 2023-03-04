from django.contrib import admin
from django.urls import path, include
# from accounts import urls
from app import views

urlpatterns = [
    path('all/', views.all_views, name='all'),

]
