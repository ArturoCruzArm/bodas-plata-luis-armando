// Lista de fotos generada automáticamente
// Total de fotos: 7
// Generado: 2026-02-28 16:40:49

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
    },
    {
        "name": "DJI_20260228_162041_044",
        "path": "imagenes/DJI_20260228_162041_044.webp",
        "filename": "DJI_20260228_162041_044.webp"
    },
    {
        "name": "DJI_20260228_162111_556",
        "path": "imagenes/DJI_20260228_162111_556.webp",
        "filename": "DJI_20260228_162111_556.webp"
    },
    {
        "name": "DJI_20260228_162116_413",
        "path": "imagenes/DJI_20260228_162116_413.webp",
        "filename": "DJI_20260228_162116_413.webp"
    },
    {
        "name": "DJI_20260228_162120_675",
        "path": "imagenes/DJI_20260228_162120_675.webp",
        "filename": "DJI_20260228_162120_675.webp"
    },
    {
        "name": "DJI_20260228_162124_409",
        "path": "imagenes/DJI_20260228_162124_409.webp",
        "filename": "DJI_20260228_162124_409.webp"
    }
];

window.addEventListener('DOMContentLoaded', function() {
    console.log(`Cargadas ${photos.length} fotos`);
    renderGallery();
    updateStats();
});
