package br.com.pyxis.calltech.swing.telas;

import br.com.pyxis.calltech.core.domain.Maquina;
import br.com.pyxis.calltech.core.usecase.MonitorarMaquina;
import com.sun.org.apache.xalan.internal.xsltc.compiler.sym;
import java.awt.Color;
import oshi.hardware.HardwareAbstractionLayer;

public class jpVisaoGeral extends javax.swing.JPanel {

    private MonitorarMaquina monitorarMaquina;
    private Maquina maquina;
    
    /**
     * Creates new form jpCpu
     */
    public jpVisaoGeral(HardwareAbstractionLayer hardwareAbstractionLayer) {
        initComponents();
        this.monitorarMaquina = new MonitorarMaquina(hardwareAbstractionLayer);
        this.maquina = monitorarMaquina.execute();
        
        maquina.setStatus(true);
        preencherLabels();
    }
    
    public void preencherLabels() {
        jlNomeMaquina.setText("Maquina 1A");
        jlFabricante.setText(maquina.getFabricante());
        jlModelo.setText(maquina.getModelo());
        jlNumeroSerie.setText(maquina.getNumeroSerie());
        
        jlStatus.setText(maquina.getStatus() ? "Ativa" : "Inativa");
        jlStatus.setForeground(maquina.getStatus() ? Color.GREEN : Color.RED);
        
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel1 = new javax.swing.JLabel();
        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jLabel6 = new javax.swing.JLabel();
        jlNumeroSerie = new javax.swing.JLabel();
        jlNomeMaquina = new javax.swing.JLabel();
        jlFabricante = new javax.swing.JLabel();
        jlModelo = new javax.swing.JLabel();
        jlStatus = new javax.swing.JLabel();

        jLabel1.setFont(new java.awt.Font("Montserrat", 1, 24)); // NOI18N
        jLabel1.setForeground(new java.awt.Color(90, 90, 90));
        jLabel1.setText("M�quina");

        jLabel2.setFont(new java.awt.Font("Montserrat", 1, 36)); // NOI18N
        jLabel2.setForeground(new java.awt.Color(90, 90, 90));
        jLabel2.setText("Vis�o Geral");

        jLabel3.setFont(new java.awt.Font("Montserrat", 1, 24)); // NOI18N
        jLabel3.setForeground(new java.awt.Color(90, 90, 90));
        jLabel3.setText("Modelo");

        jLabel4.setFont(new java.awt.Font("Montserrat", 1, 24)); // NOI18N
        jLabel4.setForeground(new java.awt.Color(90, 90, 90));
        jLabel4.setText("N�mero de s�rie");

        jLabel5.setFont(new java.awt.Font("Montserrat", 1, 24)); // NOI18N
        jLabel5.setForeground(new java.awt.Color(90, 90, 90));
        jLabel5.setText("Status: ");

        jLabel6.setFont(new java.awt.Font("Montserrat", 1, 24)); // NOI18N
        jLabel6.setForeground(new java.awt.Color(90, 90, 90));
        jLabel6.setText("Fabricante");

        jlNumeroSerie.setFont(new java.awt.Font("Montserrat", 0, 18)); // NOI18N
        jlNumeroSerie.setForeground(new java.awt.Color(90, 90, 90));
        jlNumeroSerie.setText(" ");

        jlNomeMaquina.setFont(new java.awt.Font("Montserrat", 0, 18)); // NOI18N
        jlNomeMaquina.setForeground(new java.awt.Color(90, 90, 90));
        jlNomeMaquina.setText(" ");

        jlFabricante.setFont(new java.awt.Font("Montserrat", 0, 18)); // NOI18N
        jlFabricante.setForeground(new java.awt.Color(90, 90, 90));
        jlFabricante.setText(" ");

        jlModelo.setFont(new java.awt.Font("Montserrat", 0, 18)); // NOI18N
        jlModelo.setForeground(new java.awt.Color(90, 90, 90));
        jlModelo.setText(" ");

        jlStatus.setFont(new java.awt.Font("Montserrat", 0, 24)); // NOI18N
        jlStatus.setForeground(new java.awt.Color(90, 90, 90));
        jlStatus.setText(" ");

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(this);
        this.setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel5)
                                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                                .addComponent(jlStatus, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addComponent(jLabel2))
                        .addGap(0, 0, Short.MAX_VALUE))
                    .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel3, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jlModelo, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 63, Short.MAX_VALUE)
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jlFabricante, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel6, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE)))
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addComponent(jLabel1, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jLabel4, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jlNumeroSerie, javax.swing.GroupLayout.PREFERRED_SIZE, 450, javax.swing.GroupLayout.PREFERRED_SIZE)
                            .addComponent(jlNomeMaquina, javax.swing.GroupLayout.PREFERRED_SIZE, 213, javax.swing.GroupLayout.PREFERRED_SIZE))
                        .addGap(29, 29, 29)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addGap(48, 48, 48)
                .addComponent(jLabel2)
                .addGap(41, 41, 41)
                .addComponent(jLabel1)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jlNomeMaquina)
                .addGap(29, 29, 29)
                .addComponent(jLabel4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jlNumeroSerie)
                .addGap(33, 33, 33)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(jLabel3))
                .addGap(7, 7, 7)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jlModelo)
                    .addComponent(jlFabricante))
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED, 40, Short.MAX_VALUE)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING, false)
                    .addComponent(jLabel5, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                    .addComponent(jlStatus))
                .addGap(47, 47, 47))
        );
    }// </editor-fold>//GEN-END:initComponents


    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jlFabricante;
    private javax.swing.JLabel jlModelo;
    private javax.swing.JLabel jlNomeMaquina;
    private javax.swing.JLabel jlNumeroSerie;
    private javax.swing.JLabel jlStatus;
    // End of variables declaration//GEN-END:variables
}
