​<div align="center">
<table>
    <theader>
        <tr>
            <td><img src="https://github.com/rescobedoq/pw2/blob/main/epis.png?raw=true" alt="EPIS" style="width:50%; height:auto"/></td>
            <th>
                <span style="font-weight:bold;">UNIVERSIDAD NACIONAL DE SAN AGUSTIN</span><br />
                <span style="font-weight:bold;">FACULTAD DE INGENIERÍA DE PRODUCCIÓN Y SERVICIOS</span><br />
                <span style="font-weight:bold;">DEPARTAMENTO ACADÉMICO DE INGENIERÍA DE SISTEMAS E INFORMÁTICA</span><br />
                <span style="font-weight:bold;">ESCUELA PROFESIONAL DE INGENIERÍA DE SISTEMAS</span>
            </th>
            <td><img src="https://raw.githubusercontent.com/rescobedoq/pw2/refs/heads/main/abet.png" alt="ABET" style="width:50%; height:auto"/></td>
        </tr>
    </theader>
  
</table>
</div>




<table>
<theader>
<tr><th colspan="6">INFORMACIÓN BÁSICA</th></tr>
</theader>
<tbody>
<tr><td>ASIGNATURA:</td><td colspan="5">Programación Web 1</td></tr>
<tr><td>TÍTULO DE LA PRÁCTICA:</td><td colspan="5">Ejemplo unificado del archivo de Universidades Licenciadas</td></tr>
<tr>
<td>NÚMERO DE PRÁCTICA:</td><td></td><td>AÑO LECTIVO:</td><td>2024 B</td><td>NRO. SEMESTRE:</td><td>II</td>
</tr>
<tr>
<td>FECHA INICIO::</td><td>29-Oct-2024</td><td>FECHA FIN:</td><td>19-Nov-2024</td><td>DURACIÓN:</td><td>10 horas</td>
</tr>
<tr><td colspan="6">RECURSOS:
    <ul>
        <li><a href="https://git-scm.com/book/es/v2">https://git-scm.com/book/es/v2</a></li>
        <li><a href="https://guides.github.com/">https://guides.github.com/</a></li>        
        <li><a 
href="https://www.geeksforgeeks.org/perl-tutorial-learn-perl-with-examples/">https://www.geeksforgeeks.org/perl-tutorial-learn-perl-with-examples/</a></li>
        <li><a           href="https://www2.iib.uam.es/bioinfo/curso/perl/tutoriales/cicei/cap6.htm">https://www2.iib.uam.es/bioinfo/curso/perl/tutoriales/cicei/cap6.htm</a></li>
        <li><a
href="https://www.w3schools.com/html/">https://www.w3schools.com/html/</a></li>
        <li><a     href="https://www.w3schools.com/css/">https://www.w3schools.com/css/</a></li>
        <li><a 
href="https://www.devanddep.com/tutorial/perl/perl-reading-a-csv-file.html">https://www.devanddep.com/tutorial/perl/perl-reading-a-csv-file.html</a></li>   
    </ul>
</td>
</<tr>
<tr><td colspan="6">DOCENTE:
<ul>
<li> Mag. Carlo José Luis Corrales Delgado </li>
</ul>
</td>
<tr><td colspan="6">ESTUDIANTE:
<ul>
<li>Mauro Snayder Sullca Mamani</li>
</ul>
</td>
</<tr>
</tdbody>s
</table>

# Perl - Git - GitHub


[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Perl][Perl]][perl-site]
[![HTML][HTML]][html-site]
[![CSS][CSS]][css-site]

# 

## Tarea
- Desarrollo de una interfaz dinámica e interactiva que permita consulta de datos de universidades peruanas utilizando un archivo CSV y programado con el lenguaje Perl.

## Descripción
- El objetivo principal de esta tarea es diseñar y desarrollar una aplicación web interactiva y dinámica que permita a los usuarios consultar información sobre universidades peruanas. Los datos serán extraídos de un archivo CSV y procesados utilizando el lenguaje de programación Perl, aprovechando sus capacidades para manejo de archivos, procesamiento de texto y generación de contenido dinámico en páginas web con tablas, marcos que muestren ubicaciones, links, etc.

## Equipos utilizados
-	Windows 11 Pro, versión 23H2
-	Visual Studio Code, versión 1.94.2
-	Docker Desktop v4.34
-	Lenguaje Perl
-	Lenguaje HTML 5
-	Lenguaje CSS
-	Git version 2.46.1
-	GitHub

## Objetivos

- Conocer la lectura de archivos csv con el lenguaje perl.
- Utilizar expresiones regulares para la filtración de datos.
- Aprender a manejar el sistema de control de versiones Git y utilizar GitHub para trabajar de manera colaborativa.

