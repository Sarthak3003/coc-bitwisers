from django.db import models
from datetime import date

# Create your models here.

class LikesModel(models.Model):
    email = models.EmailField(max_length=50, blank=True)
    _id = models.CharField(max_length=10000, blank=True)
    action = models.CharField(max_length=25, blank=True)
    