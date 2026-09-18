from rest_framework import serializers
from .models import question,answers

class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = answers
        fields = ['id','text','iscorrect']

class QuestionSerializers(serializers.ModelSerializer):
    answersa = AnswerSerializer(many = True, read_only = True)
    class Meta:
        model = question
        fields = ['id','text','answersa']

        