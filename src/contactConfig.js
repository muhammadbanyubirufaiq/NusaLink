// Keep illustrative until ownership and operation of BOTH channels are verified.
// To enable external links: update the data, then set mode and verified explicitly.
export const contactConfig = {
  mode: 'illustrative',
  verified: false,
  whatsapp: { name: 'WhatsApp', display: '0812-3456-78910', action: 'Chat WhatsApp' },
  email: { name: 'Email', address: 'cs@nusalink.com', action: 'Kirim Email' },
  hours: { days: 'Senin–Sabtu', time: '08.00–17.00', timezone: 'WIB' },
  note: 'Informasi kontak ilustratif untuk keperluan tugas kuliah.',
};

export function contactValue(channel, config = contactConfig) {
  return channel === 'whatsapp' ? config.whatsapp.display : config.email.address;
}

export function contactHref(channel, config = contactConfig) {
  if (config.mode !== 'operational' || config.verified !== true) return null;
  if (channel === 'whatsapp') {
    const international = config.whatsapp.display.replace(/\D/g, '').replace(/^0/, '62');
    return 'https://wa.me/' + international;
  }
  return 'mailto:' + config.email.address;
}
