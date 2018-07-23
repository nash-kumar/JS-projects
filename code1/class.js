class Employee{
	constructor(first_name, last_name, DOB, sex, address, city, state, country, pincode, Mobile_number, job_pos, salary, qualificaion){
		this.first_name = first_name;
		this.last_name = last_name;
		this.DOB = DOB;
		this.sex = sex;
		this.address = address;
		this.city = city;
		this.state = state;
		this.country = country;
		this.state = state;
		this.pincode = pincode;
		this.Mobile_number = Mobile_number;
		this.job_pos = job_pos;
		this.salary = salary;
		this.qualificaion = qualificaion;
	}

}
class Employer extends Employee{
	constructor(first_name, website, city, state, pincode){
		super(first_name, city, state, pincode);
		this.website = website;
	}

}