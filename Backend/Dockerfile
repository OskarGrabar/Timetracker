# Använd en officiell JDK som basbild
FROM openjdk:17-jdk-slim

# Ange vilken mapp vi ska jobba i inom containern
WORKDIR /app

# Kopiera över det byggda JAR-filen från ditt projekt
COPY timetracker/target/timetracker-0.0.1-SNAPSHOT.jar app.jar

# Exponera porten som din applikation kommer att lyssna på (t.ex. 8080 för Spring Boot)
EXPOSE 8080

# Starta applikationen
ENTRYPOINT ["java", "-jar", "app.jar"]
