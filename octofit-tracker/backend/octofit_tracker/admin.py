# admin.py for octofit_tracker Django project

from django.contrib import admin
from .models import User, Team, Activity, Leaderboard, Workout

admin.site.register(User)
admin.site.register(Team)
admin.site.register(Activity)
admin.site.register(Leaderboard)
admin.site.register(Workout)
