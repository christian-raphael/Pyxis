package br.com.pyxis.calltech.core.domain;

public class Rede {

    private String ipv4;
    private String ipv6;
    private Double velocidade;
    private String status;

    public String getIpv4() {
        return ipv4;
    }

    public void setIpv4(String ipv4) {
        this.ipv4 = ipv4;
    }

    public String getIpv6() {
        return ipv6;
    }

    public void setIpv6(String ipv6) {
        this.ipv6 = ipv6;
    }

    public Double getVelocidade() {
        return velocidade;
    }

    public void setVelocidade(Double velocidade) {
        this.velocidade = velocidade;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    @Override
    public String toString() {
        return "Rede{" +
                "ipv4='" + ipv4 + '\'' +
                ", ipv6='" + ipv6 + '\'' +
                ", velocidade=" + velocidade +
                ", status='" + status + '\'' +
                '}';
    }
}
