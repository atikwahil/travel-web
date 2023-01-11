from django.urls import path, include
from . import views
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('division', views.DivisionModelView, basename='division')
router.register('district', views.DistrictModelView)
router.register('location', views.LocationModelView)
router.register('restaurant', views.RestaurantModelView)
router.register('hotel', views.HotelModelView)
router.register('agency', views.AgencyModelView)


app_name = 'api'
urlpatterns = router.urls
