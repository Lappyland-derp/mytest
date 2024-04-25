from django.shortcuts import render
from django.http import JsonResponse
from base.products import products
from rest_framework.decorators import api_view
from rest_framework.response import Response

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
    return Response(products, safe=False)

@api_view(['GET'])
def getProduct(request, pk):
    product = None
    for i in products:
        if i['_id'] == pk:
            product = i
            break
    return Response(product)
# Create your views here.