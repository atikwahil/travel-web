from rest_framework import serializers
from .models import NewUser


class UserRegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ['first_name', 'last_name', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        return NewUser.objects.create_user(**validated_data)


class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
        model = NewUser
        fields = ['email', 'password']


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = NewUser
        fields = ('email', 'password')
