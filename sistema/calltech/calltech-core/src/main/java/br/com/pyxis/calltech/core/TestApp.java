package br.com.pyxis.calltech.core;

import br.com.pyxis.calltech.core.domain.Maquina;
import br.com.pyxis.calltech.core.domain.Memoria;
import br.com.pyxis.calltech.core.domain.Processador;
import br.com.pyxis.calltech.core.usecase.MonitorarMaquina;
import br.com.pyxis.calltech.core.usecase.MonitorarMemoria;
import br.com.pyxis.calltech.core.usecase.MonitorarProcessador;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.util.FormatUtil;

public class TestApp {

    public static void main(String[] args) {
        SystemInfo si = new SystemInfo();
        HardwareAbstractionLayer hardwareAbstractionLayer = si.getHardware();

//        MonitorarProcessador mp = new MonitorarProcessador(si);
//
//        Processador processador = mp.executar();
//        System.out.println(processador.toString());

//        MonitorarMemoria mm = new MonitorarMemoria(hardwareAbstractionLayer);
//
//        Memoria memoria = mm.execute();
//
//        System.out.println(memoria.toString());

//        MonitorarMaquina mm = new MonitorarMaquina(hardwareAbstractionLayer);
//
//        Maquina maquina = mm.execute();
//
//        System.out.println(maquina.toString());

        String a = String.format("CurrentQueueLength: %o \n Model: %s \n Name: %s \n ReadBytes: %s \n Reads: %o \n" +
                      "Serial: %s \n Size: %s \n TransferTime: %o \n WriteBytes: %s \n Writes: %o \n",
                    hardwareAbstractionLayer.getDiskStores().get(0).getCurrentQueueLength(),
                    hardwareAbstractionLayer.getDiskStores().get(0).getModel(),
                    hardwareAbstractionLayer.getDiskStores().get(0).getName(),
                    FormatUtil.formatBytes(hardwareAbstractionLayer.getDiskStores().get(0).getReadBytes()),
                    hardwareAbstractionLayer.getDiskStores().get(0).getReads(),
                    hardwareAbstractionLayer.getDiskStores().get(0).getSerial(),
                    FormatUtil.formatBytes(hardwareAbstractionLayer.getDiskStores().get(0).getSize()),
                    hardwareAbstractionLayer.getDiskStores().get(0).getTransferTime() / 1000 / 60 / 60 / 24 / 365,
                    FormatUtil.formatBytes(hardwareAbstractionLayer.getDiskStores().get(0).getWriteBytes()),
                    hardwareAbstractionLayer.getDiskStores().get(0).getWrites()
                );

        System.out.println(a);

    }

}
