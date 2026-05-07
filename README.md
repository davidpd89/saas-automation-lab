# SaaS Automation Lab

Base de la nueva web en Astro para afiliación SaaS/IA.

## Estado actual

- Estructura Astro creada.
- Colecciones, rutas dinámicas, contenido semilla y componentes de afiliación implementados.
- Workflow de GitHub Pages preparado para publicar en `https://davidpd89.github.io/saas-automation-lab/`.

## Pendiente para publicar

1. Iniciar sesión en GitHub CLI:

```powershell
& "C:\Users\pblac\AppData\Local\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin\gh.exe" auth login
```

2. Conectar este checkout local al repo correcto:

```powershell
git remote set-url origin https://github.com/davidpd89/saas-automation-lab.git
```

3. Activar GitHub Pages en settings del repo con fuente `Deploy from a branch`, rama `gh-pages`, carpeta `/`.

Si GitHub Pages queda apuntando a `main`, GitHub intentara construir el codigo Astro con Jekyll y aparecera un run rojo llamado `pages build and deployment`.

## Nota de entorno local

Si `npm install` falla con `ENOSPC`, libera espacio en disco antes de ejecutar build local.
