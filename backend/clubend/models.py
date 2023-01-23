from django.db import models
from django.contrib.auth.models import User

class Member(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    address = models.CharField(max_length=200)
    city = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    zip = models.CharField(max_length=10)
    birthdate = models.DateField()
    branch = models.CharField(max_length=100)
    college = models.CharField(max_length=100)
    enrollment = models.CharField(max_length=100)
    user = models.ForeignKey(User, related_name='members', on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.user.username


class Project(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    startdate = models.DateField()
    user = models.ForeignKey(User, related_name='projects', on_delete=models.CASCADE)
    endDate = models.DateField()
    members = models.ManyToManyField(Member, related_name='projects')
    leader = models.ForeignKey(Member, related_name='leader', on_delete=models.CASCADE)
    isCompleted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name


class Event(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=200)
    startdate = models.DateField()
    user = models.ForeignKey(User, related_name='events', on_delete=models.CASCADE)
    endDate = models.DateField()
    members = models.ManyToManyField(Member, related_name='events')
    leader = models.ForeignKey(Member, related_name='eventLeader', on_delete=models.CASCADE)
    isCompleted = models.BooleanField(default=False)

    def __str__(self) -> str:
        return self.name