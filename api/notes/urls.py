from django.urls import path

from .views import (
    CreateNote, GetNote, GetAllNote, UpdateNote, DestroyNote
)

urlpatterns = [
    path('create', CreateNote.as_view()),
    path('<int:pk>', GetNote.as_view()),
    path('all', GetAllNote.as_view()),
    path('update/<int:pk>', UpdateNote.as_view()),
    path('destroy/<int:pk>', DestroyNote.as_view()),
]
