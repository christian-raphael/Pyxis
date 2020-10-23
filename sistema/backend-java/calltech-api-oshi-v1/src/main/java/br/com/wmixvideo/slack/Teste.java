/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.wmixvideo.slack;

/**
 *
 * @author Aluno
 */
public class Teste {
    public static void main(String[] args) {
        try {
   
            new Slack("https://hooks.slack.com/services/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")
                .text("Slv")
                .send();
        } catch (Exception e) {
            e.printStackTrace();
        }

    }
}
