export function VehicleGallery({ images, alt }: { images: string[]; alt: string }) {
  return <div className="vehicle-gallery">{images.map((src, index) => <div className="gallery-image" key={`${src}-${index}`}><img src={src} alt={`${alt} — vue ${index + 1}`} loading={index === 0 ? 'eager' : 'lazy'} onError={e => { e.currentTarget.style.display = 'none'; }} /><span>VISUEL DE DÉMONSTRATION</span></div>)}</div>;
}
