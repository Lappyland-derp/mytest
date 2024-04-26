from django.db import models
import os
import random
from django.contrib.auth.models import User

class Product(models.Model):
    #user = models.ForeignKey(User, on_delete=models.SET_NUll, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    image = models.ImageField(upload_to='upload_image_path', null=True, blank=True)
    category = models.CharField(max_length=200, null=True, blank=True)
    description = models.TextField(null=True, blank=True)
    rating = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    numReviews = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    createdAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True)
    
    def _str_(self):
        return self.name

class Order(models.Model):
    #user = models.ForeignKey(User, on_delete=models.SET_NUll, null=True)
    paymentMethod = models.CharField(max_length=200, null=True, blank=True)
    taxPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    totalPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    isPaid = models.BooleanField(default=False)
    paidAt = models.DateTimeField(auto_now_add=True)
    _id = models.AutoField(primary_key=True)

    def _str_(self):
        return str(self.createdAt)


class OrderItem(models.Model):
    #product = models.ForeignKey(Product, on_delete=models.SET_NUll, null=True)
    #order = models.ForeignKey(Order, on_delete=models.SET_NULL, null=True)
    name = models.CharField(max_length=200, null=True, blank=True)
    qty = models.IntegerField(null=True, blank=True, default=0)
    price = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    image = models.CharField(max_length=200, null=True, blank=True)
    _id = models.AutoField(primary_key=True)

    def _str_(self):
        return str(self.name)

class ShippingAddress(models.Model):
    #order = models.OneToOneField(Order, on_delete=models.CASCADE, null=True, blank=True)
    address = models.CharField(max_length=200, null=True, blank=True)
    city = models.CharField(max_length=200, null=True, blank=True)
    postalCode = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    shippingPrice = models.DecimalField(max_digits=7, decimal_places=2, null=True, blank=True)
    _id = models.AutoField(primary_key=True)

    def _str_(self):
        return str(self.address)

    def get_filename_ext(filepath):
        base_name = os.path.basename(filepath)
        name, ext = os.path.splitext(base_name)
        return name, ext

    def upload_image_path(instance, filename):
        new_filename = random.randint(1, 2541781232)
        name, ext = get_filename_ext(filename)
        final_filename = '{new_filename}{ext}'.format(new_filename=new_filename, ext=ext)
        return "img/{new_filename}/{final_filename}".format(new_filename=new_filename,final_filename=final_filename)
# Create your models here.
