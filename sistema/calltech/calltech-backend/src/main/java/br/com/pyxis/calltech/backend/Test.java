package br.com.pyxis.calltech.backend;

import br.com.pyxis.calltech.backend.database.Connection;
import org.springframework.jdbc.core.JdbcTemplate;

import java.util.List;

public class Test {

    public static void main(String[] args) {

        Connection con = new Connection();

        JdbcTemplate jdbcTemplate = new JdbcTemplate(con.getDatabase());

        List a = jdbcTemplate.queryForList("SELECT * FROM plano");

        System.out.println(a);
    }

}
