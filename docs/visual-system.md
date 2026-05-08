# Sistema visual de Automatiza Sin Humo

Fecha: 2026-05-08

Este documento fija el patron visual para que futuras paginas, imagenes y componentes mantengan una misma direccion.

## Concepto visual

Editorial tech sobrio + laboratorio visual + workflows reales.

La sensacion que debe transmitir la web:

- claridad
- sistema
- confianza
- inteligencia practica
- negocio
- automatizacion sin caos
- sin humo, sin postureo

## Lenguaje visual

- Fondos oscuros o muy oscuros.
- Acentos en turquesa, cian y verde lima suave.
- Lineas finas, nodos, diagramas, bloques, tarjetas y grids.
- Mezcla de abstraccion y negocio real.
- Sensacion de flujo, estructura y orden.
- Composiciones limpias con espacio negativo.
- Estilo consistente entre todas las imagenes.

## Paleta

- Fondo principal: `#0B1020`
- Fondo secundario: `#111827`
- Texto claro: `#E5E7EB`
- Acento cian: `#22D3EE`
- Acento turquesa: `#14B8A6`
- Acento verde: `#84CC16`
- Gris medio: `#334155`

## Imagenes

Formato recomendado:

- Horizontal o apaisado para web.
- Estetica semi-flat/vectorial premium.
- Nitidez alta y luces suaves.
- Sin texto dentro de la imagen, salvo piezas OG especificas.
- Misma paleta, mismas formas base y misma logica de sombreado.

No generar como imagen:

- Botones.
- Fondos completos pesados para cada seccion.
- Tarjetas de logos de herramientas.
- Iconos basicos.
- Labels.

Eso debe resolverse con CSS, SVG ligero, Lucide, Heroicons, Tabler Icons o HTML semantico.

## Botones y UI

Los botones se hacen en CSS.

Boton primario:

- Fondo con gradiente sutil cian a teal.
- Borde semitransparente.
- Radio de `14px`.
- Sombra suave.
- Hover con glow ligero.

Boton secundario:

- Fondo transparente u oscuro elevado.
- Borde de `1px` cian suave.
- Texto claro.
- Hover con fondo oscuro elevado.

Los logos de herramientas no se regeneran con IA. Se usan logos oficiales solo cuando haya derecho de uso claro; si no, se usan tarjetas neutras sin logo.

## Biblioteca actual de imagenes

- `automatiza-sin-humo-hero-automatizacion-saas-ia.webp`: home, hero principal.
- `automatiza-sin-humo-transparencia-editorial-afiliados.webp`: legal y criterios editoriales.
- `automatiza-sin-humo-separador-nodos-flujo.webp`: separador o apoyo decorativo ligero.
- `automatiza-sin-humo-fondo-grid-workflow-oscuro.webp`: fondo parcial reutilizable en secciones oscuras.
- `automatiza-sin-humo-og-comparativas.webp`: Open Graph para comparativas.
- `automatiza-sin-humo-og-home.webp`: Open Graph por defecto de la home.
- `automatiza-sin-humo-herramientas-saas-automatizacion.webp`: directorio y fichas de herramientas.
- `automatiza-sin-humo-guia-onboarding-automatizado-clientes.webp`: guias de procesos y onboarding.
- `automatiza-sin-humo-mapa-stack-automatizacion-negocio.webp`: paginas pilar y mapa del stack.
- `automatiza-sin-humo-comparativa-n8n-make-zapier.webp`: comparativa principal y comparativas SaaS.
- `automatiza-sin-humo-consultor-b2b-prospeccion-crm.webp`: consultores B2B, prospeccion, CRM y cobros.
- `automatiza-sin-humo-formador-cursos-email-automatizado.webp`: formadores, cursos, evergreen y email.
- `automatiza-sin-humo-coach-onboarding-seguimiento.webp`: coaches, onboarding y seguimiento.
- `automatiza-sin-humo-lab-metodologia-workflows.webp`: Lab, como probamos y metodologia.

## Regla SEO de imagen

Cada imagen usada en pagina debe tener:

- Nombre de fichero descriptivo, sin relleno y con intencion de busqueda.
- `alt` contextual escrito para esa pagina, no duplicado mecanicamente.
- Uso con `astro:assets` para generar formatos optimizados.
- `loading="eager"` solo en la imagen hero que compite por LCP.
- Uso decorativo limitado y nunca como sustituto de texto indexable.
