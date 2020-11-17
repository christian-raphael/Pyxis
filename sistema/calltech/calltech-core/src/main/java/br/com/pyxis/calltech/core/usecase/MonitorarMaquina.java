package br.com.pyxis.calltech.core.usecase;

import br.com.pyxis.calltech.core.domain.Maquina;
import oshi.SystemInfo;
import oshi.hardware.ComputerSystem;
import oshi.hardware.HardwareAbstractionLayer;

public class MonitorarMaquina {

    private Maquina maquina;
    private ComputerSystem computerSystem;

    public MonitorarMaquina(HardwareAbstractionLayer hardwareAbstractionLayer) {
        this.computerSystem = hardwareAbstractionLayer.getComputerSystem();
    }

    public Maquina execute() {
        this.maquina = new Maquina(
                computerSystem.getModel(),
                computerSystem.getSerialNumber(),
                computerSystem.getManufacturer()
        );

        return maquina;
    }
}
