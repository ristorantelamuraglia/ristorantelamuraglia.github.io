<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script>
    // Coordinate esatte per Via A. Doria, 3, Gallarate
    const lat = 45.66068;
    const lng = 8.79155;

    // Inizializzazione Mappa
    const map = L.map('map', { center: [lat, lng], zoom: 17, scrollWheelZoom: false });
    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png').addTo(map);

    // Icona personalizzata
    const customIcon = L.divIcon({
        html: `<div style="background: var(--red); width: 40px; height: 40px; border-radius: 50%; border: 2px solid white; display: flex; align-items: center; justify-content: center; font-size: 20px; box-shadow: 0 0 15px var(--red-glow);">🏯</div>`,
        className: '', iconSize: [40, 40], iconAnchor: [20, 40]
    });

    // Marker con Popup
    L.marker([lat, lng], {icon: customIcon}).addTo(map)
        .bindPopup('<b>La Muraglia</b><br>Via A. Doria, 3, Gallarate')
        .openPopup();

    // Animazione Scroll Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
</script>
