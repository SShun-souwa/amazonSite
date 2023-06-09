from django.urls import path
from . import views

app_name = 'graphapp'
urlpatterns = [
    path('print/', views.graph, name="printgraph"),
    ]