from rest_framework import serializers
from django.contrib.auth import get_user_model
from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

User = get_user_model()

from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):

    @classmethod
    def get_token(cls, user):
        token = super(MyTokenObtainPairSerializer, cls).get_token(user)

        #add custom claims
        token['email'] = user.email
        return token


class RegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(
        write_only=True,
        required = True,
        validators = [UniqueValidator(queryset=User.objects.all())]
    )

    name = serializers.CharField(
        required = True,
    )


    bio = serializers.CharField(
        required = True,
    )


    college = serializers.CharField(
        required = True,
    )


    country = serializers.CharField(
        required = True,
    )


    dob = serializers.CharField(
        required = True,
    )


    contact = serializers.CharField(
        required = True,
    )


    gender = serializers.CharField(
        required = True,
    )


    contact = serializers.CharField(
        required = True,
    )


    who_to_date = serializers.CharField(
        required = True,
    )


    height = serializers.CharField(
        required = True,
    )


    interests = serializers.CharField(
        required = True,
    )


    is_drinker = serializers.BooleanField(
        required = True,
    )


    is_smoker = serializers.BooleanField(
        required = True,
    )


    is_verified = serializers.BooleanField(
        required = True,
    )



    password = serializers.CharField(
        write_only=True,
        required=True,
        validators = [validate_password]
    )


    def create(self, validated_data):

        user = User.objects.create(
            email=validated_data["email"],
        )
        user.is_active = True
        user.is_admin = True
        user.name = validated_data["name"]
        user.email = validated_data["email"]
        user.bio = validated_data["bio"]
        user.college = validated_data["college"]
        user.country = validated_data["country"]
        user.dob = validated_data["dob"]
        user.contact = validated_data["contact"]
        user.gender = validated_data["gender"]
        user.who_to_date = validated_data["who_to_date"]
        user.height = validated_data["height"]
        user.interests = validated_data["interests"]
        user.is_drinker = validated_data["is_drinker"]
        user.is_smoker = validated_data["is_smoker"]
        user.is_verified = validated_data["is_verified"]
        user.set_password(validated_data["password"])
        user.save()

        return user

    class Meta:
        model = User
        fields = [ 'email', 'name', 'bio', 'college', 'country', 'dob', 'contact', 'gender', 'who_to_date', 'height', 'interests', 'is_drinker', 'is_smoker', 'is_verified', 'password']