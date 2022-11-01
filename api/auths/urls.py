from django.urls import path

from .views import obtain_auth_token

urlpatterns = [
    path('login', obtain_auth_token),
]
