/* ═══════════════════════════════════════════
   ORTEGA RENT CAR · FLOTA
   Único archivo de datos de vehículos.
   Las tarjetas, selects y la calculadora se generan desde aquí.

   ⚠ PRECIOS = PLACEHOLDERS. Reemplazar con las tarifas reales:
     precio   → RD$ por día (1–4 días)
     precio5  → RD$ por día (5 días o más)
═══════════════════════════════════════════ */

window.VEHICULOS = [
  {
    id: 'gle63',
    marca: 'Mercedes-Benz',
    nombre: 'Mercedes-AMG GLE 63 S Coupé',
    modelo: 'AMG GLE 63 S Coupé',
    ano: 2022,
    color: 'Negro',
    categoria: 'SUV',
    pasajeros: 5,
    transmision: 'Automática',
    imagen: 'imagenes/flota/mercedes-gle63s-coupe-negro.webp',
    posicion: 'center 62%',
    precio: 15000,   // PLACEHOLDER
    precio5: 13500,  // PLACEHOLDER
  },
  {
    id: 'gle53',
    marca: 'Mercedes-Benz',
    nombre: 'Mercedes-AMG GLE 53 Coupé',
    modelo: 'AMG GLE 53 Coupé',
    ano: null,
    color: 'Blanco',
    categoria: 'SUV',
    pasajeros: 5,
    transmision: 'Automática',
    imagen: 'imagenes/flota/mercedes-gle53-coupe-blanco.webp',
    posicion: 'center 58%',
    precio: 12000,   // PLACEHOLDER
    precio5: 10800,  // PLACEHOLDER
  },
  {
    id: 'gt3rs',
    marca: 'Porsche',
    nombre: 'Porsche 911 GT3 RS',
    modelo: '911 GT3 RS',
    ano: null,
    color: 'Gris',
    categoria: 'Lujo',
    pasajeros: 2,
    transmision: 'Automática (PDK)',
    imagen: 'imagenes/flota/porsche-911-gt3rs.webp',
    posicion: '55% center',
    precio: 25000,   // PLACEHOLDER
    precio5: 22500,  // PLACEHOLDER
  },
  {
    id: 'escalade',
    marca: 'Cadillac',
    nombre: 'Cadillac Escalade ESV',
    modelo: 'Escalade ESV',
    ano: null,
    color: 'Negro',
    categoria: 'SUV',
    pasajeros: 7,
    transmision: 'Automática',
    imagen: 'imagenes/flota/cadillac-escalade-esv.webp',
    posicion: 'center 60%',
    precio: 14000,   // PLACEHOLDER
    precio5: 12600,  // PLACEHOLDER
  },
];

/* Nombre completo para mensajes: "Mercedes-AMG GLE 63 S Coupé 2022" */
window.vehiculoLabel = function (v) {
  return v.nombre + (v.ano ? ' ' + v.ano : '');
};
