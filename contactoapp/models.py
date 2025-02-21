from django.db import models

class Contact(models.Model):
    name = models.CharField(max_length=255)
    address = models.TextField(blank=True, null=True)  # Address can be optional
    phone_number = models.CharField(max_length=20)

    def __str__(self):
        return self.name
