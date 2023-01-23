from django.contrib.auth.models import User
from rest_framework import generics, viewsets
from rest_framework.permissions import IsAdminUser
from .serializers import UserSerializer
from .models import *
from .serializers import *


############## User ##############
class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [IsAdminUser]


################ Members #######################
class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer
    permission_classes = [IsAdminUser]

################# Projects #######################
class ProjectViewSet(viewsets.ModelViewSet):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [IsAdminUser]

################# Events #######################
class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [IsAdminUser]