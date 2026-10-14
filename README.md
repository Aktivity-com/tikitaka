# Tiki Taka OS

Demo navegable en Next.js, TypeScript, Tailwind y componentes base shadcn/ui. Identidad azul marino, azul eléctrico y blanco.

## Desarrollo

pnpm install
pnpm dev

## Validación

pnpm lint
pnpm build

## Recorrido de entrevista (3 minutos)

1. Pulsa Reiniciar demo. Dashboard: 6 partidos, 3 ciudades, 3 deportes, 4 instalaciones.
2. Confirmaciones → primer partido (TT-101) → Simular confirmación de Gràcia United.
3. En el mismo partido, asigna Anna Puig. Los árbitros se filtran por ciudad, deporte y conflictos de 90 minutos.
4. Incidencia de iluminación → Gestionar → escribe la actuación → Guardar resolución.
5. Vuelve a Dashboard: confirmaciones, asignaciones e incidencias se han actualizado. Recarga para comprobar que se conservan.
6. Filtra Madrid o Valencia. Visita Instalaciones y su ocupación. Informes permite descargar CSV.

## Pantallas

Dashboard, Calendario, Partidos, Confirmaciones, Árbitros, Asignaciones, Incidencias, Competiciones, Equipos, Instalaciones, Comunicaciones e Informes.

## Alcance

Datos ficticios de una jornada fija, 15/10/2026. Estado guardado por navegador en localStorage, sin backend, autenticación ni envío real de comunicaciones. Calendario muestra una agenda de jornada. El botón Reiniciar demo restaura el estado inicial.

El repositorio original estaba vacío. Los documentos y el mockup no estaban disponibles en la carpeta sincronizada ni en la conversación recuperada; las pantallas y casos se basan en los requisitos expresados por el usuario y quedan pendientes de contraste con esos documentos.
