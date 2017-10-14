package com.Finessy.University;

import static com.Finessy.CommonDAO.CommonUniDAO.getConnection;
import static com.Finessy.CommonDAO.UniSqlQueries.*;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

public class UniDAO {
    Connection con = null;
    PreparedStatement psmt = null;
    
    public boolean addUniversity(UniDTO uniDTO) throws ClassNotFoundException, SQLException {
    	
    	int recCount;
    	
    	try {
    		
    		con = getConnection();
    		con.setAutoCommit(false);
    		psmt = con.prepareStatement(ADD_UNIVERSITY);
    		psmt.setString(1,uniDTO.getUniId());
    		psmt.setString(2,uniDTO.getUniName());
    		psmt.setString(3,uniDTO.getSize());
    		psmt.setString(4,uniDTO.getUniAge());
    		psmt.setString(5,uniDTO.getPub());
    		psmt.setString(6,uniDTO.getMapLoc());
    		psmt.setString(7,uniDTO.getEndown());
    		psmt.setString(8,uniDTO.getEmpRank());
    		psmt.setString(9,uniDTO.getTotalStud());
    		psmt.setString(10,uniDTO.getTotalUndStud());
    		psmt.setString(11,uniDTO.getTotalGradStud());
    		psmt.setString(12,uniDTO.getUniRank());
    		psmt.setString(13,uniDTO.getIntStud());
    		psmt.setString(14,uniDTO.getGrup());
    		psmt.setString(15,uniDTO.getIssue());
    		psmt.setString(16,uniDTO.getAccep());
    		psmt.setString(17,uniDTO.getCont());
    		
    		recCount = psmt.executeUpdate();
    		if(recCount>0) {
    			con.commit();
    			return true;
    		}
    		else {
    			con.rollback();
    			return false;
    	    }
    	}
    	finally{
    		if(psmt!=null)
    		psmt.close();
    		if(con!=null)
    		con.close();
    	}
     }
    
    public UniDTO updateUniversity(UniDTO uniDTO) throws ClassNotFoundException, SQLException {
    	
    	try {
    		con = getConnection();
    		psmt = con.prepareStatement(UPDATE_UNIVERSITY);
    		con.setAutoCommit(false);
    		
    		psmt.setString(1,uniDTO.getUniName());
    		psmt.setString(2,uniDTO.getSize());
    		psmt.setString(3,uniDTO.getUniAge());
    		psmt.setString(4,uniDTO.getPub());
    		psmt.setString(5,uniDTO.getMapLoc());
    		psmt.setString(6,uniDTO.getEndown());
    		psmt.setString(7,uniDTO.getEmpRank());
    		psmt.setString(8,uniDTO.getTotalStud());
    		psmt.setString(9,uniDTO.getTotalUndStud());
    		psmt.setString(10,uniDTO.getTotalGradStud());
    		psmt.setString(11,uniDTO.getUniRank());
    		psmt.setString(12,uniDTO.getIntStud());
    		psmt.setString(13,uniDTO.getGrup());
    		psmt.setString(14,uniDTO.getIssue());
    		psmt.setString(15,uniDTO.getAccep());
    		psmt.setString(16,uniDTO.getCont());
    		psmt.setString(17,uniDTO.getUniId());

    		
    		int recCount = psmt.executeUpdate();
    		if(recCount>0) {
    			con.commit();
    			return uniDTO;
    		}
    		else {
    			con.rollback();
    			return uniDTO;
    		}
    			
    	}finally {
    		if(psmt!=null)
	    		  psmt.close();
	    	  if(con!=null)
	    		  con.close();
		}
    }
    
    public ArrayList<UniDTO> getUniversityList() throws ClassNotFoundException, SQLException{
    	ArrayList<UniDTO> universityList = new ArrayList<>();
    	
    	ResultSet rs = null;
    	try {
    		con = getConnection();
    		con.setAutoCommit(false);
    		psmt = con.prepareStatement(GET_UNIVERSITY_LIST);
    		rs = psmt.executeQuery();
    		while(rs.next()) {
    			UniDTO uni = new UniDTO(rs.getString(1),rs.getString(2));
    			System.out.println(uni);
    			universityList.add(uni);
    		}
    	}finally {
    	  if(rs!=null)
    		  rs.close();
    	  if(psmt!=null)
    		  psmt.close();
    	  if(con!=null)
    		  con.close();
		
	}
    	return universityList;
    }
    
    public UniDTO readUniversity(UniDTO uniDTO) throws SQLException, ClassNotFoundException {
    	
    	ResultSet rs = null;
    	try {
    	con = getConnection();
    	psmt = con.prepareStatement(READ_UNIVERSITY);
    	
    	psmt.setString(1, uniDTO.getUniId());
    	rs = psmt.executeQuery();
    	
    	while(rs.next()) {
    		uniDTO = new UniDTO(rs.getString(1),rs.getString(2),rs.getString(3),rs.getString(4), rs.getString(5), rs.getString(6), rs.getString(7),
    				rs.getString(8), rs.getString(9), rs.getString(10), rs.getString(11), rs.getString(12), rs.getString(13), rs.getString(14),
    				rs.getString(15), rs.getString(16), rs.getString(17));
    	}
    	}finally {
    		if(rs!=null)
         		  rs.close();
         	  if(psmt!=null)
         		  psmt.close();
         	  if(con!=null)
         		  con.close();
    	}
    	
    	return uniDTO;
    	
    }
    
    public boolean deleteUniversity(UniDTO uniDTO) throws ClassNotFoundException, SQLException {
    	
    	int recCount;
    	try {
    		con = getConnection();
    		con.setAutoCommit(false);
    		psmt = con.prepareStatement(DELETE_UNIVERSITY);
    		
    		psmt.setString(1, uniDTO.getUniId());
    		 recCount = psmt.executeUpdate();
    		 
    		 if(recCount>0) {
    			 con.commit();
    			 return true;
    		 }
    		 else {
    			 con.rollback();
    			 return false;
    		 }
    	}finally {
    		if(psmt!=null)
				psmt.close();
			if(con!=null)
				con.close();
		}
    }
    
    
}
