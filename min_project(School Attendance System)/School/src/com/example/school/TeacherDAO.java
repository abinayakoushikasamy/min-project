package com.example.school;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class TeacherDAO {
    private Connection connection;

    public TeacherDAO() {
        try {
            connection = DatabaseConnection.getConnection();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void createTeacher(Teacher teacher) {
        String query = "INSERT INTO teachers (username, password) VALUES (?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, teacher.getUsername());
            statement.setString(2, teacher.getPassword());
            statement.executeUpdate();
            System.out.println("Teacher created successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public Teacher getTeacherByUsername(String username) {
        String query = "SELECT * FROM teachers WHERE username=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, username);
            ResultSet resultSet = statement.executeQuery();

            if (resultSet.next()) {
                int id = resultSet.getInt("id");
                String password = resultSet.getString("password");
                return new Teacher(id, username, password);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;
    }

    public void updateTeacher(Teacher teacher) {
        String query = "UPDATE teachers SET username=?, password=? WHERE id=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setString(1, teacher.getUsername());
            statement.setString(2, teacher.getPassword());
            statement.setInt(3, teacher.getId());
            statement.executeUpdate();
            System.out.println("Teacher updated successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void deleteTeacher(int teacherId) {
        String query = "DELETE FROM teachers WHERE id=?";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, teacherId);
            statement.executeUpdate();
            System.out.println("Teacher deleted successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void markAttendance(int teacherId, int studentId, String date, String status) {
        String query = "INSERT INTO attendance (teacher_id, student_id, date, status) VALUES (?, ?, ?, ?)";
        try (PreparedStatement statement = connection.prepareStatement(query)) {
            statement.setInt(1, teacherId);
            statement.setInt(2, studentId);
            statement.setString(3, date);
            statement.setString(4, status);
            statement.executeUpdate();
            System.out.println("Attendance marked successfully!");
        } catch (SQLException e) {
            e.printStackTrace();
        }
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
