# Generated by Django 4.2.3 on 2023-07-18 07:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolioApi', '0002_alter_languagesicons_icon'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='languagesicons',
            name='icon',
        ),
        migrations.AddField(
            model_name='languagesicons',
            name='icon_drive_id',
            field=models.CharField(blank=True, max_length=100, verbose_name='Language Icon Google Drive ID'),
        ),
    ]
