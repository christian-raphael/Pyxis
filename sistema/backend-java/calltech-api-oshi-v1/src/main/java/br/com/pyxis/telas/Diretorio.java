/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.pyxis.telas;

/**
 *
 * @author milene.barbosa
 */
    
import java.io.File;
import java.util.Date;
/**
 *
 * @author milene.barbosa
 */
public class Diretorio {
    

    

    public static void criarDiretorio() {
        
        //Date data = new Date();
        
        //Inicializando a váriavel diretorio criando a instancia  da classe File 
        // e passando nome da pasta que queremos encontrar pasta 
        File diretorio = new File("C:\\Securit");
        
        //Se essa pasta não existe é criada
        if (!diretorio.exists()) {

            diretorio.mkdir();
//            
//            if (!data.equals(diretorio.lastModified())) {
//             diretorio.mkdir();
//            }
        }
    }
}
    


   

