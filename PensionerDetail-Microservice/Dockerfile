# For Java 11, try this

# FROM adoptopenjdk/openjdk11:alpine-jre

FROM openjdk:8

EXPOSE 6001

ADD target/PensionerDetail-Microservice.jar PensionerDetail-Microservice.jar

ENTRYPOINT ["java","-jar","/PensionerDetail-Microservice.jar"]