package com.pensioner.detail.service;

import com.pensioner.detail.exception.AadharNumberNotFound;
import com.pensioner.detail.model.PensionerDetail;

public interface PensionerDetailService {
	
	public PensionerDetail getPensionerDetailByAadharCard(String token,long aadharNumber) throws AadharNumberNotFound;

}
