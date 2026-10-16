import type { PrivacyCopy } from '../types';

/**
 * Política para una agencia en Puerto Rico (EE.UU.), spec §6. El sitio solo
 * trata datos vía Cal.com, WhatsApp y correo: no hay formulario, analítica
 * ni cookies propias. Borrador: requiere revisión legal antes de publicar.
 */
export const privacy: PrivacyCopy = {
  eyebrow: 'Legal',
  title: 'Política de privacidad',
  intro:
    'Esta política explica qué datos personales recibimos cuando nos contactas o agendas una llamada desde este sitio, para qué los usamos y qué puedes hacer con ellos.',
  lastUpdated: 'Última actualización: 16 de octubre de 2026',
  controllerPending: 'Dato pendiente: falta la razón social de Cyber Positioning como responsable de los datos.',
  draftNotice: 'Borrador pendiente de revisión legal. No publicar como versión final sin esa revisión.',
  languageNote: 'Esta política existe en español e inglés. Si hay diferencias, prevalece la versión en español.',
  sections: [
    {
      title: '1. Quiénes somos',
      summary: 'Cyber Positioning es una agencia de marketing digital en Puerto Rico y es responsable de tus datos.',
      body: [
        'Cyber Positioning opera los sitios cyberpositioning.com y cyberlanguage.io (su línea de visibilidad en IA). Para cualquier consulta sobre esta política puedes escribirnos a admin@cyberpositioning.com.',
      ],
    },
    {
      title: '2. Qué datos recibimos',
      summary: 'Solo los que tú nos das al agendar, escribirnos por WhatsApp o enviarnos un correo.',
      body: [
        'Al agendar una llamada: tu nombre, tu correo electrónico, tu teléfono si decides darlo, y lo que escribas en las notas de la reserva.',
        'Al escribirnos por WhatsApp: tu número de teléfono, tu nombre de perfil y el contenido de los mensajes.',
        'Al escribirnos por correo: tu dirección de correo y el contenido del mensaje.',
        'Este sitio no tiene formularios propios, no usa herramientas de analítica y no instala cookies propias.',
      ],
    },
    {
      title: '3. Para qué los usamos',
      summary: 'Para responderte, hacer la llamada que agendaste y preparar una propuesta si la pides.',
      body: [
        'Usamos tus datos para confirmar y realizar la llamada, responder tus consultas y, si nos lo pides, preparar una propuesta de servicios.',
        'No vendemos tus datos ni los compartimos con terceros para que te envíen publicidad. No te enviaremos comunicaciones de marketing sin tu consentimiento.',
      ],
    },
    {
      title: '4. Proveedores que procesan tus datos',
      summary: 'Usamos servicios externos para la agenda, la mensajería, el correo y el alojamiento del sitio.',
      body: [
        'Cal.com, para la agenda de llamadas. Las reservas se procesan según su propia política de privacidad.',
        'WhatsApp (Meta Platforms), para la mensajería.',
        'Nuestro proveedor de correo electrónico, para recibir y responder correos.',
        'El proveedor de alojamiento del sitio, que puede registrar datos técnicos de la visita (como la dirección IP) por seguridad y funcionamiento.',
      ],
    },
    {
      title: '5. Cookies',
      summary: 'Nosotros no instalamos cookies. La agenda de Cal.com puede usar las suyas.',
      body: [
        'Este sitio no usa cookies propias ni de analítica. La agenda incrustada en la página de Contacto la provee Cal.com, que puede usar cookies necesarias para su funcionamiento. Los enlaces a Instagram y Facebook te llevan a esas plataformas, que aplican sus propias políticas.',
      ],
    },
    {
      title: '6. Cuánto tiempo guardamos tus datos',
      summary: 'Mientras sea útil para atenderte, y luego los eliminamos.',
      body: [
        'Conservamos tus datos mientras mantengamos una conversación o relación comercial contigo y, después, solo el tiempo necesario para cumplir obligaciones legales o resolver reclamos. Si no llegamos a trabajar juntos, eliminamos los datos de la reserva y la conversación cuando dejan de ser necesarios.',
      ],
    },
    {
      title: '7. Tus derechos',
      summary: 'Puedes pedirnos ver, corregir o borrar tus datos.',
      body: [
        'Puedes solicitar acceso a los datos que tenemos sobre ti, su corrección o su eliminación escribiendo a admin@cyberpositioning.com. Responderemos dentro de un plazo razonable y, como máximo, en 30 días.',
      ],
    },
    {
      title: '8. Seguridad',
      summary: 'Protegemos tus datos y te avisaremos si hay un incidente que te afecte.',
      body: [
        'Aplicamos medidas razonables para proteger tus datos. Si ocurre un incidente de seguridad que afecte tu información personal, te notificaremos según exige la ley aplicable, incluida la Ley Núm. 111 de 2005 de Puerto Rico.',
      ],
    },
    {
      title: '9. Menores de edad',
      summary: 'Este sitio no está dirigido a menores de 13 años.',
      body: ['No recopilamos a sabiendas datos de menores de 13 años. Si crees que un menor nos dio sus datos, escríbenos y los eliminaremos.'],
    },
    {
      title: '10. Cambios a esta política',
      summary: 'Si la cambiamos, publicaremos la nueva versión aquí con su fecha.',
      body: ['Podemos actualizar esta política. La fecha de la última actualización aparece al inicio de esta página.'],
    },
  ],
  backToSite: 'Volver al inicio',
};
