package br.com.pyxis.calltech.core.domain;

public class Maquina {

    private String nome;
    private String modelo;
    private String numeroSerie;
    private String fabricante;
    private Boolean status;

    public Maquina(String modelo, String numeroSerie, String fabricante) {
        this.modelo = modelo;
        this.numeroSerie = numeroSerie;
        this.fabricante = fabricante;
    }

    public String getNome() {
        return nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getModelo() {
        return modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getNumeroSerie() {
        return numeroSerie;
    }

    public void setNumeroSerie(String numeroSerie) {
        this.numeroSerie = numeroSerie;
    }

    public String getFabricante() {
        return fabricante;
    }

    public void setFabricante(String fabricante) {
        this.fabricante = fabricante;
    }

    public Boolean getStatus() {
        return status;
    }

    public void setStatus(Boolean status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Maquina{" +
                "nome='" + nome + '\'' +
                ", modelo='" + modelo + '\'' +
                ", token='" + numeroSerie + '\'' +
                ", fabricante='" + fabricante + '\'' +
                ", status=" + status +
                '}';
    }
}
