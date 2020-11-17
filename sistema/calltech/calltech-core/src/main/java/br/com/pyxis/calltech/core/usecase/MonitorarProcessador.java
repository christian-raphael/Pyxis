package br.com.pyxis.calltech.core.usecase;

import br.com.pyxis.calltech.core.domain.Processador;
import oshi.SystemInfo;
import oshi.hardware.CentralProcessor;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class MonitorarProcessador{

    private Processador processador;
    private HardwareAbstractionLayer hardwareAbstractionLayer;
    private OperatingSystem operatingSystem;

    public MonitorarProcessador(SystemInfo systemInfo) {
        this.processador = new Processador();
        this.hardwareAbstractionLayer = systemInfo.getHardware();
        this.operatingSystem = systemInfo.getOperatingSystem();
    }

    public Processador executar() {
       processador.setModelo(
               hardwareAbstractionLayer.getProcessor().getProcessorIdentifier().getName()
       );

       processador.setVelocidadeBase(
               hardwareAbstractionLayer.getProcessor().getMaxFreq()
       );

       List<OSProcess> processos =  operatingSystem.getProcesses();

       processador.setProcessos(processos);

       processador.setTotalProcessos(
               operatingSystem.getProcessCount()
       );



        return processador;
    }

}
