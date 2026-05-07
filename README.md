# Temp SaaS/IA Affiliate Site

Base de la nueva web en Astro para afiliación SaaS/IA.

## Estado actual

- Estructura Astro creada.
- Colecciones, rutas dinámicas, contenido semilla y componentes de afiliación implementados.
- Workflow de GitHub Pages preparado.

## Pendiente para publicar

1. Iniciar sesión en GitHub CLI:

```powershell
& "C:\Users\pblac\AppData\Local\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin\gh.exe" auth login
```

2. Crear repo temporal y conectar remote:

```powershell
& "C:\Users\pblac\AppData\Local\Microsoft\WinGet\Packages\GitHub.cli_Microsoft.Winget.Source_8wekyb3d8bbwe\bin\gh.exe" repo create temp-saas-ai-affiliate-site --public --source . --remote origin --push
```

3. Activar GitHub Pages con GitHub Actions en settings del repo.

## Nota de entorno local

Si `npm install` falla con `ENOSPC`, libera espacio en disco antes de ejecutar build local.
