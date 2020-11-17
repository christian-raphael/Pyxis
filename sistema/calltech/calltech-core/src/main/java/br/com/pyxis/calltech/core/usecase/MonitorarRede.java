package br.com.pyxis.calltech.core.usecase;

import br.com.pyxis.calltech.core.domain.Rede;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.NetworkIF;
import oshi.software.os.OperatingSystem;

import java.util.ArrayList;
import java.util.List;

public class MonitorarRede {

    private HardwareAbstractionLayer hardwareAbstractionLayer;

    public MonitorarRede(SystemInfo systemInfo) {
        this.hardwareAbstractionLayer = systemInfo.getHardware();
    }

}
