package com.example.school;

public class Teacher extends User{
    private int id;
    private String username;
    private String password;

        public Teacher(int id, String username, String password) {
        	super(id, username, password);
        	this.id = id;
        	this.username = username;
        	this.password = password;
        }
//    public Teacher(int id, String username, String password) {
//    }1

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
    

    // Getters and setters (optional)
    // Add any other methods as needed
	 // Override the displayRole method
    @Override
    public void displayRole() {
        System.out.println("Teacher");
    }
}


