from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate
from .serializers import UserSerializer
from .models import *
from .serializers import *


############## User ##############
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

    def get_permissions(self):
        if self.action == 'create' or self.action == 'authorize':
            permission_classes = []
        else:
            permission_classes = [IsAdminUser]

        return [permission() for permission in permission_classes]

    @action(detail=True, methods=['get','post'])
    def authorize(self, request):
        # print(request.data)
        # return Response("Just Checking")

        username = request.data['username']
        password = request.data['password']
        user = authenticate(username=username, password=password)

        if user is not None:
            serializer = UserSerializer(user, many=False)
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response("User Does not exixt", status=status.HTTP_400_BAD_REQUEST)


################ Members #######################
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

    def get_permissions(self):
        permissible_actions = ['list', 'get_members', 'retrieve']
        if self.action in permissible_actions:
            permission_classes = []
        else:
            permission_classes = [IsAdminUser]

        return [permission() for permission in permission_classes]

    @action(detail=True, methods=['get'])
    def get_members(self, request, count):
        members = Member.objects.all()[:count]
        serializer = MemberSerializer(members, many=True)
        return Response(serializer.data)

################# Projects #######################
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    def get_permissions(self):
        if self.action == 'list':
            permission_classes = []
        else:
            permission_classes = [IsAdminUser]

        return [permission() for permission in permission_classes]

################# Events #######################
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    def get_permissions(self):
        if self.action == 'list':
            permission_classes = []
        else:
            permission_classes = [IsAdminUser]

        return [permission() for permission in permission_classes]