FROM arm64v8/openjdk:15.0.2-jdk-slim-buster
ARG JAR_FILE=target/*.jar
COPY ${JAR_FILE} /sentiment-analysis-web-0.0.1-SNAPSHOT.jar
EXPOSE 8080
CMD ["java","-jar","sentiment-analysis-web-0.0.1-SNAPSHOT.jar", "--sa.logic.api.url=${SA_LOGIC_API_URL}"]