# Practica03-Javascript
Practica 3 JS
### PRACTICA DE LABORATORIO
### CARRERA: Computacion
### ASIGNATURA : Programación Hipermedial
### TÍTULO PRÁCTICA : Creación de un sitio web usando HTML5, Javascript, CSS
### ESTUDIANTE: JOHN HENRY CHIQUI C. ASCE
### Objetivo Alcanzado:
* Entender el Uso de Javascript para ofrecer funcionalidad a paagina.html
#### ACTIVIDADES DESAROLLADAS
1.	Crear un repositorio en GitHub con el nombre “Practica02 – Mi Sitio Web, CSS”.
	Usuario de GitHub:johnasce
	Repositorio de la presente práctica: https://github.com/johnasce/Practica03-Javascript.git
2.	Realizar un commit y push por cada requerimiento. Se realizaron los commits, y push de acuerdo se fue avanzando en el desarrollo de la página web.
3.	Al finalizar la práctica se debe validar todas las páginas HTML y hojas de estilos CSS creadas usando el W3C Validator.
* **Pagina formulario.html**
![img1](https://user-images.githubusercontent.com/51840139/81826250-367cb280-94fd-11ea-82bb-0849ddb6269f.png)
* **Pagina calculadora.html**
![img2](https://user-images.githubusercontent.com/51840139/81826594-92473b80-94fd-11ea-9df3-7b2388ac7228.png)
* **Validador de la Css Pagina calculadora.html**
![img3](https://user-images.githubusercontent.com/51840139/81826762-b9057200-94fd-11ea-80ca-24ca1461be4f.png)
* **Validador de la Css Pagina galery.html**
![img4](https://user-images.githubusercontent.com/51840139/81826909-e0f4d580-94fd-11ea-8918-5006243491a8.png)
4.	Luego, se debe crear el archivo README del repositorio de GitHub.
    Esta Creado el Archivo Readme en el repositorio
5.	A partir de los siguientes problemas se pide implementar soluciones basadas en el lenguaje de programación de JavaScript usando funciones y eventos.
1. Diseñar una interfaz en HTML que permita ingresar los siguientes campos en
un formulario: cedula, nombres, apellidos, dirección, teléfono, fecha de
nacimiento, correo electrónico y contraseña. Luego, usando funciones de
JavaScript se pide validar que todos los campos han sido ingresados,
además; que los valores ingresados en cada campo del formulario sean
correctos teniendo en cuenta las siguientes condiciones:
![img5](https://user-images.githubusercontent.com/51840139/81827192-244f4400-94fe-11ea-9322-f87a44bd2bf3.png)

a. Se debe validar qué, en el campo de la cedula, se ingrese sólo números
    y que la misma sea correcta, en base, al último dígito verificador.
    
  ![image](https://user-images.githubusercontent.com/51840139/81827449-611b3b00-94fe-11ea-8551  -8ea936e70199.png)
  
b. Se debe validar qué, en el campo del nombres, ingrese exclusivamente
dos nombre y que permita ingresar sólo letras, por ejemplo: “Gabriel
Alejandro”, es válido; “Gabriel”, no es válido.

![image](https://user-images.githubusercontent.com/51840139/81827585-827c2700-94fe-11ea-885c-bd350446f9ed.png)

c. Se debe validar qué, en el campo del apellidos, ingrese exclusivamente
dos apellidos y que permita ingresar sólo letras, por ejemplo: “León
Paredes”, es válido; “León”, no es válido.
![image](https://user-images.githubusercontent.com/51840139/81827634-91fb7000-94fe-11ea-99e0-b30c0a5fc4a3.png)

d. Se debe validar qué, en el campo del teléfono, permita ingresar sólo
números y un máximo de 10 caracteres numéricos.

![image](https://user-images.githubusercontent.com/51840139/81827725-ab042100-94fe-11ea-84c0-f9e7461acb12.png)

e. Se debe validar que la fecha de nacimiento ingrese en el formato
dd/mm/yyyy
![image](https://user-images.githubusercontent.com/51840139/81827766-b6574c80-94fe-11ea-9d48-6318d764397e.png)

f. Se debe validar qué, en el campo correo electrónico, permita ingresar un
correo válido. Se considera un correo válido, cuando comienza por tres o
más valores alfanuméricos, luego un @, seguido por la extensión
“ups.edu.ec” o “est.ups.edu.ec”.

![image](https://user-images.githubusercontent.com/51840139/81827869-cc650d00-94fe-11ea-81ef-b60c3a2b7dab.png)


g. Se debe validar que la contraseña ingresada tenga mínimo 8 caracteres,
además, debe incluir al menos: una letra mayúscula, una letra minúscula
y un carácter especial (@, _, $) 
![image](https://user-images.githubusercontent.com/51840139/81827910-d8e96580-94fe-11ea-84e0-dc443507ddf8.png)

6.	Diseñar una interfaz en html que tenga tres botones que diga “Anterior”, “Iniciar”, “Siguiente”, y una imagen. Luego, desde javascript se debe controlar para al hacer clic sobre uno de los botones realice una acción relacionada a una galería de imágenes (ver ejemplo, 
![image](https://user-images.githubusercontent.com/51840139/81827982-eacb0880-94fe-11ea-8401-ee26fec258ab.png)

Indicaciones:
• Se debe tener, un arreglo con los nombres de diez imágenes, previamente
descargadas y almacenadas en una carpeta llamada “images”.
• La galería de imágenes debe visualizar exclusivamente 5 imágenes.
• Cada vez que se haga clic en le botón iniciar se deben escoger de manera
aleatoria cinco imágenes de las diez que se mostrarán en la galería de
imágenes.
• Al hacer clic en el botón siguiente o anterior se debe cambiar la imagen
presentada en la galería.
• El cambio de imágenes debe simular un efecto, para lo cuál, se debe usar las
propiedades left o rigth.
• Al hacer clic en el botón siguiente y haber llegado a la última imagen disponible,
el botón siguiente deberá ser deshabilitado (sólo cuando se ha llegado a la
última imagen el botón siguiente deberá estar deshabilitado)
• Al hacer clic en el botón anterior y haber llegado a la primera imagen disponible,
el botón anterior deberá ser deshabilitado (sólo cuando se ha llegado a la última
imagen y cuando se inicie la galería de imágenes el botón anterior deberá estar deshabilitado)

![image](https://user-images.githubusercontent.com/51840139/81828109-0a623100-94ff-11ea-913b-064f231af769.png)
![image](https://user-images.githubusercontent.com/51840139/81828161-1817b680-94ff-11ea-9fc5-302437a6581f.png)

7.	 Realizar una calculara en HTML usando botones de javascript y una caja de texto para visualizar el resultado. Las operaciones que podrá hacer la calculadora son:: suma, resta, multiplicación y división. Además, se podrá limpiar la memoria de la calculadora. Por último, se debe usar la función eval() para realizar las operaciones aritméticas

![image](https://user-images.githubusercontent.com/51840139/81828258-37aedf00-94ff-11ea-8c0c-594cf79a341c.png)

**8. Explicación de la estructura de cada página HTML.**
Elementos en común para todas las páginas: En todas las páginas se encuentran elementos comunes o similares, en este caso son los siguientes:

**	En la pagina calculadora.html:**

Se tiene un diseño para que pueda albergar la caja de texto, así como sus componentes como son los botones y una grilla para que se pueda visualizar de una manera uniforme.
Por otra parte se separa en una carpeta externa los archivos de java script para el correcto funcionamiento de la calculadora, el archivo de java script tiene como nombre calculadora.js, esto permitirá darle el funcionamiento a la calculadora con el diseño

**	En la pagina formulario.html:**

Se tiene un formulario con sus diferentes componentes como cajas de texto, labels, botones para validar que cada dato ingresado sea correcto, esto se puede obtener como resultado con la ayuda de java script

**	En la pagina galeria.html:**

La galería se le da forma a las diferentes imágenes con la ayuda de un archivo css y un js ya que el uno se encarga de la parte grafica y el otro de los procesos para que se intercambien las imágenes

9. Generar informe de los resultados en el formato de prácticas. Debe incluir:
**a. El desarrollo de cada uno de los requerimientos antes descritos.**
**b. La evidencia del correcto diseño de las páginas HTML usando CSS. Para lo cuál, se puede generar
fotografías instantáneas (pantallazos).**

![image](https://user-images.githubusercontent.com/51840139/81828543-82305b80-94ff-11ea-815d-224d0c830710.png)
***CSS para para pagina formulario.html que dan el Diseño y la forma de las cajas de texto, Labels y demás Widgets***

![image](https://user-images.githubusercontent.com/51840139/81828601-94aa9500-94ff-11ea-8efa-5ec960a20509.png)

***Cada widget esta agrado dentro del formulario y esta debidamente estruturado.***

**c. La evidencia del correcto funcionamiento de cada una de las funciones de JavaScript**

![image](https://user-images.githubusercontent.com/51840139/81828678-aa1fbf00-94ff-11ea-9b33-287696184ff8.png)

***Se utiliza un archivo externo .js para agregar la funcionalidad***

**d. El informe debe incluir conclusiones apropiadas.**

**e. En el informe se debe incluir la información de GitHub (usuario y URL del repositorio de la práctica)
	Usuario de GitHub:johnasce**
	Repositorio de la presente práctica: https://github.com/johnasce/Practica03-Javascript.git
  
**f. En el informe se debe incluir la firma digital del estudiante.**









