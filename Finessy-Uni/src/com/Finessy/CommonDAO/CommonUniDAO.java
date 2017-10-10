package com.Finessy.CommonDAO;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.ResourceBundle;

public class CommonUniDAO {
	
	public static Connection getConnection() throws SQLException, ClassNotFoundException {
		ResourceBundle rb = ResourceBundle.getBundle("config");
        String userName = rb.getString("userName");
		String dburl = rb.getString("dburl");
		String password = rb.getString("password");
		Class.forName("com.mysql.jdbc.Driver");
		Connection con = DriverManager.getConnection(dburl, userName, password);
		return con;

	}
}
