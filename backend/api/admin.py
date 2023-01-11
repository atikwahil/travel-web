from django.contrib import admin
from django.db.models import Count
from django.urls import reverse
from django.utils.html import format_html, urlencode

from .models import Division, District, Location, Media, Restaurant, Hotel, Agency


# Register your models here.
@admin.register(Division)
class DivisionAdmin(admin.ModelAdmin):
    list_display = ('name', 'districts')
    ordering = ('name',)

    @admin.display()
    def districts(self, division):
        url = reverse('admin:api_district_changelist') + '?' + urlencode({'division_id': division.id})
        return format_html(f'<a href="{url}">{division.districts_count}</a>')

    def get_queryset(self, request):
        return super().get_queryset(request).annotate(districts_count=Count('districts'))


# District admin class
@admin.register(District)
class District(admin.ModelAdmin):
    list_display = ('name', 'division', 'tourist_places')
    list_filter = ('division', 'locations')

    @admin.display()
    def tourist_places(self, district):
        url = (reverse('admin:api_location_changelist') + '?' + urlencode({'district_id': district.id}))
        return format_html(f'<a href="{url}">{district.locations_count}</a>')

    def get_queryset(self, request):
        return super(District, self).get_queryset(request).annotate(locations_count=Count('locations'))


# Media Inline for location class
class MediaInline(admin.TabularInline):
    model = Media


# Tourist places/Location admin
@admin.register(Location)
class LocationAdmin(admin.ModelAdmin):
    list_display = ('title', 'district', 'rating')
    inlines = (MediaInline,)


# Restaurant Admin
@admin.register(Restaurant)
class RestaurantAdmin(admin.ModelAdmin):
    list_display = ['name', 'location', 'rating']


# Hotel Admin
@admin.register(Hotel)
class HotelAdmin(admin.ModelAdmin):
    list_display = ['name', 'location', 'rating']


# Agency Admin
@admin.register(Agency)
class AgencyAdmin(admin.ModelAdmin):
    list_display = ['name', 'rating']


