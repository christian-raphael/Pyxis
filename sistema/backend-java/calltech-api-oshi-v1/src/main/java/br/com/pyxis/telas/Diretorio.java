
package br.com.pyxis.telas;
import java.io.File;

/**
 *
 * @author milene.barbosa
 */
public class Diretorio {
    
    public static void criarDiretorio() {
        //Date data = new Date();
        
        //Inicializando a v�riavel diretorio criando a instancia  da classe File 
        // e passando nome da pasta que queremos encontrar pasta 
        File diretorio = new File("C:\\teste");
        //Se essa pasta n�o existe � criada
        if (!diretorio.exists()) {
            diretorio.mkdir();
//            
//            if (!data.equals(diretorio.lastModified())) {
//             diretorio.mkdir();
//            }
        }
    }
}
    


   

