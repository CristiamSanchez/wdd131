// Obtener y mostrar el año actual
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Obtener y mostrar la última fecha de modificación
const lastModified = document.getElementById("lastModified");
lastModified.textContent = `Last modified: ${document.lastModified}`;
