# Taller 2 TypeScript

Con un conjunto de datos de series la app muestra la informacion en una tabla en la pagina web, adicionalmente con un click sobre la fila de la serie se puede visualizar mas informacion sobre la misma.

## Descripción
Esta aplicación es un visor de series que permite cargar y mostrar un conjunto de datos de series en una página web. Las series se presentan en una tabla que muestra información relevante, como el número, el nombre, el canal y el número de temporadas. Cuando se selecciona alguna serie se muestra mas informacion de interes, como su imagen, descripcion y pagina.

## Funcionalidades Principales
- Carga y visualización de datos de series desde un conjunto de datos.
- Presentación de series en una tabla en una página web.
- Calculadora del promedio de temporadas de las series.
- Visualizacion de datos adicionales sobre una serie en particular.

## Problemas

### Problema 1: Errores de Política de Origen en Carga Local
Cuando se abre archivo HTML directamente desde el sistema de archivos local, es posible que hayan errores relacionados con la Política de Origen del Mismo Origen (Same-Origin Policy) y no se visualice la tabla. Esto se debe a las restricciones de seguridad del navegador cuando se mezclan protocolos "file://" y "http://" o "https://". 

#### Solucion
**Usar un servidor local**: En lugar de abrir el archivo HTML directamente, se puede utilizar un servidor local para ejecutar la aplicación.

### Problema 2: No se cargan las imagenes en el servidor local
Cuando se abre la pagina usando live server las imagenes alojadas en i.imgur.com no pueden ser cargadas, el servidor externo lo impide.

#### Solucion
**Ejecutar archivo html directamente**: Se debe abrir el archivo HTML directamente pero cambiando la Política de Seguridad de Contenido (CSP) del navegador web para que tanto las imagenes como la tabla carguen correctamente, si no se cambia esto se tendra el problema 1.

## Capturas de pantalla

![image](https://github.com/SergonM/TallerTS2/assets/111070667/9065cf76-9e20-44fd-a439-00481f5b6934)
