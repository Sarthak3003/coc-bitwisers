from datetime import date
from django.db import models
from clashofcode import settings

# Create your models here.

gender_choices = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Other', 'Other'),
)

who_to_date_choices = (
    ('Male', 'Male'),
    ('Female', 'Female'),
    ('Anyone', 'Anyone'),
)

class user(models.Model):
    password = models.CharField(max_length=25, default="", blank=True)
    name = models.CharField(max_length=50, default="", blank=True)
    bio = models.CharField(max_length=1080, default="", blank=True)
    college = models.CharField(max_length=200, default="", blank=True)
    country = models.CharField(max_length=50, default="", blank=True)
    created_at = models.DateTimeField(editable=False, default=date.today(), blank=True)
    DateOfBirth = models.CharField(max_length=25, default="", blank=True)
    contact = models.CharField(max_length=15, default="", blank=True)
    email = models.EmailField()
    gender = models.CharField(max_length=25, choices=gender_choices, default='Choose not to say', blank=True)
    status = models.BooleanField(default=True, blank=True)
    who_to_date = models.CharField(max_length=25, choices = who_to_date_choices, default='Anyone', blank=True)
    height = models.IntegerField(default="", blank=True)
    interests = models.CharField(max_length=10000, default="", blank=True)
    is_drinker = models.BooleanField(default=False, blank=True)
    is_smoker = models.BooleanField(default=False, blank=True)
    is_verified = models.BooleanField(default=False, blank=True)