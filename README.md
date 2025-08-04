# Timetracker
# ⏱️ Personligt Tidrapporteringssystem

Ett enkelt men kraftfullt React + Spring Boot-projekt för att tidrapportera aktiviteter och visualisera tidsanvändning över olika kategorier.

## 🚀 Funktioner

- ✅ Skapa, redigera och hantera arbetskategorier
- ⏳ Checka in och ut från aktiviteter
- 📊 Statistikgraf över tidsanvändning senaste veckan
- 🔁 Realtidsuppdatering av data

---

## 🖥️ Teknisk Översikt

### 📦 Frontend
- **React** (med Hooks)
- **Axios** för API-anrop
- **Recharts** för statistik
- **Vite** eller Create React App

### 🌐 Backend
- **Spring Boot**
- **Spring Data JPA**
- **REST API**
- **H2 eller annan SQL-databas**

---

## 📁 Projektstruktur

/
├── backend/
│ ├── src/main/java/... ← Spring Boot-kod
│ └── resources/
├── frontend/
│ ├── src/
│ │ ├── components/
│ │ │ ├── CategoryList.jsx
│ │ │ ├── CheckInOut.jsx
│ │ │ └── StatsChart.jsx
│ │ ├── App.jsx
│ │ └── api.js
│ ├── public/
│ └── index.css

yaml
Kopiera
Redigera

---

## 🔧 Kom igång

### 🐳 Alternativ 1: Starta med Docker (rekommenderat)
```bash
docker-compose up --build
💻 Alternativ 2: Starta manuellt
Backend
bash
Kopiera
Redigera
cd backend
./mvnw spring-boot:run
Frontend
bash
Kopiera
Redigera
cd frontend
npm install
npm run dev
🌐 API-endpoints (exempel)
GET /api/categories - Hämta alla kategorier

POST /api/categories - Lägg till ny kategori

PUT /api/categories/{id} - Uppdatera kategori

POST /api/time-entry/check-in - Starta aktivitet

POST /api/time-entry/check-out - Avsluta aktivitet

GET /api/time-entry/stats - Statistik (senaste 7 dagar)

