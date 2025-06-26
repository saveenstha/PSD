from django.db import models
from django.contrib.auth.models import User

class Entry(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    date = models.DateField()
    transport_mode = models.CharField(max_length=100)
    energy_usage = models.FloatField()
    waste_generated = models.FloatField()
    created_at = models.DateTimeField(auto_now_add=True)