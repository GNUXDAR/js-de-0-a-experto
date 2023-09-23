# Dockerfile para Laravel
# Usamos la imagen oficial de PHP como base
# FROM php:7.4-fpm
FROM php:8-fpm

# Instalamos dependencias necesarias y extensiones PHP
RUN apt-get update && apt-get install -y \
    git \
    zip \
    unzip \
    && docker-php-ext-install pdo pdo_mysql

# Establecemos el directorio de trabajo en la raíz de la aplicación Laravel
WORKDIR /var/www/html

# Copiamos el código de Laravel al contenedor
COPY ./app /var/www/html

# Instalamos Composer (gestor de paquetes de PHP)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Instalamos las dependencias de PHP usando Composer
# RUN composer install

# Exponemos el puerto 9000 para el servidor PHP-FPM
EXPOSE 9000

# Comando para iniciar el servidor PHP-FPM
CMD ["php-fpm"]
