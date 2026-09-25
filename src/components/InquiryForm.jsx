import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { products } from '../data/catalog.js';

export default function InquiryForm() {
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    for (const name of ['name', 'material', 'specification', 'destination']) {
      if (!data.get(name).trim()) {
        const field = event.currentTarget.elements.namedItem(name);
        field.setCustomValidity('Mohon lengkapi kolom ini.');
        field.reportValidity();
        return;
      }
    }
    const text = [
      'Halo PT. Cahaya Mandiri Bajamas, saya ingin meminta penawaran:',
      '',
      `Nama: ${data.get('name').trim()}`,
      `Perusahaan: ${data.get('company').trim() || '-'}`,
      `Material: ${data.get('material').trim()}`,
      `Ukuran / jumlah: ${data.get('specification').trim()}`,
      `Lokasi pengiriman: ${data.get('destination').trim()}`
    ].join('\n');
    window.open(`https://wa.me/6281333399362?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer');
  }

  return (
    <form id="permintaan" aria-labelledby="inquiry-title" onSubmit={handleSubmit} onInput={(event) => event.target.setCustomValidity?.('')} className="self-start rounded-lg border border-line bg-surface p-5 sm:p-8">
      <h3 id="inquiry-title" className="text-xl font-bold text-ink sm:text-2xl">Permintaan penawaran</h3>
      <p className="mt-3 text-sm leading-7 text-muted">Sampaikan kebutuhan material Anda kepada tim CMB.</p>
      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Nama" id="inquiry-name"><input className="form-field" id="inquiry-name" name="name" autoComplete="name" maxLength={100} required /></Field>
        <Field label="Perusahaan" optional id="inquiry-company"><input className="form-field" id="inquiry-company" name="company" autoComplete="organization" maxLength={150} /></Field>
      </div>
      <div className="mt-5"><Field label="Produk / material" id="inquiry-material"><input className="form-field" id="inquiry-material" name="material" list="material-options" placeholder="Contoh: Plat hitam" maxLength={200} required /><datalist id="material-options">{products.map((item) => <option key={item.slug} value={item.name} />)}</datalist></Field></div>
      <div className="mt-5"><Field label="Ukuran dan jumlah" id="inquiry-specification"><textarea className="form-field min-h-[104px] resize-y" id="inquiry-specification" name="specification" placeholder="Contoh: tebal 6 mm, ukuran 4 x 8 ft, 10 lembar" rows={3} maxLength={1500} required /></Field></div>
      <div className="mt-5"><Field label="Lokasi pengiriman" id="inquiry-destination"><input className="form-field" id="inquiry-destination" name="destination" autoComplete="address-level2" placeholder="Kota atau alamat proyek" maxLength={300} required /></Field></div>
      <button type="submit" className="btn btn-primary mt-7 w-full"><MessageCircle size={18} aria-hidden="true" />Lanjut ke WhatsApp<ArrowUpRight size={17} aria-hidden="true" /></button>
      <p className="mt-3 text-xs leading-6 text-muted">Anda dapat meninjau pesan sebelum mengirimnya di WhatsApp.</p>
    </form>
  );
}

function Field({ label, optional, id, children }) {
  return <div><label htmlFor={id} className="mb-2 block text-sm font-semibold text-ink">{label}{optional && <span className="ml-1 text-xs font-normal text-muted">(opsional)</span>}</label>{children}</div>;
}
