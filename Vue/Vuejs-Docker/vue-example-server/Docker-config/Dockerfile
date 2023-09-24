FROM php:8-apache

ARG UID
ARG APP_XDEBUG_HOST
ARG APP_XDEBUG_PORT=9000

RUN adduser -u ${UID} --disabled-password --gecos "" appuser || echo "User already exists."

RUN apt-get update && apt-get install -y unzip git \
    && apt-get autoremove -y \
    && rm -r /var/lib/apt/lists/*

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/bin/
RUN install-php-extensions pdo_mysql xdebug gd zip

RUN ln -s $PHP_INI_DIR/php.ini-development $PHP_INI_DIR/php.ini

RUN echo "xdebug.mode=debug" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.start_with_request = yes" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_port=${APP_XDEBUG_PORT}" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini \
    && echo "xdebug.client_host=${APP_XDEBUG_HOST}" >> /usr/local/etc/php/conf.d/docker-php-ext-xdebug.ini

COPY ./000-default.conf /etc/apache2/sites-enabled/000-default.conf
COPY ./app.conf /etc/apache2/conf-enabled/z-app.conf
COPY ./app.ini $PHP_INI_DIR/conf.d/app.ini

COPY --from=composer:2.1 /usr/bin/composer /usr/bin/composer

RUN a2enmod headers rewrite

USER $UID

WORKDIR /var/www/app