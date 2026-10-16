import type { PrivacyCopy } from '../types';

/** Temporal: política anterior trasladada literal. La reescribe Task 12 (spec §6, Privacidad). */
export const privacy: PrivacyCopy = {
  eyebrow: 'Legal',
  title: 'Política de privacidad',
  intro:
    'Esto explica qué datos te pedimos, para qué los usamos y qué puedes exigirnos. Cada sección parte con un resumen en una línea; abajo está el detalle.',
  lastUpdated: 'Última actualización: 4 de septiembre de 2026',
  controllerPending:
    'Pendiente: identificación del responsable (nombre completo o razón social y RUT). Debe completarse antes de publicar el sitio con captura de datos activa.',
  contactPending:
    'Pendiente: correo de contacto para ejercer derechos. Sin él, esta política no ofrece un canal válido.',
  languageNote:
    'Esta es la versión oficial. La traducción al inglés es de cortesía; ante cualquier diferencia, prevalece el texto en español.',
  backToSite: 'Volver al sitio',

  sections: [
    {
      title: '1. Quién trata tus datos',
      summary: 'Somos nosotros, no un tercero, y respondemos por lo que pase con ellos.',
      body: [
        'El responsable del tratamiento de tus datos personales es la persona natural que opera CyberLanguage, consultoría de visibilidad en IA (GEO / AEO).',
        'Responsable de que estos datos se traten conforme a la ley, y a quien puedes dirigir cualquier consulta o reclamo, es esa misma persona a través del canal de contacto indicado en la sección 7.',
      ],
    },
    {
      title: '2. Qué datos recogemos',
      summary: 'Los que tú escribes en el formulario, y los que tu navegador deja al visitar el sitio.',
      body: [
        'Datos que nos entregas directamente: tu nombre, tu correo electrónico, el nombre de tu organización y la dirección del sitio web que quieres analizar. Los recogemos solo cuando completas el formulario de auditoría.',
        'Datos que se generan por tu visita: dirección IP, tipo de navegador y dispositivo, páginas que visitas y tiempo de permanencia. Estos se recogen mediante herramientas de analítica y solo si aceptas las cookies no esenciales.',
        'No pedimos ni queremos datos sensibles. No solicitamos RUT, datos de salud, situación socioeconómica, afiliación política ni ningún otro dato que la ley califica como sensible. Por favor no los incluyas en los campos del formulario.',
      ],
    },
    {
      title: '3. Para qué los usamos',
      summary: 'Para tres cosas distintas, y cada una necesita tu permiso por separado.',
      body: [
        'Entregarte la auditoría que pediste. Usamos la URL para analizar tu sitio y tu correo para enviarte el reporte. Sin este dato no podemos prestarte el servicio, así que este consentimiento es obligatorio para usar la herramienta.',
        'Contactarte para conversar sobre una consultoría. Usamos tu nombre, correo y organización para hacer seguimiento comercial de tu solicitud.',
        'Enviarte contenidos por correo. Si lo autorizas marcando la casilla correspondiente, te enviamos una secuencia de correos con recomendaciones y contenidos sobre visibilidad en IA. Esta autorización es opcional, va separada de las anteriores, y no condiciona la entrega del reporte: puedes recibir tu auditoría sin aceptarla.',
        'Medir y mejorar el sitio. Usamos datos de navegación agregados para entender qué funciona y qué no. Esto ocurre solo si aceptas las cookies de analítica.',
        'No tomamos decisiones automatizadas que produzcan efectos jurídicos sobre ti, ni elaboramos perfiles con tus datos más allá de lo descrito acá.',
      ],
    },
    {
      title: '4. Con quién los compartimos',
      summary: 'Con los proveedores que necesitamos para operar. No los vendemos a nadie.',
      body: [
        'No vendemos, arrendamos ni cedemos tus datos personales a terceros con fines comerciales.',
        'Sí los compartimos con proveedores que nos prestan servicios y que solo pueden tratarlos siguiendo nuestras instrucciones: el servicio de alojamiento del sitio, la plataforma de envío de correos, la herramienta de analítica y la plataforma de agendamiento de reuniones.',
        'Transferencia internacional: varios de estos proveedores operan servidores fuera de Chile, principalmente en Estados Unidos y la Unión Europea. Esto significa que tus datos pueden almacenarse o procesarse en el extranjero. Al usar el formulario aceptas esa transferencia; exigimos a estos proveedores garantías contractuales de protección equivalentes a las que aplicamos nosotros.',
        'También podemos entregar tus datos cuando una autoridad competente lo requiera conforme a la ley.',
      ],
    },
    {
      title: '5. Cuánto tiempo los guardamos',
      summary: 'El tiempo necesario para cada finalidad, y después los eliminamos.',
      body: [
        'Datos de la auditoría (URL, puntaje y resultados): hasta 12 meses desde el análisis, para poder compararlos si vuelves a analizar tu sitio.',
        'Datos de contacto para seguimiento comercial: hasta 24 meses desde tu último contacto con nosotros.',
        'Datos para la secuencia de correos: mientras no revoques tu autorización. Cada correo incluye un enlace para darte de baja, y al hacerlo dejamos de usarlos para esa finalidad.',
        'Datos de analítica: hasta 14 meses, en formato agregado.',
        'Cumplidos estos plazos eliminamos los datos o los anonimizamos de forma irreversible, salvo que una obligación legal nos exija conservarlos más tiempo.',
      ],
    },
    {
      title: '6. Cookies',
      summary: 'Las imprescindibles van siempre; las de medición, solo si las aceptas.',
      body: [
        'Cookies esenciales: necesarias para que el sitio funcione, por ejemplo para recordar el idioma que elegiste. No requieren tu consentimiento porque sin ellas el sitio no opera.',
        'Cookies de analítica: nos dicen cómo se usa el sitio. Requieren tu consentimiento previo y puedes rechazarlas sin perder ninguna funcionalidad.',
        'Puedes cambiar tu decisión en cualquier momento desde la configuración de cookies del sitio, o borrar las cookies ya instaladas desde tu navegador.',
      ],
    },
    {
      title: '7. Tus derechos',
      summary: 'Puedes ver, corregir, borrar y llevarte tus datos cuando quieras. Es gratis.',
      body: [
        'Acceso: pedirnos qué datos tuyos tenemos y qué hacemos con ellos.',
        'Rectificación: corregirlos si están equivocados o incompletos.',
        'Supresión: pedir que los eliminemos, salvo que debamos conservarlos por una obligación legal.',
        'Oposición: pedir que dejemos de tratarlos para una finalidad determinada.',
        'Portabilidad: recibir tus datos en un formato estructurado y de uso común, o pedirnos que se los entreguemos a otro responsable.',
        'Bloqueo: pedir la suspensión temporal del tratamiento mientras se resuelve una solicitud tuya.',
        'Ejercer cualquiera de estos derechos es gratuito. Escríbenos al correo de contacto indicado más abajo y te respondemos dentro del plazo legal. Si tu solicitud no queda clara podemos pedirte que la precises, y podemos requerir verificar tu identidad antes de responder.',
        'Revocar tu consentimiento es igual de fácil que darlo: puedes hacerlo en cualquier momento, y eso no afecta la validez del tratamiento hecho antes de la revocación.',
      ],
    },
    {
      title: '8. Seguridad y brechas',
      summary: 'Protegemos tus datos, y si algo falla te lo decimos.',
      body: [
        'Aplicamos medidas técnicas y organizativas razonables para proteger tus datos: cifrado en tránsito, acceso restringido a quien lo necesita y proveedores que cumplen estándares de seguridad reconocidos.',
        'Ninguna medida es infalible. Si ocurre una vulneración de seguridad que afecte tus datos personales, la notificaremos a la Agencia de Protección de Datos Personales sin dilaciones indebidas y, cuando la brecha implique un riesgo elevado para tus derechos, te lo comunicaremos también a ti directamente.',
      ],
    },
    {
      title: '9. Menores de edad',
      summary: 'Este servicio es para adultos.',
      body: [
        'CyberLanguage está dirigido a dueños de negocios y responsables de sitios web mayores de 18 años. No recogemos deliberadamente datos de menores de edad.',
        'Si detectamos que hemos recibido datos de un menor sin la autorización que corresponde, los eliminaremos. Si crees que esto ocurrió, escríbenos y lo resolvemos.',
      ],
    },
    {
      title: '10. Cambios a esta política',
      summary: 'Si cambia algo relevante, te avisamos antes de aplicarlo.',
      body: [
        'Podemos actualizar esta política cuando cambien nuestros servicios o la normativa aplicable. La fecha de última actualización siempre está al comienzo del documento.',
        'Si el cambio afecta de forma sustancial cómo tratamos tus datos, te lo comunicaremos por correo antes de que entre en vigor, y cuando la ley lo exija te pediremos un nuevo consentimiento.',
      ],
    },
    {
      title: '11. Reclamos',
      summary: 'Si crees que hicimos algo mal, puedes reclamarnos a nosotros o a la autoridad.',
      body: [
        'Escríbenos primero: la mayoría de los problemas se resuelven directo y rápido.',
        'Si no quedas conforme con nuestra respuesta, o si no te respondemos, puedes presentar un reclamo ante la Agencia de Protección de Datos Personales, el organismo encargado de fiscalizar el cumplimiento de la Ley 21.719 en Chile.',
      ],
    },
  ],
};
