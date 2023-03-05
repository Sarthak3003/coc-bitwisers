from django.contrib import admin
from django.urls import path, include
# from accounts import urls
from app import views

urlpatterns = [
    path('all/', views.all_views, name='all'),
    path('male/', views.male_views, name='all'),
    path('female/', views.female_views, name='all'),
    path('action/', views.action_views, name='action'),
    path('all_swipes/', views.all_swipes, name='all_swipes')

]
