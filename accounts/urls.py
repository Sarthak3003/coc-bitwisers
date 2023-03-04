from django.urls import path
from accounts.views import *

urlpatterns = [
    path('register', register_view, name='register'),
    path('login', login_view, name='login'),
    path('all/', get_all_users, name='all'),
]