## Temas
- Archivo cvs
- Perl
- HTML y CSS
- Git
- GitHub



## CONTENIDO DEL INFORME

### Archivo CSV utilizado
---
[Data_Universidades_LAB06.csv][CVS]
---

# 

## SOLUCIÓN DEL EJERCICIO
Nuestro programa se devidió en 3 partes esenciales, los programas HTML con CSS, Perl y Docker.
Cada parte esencial del código fue separadoder después unirlo en el main del repositorio
Se testeo las posibles interacciones usuario - programa que se podría dar en la página web.
Al final se comprobó al unir el código que funcionaba de manera correcta la página web como se había previsto.
- Perl
    - Para nosotros Perl tiene un gran fuerte que hemos usado en este laboratorio, la lectura de archivos, lo hace de manera sencilla y dejando el código limpio sin consumir muchas líneas.
    - Todo el código perl fue probrado en por un compilador antes de volverlo un scrprit CGI
    - Página oficial de Perl: https://www.perl.org/
    
- HTML-CSS
  - HTML y CSS son esenciales en la creación de formularios web, ya que HTML proporciona la estructura y funcionalidad, permitiendo la inclusión de campos de entrada, botones y validaciones básicas que hacen posible la interacción del usuario con la página. Por otro lado, CSS se encarga de estilizar el formulario, mejorando su apariencia y adaptabilidad a diferentes dispositivos, lo que contribuye a una experiencia de usuario más atractiva y accesible. La combinación de ambos permite formularios funcionales, visualmente atractivos y fáciles de mantener, asegurando una mejor usabilidad y eficiencia en la página web.
  
- Dockefile
  - El Dockerfile configura un entorno con Apache y Perl para ejecutar scripts CGI, exponiendo los puertos 80 (web) y 22 (SSH). Permite la ejecución de aplicaciones dinámicas y facilita la depuración remota mediante SSH.
    
#
## PROGRAMA PRINCIPAL

### Primer bloque

Perl
```perl=15
  # Leer los parámetros del formulario HTML, decodificando en UTF-8
my $nombre = decode('UTF-8', param('NOMBRE') || '');
my $tipo_gestion = decode('UTF-8', param('TIPO_GESTION') || '');
my $estado_licenciamiento = decode('UTF-8', param('ESTADO_LICENCIAMIENTO') || '');
my $fecha_inicio_licenciamiento = decode('UTF-8', param('FECHA_INICIO') || ''); my $fecha_fin_licenciamiento = decode('UTF-8', param('FECHA_FIN') || '');
my $periodo_licenciamiento = decode('UTF-8', param('PERIODO_LICENCIAMIENTO') || '');
my $departamento = decode('UTF-8', param('DEPARTAMENTO') || '');
my $provincia = decode('UTF-8', param('PROVINCIA') || '');
my $distrito = decode('UTF-8', param('DISTRITO') || '');
```
- En este bloque del código de la línea 16 a la 24 recíbe los parámetros del index para poder realizar la búsqueda en el archivo CVS

---

### Segundo bloque
```perl=26
 # Configura Text::CSV para archivos CSV con comas y UTF-8
 my $csv = Text::CSV->new({ sep_char => ",", binary => 1, auto_diag => 1 });
 # Abre el archivo CSV en modo UTF-8
 open(my $fh, '<:encoding(UTF-8)', 'Data_Universidades_LAB06.csv') or die "No se pudo abrir el archivo: $!";

 # Omitir la primera línea (cabecera)
 my $header = $csv->getline($fh);
```
- En la línea 27 se procede a abrir el archivo CVS de las univeridades, nuestro archivo CVS esta divido por comas por eso indicamos a perl que el separador serán las comas, lo siguiente hace que perl haga una búsqueda binaria lo que facilita al momento en el que halla salto de líneas y la última indicación lanza errores cuando algo sale mal al momento de leer el archivo.
- En la línea 29 se abre el archivo con los estándares UTF - 8 para que acepte las tildes del archivo CVS, en caso haya un error lanza el mensaje de "No se pudo abiri el archivo" y devuelve el error.
- En la línea 32 recibe la primera fila, lo que permite analizar solo el contenido que nos interesa y para más tarde imprimirlo en el HTML

# 
     
