# CloudProject

Project Name: Pension-Management system.

Project Overview: This project covers pensioner detail provision, calculate provision, initiate pension disbursement.


| S.NO | Microservices                     | port num |
|------|-----------------------------------|----------|
| A    | Authorization Microservice        | 8000     |
| B    | Pension disbursement Microservice | 7000     |
| C    | Pensioner detail Microservice     | 6001     |
| D    | Process Pension Microservice      | 5000     |
| E    | Angular-Front End                 | 4200     |




# Functionalities

## A) Authorization Microservice

Main Functionality---> To Generate the token and Validate the token.

Step-1:Open Postman and follow the steps below:

Step-2:Go to Url section and paste `http://localhost:8000/auth/api/authenticate`
Method:POST

Step-3: Body Section: `{ "userName":"sundar", "password":"sundar" }`

Step-4: Click Send button,then a token will be generated.Copy the token.

Step-5:Open New tab in postman.

Step-6:Paste the Url  `http://localhost:8000/auth/api/authorize` Method:POST

Step-7: Go to Authorization Section: Select token type as Bearer ,next paste the token there.

Step-8:Now check response section whether the token is valid or not.

The boolean output 'true' indicates that the token is valid and 'false' indicates that the token is invalid.

# B) Pension disbursement Microservice:
 Main Functionality--->
####  a) Gets the pension amount along with pensioner aadhaar details. This internally gets the bank detail from the Pensioner detail Microservice.


Checks if the bank service charge is credited along with the pension amount or not.

If the data is correct, then success code is returned, else appropriate error code is returned

#### b)This should be invoked from the ProcessPension microservice

Step-1:Open Postman and follow the steps below:

Step-2:Go to Url section and paste  `http://localhost:7000/disbursement/api/disbursePension` Method:POST

Step-3: Body Section: `{ "aadharNumber":420559429029, "pensionAmount":24400.0, "bankCharge":550 }`

Step-4:Go to Authorization Section: Select token type as Bearer ,next paste the token there.

Step-5:Now check response section,

i)If token is valid,bank type is Private and bank charge is 550 then a response of status code-10 will be returned otherwise 21 will be returned.

ii)If token is valid,bank type is Public and bank charge is 500 then a response of status code-10 will be returned otherwise 21 will be returned.

iii)If token is invalid then an exception will be thrown with a FORBIDDEN status.


# C) Pensioner detail Microservice:
Main Functionality-->

a)Used to find all the pensioner details.

b)Used to find details of a particular pensioner by Aadhar card number.

a)To find all the pensioner details.

Step-1:Open Postman and follow the steps below:

Step-2:Go to Url section and paste `http://localhost:6001/pensioner/api/getAllPensioner` Method:GET

Step-3:Go to Authorization Section: Select token type as Bearer ,next paste the token there.

i)If token is valid,then all pensioner details will be returned.

ii)If token is invalid then it will throw an exception.

b)To find details of a particular pensioner by Aadhar card number.

Step-1:Open Postman and follow the steps below

Step-2:Go to Url section and paste `http://localhost:6001/pensioner/api/PensionerDetailByAadhaar/420559429029 {Here 420559429029 is the aadhar number}`
Method:GET

Step-3:Go to Authorization Section: Select token type as Bearer ,next paste the token there.

i)If token is valid,and subsequently if Aadhar number is valid then it returns the pensioner details of that particular pensioner.

ii)If token is valid and Aadhar number is invalid then it will throw Aadhar Not Found exception.

iii)If token is invalid then an exception will be thrown.

# D)Process Pension Microservice:
Main Functionality

a)Calculate Pension.

b)Returning the Status Code for pension process.

a)To Calculate Pension.

Step-1:Open Postman and follow the steps below

Step-2:Go to Url section and paste `http://localhost:5000/process/api/PensionDetail`
Method:POST

Step-3:Go to Body Section and add the below Json object.

` { "aadharNumber":210034523767, "name":"kiriti", "dateOfBirth":"1998-07-15", "pan":"MBHER12436", "pensionType":"self" } `

Step-4:Go to Authorization Section: Select token type as Bearer ,next paste the token there.

