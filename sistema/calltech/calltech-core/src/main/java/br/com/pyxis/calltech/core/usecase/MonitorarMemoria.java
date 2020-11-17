package br.com.pyxis.calltech.core.usecase;

import br.com.pyxis.calltech.core.domain.Memoria;
import oshi.SystemInfo;
import oshi.hardware.GlobalMemory;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;

import java.lang.management.MemoryManagerMXBean;

public class MonitorarMemoria {

    private Memoria memoria;
    private GlobalMemory globalMemory;

    public MonitorarMemoria(HardwareAbstractionLayer hardwareAbstractionLayer) {
        this.globalMemory = hardwareAbstractionLayer.getMemory();
    }

    public Memoria execute() {
        this.memoria = new Memoria(
                globalMemory.getTotal(),
                globalMemory.getAvailable()
        );

        return memoria;
    }
}
