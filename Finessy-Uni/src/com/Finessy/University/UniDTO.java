package com.Finessy.University;

public class UniDTO {
     private String uniId;
     private String uniName;
     private String size;
     private String uniAge;
     private String pub;
     private String mapLoc;
     private String endown;
     private String empRank;
     private String totalStud;
     private String totalUndStud;
     private String totalGradStud;
     private String uniRank;
     private String intStud;
     private String grup;
     private String issue;
     private String accep;
     private String cont;
     
     
    public UniDTO() {
    	
    }
        
	@Override
	public String toString() {
		return "UniDTO [uniId=" + uniId + ", uniName=" + uniName + ", size=" + size + ", uniAge=" + uniAge + ", pub="
				+ pub + ", mapLoc=" + mapLoc + ", endown=" + endown + ", empRank=" + empRank + ", totalStud="
				+ totalStud + ", totalUndStud=" + totalUndStud + ", totalGradStud=" + totalGradStud + ", uniRank="
				+ uniRank + ", intStud=" + intStud + ", grup=" + grup + ", issue=" + issue + ", accep=" + accep
				+ ", cont=" + cont + "]";
	}

	public UniDTO(String uniId, String uniName, String size, String uniAge, String pub, String mapLoc, String endown,
			String empRank, String totalStud, String totalUndStud, String totalGradStud, String uniRank, String intStud,
			String grup, String issue, String accep, String cont) {
		this.uniId = uniId;
		this.uniName = uniName;
		this.size = size;
		this.uniAge = uniAge;
		this.pub = pub;
		this.mapLoc = mapLoc;
		this.endown = endown;
		this.empRank = empRank;
		this.totalStud = totalStud;
		this.totalUndStud = totalUndStud;
		this.totalGradStud = totalGradStud;
		this.uniRank = uniRank;
		this.intStud = intStud;
		this.grup = grup;
		this.issue = issue;
		this.accep = accep;
		this.cont = cont;
	}

	

	public UniDTO(String uniId, String uniName) {
		this.uniId = uniId;
		this.uniName = uniName;
	}

	public String getUniId() {
		return uniId;
	}


	public void setUniId(String uniId) {
		this.uniId = uniId;
	}


	public String getUniName() {
		return uniName;
	}


	public void setUniName(String uniName) {
		this.uniName = uniName;
	}


	public String getSize() {
		return size;
	}


	public void setSize(String size) {
		this.size = size;
	}


	public String getUniAge() {
		return uniAge;
	}


	public void setUniAge(String uniAge) {
		this.uniAge = uniAge;
	}


	public String getPub() {
		return pub;
	}


	public void setPub(String pub) {
		this.pub = pub;
	}


	public String getMapLoc() {
		return mapLoc;
	}


	public void setMapLoc(String mapLoc) {
		this.mapLoc = mapLoc;
	}


	public String getEndown() {
		return endown;
	}


	public void setEndown(String endown) {
		this.endown = endown;
	}


	public String getEmpRank() {
		return empRank;
	}


	public void setEmpRank(String empRank) {
		this.empRank = empRank;
	}


	public String getTotalStud() {
		return totalStud;
	}


	public void setTotalStud(String totalStud) {
		this.totalStud = totalStud;
	}


	public String getTotalUndStud() {
		return totalUndStud;
	}


	public void setTotalUndStud(String totalUndStud) {
		this.totalUndStud = totalUndStud;
	}


	public String getTotalGradStud() {
		return totalGradStud;
	}


	public void setTotalGradStud(String totalGradStud) {
		this.totalGradStud = totalGradStud;
	}


	public String getUniRank() {
		return uniRank;
	}


	public void setUniRank(String uniRank) {
		this.uniRank = uniRank;
	}


	public String getIntStud() {
		return intStud;
	}


	public void setIntStud(String intStud) {
		this.intStud = intStud;
	}


	public String getGrup() {
		return grup;
	}


	public void setGrup(String grup) {
		this.grup = grup;
	}


	public String getIssue() {
		return issue;
	}


	public void setIssue(String issue) {
		this.issue = issue;
	}


	public String getAccep() {
		return accep;
	}


	public void setAccep(String accep) {
		this.accep = accep;
	}


	public String getCont() {
		return cont;
	}


	public void setCont(String cont) {
		this.cont = cont;
	}
     
    
	
	


	
     
     
}

