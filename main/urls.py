from django.urls import path
from main.views import *

app_name = 'main'

urlpatterns = [
    path('', show_main, name='show_main'),
     path('xml/<str:product_id>/', show_xml_by_id, name='show_xml_by_id'),
     path('json/<str:product_id>/', show_json_by_id, name='show_json_by_id'),
     path('json/', show_json, name='show_json'),
     path('xml/', show_xml, name='show_xml'),
     path('create-product/', create_product, name='create_product'),
     path('show-product/<str:id>/', show_product, name='show_product'),
     path('register/', register, name='register'),
     path('login/', login_user, name='login'),
     path('logout/', logout_user, name='logout'),
     path('product/<uuid:id>/edit', edit_product, name='edit_product'),
     path('product/<uuid:id>/delete', delete_product, name='delete_product'),
     path('create-product-ajax', add_product_entry_ajax, name='add_product_entry_ajax'),
     path('proxy-image/', proxy_image, name='proxy_image'),
     path('create-flutter/', create_news_flutter, name='create_news_flutter'),
]