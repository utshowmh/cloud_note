from rest_framework import generics, authentication, permissions

from .models import User
from .serializers import UserSerializer
from .exceptions import UsernameExist


class CreateUser(generics.CreateAPIView):
    serializer_class = UserSerializer
    permission_classes = [permissions.AllowAny]

    def perform_create(self, serializer):
        user = User.objects.filter(
            username=serializer.validated_data.get('username'))
        if not user:
            user = User.objects.create_user(username=serializer.validated_data.get('username'),
                                            password=serializer.validated_data.get('password'))
            user.save()
        else:
            raise UsernameExist()


class UpdateUser(generics.UpdateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]


class DestroyUser(generics.DestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    authentication_classes = [authentication.TokenAuthentication]
    permission_classes = [permissions.IsAuthenticated]
