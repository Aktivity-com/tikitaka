# Tiki Taka OS

Demo navegable en Next.js, TypeScript, Tailwind y componentes base shadcn/ui. Identidad azul marino, azul eléctrico y blanco.

## Desarrollo

pnpm install
pnpm dev

## Validación

pnpm lint
pnpm build

## Recorrido de entrevista (3 minutos)

1. Pulsa Reiniciar demo. Dashboard: 8 partidos de ejemplo y catálogo de 8 instalaciones de Tiki Taka BCN.
2. Confirmaciones → primer partido (TT-101) → Simular confirmación de Fear the Buffalos.
3. En el mismo partido, asigna Anna Puig. Los árbitros se filtran por ciudad, deporte y conflictos de 90 minutos.
4. Incidencia de iluminación → Gestionar → escribe la actuación → Guardar resolución.
5. Vuelve a Dashboard: confirmaciones, asignaciones e incidencias se han actualizado. Recarga para comprobar que se conservan.
6. Filtra Madrid o Valencia. Visita Instalaciones y su ocupación. Informes permite descargar CSV.

## Pantallas

Dashboard, Calendario, Partidos, Confirmaciones, Árbitros, Asignaciones, Incidencias, Competiciones, Equipos, Instalaciones, Comunicaciones e Informes.

## Alcance

Datos ficticios de una jornada fija, 15/10/2026. Estado guardado por navegador en localStorage, sin backend, autenticación ni envío real de comunicaciones. Calendario muestra una agenda de jornada. El botón Reiniciar demo restaura el estado inicial.

El repositorio original estaba vacío. Los documentos y el mockup no estaban disponibles en la carpeta sincronizada ni en la conversación recuperada; las pantallas y casos se basan en los requisitos expresados por el usuario y quedan pendientes de contraste con esos documentos.

## Catálogo público de Apúntamelo

Instantánea consultada el 14/10/2026 desde https://apuntamelo.com/organizacion/4/competiciones. Se recorrieron las 8 instalaciones, 16 divisiones y 37 grupos actuales, incluidos amistosos y pretemporada. Contiene 241 registros de equipos con sus identificadores. Se verificaron los 6 grupos sin equipos y sin jugadores publicados.

Jugadores: 2.094 entradas de plantillas en las vistas de estadísticas de 31 grupos con equipos, más jugadores que aparecen en los rankings; total de 2494 registros por grupo/equipo tras eliminar 17 filas duplicadas exactas, no necesariamente personas únicas. Se conservaron 7.210 entradas de los rankings desplegados. Incluye nombre, equipo, dorsal, posición, puntos, media, MVP, valoración virtual del juego, últimas puntuaciones, referencia a foto pública y métricas de rankings (goles, asistencias, porteros, partidos, tarjetas, ratios y duplas) cuando están publicadas. Los rankings de Apúntamelo pueden limitarse a los primeros puestos. Un dato ausente se muestra como no disponible, nunca se deduce un cero. Las fichas enlazan al perfil original cuando se identifica su ID, o a su vista de estadísticas de origen. No se importaron datos de contacto ni se consultaron áreas privadas.

La jornada, los horarios, las confirmaciones, los árbitros y las incidencias son simulados. Madrid y Valencia son ejemplos ficticios de expansión. El catálogo y las estadísticas son una instantánea, sin sincronización automática y sin garantía de oficialidad. La sección Jugadores se añade a las 12 vistas iniciales.
