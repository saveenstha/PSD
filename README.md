# Personal Sustainability Dashboard

A **Personal Sustainability Dashboard** that analyzes and predicts a user’s environmental impact (e.g., carbon footprint), offering actionable insights and recommendations. 

---

## Project Goal
This project aims to combine:
- **Web app development** (Django REST Framework & React).
- **Data engineering** (Apache Airflow, dbt).
- **Data analytics** (scikit-learn, interactive charts).

It’s a future-proof project focusing on sustainability and climate-tech.

---

## Features
- User Registration & Login
- Log daily data (transport mode, energy usage, waste generated).
- Dashboard with interactive charts and statistics.
- Prediction of future emissions.
- Actionable recommendations.
- Export results (PDF, CSV).
- Integrated data pipelines (external APIs, MinIO/S3 storage, dbt, Apache Airflow).

---

## Architecture
React App ---> Django REST ---> PostgreSQL
| ^
v |
MinIO/S3 <-- Apache Airflow <-- dbt
^
|
scikit-learn


---

## Tech Stack
- **Backend:** Django REST Framework
- **Frontend:** React.js + TailwindCSS
- **Database:** PostgreSQL
- **Data Orchestration:** Apache Airflow
- **Data Modeling:** dbt
- **Machine Learning:** scikit-learn
- **Deployment:** Docker, docker compose, AWS/Azure/GCP

---

## Getting Started
### Prerequisites
- Python 3.10+
- Node.js 18+
- Docker/Docker Compose
- PostgreSQL
- MinIO / AWS S3 (optional)

### Install & Run
#### Backend
```bash
cd backend/
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 
```

#### Frontend
```bash
Copy
Edit

npx create-react-app frontend
cd frontend/
npm start
```

## Roadmap
- ✅ User Registration & Auth
- ✅ Entries and Dashboard
- ⏳ Apache Airflow for Data Ingestion
- ⏳ dbt for Data Modeling
- ⏳ scikit-learn Model for Predictions
- ⏳ Export Reports
- ⏳ Real-time Streaming (Kafka)

## Contributing
Open to collaborations and contributions. Feel free to fork, open issues, and make PRs.

## License
MIT

## Contact
If you have any questions or ideas, feel free to open an issue or connect with me.

