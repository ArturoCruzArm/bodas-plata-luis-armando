// Lista de fotos generada automáticamente
// Total de fotos: 2
// Generado: 2026-02-28 16:39:57

const photos = [
    {
        "name": "DJI_20260228_162033_665",
        "path": "imagenes/DJI_20260228_162033_665.webp",
        "filename": "DJI_20260228_162033_665.webp"
    },
    {
        "name": "DJI_20260228_162037_491",
        "path": "imagenes/DJI_20260228_162037_491.webp",
        "filename": "DJI_20260228_162037_491.webp"
    }
];

window.addEventListener('DOMContentLoaded', function() {
    console.log(`Cargadas ${photos.length} fotos`);
    renderGallery();
    updateStats();
});
