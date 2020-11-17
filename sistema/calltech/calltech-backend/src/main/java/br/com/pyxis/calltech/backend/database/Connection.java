package br.com.pyxis.calltech.backend.database;

import org.apache.commons.dbcp2.BasicDataSource;
import org.apache.commons.dbcp2.BasicDataSource;

public class Connection {

    private BasicDataSource database;

    public Connection() {
        this.database = new BasicDataSource();
        this.database.setDriverClassName("com.microsoft.sqlserver.jdbc.SQLServerDriver");
        this.database.setUrl("jdbc:sqlserver://serverpyxis.database.windows.net:1433;database=calltech;user=admpyxis@serverpyxis;password=#Gfgrupo1;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;");
        this.database.setUsername("admpyxis");
        this.database.setPassword("#Gfgrupo1");
    }

    public BasicDataSource getDatabase() {
        return database;
    }
}