from django.urls import path
from .views import *
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('members', MemberViewSet, basename='members')
router.register('projects', ProjectViewSet, basename='projects')
router.register('events', EventViewSet, basename='events')

urlpatterns = [
  # Users
    path('users/', UserViewSet.as_view({'get': 'list'})),
    path('users/<int:pk>/', UserViewSet.as_view({'get': 'retrieve'})),
    path('users/<int:pk>/update/', UserViewSet.as_view({'put': 'update'})),
    path('users/<int:pk>/delete/', UserViewSet.as_view({'delete': 'destroy'})),
    path('users/create/', UserViewSet.as_view({'post': 'create'})),

  # Members
    path('members/', MemberViewSet.as_view({'get': 'list'})),
    path('members/<int:pk>/', MemberViewSet.as_view({'get': 'retrieve'})),
    path('members/<int:pk>/update/', MemberViewSet.as_view({'put': 'update'})),
    path('members/<int:pk>/delete/', MemberViewSet.as_view({'delete': 'destroy'})),
    path('members/create/', MemberViewSet.as_view({'post': 'create'})),

  # Projects
    path('projects/', ProjectViewSet.as_view({'get': 'list'})),
    path('projects/<int:pk>/', ProjectViewSet.as_view({'get': 'retrieve'})),
    path('projects/<int:pk>/update/', ProjectViewSet.as_view({'put': 'update'})),
    path('projects/<int:pk>/delete/', ProjectViewSet.as_view({'delete': 'destroy'})),
    path('projects/create/', ProjectViewSet.as_view({'post': 'create'})),

  # Events
    path('events/', EventViewSet.as_view({'get': 'list'})),
    path('events/<int:pk>/', EventViewSet.as_view({'get': 'retrieve'})),
    path('events/<int:pk>/update/', EventViewSet.as_view({'put': 'update'})),
    path('events/<int:pk>/delete/', EventViewSet.as_view({'delete': 'destroy'})),
    path('events/create/', EventViewSet.as_view({'post': 'create'})),

]