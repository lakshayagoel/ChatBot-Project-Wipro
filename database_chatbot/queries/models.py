from django.db import models
# Create your models here.


class Query(models.Model):
    intent = models.CharField(max_length=60)
    entities = models.CharField(max_length=60)
    response = models.CharField(max_length=200)

