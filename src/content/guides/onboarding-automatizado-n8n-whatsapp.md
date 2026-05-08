---
title: "Onboarding automatizado con n8n y WhatsApp: guia paso a paso"
slug: "onboarding-automatizado-n8n-whatsapp"
seoTitle: "Automatizar onboarding de alumnos con n8n y WhatsApp 2026"
seoDescription: "Guia completa para automatizar onboarding de clientes con n8n, WhatsApp y CRM: alta, bienvenida, accesos y seguimiento."
difficulty: "Intermedio"
persona: "Coach"
scenario: "Un coach vende cursos online y quiere reducir tareas manuales despues del pago"
toolsUsed: ["n8n-cloud", "clientify"]
timeSaved: "Ahorro pendiente de medir segun volumen"
featured: true
searchIntent: "transactional"
---

## Objetivo

Reducir el onboarding manual de alumnos despues del pago: alta, bienvenida, acceso, ficha en CRM y primer seguimiento.

Como coach o formador, probablemente repites tareas como:

- Enviar accesos a plataformas tras el pago.
- Dar la bienvenida manualmente por WhatsApp.
- Recordar fechas de inicio.
- Gestionar formularios de datos iniciales.
- Hacer seguimiento de los primeros pasos.

## Stack necesario

- **n8n Cloud**: orquestacion del flujo.
- **Clientify**: CRM con WhatsApp y seguimiento comercial.
- **Plataforma de pagos**: Stripe, PayPal o similar.
- **Google Sheets o Notion**: base auxiliar opcional.

## Diagrama del flujo

```text
Pago confirmado
↓
Webhook en n8n
↓
Validacion de datos
↓
Contacto en CRM
↓
WhatsApp de bienvenida
↓
Accesos y seguimiento
```

## Resumen del flujo en 3 fases

1. Captura del pago y datos del alumno.
2. Creacion del contacto, etiquetas y acceso.
3. Bienvenida, recordatorio y seguimiento inicial.

## Implementacion paso a paso

### Paso 1: configurar webhook de pagos en n8n

1. Crea un nuevo workflow en n8n Cloud.
2. Anade un nodo Webhook.
3. Configura tu plataforma de pagos para enviar notificaciones a esa URL.

```json
{
  "path": "/payment-webhook",
  "httpMethod": "POST",
  "responseMode": "onReceived"
}
```

### Paso 2: validar y procesar datos del pago

Anade un nodo de codigo para comprobar que el pago se ha completado y extraer datos utiles.

```javascript
if ($input.first().json.status !== "completed") {
  return [];
}

const customer = {
  name: $input.first().json.customer.name,
  email: $input.first().json.customer.email,
  phone: $input.first().json.customer.phone,
  product: $input.first().json.product.name,
  amount: $input.first().json.amount
};

return [customer];
```

### Paso 3: crear contacto en Clientify

El objetivo es que cada nuevo alumno entre con etiquetas claras para poder medir y hacer seguimiento.

```json
{
  "method": "POST",
  "url": "https://api.clientify.com/v1/contacts",
  "headers": {
    "Authorization": "Bearer TU_API_KEY",
    "Content-Type": "application/json"
  },
  "body": {
    "name": "{{ $json.name }}",
    "email": "{{ $json.email }}",
    "phone": "{{ $json.phone }}",
    "tags": ["alumno-{{ $json.product }}", "onboarding-activo"]
  }
}
```

### Paso 4: enviar bienvenida por WhatsApp

Usa una plantilla aprobada y evita mensajes opacos si hay IA o automatizacion en la conversacion.

```json
{
  "method": "POST",
  "url": "https://graph.facebook.com/v18.0/YOUR_PHONE_ID/messages",
  "headers": {
    "Authorization": "Bearer YOUR_WHATSAPP_TOKEN",
    "Content-Type": "application/json"
  },
  "body": {
    "messaging_product": "whatsapp",
    "to": "{{ $json.phone }}",
    "type": "template",
    "template": {
      "name": "bienvenida_curso",
      "language": { "code": "es" }
    }
  }
}
```

### Paso 5: crear accesos

Si usas Thinkific u otro LMS, conecta el alta del usuario a partir del email y el producto comprado. Mantiene un log de errores para no dejar alumnos sin acceso.

### Paso 6: programar seguimiento

Anade un nodo Wait y un mensaje de seguimiento 24-48 horas despues. El contenido debe ayudar, no parecer una secuencia automatica sin contexto.

## Seguridad y privacidad

- Guarda consentimientos explicitos.
- Usa HTTPS en todas las conexiones.
- No guardes API keys en texto visible.
- Mantiene logs de actividad y errores.
- Documenta cuando hay IA o automatizacion en el primer punto de contacto.

## Beneficios esperables si el flujo esta bien configurado

- Menos tareas manuales tras cada venta.
- Onboarding mas consistente.
- Menos olvidos en accesos y seguimientos.
- Mejor trazabilidad en CRM.
- Escalabilidad limitada por coste, soporte, calidad de datos y cumplimiento RGPD.
