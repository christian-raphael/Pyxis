package br.com.pyxis.calltech.core.domain;

public class Disco {

    private Integer porcetagemUso;
    private Double capacidadeMaxima;
    private Double discoEmUso;

    public Integer getPorcetagemUso() {
        return porcetagemUso;
    }

    public void setPorcetagemUso(Integer porcetagemUso) {
        this.porcetagemUso = porcetagemUso;
    }

    public Double getCapacidadeMaxima() {
        return capacidadeMaxima;
    }

    public void setCapacidadeMaxima(Double capacidadeMaxima) {
        this.capacidadeMaxima = capacidadeMaxima;
    }

    public Double getDiscoEmUso() {
        return discoEmUso;
    }

    public void setDiscoEmUso(Double discoEmUso) {
        this.discoEmUso = discoEmUso;
    }

    @Override
    public String toString() {
        return "Disco{" +
                "porcetagemUso=" + porcetagemUso +
                ", capacidadeMaxima=" + capacidadeMaxima +
                ", discoEmUso=" + discoEmUso +
                '}';
    }
}
