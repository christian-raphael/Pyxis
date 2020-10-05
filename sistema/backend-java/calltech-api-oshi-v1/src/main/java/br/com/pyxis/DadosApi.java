package br.com.pyxis;

import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;

import java.util.List;

public class DadosApi {

    public static void main(String[] args) {
        //Instancia o Objeto que contém as informações do Sistema
        SystemInfo si = new SystemInfo();

        //Utiliza o Objeto "si" para pegar informações sobre o hardware
        HardwareAbstractionLayer hal = si.getHardware();

        //Utiliza o Objeto "si" para pegar informações sobre o sistema operacional
        OperatingSystem os = si.getOperatingSystem();

        System.out.println("Disco");
        //Metódo para pegar informações dos Discos
        System.out.println(hal.getDiskStores());

        System.out.println("\nCPU");
        //Metódo para pegar informações da CPU
        System.out.println(hal.getProcessor());

        System.out.println("\nMemória");
        //Metódo para pegar informações de Memória
        System.out.println(hal.getMemory());

        System.out.println("\nProcessos");
        //Metódo para pegar uma Lista de Processos
        List<OSProcess> a = os.getProcesses();

        //Listando cada processo individualmente
        for (OSProcess process: a) {
            System.out.println(process+"\n");
        }
    }
}
