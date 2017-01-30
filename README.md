## Setup 

**Install composer on mutual hosting**

```
$ php -r "copy('https://getcomposer.org/installer', 'composer-setup.php');"
$ php -r "if (hash_file('SHA384', 'composer-setup.php') === '55d6ead61b29c7bdee5cccfb50076874187bd9f21f65d8991d46ec5cc90518f447387fb9f76ebae1fbbacf329e583e30') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
$ php composer-setup.php
$ php -r "unlink('composer-setup.php');"

```

```

$ php composer install
$ php composer dumpautoload -o
$ php artisan config:cache
$ php artisan route:cache

```


## Installation
```
$ composer install && npm install
```

Open ```.env``` and enter necessary config for DB and Oauth Providers Settings.

```
$ php artisan migrate
$ php artisan db:seed
```

## Work Flow

**General Workflow**

```
$ php artisan serve --host=0
```
Open new terminal
```
$ gulp && gulp watch
```

> Default Username/Password: test@test.com / test

**Angular Generators**

```
$ artisan ng:page name       #New page inside angular/app/pages/
$ artisan ng:dialog name     #New custom dialog inside angular/dialogs/
$ artisan ng:component name  #New component inside angular/app/components/
$ artisan ng:service name    #New service inside angular/services/
$ artisan ng:filter name     #New filter inside angular/filters/
$ artisan ng:config name     #New config inside angular/config/
```


## Features
* [JWT-Auth] (https://github.com/tymondesigns/jwt-auth)
* [Socialite] (https://github.com/laravel/socialite)
* [Dingo/API] (https://github.com/dingo/api)
* [Restangular] (https://github.com/mgonto/restangular)
* [UI-Router] (https://github.com/angular-ui/ui-router/)
* Access Control List
    * [Romanbican/Roles] (https://github.com/romanbican/roles)
    * [Angular ACL] (https://github.com/mikemclin/angular-acl)

## Built With
* [Laravel] (http://laravel.com)
* [Angularjs] (https://angularjs.org)
* [Twitter Bootstrap] (https://getbootstrap.com)
* [Composer] (https://getcomposer.org/)
* [Gulp.JS] (http://gulpjs.com/)
* [BOWER] (http://bower.io/)
* [NPM] (https://www.npmjs.com/)

## Deploy to heroku

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

1. Click deploy button
2. After build and "successfully deployed", Click Manage App
3. Go to settings and click "Reveal Config Vars"
4. Set necessary config for DB based from CLEARDB_DATABASE_URL or from your custom database
5. Execute migration and db seed with the following commands

**Database Migration**
```
$ heroku run php artisan migrate --app your_app_name
```
**Database Seeds**
```
$ heroku run php artisan migrate --app your_app_name
```

## Contributing

Thank you for contributing to this repository.

## Acknowledgments / Credits
This project wont be possible without the following, We acknowledge and are grateful to these developers for their contributions to open source. **All necessary credits are given**.

* [Laravel-Angular (Material)] (https://laravel-angular.readme.io)
* [AdminLTE] (https://github.com/almasaeed2010/AdminLTE)

