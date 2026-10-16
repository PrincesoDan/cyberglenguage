import { describe, expect, it } from 'vitest';
import { buildWhatsAppUrl, fillServiceTemplate } from './whatsapp';

describe('fillServiceTemplate', () => {
  const template = 'Quiero información sobre {service}.';

  it('inserta un servicio', () => {
    expect(fillServiceTemplate(template, ['Anuncios en redes sociales'], ' y ')).toBe(
      'Quiero información sobre Anuncios en redes sociales.',
    );
  });

  it('une dos servicios con la conjunción del idioma', () => {
    expect(fillServiceTemplate(template, ['A', 'B'], ' y ')).toBe('Quiero información sobre A y B.');
    expect(fillServiceTemplate('Info about {service}.', ['A', 'B'], ' and ')).toBe('Info about A and B.');
  });
});

describe('buildWhatsAppUrl', () => {
  it('apunta al número del brief', () => {
    expect(buildWhatsAppUrl('Hola')).toBe('https://wa.me/17879559917?text=Hola');
  });

  it('codifica tildes, ñ, & y + sin perderlos', () => {
    const url = buildWhatsAppUrl('Diseño & fotos + video ¿sí?');
    const text = new URL(url).searchParams.get('text');
    expect(text).toBe('Diseño & fotos + video ¿sí?');
    expect(url).not.toContain(' ');
  });
});
