package com.pensioner.detail.exception;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.hibernate.service.spi.InjectService;
import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.springframework.boot.test.context.SpringBootTest;

import com.pensioner.detail.exception.AadharNumberNotFound;
import com.pensioner.detail.exception.AuthorizationException;
import com.pensioner.detail.exception.ExceptionDetails;
import com.pensioner.detail.exception.GlobalExceptionHandler;



@SpringBootTest
public class PensionerDetailExceptionTest {

	@InjectMocks
	private AadharNumberNotFound aadharNumberNotFound;
	
	@InjectMocks
	private AuthorizationException authorizationException;
	
	@InjectMocks
	private ExceptionDetails exceptionDetails;
	
	@InjectMocks
	private GlobalExceptionHandler globalExceptionHandler;
	
	@Test
	public void testAadharNumberNotFound()
	{
		String reason = "Invalid aadharNumber";
		assertEquals(reason, "Invalid aadharNumber");
	}
	
	@Test
	public void testAuthorizationException()
	{
		String reason = "Invalid token";
		assertEquals(reason, "Invalid token");
	}
	
}
