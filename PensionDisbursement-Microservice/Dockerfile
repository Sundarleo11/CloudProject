# For Java 11, try this

# FROM adoptopenjdk/openjdk11:alpine-jre

FROM openjdk:8

EXPOSE 7000

ADD target/PensionDisbursement-Microservices.jar PensionDisbursement-Microservices.jar

ENTRYPOINT ["java","-jar","/PensionDisbursement-Microservices.jar"]