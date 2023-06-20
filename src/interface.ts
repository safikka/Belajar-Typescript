type CoreCount = 2 | 4 | 6 | 8;
type CoreName = "dualcore" | "quadcore" | "hexacore" | "octacore"
type Core = CoreCount | CoreName

interface IProcessor {
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
}

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost: boolean;
}

function createIntel(processor:Intel):void {
    console.log(`\n-----------\nTerima kasih ${processor.brand}\n-----------\nanda telah berhasil membuat prosesor dengan detail sebagai berikut:\n`)

    console.log(`Nama base model: ${processor.baseModel}`)
    console.log(`Nama model: ${processor.modelName}`)
    console.log(`Jumlah core: ${processor.coreTotal}`)
    console.log(`Jumlah clock speed: ${processor.clockSpeed}`)
    console.log(`Fitur turbo boost: ${processor.turboBoost}`)
}

function createAMD(processor:AMD):void {
    console.log(`
    -----------
    Terima kasih ${processor.brand}
    -----------
    anda telah berhasil membuat prosesor dengan detail sebagai berikut:`)

    console.log(`Nama base model: ${processor.baseModel}`)
    console.log(`Nama model: ${processor.modelName}`)
    console.log(`Jumlah core: ${processor.coreTotal}`)
    console.log(`Jumlah clock speed: ${processor.clockSpeed}`)
    console.log(`Fitur precision boost: ${processor.precisionBoost}`)
}

export {createIntel, createAMD, Intel, AMD}