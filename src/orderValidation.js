// Shared by the form and the final confirmation guard. No data is persisted.
export function validateCustomer(customer, categoryID) {
  const errors = {};
  if (customer.name.trim().length < 2) errors.name = 'Masukkan nama lengkap, minimal 2 karakter.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(customer.email.trim())) errors.email = 'Masukkan email lengkap, misalnya nama@example.com.';
  const phone = customer.phone.trim();
  const digits = phone.replace(/\D/g, '').length;
  if (!/^\+?[0-9 ()-]+$/.test(phone) || digits < 9 || digits > 15) errors.phone = 'Gunakan 9–15 digit. Tanda +, spasi, kurung, dan tanda hubung boleh digunakan.';
  if (categoryID !== 'rumah' && !customer.organization.trim()) errors.organization = 'Masukkan nama instansi untuk layanan ini.';
  if (!customer.address.trim()) errors.address = 'Masukkan alamat lokasi pemasangan.';
  return errors;
}
