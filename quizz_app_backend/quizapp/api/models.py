from django.db import models

# Create your models here.
class question(models.Model):
    text= models.CharField( max_length=150)

    def __str__(self):
        return self.text

class answers(models.Model):
    textans = models.ForeignKey(question,related_name='answersa',on_delete=models.CASCADE)
    text = models.CharField(max_length=100)
    iscorrect = models.BooleanField(default=False)

    def __str__(self):
        return self.text
