# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-07-17 18:48
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('invitations', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='invitation',
            old_name='inviter',
            new_name='invited_by',
        ),
    ]
