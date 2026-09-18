from django.contrib import admin
from .models import question,answers


# Register your models here.

class AnswerInline(admin.TabularInline):
    model = answers
    extra = 4  
    max_num = 4

@admin.register(question)
class questionAdmin(admin.ModelAdmin):
    inlines = [AnswerInline]


