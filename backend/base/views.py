from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAdminUser, IsAuthenticated
from django.contrib.auth.models import User
from rest_framework.response import Response
from .models import *
from .serializers import *
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/products/',
        '/api/products/create/',

        '/api/products/upload/',

        '/api/products/<id>/reviews/',

        '/api/products/top/',
        '/api/products/<id>/',

        '/api/products/delete/<id>/',
        '/api/products/<update>/<id>',
    ]
    return Response(routes)

@api_view
def getProducts(request):
    products = Product.objects.all()
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)

products = Product.objects.all()




class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
   def validate(self, attrs):
        data = super().validate(attrs)

        serializer = UserSeralizerWithToKen(self.user).data

        for k, v in serializer.items():
            data[k] = v


        return data
    
class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer    


class UserSerializer(serializers.ModelSerializer):
    name = serializers.SerializerMethodField(read_only=True)
    _id = serializers.SerializerMethodField(read_only=True)
    isAdmin = serializers.SerializerMethodField(read_only=True)
    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'username', 'email', 'isAdmin']

    def get_id(self, obj):
        return obj.id

    def get_isAdmin(self, obj):
        return obj.is_staff

    def get_name(self, obj):
        name = obj.first_name
        if name == '':
            name = obj.email
        return name

@api_view(['GET'])
def getUserProfile(request):
    user = request.user
    serializer = UserSerializer(user, many=False)
    return (serializer.data)


class UserSeralizerWithToKen(UserSerializer):
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = ['id', '_id', 'name', 'username', 'email', 'isAdmin', 'token']

    def get_token(self, obj):
        token = RefreshToken.for_user(obj)
        return str(token.access_token)
# Create your views here.
