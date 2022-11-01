from django.urls import path

from .views import CreateUser, UpdateUser, DestroyUser

urlpatterns = [
    path('create', CreateUser.as_view()),
    path('update/<int:pk>', UpdateUser.as_view()),
    path('destroy/<int:pk>', DestroyUser.as_view()),
]
