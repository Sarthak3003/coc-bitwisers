from django.contrib import admin
from django.urls import path, include
from rest_framework.authtoken import views
# from accounts import urls

urlpatterns = [
    path('admin/', admin.site.urls),
    path('auth/', include('accounts.urls')),
    path('api-token-auth', views.obtain_auth_token),
    path('app/', include('app.urls')),
    path('verification/', include('verification.urls')),
    path('payment/', include('payment.urls'))
]
