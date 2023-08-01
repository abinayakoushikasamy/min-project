package com.example.school;

public class AttendanceRecord {
    private int studentId;
    private String status;

    public AttendanceRecord(int studentId, String status) {
        this.studentId = studentId;
        this.status = status;
    }

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Override
    public String toString() {
        return "Student ID: " + studentId + ", Status: " + status;
    }
}
