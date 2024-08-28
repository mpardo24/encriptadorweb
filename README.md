# Desafío Cifrador

## Descripción del Proyecto

Este proyecto es un programa de cifrado y descifrado de texto implementado utilizando tecnologías web básicas: HTML, CSS y JavaScript. La aplicación permite al usuario ingresar un texto y cifrarlo utilizando un conjunto de reglas predefinidas, así como descifrar el texto previamente cifrado. Este proyecto fue diseñado con el propósito de practicar y demostrar la importancia de una buena estructura y organización en el desarrollo web.

## Estructura del Proyecto

### 1. HTML (HyperText Markup Language)

El archivo `index.html` contiene la estructura básica de la página web. El HTML es el esqueleto de cualquier sitio web y define cómo se organizan los elementos en la pantalla. En este proyecto, se utilizan diferentes secciones (`<header>`, `<main>`, `<section>`) para organizar el contenido de manera lógica y semántica.

- **Header:** Incluye el logotipo de la página y es común en toda la aplicación.
- **Main:** Contiene dos bloques principales:
  - **Bloque 1:** Para la entrada del texto y los botones de cifrado y descifrado.
  - **Bloque 2:** Para mostrar los resultados y las acciones adicionales, como copiar o limpiar el texto.

### 2. CSS (Cascading Style Sheets)

El archivo `style.css` se encarga de la apariencia de la aplicación. CSS es crucial para diseñar una interfaz de usuario atractiva y fácil de usar. En este proyecto, se han utilizado técnicas de diseño responsivo para asegurar que la página se vea bien en diferentes tamaños de pantalla.

- **Tipografía:** Se utilizó la fuente 'Inter' para mantener una apariencia moderna y legible.
- **Diseño Responsivo:** Utilizando `media queries`, el diseño se adapta a diferentes dispositivos, desde teléfonos móviles hasta pantallas grandes.
- **Colores y Espaciado:** Los colores y el espaciado fueron seleccionados para ofrecer un contraste adecuado y una experiencia de usuario agradable.

### 3. JavaScript (JS)

El archivo `script.js` maneja la lógica del cifrado y descifrado. JavaScript es un lenguaje de programación esencial en el desarrollo web, que permite agregar interactividad a la página. En este proyecto, el JavaScript fue utilizado para implementar las siguientes funcionalidades:

- **Cifrado y Descifrado:** A través de reglas predefinidas, las vocales en el texto ingresado son reemplazadas por secuencias de caracteres específicas para cifrar el texto, y viceversa para descifrar.
- **Manejo del DOM:** JS se utiliza para manipular el DOM (Document Object Model), actualizando dinámicamente el contenido de la página según las acciones del usuario, como mostrar el texto cifrado o descifrado, copiarlo al portapapeles o limpiar los campos de entrada.
- **Validación de Entrada:** Se asegura que el texto ingresado solo contenga letras minúsculas sin acentos, proporcionando una alerta si no se cumple esta condición.

## Importancia de una Buena Estructura en Desarrollo Web

Crear una página web bien estructurada es fundamental para el éxito de cualquier proyecto web. Una buena estructura asegura que el código sea:

- **Mantenible:** Un código bien organizado y estructurado facilita las actualizaciones y el mantenimiento a lo largo del tiempo.
- **Accesible:** Seguir las mejores prácticas en HTML y CSS garantiza que la página sea accesible para todos los usuarios, incluyendo aquellos con discapacidades.
- **Escalable:** Una estructura clara permite agregar nuevas funcionalidades o mejorar las existentes sin que el código se vuelva inmanejable.
- **SEO-Friendly:** Un código HTML semántico es más fácil de leer por los motores de búsqueda, lo que puede mejorar el posicionamiento de la página en los resultados de búsqueda.

## Cómo Ejecutar el Proyecto

Para ejecutar este proyecto localmente, sigue estos pasos:

1. **Clonar el Repositorio:**  
   `git clone https://github.com/tuusuario/desafio-cifrador.git`

2. **Abrir el Archivo HTML:**  
   Navega a la carpeta del proyecto y abre el archivo `index.html` en tu navegador web.

3. **Interacción con la Aplicación:**  
   - Escribe un texto en el área de texto proporcionada.
   - Haz clic en el botón "Cifrar" para cifrar el texto.
   - Haz clic en el botón "Descifrar" para revertir el texto cifrado a su forma original.
   - Puedes copiar el resultado o limpiar los campos de entrada según lo necesites.

## Conclusión

Este proyecto es un excelente ejemplo de cómo combinar HTML, CSS y JavaScript para crear aplicaciones web interactivas. Además de practicar la codificación, demuestra la importancia de una buena planificación y estructura en el desarrollo web. Siguiendo estos principios, no solo se mejora la calidad del código, sino también la experiencia del usuario y la sostenibilidad del proyecto a largo plazo.
