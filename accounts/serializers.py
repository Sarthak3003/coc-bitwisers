from .models import *
from rest_framework import serializers

class userSeriauslizer(serializers.ModelSerializer):
  class Meta:
      model = user
      fields = ("name", "bio", "college", "country", "DateOfBirth",
      "contact", "email", "gender", "who_to_date", "height", "interests",
      "is_drinker", "is_smoker", "is_verified")