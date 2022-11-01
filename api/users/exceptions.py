from rest_framework import exceptions, status


class UsernameExist(exceptions.APIException):
    status_code = status.HTTP_400_BAD_REQUEST
    default_detail = 'username has been taken.'
