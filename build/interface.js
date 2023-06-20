"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAMD = exports.createIntel = void 0;
function createIntel(processor) {
    console.log(`\n-----------\nTerima kasih ${processor.brand}\n-----------\nanda telah berhasil membuat prosesor dengan detail sebagai berikut:\n`);
    console.log(`Nama base model: ${processor.baseModel}`);
    console.log(`Nama model: ${processor.modelName}`);
    console.log(`Jumlah core: ${processor.coreTotal}`);
    console.log(`Jumlah clock speed: ${processor.clockSpeed}`);
    console.log(`Fitur turbo boost: ${processor.turboBoost}`);
}
exports.createIntel = createIntel;
function createAMD(processor) {
    console.log(`
    -----------
    Terima kasih ${processor.brand}
    -----------
    anda telah berhasil membuat prosesor dengan detail sebagai berikut:`);
    console.log(`Nama base model: ${processor.baseModel}`);
    console.log(`Nama model: ${processor.modelName}`);
    console.log(`Jumlah core: ${processor.coreTotal}`);
    console.log(`Jumlah clock speed: ${processor.clockSpeed}`);
    console.log(`Fitur precision boost: ${processor.precisionBoost}`);
}
exports.createAMD = createAMD;
