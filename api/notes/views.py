from rest_framework import generics, authentication, permissions

from .models import Note
from .serializers import (
    NoteSerializer, NoteResponseSerializer
)


class CreateNote(generics.CreateAPIView):
    queryset = Note.objects.all()
    serializer_class = NoteSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        note = Note(title=serializer.validated_data.get('title'),
                    content=serializer.validated_data.get('title'),
                    author=self.request.user)
        note.save()


class GetNote(generics.RetrieveAPIView):
    serializer_class = NoteSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)


class GetAllNote(generics.ListAPIView):
    serializer_class = NoteResponseSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)


class UpdateNote(generics.UpdateAPIView):
    serializer_class = NoteSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)


class DestroyNote(generics.DestroyAPIView):
    serializer_class = NoteSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return Note.objects.filter(author=self.request.user)
