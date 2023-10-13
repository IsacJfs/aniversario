AOS.init();

const dataDoAniversario = new Date("Apr 2, 2024 05:00:00");
const timeStampDoAniversario = dataDoAniversario.getTime();

const contadorRegressivo = setInterval(function () {
    const dataAtual = new Date();
    const timeStampAtual = dataAtual.getTime();

    const distanciaAteOEvento = timeStampDoAniversario - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60
    const segundoEmMs = 1000

    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMs);
    const horasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMs) / horaEmMs);
    const minutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % minutoEmMs) / segundoEmMs);

    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if (distanciaAteOEvento < 0) {
        clearInterval(contadorRegressivo);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }
}, 1000)