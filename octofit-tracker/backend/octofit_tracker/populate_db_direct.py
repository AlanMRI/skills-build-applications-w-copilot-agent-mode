"""
Script to directly populate the octofit_db MongoDB database with test data for users, teams, activities, leaderboard, and workouts.
Run with: source ../../venv/bin/activate && python populate_db_direct.py
"""
from pymongo import MongoClient
from bson import ObjectId
from datetime import timedelta

client = MongoClient('localhost', 27017)
db = client['octofit_db']

# Drop existing collections
db.users.drop()
db.teams.drop()
db.activity.drop()
db.leaderboard.drop()
db.workouts.drop()

# Create users
test_users = [
    {"_id": ObjectId(), "username": "thundergod", "email": "thundergod@mhigh.edu", "password": "thundergodpassword"},
    {"_id": ObjectId(), "username": "metalgeek", "email": "metalgeek@mhigh.edu", "password": "metalgeekpassword"},
    {"_id": ObjectId(), "username": "zerocool", "email": "zerocool@mhigh.edu", "password": "zerocoolpassword"},
    {"_id": ObjectId(), "username": "crashoverride", "email": "crashoverride@hmhigh.edu", "password": "crashoverridepassword"},
    {"_id": ObjectId(), "username": "sleeptoken", "email": "sleeptoken@mhigh.edu", "password": "sleeptokenpassword"},
]
db.users.insert_many(test_users)

# Create teams
blue_team = {"_id": ObjectId(), "name": "Blue Team", "members": [user["_id"] for user in test_users]}
gold_team = {"_id": ObjectId(), "name": "Gold Team", "members": [user["_id"] for user in test_users]}
db.teams.insert_many([blue_team, gold_team])

# Create activities
activities = [
    {"_id": ObjectId(), "user": test_users[0]["_id"], "activity_type": "Cycling", "duration": 3600, "activity_id": "A1"},
    {"_id": ObjectId(), "user": test_users[1]["_id"], "activity_type": "Crossfit", "duration": 7200, "activity_id": "A2"},
    {"_id": ObjectId(), "user": test_users[2]["_id"], "activity_type": "Running", "duration": 5400, "activity_id": "A3"},
    {"_id": ObjectId(), "user": test_users[3]["_id"], "activity_type": "Strength", "duration": 1800, "activity_id": "A4"},
    {"_id": ObjectId(), "user": test_users[4]["_id"], "activity_type": "Swimming", "duration": 4500, "activity_id": "A5"},
]
db.activity.insert_many(activities)

# Create leaderboard entries
leaderboard_entries = [
    {"_id": ObjectId(), "user": test_users[0]["_id"], "score": 100, "leaderboard_id": "L1"},
    {"_id": ObjectId(), "user": test_users[1]["_id"], "score": 90, "leaderboard_id": "L2"},
    {"_id": ObjectId(), "user": test_users[2]["_id"], "score": 95, "leaderboard_id": "L3"},
    {"_id": ObjectId(), "user": test_users[3]["_id"], "score": 85, "leaderboard_id": "L4"},
    {"_id": ObjectId(), "user": test_users[4]["_id"], "score": 80, "leaderboard_id": "L5"},
]
db.leaderboard.insert_many(leaderboard_entries)

# Create workouts
workouts = [
    {"_id": ObjectId(), "name": "Cycling Training", "description": "Training for a road cycling event", "workout_id": "W1"},
    {"_id": ObjectId(), "name": "Crossfit", "description": "Training for a crossfit competition", "workout_id": "W2"},
    {"_id": ObjectId(), "name": "Running Training", "description": "Training for a marathon", "workout_id": "W3"},
    {"_id": ObjectId(), "name": "Strength Training", "description": "Training for strength", "workout_id": "W4"},
    {"_id": ObjectId(), "name": "Swimming Training", "description": "Training for a swimming competition", "workout_id": "W5"},
]
db.workouts.insert_many(workouts)

print("Successfully populated the database with test data.")
