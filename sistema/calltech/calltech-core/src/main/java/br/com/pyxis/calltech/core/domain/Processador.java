package br.com.pyxis.calltech.core.domain;

import oshi.software.os.OSProcess;
import oshi.util.FormatUtil;

import java.util.List;
import java.util.stream.Collectors;

public class Processador {

    private String modelo;
    private long velocidadeBase;
    private Integer porcentagemUso;
    private List<OSProcess> processos;
    private Integer totalProcessos;

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public long getVelocidadeBase() {
        return velocidadeBase;
    }

    public void setVelocidadeBase(long velocidadeBase) {
        this.velocidadeBase = velocidadeBase;
    }

    public Integer getPorcentagemUso() {
        return porcentagemUso;
    }

    public void setPorcentagemUso(Integer porcentagemUso) {
        this.porcentagemUso = porcentagemUso;
    }

    public List<OSProcess> getProcessos() {
        return processos;
    }

    public void setProcessos(List<OSProcess> processos) {
        this.processos = processos;
    }

    public Integer getTotalProcessos() {
        return totalProcessos;
    }

    public void setTotalProcessos(Integer totalProcessos) {
        this.totalProcessos = totalProcessos;
    }

    @Override
    public String toString() {
        return "Processador{" +
                "modelo='" + modelo + '\'' +
                "\nvelocidadeBase=" + FormatUtil.formatHertz(velocidadeBase) +
                "\nporcentagemUso=" + porcentagemUso +
                "\nprocessos=" + processos.stream()
                        .map(
                                (processo) -> "ID: "+processo.getProcessID()+" Nome: "+processo.getName()+"\n"
                        )
                        .collect(Collectors.toList())
                        .toString() +
                "\ntotal de processos=" + totalProcessos
                + '}';
    }
}
