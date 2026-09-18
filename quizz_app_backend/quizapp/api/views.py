from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import question,answers
from .serializers import QuestionSerializers

# Create your views here.
@api_view(['GET'])
def playQuiz(request):
    if request.method == 'GET':
        data = question.objects.all()
        serialized_data = QuestionSerializers(data,many= True)
        return Response(serialized_data.data)
    