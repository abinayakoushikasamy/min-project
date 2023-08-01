package com.example.school;

import java.util.List;
import java.util.Scanner;

public class SchoolAttendanceSystem {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        TeacherDAO teacherDAO = new TeacherDAO();
        AdminDAO adminDAO=new AdminDAO();
        while (true) {
            System.out.println("Welcome to the School Attendance System!");
            System.out.println("1. Teacher Login");
            System.out.println("2. Admin Login");
            System.out.println("3. Exit");
            System.out.print("Enter your choice: ");
            int choice = scanner.nextInt();

            if (choice == 1) {
                System.out.print("Enter teacher's username: ");
                String username = scanner.next();
                System.out.print("Enter teacher's password: ");
                String password = scanner.next();

                Teacher teacher = teacherDAO.getTeacherByUsername(username);
                if (teacher != null && teacher.getPassword().equals(password)) {
                    System.out.println("Teacher login successful!");

                    // Switch cases for teacher actions
                    while (true) {
                        System.out.println("Teacher actions:");
                        System.out.println("1. Mark Attendance");
                        System.out.println("2. View Attendance Records");
                        System.out.println("3. Logout");
                        System.out.print("Enter your choice: ");
                        int teacherChoice = scanner.nextInt();

                        switch (teacherChoice) {
                            case 1:
                                // Implement marking attendance
                                System.out.print("Enter student ID: ");
                                int studentId = scanner.nextInt();
                                System.out.print("Enter date (yyyy-MM-dd): ");
                                String date = scanner.next();
                                System.out.print("Enter status (Present/Absent): ");
                                String status = scanner.next();
                                teacherDAO.markAttendance(teacher.getId(), studentId, date, status);
                                break;
                            case 2:
                                // Implement viewing attendance records
                                System.out.print("Enter date (yyyy-MM-dd): ");
                                String viewDate = scanner.next();
                                List<AttendanceRecord> attendanceRecords = teacherDAO.getAttendanceRecords(teacher.getId(), viewDate);
                                for (AttendanceRecord record : attendanceRecords) {
                                    System.out.println(record); // This will call the toString method
                                }
                                break;
                            case 3:
                                System.out.println("Logout successful!");
                                break;
                            default:
                                System.out.println("Invalid choice. Please try again.");
                        }

                        if (teacherChoice == 3) {
                            break;
                        }
                    }

                } else {
                    System.out.println("Invalid username or password.");
                }
            }      System.out.print("Enter admin username: ");
            String adminUsername = scanner.next();
            System.out.print("Enter admin password: ");
            String adminPassword = scanner.next();

            Admin admin = adminDAO.getAdminByUsername(adminUsername);
            if (admin != null && admin.getPassword().equals(adminPassword)) {
                System.out.println("Admin login successful!");

                // Switch cases for admin actions
                while (true) {
                    System.out.println("Admin actions:");
                    System.out.println("1. View Attendance Records");
                    System.out.println("2. Logout");
                    System.out.print("Enter your choice: ");
                    int adminChoice = scanner.nextInt();

                    switch (adminChoice) {
                        case 1:
                            // Implement viewing attendance records
                            System.out.print("Enter date (yyyy-MM-dd): ");
                            String viewDate = scanner.next();
                            List<AttendanceRecord> attendanceRecords = adminDAO.getAttendanceRecords(adminChoice, viewDate);
                            for (AttendanceRecord record : attendanceRecords) {
                                System.out.println(record);
                            }
                            break;
                        case 2:
                            System.out.println("Logout successful!");
                            break;
                        default:
                            System.out.println("Invalid choice. Please try again.");
                    }

                    if (adminChoice == 2) {
                        break;
                    }
                }

            } else if (choice == 3) {
                System.out.println("Goodbye!");
                break;
            } else {
                System.out.println("Invalid choice. Please try again.");
            }
        }
    }
}
