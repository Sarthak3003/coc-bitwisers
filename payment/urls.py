from django.urls import path
from .views import *


urlpatterns = [
    path('', home, name='home'),
    path('donate/', donate, name='donate'),
    path('success' , success , name='success'),
    path('donate/success', success, name='donatesucc'),
]