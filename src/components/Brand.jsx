import logo from '../assets/cmb-logo.jpeg';

export default function Brand({ compact = false }) {
  return (
    <a href="#beranda" className="inline-flex shrink-0 items-center gap-3">
      <img src={logo} alt="CMB" width="953" height="439" className="h-auto w-[88px] shrink-0 sm:w-[104px]" />
      <span className={`border-l border-line pl-3 leading-tight ${compact ? '' : 'max-[360px]:hidden'}`}>
        <span className="block text-[11px] font-medium text-muted">PT. Cahaya Mandiri</span>
        <span className="mt-0.5 block text-lg font-bold text-ink">BAJAMAS</span>
      </span>
      <span className="sr-only">Beranda</span>
    </a>
  );
}
