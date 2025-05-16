from rest_framework import serializers # type: ignore
from .models import User

class UserSignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    confirmPassword = serializers.CharField(write_only=True)
    id = serializers.CharField(required=False, allow_blank=True)
    roleSpecification = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = User
        fields = ['email', 'name', 'password', 'confirmPassword', 'role', 'id', 'department', 'office', 'roleSpecification']

    def validate(self, data):
        if data['password'] != data['confirmPassword']:
            raise serializers.ValidationError({'confirmPassword': 'Passwords do not match.'})
        if data['role'] in ['Student', 'Faculty', 'Staff', 'Administrator'] and not data.get('id'):
            raise serializers.ValidationError({'id': f'{data["role"]} ID is required.'})
        if data['role'] in ['Student', 'Faculty'] and not data.get('department'):
            raise serializers.ValidationError({'department': 'Department is required.'})
        if data['role'] == 'Staff' and not data.get('office'):
            raise serializers.ValidationError({'office': 'Office is required.'})
        if data['role'] == 'Administrator' and not data.get('roleSpecification'):
            raise serializers.ValidationError({'roleSpecification': 'Role specification is required.'})
        return data

    def create(self, validated_data):
        validated_data.pop('confirmPassword')
        validated_data['user_id'] = validated_data.pop('id', '')
        validated_data['role_specification'] = validated_data.pop('roleSpecification', '')
        user = User.objects.create_user(
            email=validated_data['email'],
            name=validated_data['name'],
            password=validated_data['password'],
            role=validated_data['role'],
            user_id=validated_data['user_id'],
            department=validated_data.get('department'),
            office=validated_data.get('office'),
            role_specification=validated_data['role_specification']
        )
        return user