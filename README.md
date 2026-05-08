# Automatiza Sin Humo / SaaS Automation Lab

Web Astro publicada con GitHub Pages en:

- Dominio principal: `https://automatizasinhumo.com/`
- Repositorio: `davidpd89/saas-automation-lab`
- Rama de publicacion: `gh-pages`

## Configuracion de dominio

El repositorio incluye `public/CNAME` con:

```text
automatizasinhumo.com
```

Astro esta configurado con:

```js
site: "https://automatizasinhumo.com",
base: "/"
```

## DNS pendiente fuera del repositorio

En el proveedor del dominio hay que apuntar el dominio apex a GitHub Pages:

```text
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

Si el proveedor permite IPv6, anade tambien:

```text
AAAA  @     2606:50c0:8000::153
AAAA  @     2606:50c0:8001::153
AAAA  @     2606:50c0:8002::153
AAAA  @     2606:50c0:8003::153
```

Opcional para `www`:

```text
CNAME www   davidpd89.github.io
```

GitHub recomienda verificar el dominio en la cuenta para reducir riesgos de takeover.

## Desarrollo local

```powershell
npm install
npm run build
```

## Deploy

El workflow `.github/workflows/deploy.yml` construye Astro y publica `dist/` en `gh-pages`.
