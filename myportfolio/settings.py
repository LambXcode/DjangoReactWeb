"""

Generated by 'django-admin startproject' using Django 4.0.2.

"""

from pathlib import Path
import os
# import django_heroku
# import dotenv
# import dj_database_url


BASE_DIR = Path(__file__).resolve().parent.parent


SECRET_KEY = 'django-insecure-*#ds*1+$+q+i*@@0#^-um=yi*-yztmy8yc8fbv@z0%9!*3^lnu'

DEBUG = False

ALLOWED_HOSTS = [
    '*',
    'myresumeweb1.herokuapp.com',
    'myresumeweb.herokuapp.com',
    ''
]


INSTALLED_APPS = [
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
    'portfolioApi.apps.PortfolioapiConfig',
    'rest_framework',
    "corsheaders",
    'ckeditor',
    'tinymce',


]

MIDDLEWARE = [

    "corsheaders.middleware.CorsMiddleware",

    'django.middleware.security.SecurityMiddleware',
    # "whitenoise.middleware.WhiteNoiseMiddleware",

    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
]

ROOT_URLCONF = 'myportfolio.urls'

TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',

        'DIRS': [os.path.join(BASE_DIR, 'build')],

        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                'django.template.context_processors.debug',
                'django.template.context_processors.request',
                'django.contrib.auth.context_processors.auth',
                'django.contrib.messages.context_processors.messages',
            ],
        },
    },
]

WSGI_APPLICATION = 'myportfolio.wsgi.application'


# django_heroku.settings(locals())

# dotenv_file = os.path.join(BASE_DIR, ".env")
# if os.path.isfile(dotenv_file):
#     dotenv.load_dotenv(dotenv_file)

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': BASE_DIR / 'db.sqlite3',
    }
}


# DATABASES = {}
# DATABASES['default'] = dj_database_url.config(conn_max_age=600)

AUTH_PASSWORD_VALIDATORS = [
    {
        'NAME': 'django.contrib.auth.password_validation.UserAttributeSimilarityValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.MinimumLengthValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.CommonPasswordValidator',
    },
    {
        'NAME': 'django.contrib.auth.password_validation.NumericPasswordValidator',
    },
]


LANGUAGE_CODE = 'en-us'

TIME_ZONE = 'UTC'

USE_I18N = True

USE_TZ = True


STATIC_URL = 'static/'


DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'
CORS_ALLOWED_ORIGINS = [

    "http://localhost:3000",
    # 'myresumeweb.herokuapp.com',
   
]
CORS_ORIGIN_ALLOW_ALL = True

STATICFILES_DIRS = [
    os.path.join(BASE_DIR, 'build/static'),
]

# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
# STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles_build', 'static')
# STATICFILES_STORAGE = "whitenoise.storage.CompressedManifestStaticFilesStorage"

MEDIA_URL = '/images/'
MEDIA_ROOT = os.path.join(BASE_DIR, 'static/images')


# options = DATABASES['default'].get('OPTIONS', {})
# options.pop('sslmode', None)
