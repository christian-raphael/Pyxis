package br.com.pyxis.calltech.core.domain;

import oshi.util.FormatUtil;

import java.text.Normalizer;

public class Memoria {

    private long capacidadeMaxima;
    private long memoriaDisponivel;
    private long memoriaEmUso;
    private Double porcentagemUso;

    public Memoria(long capacidadeMaxima, long memoriaDisponivel) {
        this.capacidadeMaxima = capacidadeMaxima;
        this.memoriaDisponivel = memoriaDisponivel;
        this.memoriaEmUso = capacidadeMaxima - memoriaDisponivel;
        this.porcentagemUso = Double.valueOf((memoriaEmUso * 100) / capacidadeMaxima);
    }

    public Double getPorcentagemUso() {
        return porcentagemUso;
    }

    public void setPorcentagemUso(Double porcentagemUso) {
        this.porcentagemUso = porcentagemUso;
    }

    public long getCapacidadeMaxima() {
        return capacidadeMaxima;
    }

    public void setCapacidadeMaxima(long capacidadeMaxima) {
        this.capacidadeMaxima = capacidadeMaxima;
    }

    public long getMemoriaEmUso() {
        return memoriaEmUso;
    }

    public void setMemoriaEmUso(long memoriaEmUso) {
        this.memoriaEmUso = memoriaEmUso;
    }

    public long getMemoriaDisponivel() {
        return memoriaDisponivel;
    }

    public void setMemoriaDisponivel(long memoriaDisponivel) {
        this.memoriaDisponivel = memoriaDisponivel;
    }

    @Override
    public String toString() {
        return "Memoria{" +
                "\nporcentagemUso=" + porcentagemUso +
                "%\n, capacidadeMaxima=" + FormatUtil.formatBytes(capacidadeMaxima) +
                "\n, memoriaDisponivel=" + FormatUtil.formatBytes(memoriaDisponivel) +
                "\n, memoriaEmUso=" + FormatUtil.formatBytes(memoriaEmUso) +
                '}';
    }
}
