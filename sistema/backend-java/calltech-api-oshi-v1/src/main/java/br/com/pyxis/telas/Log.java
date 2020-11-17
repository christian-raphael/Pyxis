
package br.com.pyxis.telas;

/**
 *
 * @author milene.barbosa
 */

import java.io.FileNotFoundException;
import java.util.logging.Level;
import br.com.pyxis.telas.TelaDados;

public class Log {
    
    
    public static void firstLog(String nomeSistema) {
        ArquivoLog logFile = new ArquivoLog("Pyxis"); 
        String arquivoLogCaminho;
    
        Diretorio.criarDiretorio();
        try {
            logFile.criarArquivo();
            logFile.escreverArquivo(
                    String.format("Servidor do sistema %s iniciado.", nomeSistema)
            );
        } catch (FileNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
    
    public static void fileLogs(String tipoErro, String erro) {
        ArquivoLog logFile = new ArquivoLog("Pyxis"); 
        String arquivoLogCaminho;
    
        Diretorio.criarDiretorio();
        try {
            logFile.criarArquivo();
            logFile.escreverArquivo(
                    String.format("Erro ao %s: %s", tipoErro, erro));
        } catch (FileNotFoundException ex) {
            java.util.logging.Logger.getLogger(TelaDados.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
    

