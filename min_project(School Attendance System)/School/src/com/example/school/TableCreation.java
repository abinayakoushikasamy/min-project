package com.example.school;

import java.sql.Connection;
import java.sql.SQLException;
import java.sql.Statement;

public class TableCreation {
    public static void main(String[] args) {
        try (Connection connection = DatabaseConnection.getConnection()) {
            String createTeachersTableQuery = "CREATE TABLE IF NOT EXISTS teachers ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "username VARCHAR(50) NOT NULL,"
                    + "password VARCHAR(50) NOT NULL"
                    + ")";
            String createAdminsTableQuery = "CREATE TABLE IF NOT EXISTS admins ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "username VARCHAR(50) NOT NULL,"
                    + "password VARCHAR(50) NOT NULL"
                    + ")";
            String createStudentsTableQuery = "CREATE TABLE IF NOT EXISTS students ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "name VARCHAR(100) NOT NULL"
                    + ")";
            String createAttendanceTableQuery = "CREATE TABLE IF NOT EXISTS attendance ("
                    + "id INT AUTO_INCREMENT PRIMARY KEY,"
                    + "student_id INT NOT NULL,"
                    + "date DATE NOT NULL,"
                    + "status VARCHAR(10) NOT NULL,"
                    + "FOREIGN KEY (student_id) REFERENCES students (id)"
                    + ")";

            Statement statement = connection.createStatement();
            statement.executeUpdate(createTeachersTableQuery);
            statement.executeUpdate(createAdminsTableQuery);
            statement.executeUpdate(createStudentsTableQuery);
            statement.executeUpdate(createAttendanceTableQuery);

            System.out.println("Tables created successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
