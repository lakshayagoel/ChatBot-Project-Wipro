from django.db import models
# Create your models here.


class Query(models.Model):
    intent = models.CharField(max_length=60, null=False)
    entities = models.CharField(max_length=60, null=False)
    response = models.CharField(max_length=200, null=False)

    def __str__(self):
        return 'Intent: ' + self.intent

