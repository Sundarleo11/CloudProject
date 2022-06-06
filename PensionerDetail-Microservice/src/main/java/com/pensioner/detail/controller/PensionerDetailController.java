package com.pensioner.detail.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.pensioner.detail.exception.AadharNumberNotFound;
import com.pensioner.detail.exception.AuthorizationException;
import com.pensioner.detail.feignclient.AuthorisingClient;
import com.pensioner.detail.model.PensionerDetail;
import com.pensioner.detail.service.PensionerDetailServiceImpl;

import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;
@CrossOrigin
@RestController
@RequestMapping(value = "/api")
public class PensionerDetailController {
	
	@Autowired
	PensionerDetailServiceImpl pensionerDetailServiceImpl;
	
	@Autowired
	private AuthorisingClient authorisingClient;
	
	@GetMapping("/PensionerDetailByAadhaar/{aadharNumber}")
	@ApiOperation(notes = "Returns the Pension Details by aadharCard Number", value = "Find Pension Details By Aadhar Card number")
	public PensionerDetail getPensionerDetailByAadhar(
			@RequestHeader(value = "Authorization", required = true) String requestTokenHeader,
			@ApiParam(name = "aadharNumber", value = "Aadhar Card Number") 
			@PathVariable long aadharNumber) throws AuthorizationException, AadharNumberNotFound
	{
		   
		if (authorisingClient.authorizeTheRequest(requestTokenHeader))
		{
			
			return pensionerDetailServiceImpl.getPensionerDetailByAadharCard(requestTokenHeader,aadharNumber);
		}
		
		else
		{
			throw new AuthorizationException("Not allowed AuthorizationException");
		}
		
		
	}
	
	@GetMapping("/getAllPensioner")
	@ApiOperation(notes = "Returns the Pension Details", value = "Find All Pensioner Details")
	public List<PensionerDetail> getAllPensioner(
			@RequestHeader(value = "Authorization", required = true) String requestTokenHeader) throws AuthorizationException
	{
		if (authorisingClient.authorizeTheRequest(requestTokenHeader))
		{
			return pensionerDetailServiceImpl.getAllPensioner(requestTokenHeader);
		}
		
		else
		{
			throw new AuthorizationException("Not allowed");
		}
		
		
	}
	

}
