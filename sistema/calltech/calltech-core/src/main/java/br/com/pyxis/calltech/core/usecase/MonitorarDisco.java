package br.com.pyxis.calltech.core.usecase;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OperatingSystem;

public class MonitorarDisco {

    private SystemInfo systemInfo;
    private OperatingSystem operatingSystem;
    private HardwareAbstractionLayer hardwareAbstractionLayer;

    public MonitorarDisco() {
        this.systemInfo = new SystemInfo();
        this.operatingSystem = systemInfo.getOperatingSystem();
        this.hardwareAbstractionLayer = systemInfo.getHardware();
    }
}
