from rest_framework.viewsets import ReadOnlyModelViewSet
from rest_framework.permissions import IsAuthenticated
from .models import Division, District, Location, Restaurant, Hotel, Agency


from . import serializers


class DivisionModelView(ReadOnlyModelViewSet):
    queryset = Division.objects.all()
    serializer_class = serializers.DivisionSerializer
    permission_classes = [IsAuthenticated]


class DistrictModelView(ReadOnlyModelViewSet):
    queryset = District.objects.all()
    serializer_class = serializers.DistrictSerializer


class LocationModelView(ReadOnlyModelViewSet):
    queryset = Location.objects.all()
    serializer_class = serializers.LocationSerializer


class RestaurantModelView(ReadOnlyModelViewSet):
    queryset = Restaurant.objects.all()
    serializer_class = serializers.RestaurantSerializer


class HotelModelView(RestaurantModelView):
    queryset = Hotel.objects.all()
    serializer_class = serializers.HotelSerializer


class AgencyModelView(ReadOnlyModelViewSet):
    queryset = Agency.objects.all()
    serializer_class = serializers.AgencySerializer

