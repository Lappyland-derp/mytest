from django.urls import path
from . import views
from .views import MyTokenObtainPairView



urlpatterns = [
    path('users/login/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('users/register', views.registerUser, name='register'),
    path('', views.getRoutes, name='routes'),
    path('products/', views.getProducts, name='products'),
    path('users/profile', views.getUserProfile, name='user-profile'),
    path('users/', views.getUsers, name='users'),
    path('products/<str:pk>', views.getProduct, name='product'),
    
]