### Tercer bloque
```perl=34
   # Función para convertir las fechas de yyyy-MM-dd a yyyyMMdd
sub convertir_fecha_a_yyyymmdd {
    my ($fecha) = @_;
    $fecha =~ s/-//g;
    return $fecha;
}

# Convertir fechas de búsqueda a yyyyMMdd
$fecha_inicio_licenciamiento = convertir_fecha_a_yyyymmdd($fecha_inicio_licenciamiento);
$fecha_fin_licenciamiento = convertir_fecha_a_yyyymmdd($fecha_fin_licenciamiento);  
```
- En la línea 35 se encuentra una función que cambiará la fecha recibida del HTML a un String usando expresiones regulares. En la línea 37 cada la expresión regular cada vez que encuentra un "-" lo elimina y después de todo este proceso la fecha es devuelta como un String. En la línea 42 y 43 mandamos las fechas a la función para que retornen sin los guiones.
 
# 
     
### Cuarto bloque
```perl=45 
while (my $row = $csv->getline($fh)) {
    # Extraer los campos directamente, ya en UTF-8
    my ($codigo, $nombre_u, $tipo, $estado, $inicio, $fin, $periodo, $dpto, $prov, $dist, $ubigeo, $latitud, $longitud, $fecha_corte) = @$row;

    # Aplicamos filtros según los parámetros ingresados por el usuario en el formulario HTML
    if (($nombre_u =~ /\Q$nombre\E/i) && 
        ($tipo_gestion eq '' || $tipo =~ /\Q$tipo_gestion\E/i) &&   
        ($estado_licenciamiento eq '' || $estado =~ /\Q$estado_licenciamiento\E/i) && 
        ($fecha_inicio_licenciamiento eq '' || $inicio =~ /\Q$fecha_inicio_licenciamiento\E/i) && 
        ($fecha_fin_licenciamiento eq '' || $fin =~ /\Q$fecha_fin_licenciamiento\E/i) &&
        ($periodo_licenciamiento eq '' || $periodo =~ /\Q$periodo_licenciamiento\E/i) &&  
        ($departamento eq '' || $dpto =~ /\Q$departamento\E/i) &&   
        ($provincia eq '' || $prov =~ /\Q$provincia\E/i) &&       
        ($distrito eq '' || $dist =~ /\Q$distrito\E/i)) {

        # Si todos los filtros coinciden, agrega la fila actual (@$row) al arreglo @universidades
        push(@universidades, $row);
    }
}
close $fh;     
```
- En la línea 45 se abre un bucle para que revise cada fila del archivo CVS, después la variable $row guarda la referencia de un arreglo que contiene los valores de la fila actual y en la línea 47 desreferencia la referencia al arreglo y lo divide cada valor de la lista en una variable.

