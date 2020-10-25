package br.com.pyxis.telas;

import br.com.wmixvideo.slack.Slack;
import java.time.LocalTime;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import oshi.SystemInfo;
import oshi.hardware.HWDiskStore;
import oshi.hardware.HWPartition;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;
import oshi.util.FormatUtil;
import java.time.LocalTime;

public class TelaDados extends javax.swing.JFrame {

    /**
     * Creates new form TelaDados
     */
    public TelaDados(){
        initComponents();
    }

    /**
     * This method is called from within the constructor to initialize the form.
     * WARNING: Do NOT modify this code. The content of this method is always
     * regenerated by the Form Editor.
     */
    @SuppressWarnings("unchecked")
    // <editor-fold defaultstate="collapsed" desc="Generated Code">//GEN-BEGIN:initComponents
    private void initComponents() {

        jLabel2 = new javax.swing.JLabel();
        jLabel3 = new javax.swing.JLabel();
        jLabel4 = new javax.swing.JLabel();
        jLabel5 = new javax.swing.JLabel();
        jspProcessos = new javax.swing.JScrollPane();
        taProcessos = new javax.swing.JTextArea();
        lbMemoria = new javax.swing.JLabel();
        lbCpu1 = new javax.swing.JLabel();
        jScrollPane1 = new javax.swing.JScrollPane();
        taDisco = new javax.swing.JTextArea();
        jLabel6 = new javax.swing.JLabel();
        lbUltimaLeitura = new javax.swing.JLabel();
        jLabel7 = new javax.swing.JLabel();
        jPanel1 = new javax.swing.JPanel();
        jLabel1 = new javax.swing.JLabel();
        jPanel2 = new javax.swing.JPanel();

        setDefaultCloseOperation(javax.swing.WindowConstants.EXIT_ON_CLOSE);

        jLabel2.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        jLabel2.setText("CPU:");

        jLabel3.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        jLabel3.setText("Mem�ria:");

        jLabel4.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        jLabel4.setText("Informa��es de disco:");

        jLabel5.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        jLabel5.setText("Processos abertos:");

        taProcessos.setColumns(20);
        taProcessos.setRows(5);
        jspProcessos.setViewportView(taProcessos);

        lbMemoria.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        lbMemoria.setText("---");

        lbCpu1.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        lbCpu1.setText("---");

        taDisco.setColumns(20);
        taDisco.setRows(5);
        jScrollPane1.setViewportView(taDisco);

        jLabel6.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        jLabel6.setText("�ltima leitura:");

        lbUltimaLeitura.setFont(new java.awt.Font("SansSerif", 1, 14)); // NOI18N
        lbUltimaLeitura.setText("---");

        jPanel1.setBackground(new java.awt.Color(94, 114, 228));

        jLabel1.setFont(new java.awt.Font("SansSerif", 1, 24)); // NOI18N
        jLabel1.setText("Monitoramento de Componentes");

        javax.swing.GroupLayout jPanel1Layout = new javax.swing.GroupLayout(jPanel1);
        jPanel1.setLayout(jPanel1Layout);
        jPanel1Layout.setHorizontalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(102, 102, 102)
                .addComponent(jLabel1)
                .addContainerGap(103, Short.MAX_VALUE))
        );
        jPanel1Layout.setVerticalGroup(
            jPanel1Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(jPanel1Layout.createSequentialGroup()
                .addGap(20, 20, 20)
                .addComponent(jLabel1)
                .addContainerGap(22, Short.MAX_VALUE))
        );

        jPanel2.setBackground(new java.awt.Color(94, 114, 228));

        javax.swing.GroupLayout jPanel2Layout = new javax.swing.GroupLayout(jPanel2);
        jPanel2.setLayout(jPanel2Layout);
        jPanel2Layout.setHorizontalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 0, Short.MAX_VALUE)
        );
        jPanel2Layout.setVerticalGroup(
            jPanel2Layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGap(0, 25, Short.MAX_VALUE)
        );

        javax.swing.GroupLayout layout = new javax.swing.GroupLayout(getContentPane());
        getContentPane().setLayout(layout);
        layout.setHorizontalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addGap(0, 0, Short.MAX_VALUE)
                .addComponent(jLabel7, javax.swing.GroupLayout.PREFERRED_SIZE, 141, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(85, 85, 85))
            .addComponent(jPanel1, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addComponent(jPanel2, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
            .addGroup(javax.swing.GroupLayout.Alignment.TRAILING, layout.createSequentialGroup()
                .addContainerGap(javax.swing.GroupLayout.DEFAULT_SIZE, Short.MAX_VALUE)
                .addComponent(jLabel5)
                .addGap(221, 221, 221))
            .addGroup(layout.createSequentialGroup()
                .addContainerGap()
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                    .addComponent(jspProcessos, javax.swing.GroupLayout.Alignment.TRAILING)
                    .addComponent(jScrollPane1)
                    .addGroup(layout.createSequentialGroup()
                        .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel2)
                                .addGap(29, 29, 29)
                                .addComponent(lbCpu1, javax.swing.GroupLayout.PREFERRED_SIZE, 369, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel3)
                                .addGap(18, 18, 18)
                                .addComponent(lbMemoria, javax.swing.GroupLayout.PREFERRED_SIZE, 369, javax.swing.GroupLayout.PREFERRED_SIZE))
                            .addGroup(layout.createSequentialGroup()
                                .addGap(218, 218, 218)
                                .addComponent(jLabel4))
                            .addGroup(layout.createSequentialGroup()
                                .addComponent(jLabel6)
                                .addGap(26, 26, 26)
                                .addComponent(lbUltimaLeitura, javax.swing.GroupLayout.PREFERRED_SIZE, 94, javax.swing.GroupLayout.PREFERRED_SIZE)))
                        .addGap(0, 0, Short.MAX_VALUE)))
                .addContainerGap())
        );
        layout.setVerticalGroup(
            layout.createParallelGroup(javax.swing.GroupLayout.Alignment.LEADING)
            .addGroup(layout.createSequentialGroup()
                .addComponent(jPanel1, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.RELATED)
                .addComponent(jLabel7)
                .addGap(10, 10, 10)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel2)
                    .addComponent(lbCpu1))
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel3)
                    .addComponent(lbMemoria))
                .addGap(18, 18, 18)
                .addComponent(jLabel4)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jScrollPane1, javax.swing.GroupLayout.PREFERRED_SIZE, 171, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jLabel5)
                .addPreferredGap(javax.swing.LayoutStyle.ComponentPlacement.UNRELATED)
                .addComponent(jspProcessos, javax.swing.GroupLayout.PREFERRED_SIZE, 187, javax.swing.GroupLayout.PREFERRED_SIZE)
                .addGap(18, 18, 18)
                .addGroup(layout.createParallelGroup(javax.swing.GroupLayout.Alignment.BASELINE)
                    .addComponent(jLabel6)
                    .addComponent(lbUltimaLeitura))
                .addGap(18, 18, 18)
                .addComponent(jPanel2, javax.swing.GroupLayout.PREFERRED_SIZE, javax.swing.GroupLayout.DEFAULT_SIZE, javax.swing.GroupLayout.PREFERRED_SIZE))
        );

        pack();
    }// </editor-fold>//GEN-END:initComponents
    
    public void HoraLeitura() {
        LocalTime tempo = LocalTime.now();
        
        String horas = tempo.getHour() + "h";
        String minutos = tempo.getMinute() <= 9 ? "0" + String.valueOf(tempo.getMinute()) : String.valueOf(tempo.getMinute());
        String segundos = tempo.getSecond()<= 9 ? "0" + String.valueOf(tempo.getSecond()) : String.valueOf(tempo.getSecond());

        
        lbUltimaLeitura.setText(horas+":"+minutos+":"+segundos);
    }
    
    public void MonitorarComponentes() {       
        SystemInfo si = new SystemInfo();

        HardwareAbstractionLayer hal = si.getHardware();

//        System.out.println(hal.getSensors().toString());;

        OperatingSystem os = si.getOperatingSystem();

        List<HWDiskStore> listaDisco = hal.getDiskStores();
        
        String stringDadosDisco = "";
        String stringDadosParticoes = "";

        for (HWDiskStore disco : listaDisco) {
            stringDadosDisco += String.format("\nNome: %s \nTamanho total: %s \nEscrita: %s \nDispon�vel: %s\n",
                disco.getName(),
                FormatUtil.formatValue(disco.getSize(), "B"),
                FormatUtil.formatBytes(disco.getWriteBytes()),
                FormatUtil.formatValue((disco.getSize() - disco.getWriteBytes()), "B"
                ));
        
            List<HWPartition> particoes = disco.getPartitions();

            for (HWPartition partition : particoes) {
                    stringDadosParticoes += String.format("\nParti��o #%d: %s \nTamanho: %s\n",
                    partition.getMinor(),
                    partition.getMountPoint(),
                    FormatUtil.formatValue(partition.getSize(), "B")
                );
            }
        }
        
        
        
        taDisco.setText(String.format("Unidades de disco padr�o\n"
                                + "%s\n"
                                + "%s\n", 
                                stringDadosDisco,
                                stringDadosParticoes));
        
        lbCpu1.setText(hal.getProcessor().getProcessorIdentifier().getName());

        lbMemoria.setText(hal.getMemory().toString());

        List<OSProcess> processos = os.getProcesses();
        
        String stringProcessos = "";
        
        for (OSProcess processo: processos) {

           
//            try {;
//                new Slack("https://hooks.slack.com/services/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")
//                .text("A m�quina "+ hal.getComputerSystem().getModel() +" est� executando " + processo.getName()+"\n")
//                .send();
//            } catch (Exception e) {
//                e.printStackTrace();
//            }

        stringProcessos += processo.getProcessID()+" "+processo.getName()+"\n";
      
        }
        
        taProcessos.setText(stringProcessos);
        
        HoraLeitura();
    }
    
    /**
     * @param args the command line arguments
     */
    public static void main(String args[]) {
        /* Set the Nimbus look and feel */
        
        TelaDados tela = new TelaDados();
        //<editor-fold defaultstate="collapsed" desc=" Look and feel setting code (optional) ">
        /* If Nimbus (introduced in Java SE 6) is not available, stay with the default look and feel.
         * For details see http://download.oracle.com/javase/tutorial/uiswing/lookandfeel/plaf.html 
         */
        try {
            for (javax.swing.UIManager.LookAndFeelInfo info : javax.swing.UIManager.getInstalledLookAndFeels()) {
                if ("Nimbus".equals(info.getName())) {
                    javax.swing.UIManager.setLookAndFeel(info.getClassName());
                    break;
                }
            }
        } catch (ClassNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (InstantiationException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (IllegalAccessException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        } catch (javax.swing.UnsupportedLookAndFeelException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        //</editor-fold>

        /* Create and display the form */
        java.awt.EventQueue.invokeLater(new Runnable() {
            public void run() {
                tela.setVisible(true);
            }
        });
        
        tela.MonitorarComponentes();
        
        Thread thread = Thread.currentThread();
        
        while(true) {
            try {
                thread.sleep(10000);
            } catch (InterruptedException ex) {
                Logger.getLogger(TelaDados.class.getName()).log(Level.SEVERE, null, ex);
            }
            tela.MonitorarComponentes();
        }
    }

    // Variables declaration - do not modify//GEN-BEGIN:variables
    private javax.swing.JLabel jLabel1;
    private javax.swing.JLabel jLabel2;
    private javax.swing.JLabel jLabel3;
    private javax.swing.JLabel jLabel4;
    private javax.swing.JLabel jLabel5;
    private javax.swing.JLabel jLabel6;
    private javax.swing.JLabel jLabel7;
    private javax.swing.JPanel jPanel1;
    private javax.swing.JPanel jPanel2;
    private javax.swing.JScrollPane jScrollPane1;
    private javax.swing.JScrollPane jspProcessos;
    private javax.swing.JLabel lbCpu1;
    private javax.swing.JLabel lbMemoria;
    private javax.swing.JLabel lbUltimaLeitura;
    private javax.swing.JTextArea taDisco;
    private javax.swing.JTextArea taProcessos;
    // End of variables declaration//GEN-END:variables
}
