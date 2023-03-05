from django.contrib import admin
from django.urls import path, include
# from accounts import urls
from . import views

urlpatterns = [
    path('face/', views.face_verify, name='face_verify'),

]