![_Diagrama de flujo](https://hackmd.io/_uploads/HJk9bfuGJl.png)


- En la línea 50 se abre un condiconal que verifica con expresiones regulares si el valor es el correspondiente a lo buscado por el usuario o en caso no busque nada podra pasar de manera correcta. 
  
<details>
     
<summary>Explicación de las expresiones regulares</summary>
<pre>
La expresión regular revisa si la variable es la misma buscada en el parámetro
enviada por el formulario HTML.(/\Q$departamento\E/i) en esta expresión la Q se
escapa automáticamente todos los caracteres especiales dentro del patrón, de 
modo que se traten literalmente y no como operadores de expresiones regulares.
La E cierra la Q y la i se encargá  de no hacer sensible a mayúsculas 0
minúsculas cuando se esta comparando.
</pre>
     
</details>
     
- En la línea 61 si todos los parámetros son correctos se guardará en el arreglo de universidades y en la 64 cierra el archivo CVS para evitar inconvenientes en lo que sigue de código
# 
     
### Quinto bloque
Perl
```perl=403
if (@universidades == 1) {
    # Si solo hay una universidad, mostrar la tabla con los datos y el mapa
    my $univ = $universidades[0];
    my ($codigo, $nombre_u, $tipo, $estado, $inicio, $fin, $periodo, $dpto, $prov, $dist, $ubigeo, 
        $latitud, $longitud, $fecha_corte) = @$univ;
}
```
HTML
```html=547
<div class="fila">
                <div class="columna">$codigo</div>
                <div class="columna">$nombre_u</div>
                <div class="columna">$tipo</div>
                <div class="columna">$estado</div>
                <div class="columna">$inicio</div>
                <div class="columna">$fin</div>
                <div class="columna">$periodo</div>
                <div class="columna">$dpto</div>
                <div class="columna">$prov</div>
                <div class="columna">$dist</div>
            </div>
<div class="map-container">
            <h2>Ubicación en Google Maps</h2>
            <iframe
                loading="lazy"
                allowfullscreen
                referrerpolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=$latitud,$longitud&hl=es;z=14&output=embed">
            </iframe>
        </div>
```
- En el bloque del código Perl se verificará una primera situación de búsqueda, que solo exista una con los parámetros ingresados. Si se cumple esta condición, la universidad que está en la posición 0 del array que guarda las universidades se almacena en una nueva variable `$univ` en la Ln405 y se guardan sus datos en su variable respectiva para luego ser mostradas en forma de tabla en la respuesta html de la Ln547 a Ln567. Además, en body aparecerá un marco iFrame que mostrará su ubicación en Google Maps.
---
### Sexto bloque
Perl
```perl=574
elsif (@universidades > 1) {
    my $cantidad = scalar @universidades;  $latitud, $longitud, $fecha_corte) = @$univ;
}
```
```perl=711
 foreach my $univ (@universidades) {
        my ($codigo, $nombre_u, $tipo, $estado, $inicio, $fin, $periodo, $dpto, $prov, $dist, $ubigeo, 
            $latitud, $longitud, $fecha_corte) = @$univ;
        
        my $maps_url = "https://www.google.com/maps?q=$latitud,$longitud";
        
        print "<div class='fila'>";
        print "<div class='columna'>$codigo</div>";
        print "<div class='columna'>$nombre_u</div>";
        print "<div class='columna'>$tipo</div>";
        print "<div class='columna'>$estado</div>";
        print "<div class='columna'>$inicio</div>";
        print "<div class='columna'>$fin</div>";
        print "<div class='columna'>$periodo</div>";
        print "<div class='columna'>$dpto</div>";
        print "<div class='columna'>$prov</div>";
        print "<div class='columna'>$dist</div>";
        print "<div class='columna'><a href='$maps_url' target='_blank'>Ver ubicación</a></div>";
        print "</div>";
    }
```
- En el bloque Perl Ln574 si la cantidad de universidades que contienen los parámateros ingresados es mayor a 1. Igual que el primer caso, se muestra la tabla con los datos de cada una, pero ahora el mapa, por no ser solo un resultado, se agrega una nueva columna que guarda una referencia a Google Maps en la Ln728 del código html, para que se pueda visitar cada ubicación de las universidades encontradas.

- La otra parte del código no mencionada es la respuesta html base y sus variantes de acuerdo a los casos mencionados.
---
### Séptimo bloque
Perl
```perl=736
} else {
```
HTML
```html=793
<body>
        <div class="noEncontrado">
        <img src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/bf9ac836-210c-4613-8adf-4ebae9216190/dguuvk9-74b9f365-e12c-4e88-975c-238276ffb220.png/v1/fill/w_816,h_979/error_404_fake_youtube_page__purple_monkey___by_laufu2737_dguuvk9-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTgwMCIsInBhdGgiOiJcL2ZcL2JmOWFjODM2LTIxMGMtNDYxMy04YWRmLTRlYmFlOTIxNjE5MFwvZGd1dXZrOS03NGI5ZjM2NS1lMTJjLTRlODgtOTc1Yy0yMzgyNzZmZmIyMjAucG5nIiwid2lkdGgiOiI8PTE1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.uRLp-Xf4sd9CVkeEkGW_6UMSWxyXyj1pxjVxBppxSPE" alt="ERROR">
        <p>No se encontró universidades con esos parámetros<br>Prueba otros filtros para la búsqueda</p>
    </div>
    </body>
}
```
- En la Ln736 del código Perl se llega al último caso, ninguna universidad coincide. En el bloque html en la Ln794 a la Ln797 se muestra una imagen y mensaje que pide ingresar otros parámetros, con el formulario al lado.
# 

## HTML Y CSS
### HTML
![HTML_COMP]
```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./styles.css">
    <title>Universidades Peruanas</title>
</head>
```
- Esta sección establece la configuración básica de un documento HTML. Declara que es HTML5, define el idioma como español, y especifica la codificación UTF-8 para soportar caracteres especiales. Incluye metadatos para que la página sea responsive, enlaza un archivo de estilos externo `(styles.css)` para aplicar diseño, y establece el título "Universidades Peruanas", que aparece en la pestaña del navegador.
     
     
```html
<body>
    <form class="formulario" action="/cgi-bin/buscarDatosUniversidades.pl" method="get">
```
- Esta parte representa el inicio del cuerpo de la página y un formulario que permite al usuario enviar datos. El formulario tiene la clase `formulario` y envía los datos al script CGI `buscarDatosUniversidades.pl` en el servidor. El atributo `method="get"` indica que los datos se enviarán como parámetros en la URL, lo que es útil para solicitudes donde los datos no son sensibles y pueden ser visibles en la barra de direcciones.


```html
        <h1 class="titulo">Buscador de Universidades</h1>
```
- Muestra un título de nivel 1 con el texto `"Buscador de Universidades"` y aplica estilos definidos por la clase titulo.
```html
        <div class="input-part">
                <input type="text" name="NOMBRE" id="NOMBRE" placeholder="Nombre de la universidad (con tildes)">
        </div>
```
- Campo de texto para que el usuario ingrese el nombre de una universidad, con un placeholder que sugiere el formato `"Nombre de la universidad (con tildes)"`.
```html
        <div class="input-part">
                <select name="TIPO_GESTION" id="TIPO_GESTION">
                    <option value="TIPO" disabled selected >Tipo de gestion</option>
                    <option value="PRIVADO">Privado</option>
                    <option value="PÚBLICO">Publico</option>
                </select>
        </div>
```
- Permite seleccionar el tipo de gestión de la universidad (Privado o Público). La primera opción es solo una guía `disabled  selected`.
```html
        <div class="input-part">
                <select name="ESTADO_LICENCIAMIENTO" id="ESTADO_LICENCIAMIENTO">
                    <option value="ESTADO" disabled selected >Estado de licenciamiento</option>
                    <option value="LICENCIA OTORGADA">Licencia otorgada</option>
                    <option value="LICENCIA DENEGADA">Licencia denegada</option>
                    <option value="NO PRESENTADO">No presentado</option>
                </select>
        </div>
```
- Permite elegir el estado de licenciamiento de la universidad (Licencia otorgada, denegada o no presentada), con una opción inicial como guía.
     
```html
        <div class="input-part">
                <label>Fecha inicio</label>
                <input type="date" name="FECHA_INICIO" id="FECHA_INICIO" >
        </div>
```
- Permite seleccionar una fecha de inicio mediante un campo de tipo `date`, con la etiqueta "Fecha inicio" como guía para el usuario.
```html
        <div class="input-part">
                <label>Fecha fin</label>
                <input type="date" name="FECHA_FIN" id="FECHA_FIN" >
        </div>
```
- Permite seleccionar una fecha de finalización mediante un campo de tipo `date`, con la etiqueta "Fecha fin" como guía para el usuario.
```html
        <div class="input-part">
                <input type="text" name="PERIODO_LICENCIAMIENTO" id="PERIODO_LICENCIAMIENTO" placeholder="Periodo de licenciamiento (años)">
        </div>
```
- Permite ingresar el periodo de licenciamiento de la universidad en años, mediante un campo de texto con el `placeholder` "Periodo de licenciamiento (años)" como guía para el usuario.
```html
        <div class="input-part">
            <select name="DEPARTAMENTO" id="DEPARTAMENTO">
                <option value="DEPARTAMENTO" disabled selected>Departamento</option>
                <option value="ÁNCASH">Ancash</option>
                <option value="AREQUIPA">Arequipa</option>
                <option value="AYACUCHO">Ayacucho</option>
                <option value="AMAZONAS">Amazonas</option>
                <option value="CAJAMARCA">Cajamarca</option>
                <option value="...">...</option>
            </select>
        </div>
```
- Permite seleccionar un departamento de Perú mediante un menú desplegable `<select>`, con una opción inicial que indica "Departamento" como guía. El usuario puede elegir entre varias opciones, como Ancash, Arequipa, Ayacucho, Amazonas, Cajamarca, entre otros. La primera opción está deshabilitada y seleccionada por defecto, y el resto de opciones permiten seleccionar el departamento correspondiente.
```html
        <div class="input-part">
            <select name="PROVINCIA" id="PROVINCIA">
                <option value="PROVINCIA" disabled selected >Provincia</option>
                <option value="LIMA">Lima</option>
                <option value="HUAMANGA">Huamanga</option>
                <option value="TRUJILLO">Trujillo</option>
                <option value="AREQUIPA">Arequipa</option>
                <option value="MAYNAS">Maynas</option>
                <option value="...">...</option>
            </select>
        </div>
```
- Permite seleccionar una provincia mediante un menú desplegable `<select>`, con una opción inicial que indica "Provincia" como guía. El usuario puede elegir entre varias opciones, como Lima, Huamanga, Trujillo, Arequipa, Maynas, entre otras. La primera opción está deshabilitada y seleccionada por defecto, y las demás opciones permiten elegir la provincia correspondiente.
```html
        <div class="input-part">
            <select name="DISTRITO" id="DISTRITO">
                <option value="DISTRITO" disabled selected >Distrito</option>
                <option value="LIMA">Lima</option>
                <option value="AYACUCHO">Ayacucho</option>
                <option value="TRUJILLO">Trujillo</option>
                <option value="AREQUIPA">Arequipa</option>
                <option value="RÍMAC">Rímac</option>
                <option value="...">...</option>
            </select>
        </div>
```
- Permite seleccionar un distrito mediante un menú desplegable `<select>`, con una opción inicial que indica "Distrito" como guía. El usuario puede elegir entre varias opciones, como Lima, Ayacucho, Trujillo, Arequipa, Rímac, entre otras. La primera opción está deshabilitada y seleccionada por defecto, y las demás opciones permiten elegir el distrito correspondiente.
```html
        <button class="buscar" type="submit">Buscar</button>

    </form>
</body>
</html>
```
- Este parte crea un botón de tipo submit con la clase buscar dentro del formulario. Al hacer clic en el botón, el formulario se envía, ademas de que hasta esta parte es el codigo HTML.
### CSS
![CSS_COMP]
```css
body {  
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background-size: cover;
    background-position: center;
    overflow-y: auto;
    padding-top: 50px;
    background-image: url('fondo.jpg');
    background-repeat: no-repeat;
    background-attachment: fixed;
}
```
- Configura el cuerpo de la página con una fuente sans-serif, elimina márgenes y rellenos predeterminados, y asegura que el contenido ocupe al menos el 100% de la altura de la ventana. Utiliza un diseño flexible con los elementos organizados en columna, centrados horizontalmente y alineados al inicio verticalmente. La imagen de fondo cubre toda el área sin repetirse, permanece fija al hacer scroll y está centrada. Además, se añade un espacio superior de 50px y se permite el desplazamiento vertical si el contenido es largo.
```css
.formulario {
    background: rgb(0, 0, 0, 0.1);
    width: 320px;
    padding: 24px;
    border-radius: 16px;
    border: solid 5px rgb(255, 255, 255, 0.1);
    backdrop-filter: blur(25px);
    box-shadow: 0px 0px 30px 20px rgb(0, 0, 0, 0.1);
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 50px;
}
```
- Configura un formulario con fondo semitransparente negro, bordes redondeados, sombra suave y texto blanco. Tiene un diseño flexible con los elementos organizados en columna y centrados. Además, se le da un ancho de 320 píxeles, un relleno interno de 24 píxeles y un margen inferior de 50 píxeles. El fondo detrás del formulario tiene un desenfoque y el borde es blanco semitransparente.
```css
.titulo {
    margin-bottom: 16px;
    text-align: center;
}
.input-part {
    display: flex;
    width: 100%;
    position: relative;
    margin-top: 20px;
}
.input-part input {
    width: 100%;
    padding: 10px 16px 10px 38px;
    border-radius: 90px;
    border: solid 3px transparent;
    background: rgb(255, 255, 255, 0.1);
    outline: none;
    caret-color: white;
    color: white;
    font-weight: 500;
}
```
- Establece estilos para los elementos dentro de un formulario. La clase `.titulo` centra el texto y le da un margen inferior de 16 píxeles. La clase `.input-part` organiza sus elementos en un diseño flexible, con una posición relativa y un margen superior de 20 píxeles. Los elementos `input` dentro de `.input-part` tienen un ancho del 100%, con relleno en sus lados internos y un borde redondeado de 90 píxeles. El fondo es semitransparente, el texto es blanco, con un cursor personalizado y sin contorno visible.
```css
.input-part input:focus {
    border: solid rgb(255, 255, 255, 0.25);
}
.input-part input::placeholder {
    color: rgba(255, 255, 255, 0.75);
}
.input-part :hover {
    border: solid 3px rgba(255, 255, 255, 0.25);
}
```
- Cambia el borde del campo de entrada a blanco semitransparente al enfocar, ajusta el color del marcador de posición a blanco semitransparente, y agrega un borde semitransparente al pasar el cursor sobre los campos del formulario.
```css
.buscar {
    width: 100%;
    margin-top: 24px;
    padding: 10px;
    background: #5758588a;
    border: none;
    border-radius: 90px;
    color: white;
    font-weight: bold;
    font-size: 15px;
    cursor: pointer;
    outline: transparent 3px solid;
}
.buscar:focus {
    outline: #a0a3a38a;
}
label {
    font-size: 13px;
    color: white;
    font-weight: bold;
    border-radius: 10px;
    padding: 4px;
}
```
- Aplica estilos a un botón de búsqueda: ajusta su tamaño y márgenes, establece un fondo gris semitransparente, un borde redondeado, color blanco en el texto, y un cursor de puntero al pasar sobre él. También define el estilo de texto en negrita y un tamaño de fuente de 15px. Cuando el botón recibe enfoque `:focus`, cambia el contorno a un gris claro. Los estilos para el `label` configuran el texto con un tamaño de fuente de 13px, color blanco, y un fondo con bordes redondeados.
```css
.input-part select {
    width: 100%;
    padding: 10px 16px 10px 38px;
    border-radius: 90px;
    border: solid 3px transparent;
    background: rgb(255, 255, 255, 0.1);
    outline: none;
    color: white;
    font-weight: 500;
    appearance: none;
}
.input-part select option {
    background: #8587888a;
    color: white;
}
.input-part select option:first-child {
    background: rgba(255, 255, 255, 0.75);
    color: rgba(100, 100, 100, 1);
}
```
- `.input-part` select aplica a un campo de selección (dropdown): establece su tamaño al 100% de su contenedor, agrega relleno, bordes redondeados y un fondo semitransparente. El texto es blanco y tiene un peso de 500, con la apariencia predeterminada de los selectores eliminada. Los `option` dentro del selector tienen un fondo gris semitransparente y texto blanco. El primer `option` tiene un fondo blanco semitransparente con texto de color gris, indicando que es la opción predeterminada o guía para el usuario.
#

## DOCKERFILE
### Explicación
```dockerfile
FROM bitnami/minideb
ENV DEBIAN_FRONTEND="noninteractive"
```
- Usa una imagen ligera basada en Debian.
- Configura el entorno para evitar prompts interactivos durante la instalación.
```dockerfile
RUN apt-get update && \
    apt-get install -y apache2 perl libcgi-pm-perl libtext-csv-perl openssh-server && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*
```
- Instala:
  - Apache: servidor web para servir páginas HTML.
  - Perl: lenguaje para scripts CGI.
  - Bibliotecas para CSV y CGI.
  - Servidor SSH para acceso remoto al contenedor.
- Limpia cachés de instalación para reducir el tamaño de la imagen.
```dockerfile
RUN a2enmod cgid
```
- Activa el módulo CGI en Apache, necesario para ejecutar scripts Perl como aplicaciones web.
```dockerfile
RUN mkdir /var/run/sshd && \
    echo 'root:password' | chpasswd && \
    sed -i 's/#PermitRootLogin prohibit-password/PermitRootLogin yes/' /etc/ssh/sshd_config && \
    sed -i 's/UsePAM yes/UsePAM no/' /etc/ssh/sshd_config
```
- Crea un directorio para SSH.
- Establece una contraseña para el usuario `root`.
- Configura SSH para permitir inicio de sesión como `root`.
- Desactiva el uso de PAM (módulo de autenticación pluggable) para simplificar el acceso.
```dockerfile
RUN mkdir -p /usr/lib/cgi-bin /var/www/html
```
- Crea directorios necesarios:
  - `/usr/lib/cgi-bin`: para scripts CGI.
  - `/var/www/html`: para los archivos HTML del servidor web.
```dockerfile
COPY ./cgi-bin/ /usr/lib/cgi-bin/
COPY ./html/ /var/www/html/
```
- Copia los scripts Perl y archivos HTML desde tu sistema al contenedor.
```dockerfile
RUN chmod +x /usr/lib/cgi-bin/*.pl && \
    chmod -R 755 /usr/lib/cgi-bin/* && \
    chmod -R 755 /var/www/html
```
- Da permisos de ejecución a los scripts CGI y permisos de lectura/escritura adecuados a los directorios.
```dockerfile
EXPOSE 80 22
```
- 80: para el servidor web (HTTP).
- 22: para conexiones SSH.
```dockerfile
CMD ["bash", "-c", "service ssh start && apachectl -D FOREGROUND"]
```
- Inicia ambos servicios:
  - SSH: para acceso remoto.
  - Apache: para servir páginas y ejecutar scripts CGI.
### Uso de SSH en el contenedor
- En este Dockerfile, el uso de SSH permite acceder de manera remota al contenedor para realizar tareas administrativas, depuración o transferir archivos. Se configura para permitir el inicio de sesión con el usuario `root` y una contraseña definida, exponiendo el puerto 22 para conexiones externas. Esto es útil si se necesita interactuar directamente con el sistema dentro del contenedor sin depender solo de Docker.
### Comandos
- Copiar este comando para crear la imagen.
```sh
docker build -t miweb .
```
- Copiar este comando para crear el contenerdor.
```sh
docker run -d --name myweb1 -p 8096:80 -p 22:22 miweb
```
#  
## Commit más importante del proyecto

#### Commit de la union de todas las partes 
![Commit2]
- Este commit une todas las partes para que la web funcione correctamente.
# Pruebas realizadas

![Prueba1]
- Esta es la página principal de nuestra página(index.html), en donde se ingresan los datos en los campos requeridos para poder realizar la búsqueda de universidades.

![Prueba2]
- En este caso se ingresa en el campo de "búsqueda de nombre de la universidad" el nombre de "pablo" para poder buscar todas las universidades que incluyan ese nombre.

![Prueba3]
- Como se puede observar al buscar universidades que incluyan el nombre de "pablo" nos muestra a todas las universidades con este nombre, en este caso son 2 y podemos observar sus respectivos datos: código, nombre, tipo, estado, inicio, fin, periodo, departamento, provincia, distrito, dirección.

![Prueba4]
- Una vez realizada la búsqueda, se puede volver a ingresar otros datos para la búsqueda de otras universidades.

![Prueba5]
- En este caso se hace la busqueda de la Universidad Nacional de San Agustín, como podemos observar nos muestra los respectivos datos y la ubicación de Google Maps en un iframe.

![Prueba6]
- En este caso se busca la "universidad Sideral" la cual no existe.

![Prueba7]
- Como podemos observar se muestra una imagen con el mensaje de "universidad no encontrada" y que probemos con otros datos.

## REFERENCIAS
- https://git-scm.com/book/es/v2
- https://guides.github.com/
- https://www.geeksforgeeks.org/perl-tutorial-learn-perl-with-examples/

- Tutorial de Expresiones regulares - https://www.blyx.com/public/docs/expresiones_regulares_perl.html

- Lectura de CVS - https://thescriptingsystemadministrator.wordpress.com/2014/02/03/reading-a-csv-file-in-perl-textcsv-and-textcsv_xs/

- Archivos CVS - https://www.example-code.com/perl/csv_read.asp

- Empezando tutorial con perl - https://www.geeksforgeeks.org/perl-tutorial-learn-perl-with-examples/

- Perl Introduction, FireShip - https://www.youtube.com/watch?v=74_7LrRe5DI&t=8s

#

[license]: https://img.shields.io/github/license/rescobedoq/pw2?label=rescobedoq
[license-file]: https://github.com/rescobedoq/pw2/blob/main/LICENSE

[downloads]: https://img.shields.io/github/downloads/rescobedoq/pw2/total?label=Downloads
[releases]: https://github.com/rescobedoq/pw2/releases/

[last-commit]: https://img.shields.io/github/last-commit/rescobedoq/pw2?label=Last%20Commit

[Debian]: https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white
[debian-site]: https://www.debian.org/index.es.html

[Git]: https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white
[git-site]: https://git-scm.com/

[GitHub]: https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white
[github-site]: https://github.com/

[Perl]: https://img.shields.io/badge/perl-%2339457E.svg?style=for-the-badge&logo=perl&logoColor=white
[perl-site]: https://www.perl.org/

[HTML]: https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white
[html-site]: https://developer.mozilla.org/en-US/docs/Web/HTML

[CSS]: https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white
[css-site]: https://developer.mozilla.org/en-US/docs/Web/CSS

[CVS]: https://drive.google.com/file/d/1hQV-FiOyOfhyFOjosfse_tL4TTONwiwu/view

[CSS_COMP]: https://hackmd.io/_uploads/H1-XeSdfkg.jpg
[HTML_COMP]: https://hackmd.io/_uploads/S1brgB_f1l.jpg


[Prueba1]:https://hackmd.io/_uploads/HJ6xM4uzyg.jpg
[Prueba2]:https://hackmd.io/_uploads/HkFU7NOzkl.jpg
[Prueba3]:https://hackmd.io/_uploads/SyMm4Euzyg.jpg
[Prueba4]:https://hackmd.io/_uploads/Bk7KV4_fkx.jpg
[Prueba5]:https://hackmd.io/_uploads/BJwBB4OGye.jpg
[Prueba6]:https://hackmd.io/_uploads/HkQ3SE_M1x.jpg
[Prueba7]:https://hackmd.io/_uploads/HkpJ8VOfJl.jpg

[Commit1]:https://hackmd.io/_uploads/Sks-94uzJe.jpg
[Commit2]:https://hackmd.io/_uploads/S1Ct9VuGkl.jpg
[Commit3]:https://hackmd.io/_uploads/ryAoc4_M1x.jpg
[Commit4]:https://hackmd.io/_uploads/SJId2EdfJx.jpg
[Commit5]:https://hackmd.io/_uploads/rk5I0Ndfye.jpg


[![Debian][Debian]][debian-site]
[![Git][Git]][git-site]
[![GitHub][GitHub]][github-site]
[![Perl][Perl]][perl-site]
[![HTML][HTML]][html-site]
[![CSS][CSS]][css-site]
