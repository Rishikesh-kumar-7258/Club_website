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
    path('users/exist/', UserViewSet.as_view({'post' : 'authorize'})),

  # Members
    path('members/', MemberViewSet.as_view({'get': 'list'})),
    path('member/<int:pk>/', MemberViewSet.as_view({'get': 'retrieve'})),
    path('member/<int:pk>/update/', MemberViewSet.as_view({'put': 'update'})),
    path('member/<int:pk>/delete/', MemberViewSet.as_view({'delete': 'destroy'})),
    path('member/create/', MemberViewSet.as_view({'post': 'create'})),
    path('members/<int:count>/', MemberViewSet.as_view({'get': 'get_members'})),

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