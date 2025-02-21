from django.urls import path
from . import views

urlpatterns = [
    path('', views.contact_list, name='contact_list'),
    path('create/', views.contact_create, name='contact_create'),
    path('update/<int:pk>/', views.contact_update, name='contact_update'),
    path('delete/<int:pk>/', views.contact_delete, name='contact_delete'),
    # API Paths
    path('api/contacts/', views.ContactList.as_view(), name='contact-list'),
    path('api/contacts/<int:pk>/', views.ContactDetail.as_view(), name='contact-detail'),


]