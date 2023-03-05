from rest_framework import serializers
from .models import *

class LikeSerializer(serializers.ModelSerializer):
  class Meta:
    model = LikesModel
    fields = ("email", "_id", "action",)