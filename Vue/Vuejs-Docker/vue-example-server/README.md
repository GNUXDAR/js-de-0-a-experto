# Requisitos previos
1. cd Docker-confid
2. docker compose up -d

# Instalación

1. composer install
2. renombra .env.example a .env
3. agregar los datos y credenciales del contendor de la DDBB, tanto como la ip en el DB_HOST
4. crea una bbdd y cumplimenta sus variables en .env
5. php artisan migrate
6. levanta el servidor con php artisan serve

# Para ver la IP
```
docker exec -ti lv_example_server bash
cat /etc/hosts
```
# Rutas

[POST] 127.0.0.1:8000/api/auth/register    -> Crear usuario por POST pasando name, email y password
[POST] 127.0.0.1:8000/api/auth/login    -> Acceder con un usuario por POST pasando email y password
[GET] 127.0.0.1:8000/api/note          -> Leer notas del usuario autenticado
[POST] 127.0.0.1:8000/api/note          -> Guardar nota del usuario pasando 'content'

# En mi caso usando Docker <3

[POST] 172.20.0.3/api/auth/register    -> Crear usuario por POST pasando name, email y password
```
{
  "name": "Arturo Cabrera",
  "email": "gnuxdar@gmail.com",
  "password": "1234567"
}
```

[POST] 172.20.0.3/api/auth/login    -> Acceder con un usuario por POST pasando email y password
```
{
  "email": "gnuxdar@gmail.com",
  "password": "1234567"
}
```
[GET] 172.20.0.3/api/auth/register/api/note          -> Leer notas del usuario autenticado
```
Headers
    Accept: application/json
    Authorization: Bearer(token)
```

[POST] 172.20.0.3/api/auth/register/api/note          -> Guardar nota del usuario pasando 'content'
```
Body
{
  "content": "Esta es mi primera nota en al api de Laravel"
}
```