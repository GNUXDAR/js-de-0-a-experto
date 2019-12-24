Funciones útiles	Descripción
array_change_key_case()	Devuelve una matriz con todas las claves de las cadenas convertidas a mayúsculas o minúsculas
array_chunck()	Divide una matriz en segmentos
array_combine()	Crea una matriz usando una matriz para las claves y otra para sus valores.
array_count_values()	Cuenta todos los valores de una matriz
array_diff_assoc()	Comprueba las diferencias entre matrices teniendo en cuenta los índices
array_diff_key()	Calcula la diferencia de matrices usando las llaves para la comparación
array_diff_uassoc()	Computa la diferencia entre matrices con un chequeo adicional de índices, el cual es realizado por una llamada de retorno entregada por el usuario.
array_diff_ukey()	Calcula la diferencia de matrices usando callback function on the keys for comparison
array_diff()	Comprueba las diferencias entre matrices
array_fill()	Llena una matriz con valores
array_filter()	Filtra elementos de una matriz mediante una función callback.
array_flip()	Intercambia los valores de una matriz con sus índices.
array_intersect_assoc()	Computes the intersection of arrays with additional index check.
array_intersect_key()	Calcula la intersección de matrices usando las llaves para la comparación
array_intersect_uassoc()	Calcula la intersección de matrices con un chequeo de índeces adicional por una función de usuario.
array_intersect_ukey()	Calcula la intersección de matrices usando las llaves para la comparación.
array_intersect()	Computes the intersection of arrays
array_key_exists()	Comprueba si el índice o clave dada existe en la matriz.
array_keys()	Recibe como argumento una matriz y devuelve otra que contiene sólo los índices de la matriz original como contenidos de los nuevos elementos. Como índices de la nueva matriz se asignan valores numéricos enteros desde 0 en adelante.
array_map()	Aplica la llamada de retorno especificada a los elementos de las matrices dadas
array_merge_recursive()	Une dos o más matrices recursivamente.
array_merge()	Combina dos o más matrices.
array_multisort()	Ordena múltiples matrices, o matrices multi-dimensionales.
array_pad()	Rellena una matriz con un valor hasta el tamaño especificado.
array_pop()	Extrae el último elemento de matriz eliminándolo.
array_push()	Añade elementos al final de la matriz.
array_rand()	Selecciona una o más entradas aleatorias de una matriz. 
array_reduce()	Reduce iterativamente una matriz a un solo valor usando una función llamada de retorno.
array_reverse()	Ordena al revés los elementos de un array.
array_search()	Busca un valor determinado en una matriz y devuelve la clave correspondiente en caso de éxito.
array_shift()	Extrae el primer elemento de la matriz eliminándolo y desplazando todos una posición a la izquierda.
array_slice()	Extrae una porción de la matriz.
array_splice()	Suprime una porción de la matriz y la sustituye por otra.
array_sum()	Calcula la suma de los valores en una matriz.
array_udiff_assoc()	Computa la diferencia entre matrices con un chequeo de índices adicional, comparando los datos con una llamada de retorno.
array_udiff_uassoc()	Computa la diferencia entre matrices con un chequeo de índices adicional, comparando los datos y los índices por una función del usuario.
array_udiff()	Computa la diferencia entre matrices, usando una llamada de retorno para la comparación de datos.
array_uintersect_assoc()	Calcula la intersección de matrices con chequeo adicional de índices, comparando los datos por una función de usuario.
array_uintersect_uassoc()	Calcula la intersección de matri
array_uintersect()	Lleva a cabo la intersección entre 2 o más matrices y utiliza para comparar  los elementos de cada matriz la función indicada en el último parámetro.
array_unique()	Remueve valores duplicados en una matriz.
array_unshift()	Introduce uno o más elementos al principio de la matriz
array_values()	Devuelve todos los valores de una matriz.
array_walk_recursive()	Aplica una función de usuario recursivamente a cada miembro de una matriz.
array_walk()	Aplica una función de usuario a cada elemento de la matriz.
arsort()	Ordena una matriz en orden inverso y mantiene la asociación de índices.
asort()	Ordena una matriz y mantiene la asociación de índices.
compact()	Crea una matriz que contiene variables y sus valores.
count()	Es un alias de sizeof(). Cuenta los elementos que integran una matriz y devuelve un número entero.
current()	Devuelve el contenido del elemento sobre el que está el puntero sin variar su posición.
each()	Devuelve el siguiente para clave/valor de una matriz y avanza el apuntador.
end()	Mueve el puntero interno al último elemento.
extract()	Pasa los contenidos de los elementos de una matriz como contenidos de las variables que llevan como nombre el índice de cada elemento de la misma matriz.
	
	En caso de colisión entre variables, el segundo argumento tiene los valores siguientes:
	        - EXTR_OVERWRITE: se descarta el valor anterior de la variable y se pone el nuevo. Este valor es el que se usa por defecto en caso de colisión, aunque no se indique como argumento.
	        - EXTR_SKIP: se descarta el valor nuevo de la variable y se pone el anterior.
	        - EXTR_PREFIX_SAME: al nombre de la variable nueva conflictiva se le pone como prefijo la cadena del tercer argumento seguida de un guión de subrayado (_).
	        - EXTR_PREFIX_ALL: al nombre de todas las variables nuevas conflictivas se le pone como prefijo la cadena del tercer argumento seguida de un guión de subrayado (_).
explode()	Permite convertir una cadena de caracteres en una matriz mediante un separador dado como segundo argumento.
implode()	Lleva a cabo la operación inversa de explode().
in_array()	Revisa si un valor existe en una matriz.
key()	Obtiene una clave de una matriz asociativa.
krsort()	Ordena una matriz por clave en orden inverso.
ksort()	Ordena la matriz por clave.
list()	Asigna variables como si fueran una matriz.
natcasesort()	Ordena una matriz usando un algoritmo de "orden natural" sin distinguir mayúsuclas de minúsculas.
natsort()	Ordena una matriz usando un algoritmo de "orden natural"
next()	Devuelve el contenido del siguiente elemento según la posición donde esté el puntero y desplaza éste a esa posición nueva. Devuelve false al alcanzar el último elemento.
pos()	Alias de current()
prev()	Rebobina el puntero interno de una matriz.
range(a, b)	Crea una matriz que contiene un rango de elementos.
	
reset()	Fija el puntero interno de una matriz a su primer elemento.
rsort()	Ordena los elementos de una matriz teniendo en cuenta su contenido de menor a mayor (ASCII), pero sin mantener la asociación del contenido de cada elemento con su índice.
shuffle()	Mezcla una matriz.
sizeof()	Alias de count().
sort()	Ordena una matriz.
uasort()	Ordena una matriz mediante una función de comparación definida por el usuario y mantiene la asociación de índices.
uksort()	Ordena una matriz por claves mediante una función definida por el usuariop.
usort()	Ordena una matriz por sus valores usando una función de comparación definida por el usuario.