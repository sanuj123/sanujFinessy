package com.Finessy.CommonDAO;

public interface UniSqlQueries {
   
	 String ADD_UNIVERSITY = "insert into university_details"
	 		+" values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);";
	 
	 String READ_UNIVERSITY = "select * from university_details where university_id=?;";
	 
	 String GET_UNIVERSITY_LIST  = "select university_id, university_name from university_details;";
	 
     String UPDATE_UNIVERSITY = "update university_details set university_name=?, campus_size=?, age=?, type=?, map_location=?, endowment=?,"
     		+ " graduate_employbility_ranking=?, total_students=?, total_undergraduate_students=?, total_graduate_students=?, ranking=?,"
     		+ " percentage_of_international_students=?, student_groups=?, safety_issues=?, acceptance_rate=?, contact_details=? where university_id=?;";
     
     String DELETE_UNIVERSITY = "delete from university_details where  university_id=?;";
}


