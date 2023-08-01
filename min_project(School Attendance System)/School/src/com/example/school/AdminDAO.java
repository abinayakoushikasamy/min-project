package com.example.school;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class AdminDAO {
    private Connection connection;

    public AdminDAO() {
        try {
            connection = DatabaseConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void createAdmin(Admin admin) {
        String query = "INSERT INTO admins (username, password) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, admin.getUsername());
            statement.setString(2, admin.getPassword());
            statement.executeUpdate();
            System.out.println("Admin created successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Admin getAdminByUsername(String username) {
        String query = "SELECT * FROM admins WHERE username=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                int id = resultSet.getInt("id");
                String password = resultSet.getString("password");
                return new Admin(id, username, password);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public void updateAdmin(Admin admin) {
        String query = "UPDATE admins SET username=?, password=? WHERE id=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, admin.getUsername());
            statement.setString(2, admin.getPassword());
            statement.setInt(3, admin.getId());
            statement.executeUpdate();
            System.out.println("Admin updated successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteAdmin(int adminId) {
        String query = "DELETE FROM admins WHERE id=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, adminId);
            statement.executeUpdate();
            System.out.println("Admin deleted successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public List<Admin> getAllAdmins() {
        List<Admin> admins = new ArrayList<>();
        String query = "SELECT * FROM admins";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String username = resultSet.getString("username");
                String password = resultSet.getString("password");
                admins.add(new Admin(id, username, password));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return admins;
    }
    public List<AttendanceRecord> getAttendanceRecords(int teacherId, String date) {
        List<AttendanceRecord> attendanceRecords = new ArrayList<>();
        String query = "SELECT student_id, status FROM attendance WHERE teacher_id=? AND date=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, teacherId);
            statement.setString(2, date);
            ResultSet resultSet = statement.executeQuery();

            while (resultSet.next()) {
                int studentId = resultSet.getInt("student_id");
                String status = resultSet.getString("status");
                attendanceRecords.add(new AttendanceRecord(studentId, status));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return attendanceRecords;
    }
}

