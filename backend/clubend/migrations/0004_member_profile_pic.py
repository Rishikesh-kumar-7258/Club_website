# Generated by Django 4.1.5 on 2023-01-25 10:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("clubend", "0003_event"),
    ]

    operations = [
        migrations.AddField(
            model_name="member",
            name="profile_pic",
            field=models.ImageField(blank=True, upload_to="profile_pics"),
        ),
    ]
