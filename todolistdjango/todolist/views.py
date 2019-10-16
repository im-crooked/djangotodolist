from django.shortcuts import render, redirect
from .models import List
from .forms import ListForm
from django.contrib import messages

# Create your views here.

def home(request):
	return render(request,"home.html",{})
