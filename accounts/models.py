from datetime import date
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin

# Create your models here.
class ClientManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if email is None:
            raise TypeError('User should have a email')
        user = self.model(email=self.normalize_email(email))
        user.set_password(password)
        
        user.save(using=self._db)
        return user

    # def create_superuser(self, email, password=None, **extra_fields):
    #     if password is None:
    #         raise TypeError('Password should not be none')
    #     user = self.create_user(email, password)
    #     user.is_active = True
    #     user.is_superuser = True
    #     user.is_staff = True
    #     user.is_admin = True
    #     user.save(using=self._db)
    #     return user

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

class Client(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        max_length=255, unique=True, blank=True, null=False, default="")

    #ROLE = (("normal-user" , "normal-user"), ("admin", "admin"))

    is_active = models.BooleanField(default=True)
    name = models.CharField(max_length=50, null=True)
    bio = models.CharField(max_length=1000, blank=True, null=True)
    college = models.CharField(max_length=100, blank=True, null=True)
    password = models.CharField(max_length=100, blank=True, null=True)
    country = models.CharField(max_length=50, default="", blank=True)
    dob = models.CharField(max_length=25, default="", blank=True)
    contact = models.CharField(max_length=100, blank=True)
    gender = models.CharField(max_length=25, choices=gender_choices, default='Choose not to say', blank=True)
    created_at = models.DateTimeField(editable=False, default=date.today(), blank=True)
    status = models.BooleanField(default=True, blank=True)
    who_to_date = models.CharField(max_length=25, choices = who_to_date_choices, default='Anyone', blank=True)
    height = models.CharField(max_length=25, default="", blank=True)
    interests = models.CharField(max_length=10000, default="", blank=True)
    is_drinker = models.BooleanField(default=False, blank=True)
    is_smoker = models.BooleanField(default=False, blank=True)
    is_verified = models.BooleanField(default=False, blank=False)

    #role = models.CharField(choices=ROLE, default=ROLE[0], max_length=50)
    is_admin = models.BooleanField(default=False)
    is_staff = models.BooleanField(default=False)

    USERNAME_FIELD = 'email'
    objects = ClientManager()

    # def has_profile(self):
    #     return hasattr(self, 'participantprofile')

    def _str_(self):
        return self.email