Step-5:
i)If token is valid and Pensioner details are also valid,then pension is calculated and 'PensionDetail' object will be returned.

ii)If token is invalid then an exception will be thrown.

b)For the Status Code Response.

Step-1:Open Postman and follow the steps below

Step-2:Go to Url section and paste `http://localhost:5000/process/api/ProcessPension`
Method:POST

Step-3: Go to Body Section and add the below Json object.
`{ "aadharNumber":420559429029, "pensionAmount":24400.0, "bankCharge":500 }`

Step-4:Go to Authorization Section: Select token type as Bearer ,next paste the token there.

Step-5:Now check response section,

i)If token is valid and entered details are also valid ,and for that user if bank type is Private and bank charge is 550 then a response of status code-10 will be returned otherwise 21 will be returned.

ii)If token is valid and entered details are also valid ,and for that user if bank type is Public and bank charge is 500 then a response of status code-10 will be returned otherwise 21 will be returned.

iii)If token is invalid then an exception will be thrown.<br>


# Swagger Documents
## 1.Authorization Microservice

`http://localhost:8000/auth/v2/api-docs`

`http://localhost:8000/auth/swagger-ui.html`

# 2.Pension disbursement Microservice
`http://localhost:7000/disbursement/v2/api-docs`

`http://localhost:7000/disbursement/swagger-ui.html`

# 3.Pensioner detail Microservice
`http://localhost:6001/pensioner/v2/api-docs`
`http://localhost:6001/pensioner/swagger-ui.html`

# 4.Process Pension Microservice
`http://localhost:5000/process/v2/api-docs`
`http://localhost:5000/process/swagger-ui.html`<br>



# Database URLS H2-console
## 1.Authorization-Microservice
`http://localhost:8000/auth/h2-console`

## 2.PensionerDetail-Microservice
`http://localhost:6001/pensioner/db/`


AWS + DevOps
============

Amazon ECS clusters
===================
An Amazon ECS cluster is a logical grouping of tasks or services. 
Your tasks and services are run on infrastructure that is registered to a cluster.



Amazon ECR
==========

Amazon Elastic Container Registry (Amazon ECR) is an AWS managed container image registry service that is secure, scalable, 
and reliable. Amazon ECR supports private repositories with resource-based permissions using AWS IAM.

1.pms-XXXX-auth-rep

2.pms-XXXX-pensiondisbursement

3.pms-XXXX-pensionerdetail

4.pms-penstion-pro-rep


Task definition
===============

A task definition is required to run Docker containers in Amazon ECS. 

The following are some of the parameters you can specify in a task definition: The Docker image to use with each container in your task. 
How much CPU and memory to use with each task or each container within a task.

1.pms-XXXX-auth-TD

2.pms-XXXX-pensiondisbursement-TD

3.pms-XXXX-pensionerdetail-TD

4.pms-XXXX-penstion-pro-rep-TD

Container Name
=============9===

1.pms-XXXX-pensiondisbursement-CTN

2.pms-XXXX-pensionerdetail-CNT

3.pms-penstionman-rep-CNT

4.pms-XXXX-penstion-pro-rep-CNT <br>
<br>


Target-group
===========
A target group tells a load balancer where to direct traffic to: EC2 instances, fixed IP addresses; amongst others. 
When creating a load balancer, you create one or more listeners and configure listener rules to direct the traffic to one target group

1.pms-auth-Target

2.XXXX-pensiondisbursement-TG

3.pms-XXXX-pensionerdetail-TG

4.pms-XXXX-penstion-pro-rep-TG


Load-balance
============

1.pms-prod-auth-lb

2.XXXX-pensiondisbursement-lb

3.XXXX-pensionerdetail-lb

4.pms-XXXX-penstion-pro-rep-lb


Amazon Elastic Container Service 
================================
Amazon Elastic Container Service (Amazon ECS) is a fully managed container orchestration service that provides the most secure, 
reliable and scalable way to run containerized applications.

1.auth-service

2.pms-XXXX-pensiondisbursement-service

3.pms-XXXX-pensionerdetail-service

4.pms-XXXX-penstion-pro-rep-service

