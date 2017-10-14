package com.Finessy.University;

import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;

/**
 * Servlet implementation class UniController
 */
@WebServlet("/unicontroller")
public class UniController extends HttpServlet {
	
	boolean isAdded = false;
	boolean isdelete = false;
	
	ArrayList<UniDTO> uniList = new ArrayList<>();
	
	ObjectMapper mapper = new ObjectMapper();
	UniDAO uniDAO = new UniDAO();
	UniDTO uniDTO = new UniDTO();
   	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		this.doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		String requestParam = (String)request.getParameter("method");
		System.out.println(requestParam);
		String dtoObj = request.getParameter("dto_obj");
		
		switch(requestParam) {
		case "add" : try {
			
			uniDTO = mapper.readValue(dtoObj, new TypeReference<UniDTO>(){});
			
			isAdded = uniDAO.addUniversity(uniDTO);
			response.setContentType("application/json");
			response.getWriter().println(isAdded);
			
			if(isAdded == true)
				System.out.println("\nRecord is Added");
			else
				System.out.println("\nRecord is not Added");
			
		}catch (ClassNotFoundException e){
			e.printStackTrace();
			
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		break;
		
		case "read" : try {
			uniDTO = mapper.readValue(dtoObj, new TypeReference<UniDTO>(){});
			
			uniDTO = uniDAO.readUniversity(uniDTO);
			String json = mapper.writeValueAsString(uniDTO);
			
			response.setContentType("application/json");
			response.getWriter().println(json);
			
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		break;
		
		case "update" : try {
			uniDTO = mapper.readValue(dtoObj, new TypeReference<UniDTO>() {});
			
			uniDTO = uniDAO.updateUniversity(uniDTO);
			String json = mapper.writeValueAsString(uniDTO);
			System.out.println("updated");
			response.setContentType("application/json");
			response.getWriter().println(json);
		}catch (ClassNotFoundException e){
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		break;
		
		case "getUniversityList" : try {
			uniList = uniDAO.getUniversityList();
			
			String json = mapper.writeValueAsString(uniList);
			
			response.setContentType("application/json");
			response.getWriter().println(json);
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		break;
		
		case "delete" : try {
			
			uniDTO = mapper.readValue(dtoObj, new TypeReference<UniDTO>() {});
			
			isdelete = uniDAO.deleteUniversity(uniDTO);
			response.setContentType("application/json");
			response.getWriter().println("Record is deleted");
			
			if(isdelete == true)
				System.out.println("\nRecord is deleted");
			else
				System.out.println("\nRecord is not deleted");
		}catch (ClassNotFoundException e) {
			// TODO: handle exception
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		break;
		}
		
	}

}
