# For Java 11, try this

# FROM adoptopenjdk/openjdk11:alpine-jre

FROM openjdk:8

EXPOSE 5000

ADD target/ProcessPension-Microservice.jar ProcessPension-Microservice.jar

ENTRYPOINT ["java","-jar","/ProcessPension-Microservice.jar"]