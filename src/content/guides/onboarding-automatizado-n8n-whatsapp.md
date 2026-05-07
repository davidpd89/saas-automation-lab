---
title: "Onboarding automatizado con n8n y WhatsApp: Guía paso a paso"
slug: "onboarding-automatizado-n8n-whatsapp"
seoTitle: "Automatizar onboarding de alumnos con n8n y WhatsApp 2026"
seoDescription: "Guía completa para automatizar el onboarding de clientes usando n8n, WhatsApp y CRM. Ahorra 10 horas semanales."
difficulty: "Intermedio"
persona: "Coach"
scenario: "Un coach vende cursos online y pasa 10 horas semanales en onboarding manual de alumnos"
toolsUsed: ["n8n-cloud", "clientify"]
timeSaved: "10 horas/semana"
featured: true
searchIntent: "transactional"
---

## Problema resuelto

Como coach o formador, probablemente inviertes horas cada semana en tareas repetitivas de onboarding:
- Enviar accesos a plataformas tras el pago
- Dar la bienvenida manualmente por WhatsApp
- Recordar fechas de inicio de cursos
- Gestionar formularios de datos iniciales
- Seguimiento de primeros pasos

Esta guía te enseñará a automatizar todo el proceso usando **n8n + Clientify + WhatsApp**.

## Stack tecnológico necesario

- **n8n Cloud**: Orquestación de flujos de automatización
- **Clientify**: CRM con WhatsApp nativo
- **Plataforma de pagos**: Stripe, PayPal o similar
- **Google Sheets/Notion**: Base de datos de alumnos (opcional)

## Diagrama del flujo completo

```
Pago Confirmado → n8n detecta → Clientify crea contacto → WhatsApp da bienvenida → Plataforma envía accesos → Seguimiento automático
```

## Paso 1: Configurar webhook de pagos en n8n

1. **Crear nuevo workflow en n8n Cloud**
2. **Añadir nodo Webhook**:
   ```json
   {
     "path": "/payment-webhook",
     "httpMethod": "POST",
     "responseMode": "onReceived"
   }
   ```
3. **Configurar en tu plataforma de pagos** para enviar notificaciones a esta URL

## Paso 2: Validar y procesar datos del pago

Añade un nodo **Function** para procesar los datos:

```javascript
// Validar que el pago fue exitoso
if ($input.first().json.status !== 'completed') {
  return [];
}

// Extraer datos del cliente
const customer = {
  name: $input.first().json.customer.name,
  email: $input.first().json.customer.email,
  phone: $input.first().json.customer.phone,
  product: $input.first().json.product.name,
  amount: $input.first().json.amount
};

return [customer];
```

## Paso 3: Crear contacto en Clientify

1. **Añadir nodo HTTP Request**
2. **Configurar para API de Clientify**:
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

## Paso 4: Enviar mensaje de bienvenida por WhatsApp

1. **Añadir otro nodo HTTP Request**
2. **Configurar para WhatsApp API**:
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
         "language": {"code": "es"},
         "components": [{
           "type": "body",
           "parameters": [
             {"type": "text", "text": "{{ $json.name }}"},
             {"type": "text", "text": "{{ $json.product }}"}
           ]
         }]
       }
     }
   }
   ```

## Paso 5: Crear accesos en plataforma de cursos

Dependiendo de tu plataforma, usa el nodo correspondiente:

**Para Thinkific:**
```javascript
// Usar API de Thinkific para crear usuario
const thinkifyResponse = await fetch('https://api.thinkific.com/api/public/v1/users', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer TU_TOKEN_THINKIFIC',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    first_name: $json.name.split(' ')[0],
    last_name: $json.name.split(' ').slice(1).join(' '),
    email: $json.email
  })
});

return await thinkifyResponse.json();
```

## Paso 6: Programar seguimiento automático

Añade un nodo **Wait** y luego un **Schedule Trigger** para seguimiento:

```javascript
// Esperar 24 horas antes del primer seguimiento
// Luego enviar recordatorio de primeros pasos
const followUpMessage = `
Hola {{ $json.name }},

¿Cómo va tu progreso en {{ $json.product }}?

Recuerda que tienes disponibles:
- Módulo 1: Fundamentos
- Comunidad privada
- Sesión de bienvenida esta semana

¿Necesitas ayuda con algo?
`;
```

## Consideraciones de seguridad y privacidad

- **RGPD compliance**: Guarda consentimientos explícitos
- **Encriptación de datos**: Usa HTTPS en todas las conexiones
- **Backups automáticos**: Configura backups de Clientify
- **Logs de actividad**: Mantén registro de todas las automatizaciones

## Resumen de beneficios

✅ **Ahorro de 10+ horas semanales** en tareas manuales  
✅ **Onboarding consistente** para todos los alumnos  
✅ **Mejor experiencia inicial** con respuestas inmediatas  
✅ **Escalabilidad sin límites** para crecimiento del negocio  
✅ **Datos centralizados** para análisis y mejoras
