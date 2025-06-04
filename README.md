## How to Run Locally

- git clone https://github.com/your-repo.git
- cd Root_Folder
- npm install
- refer .env.example to create .env file  # update your DB credentials
- npm start


## API Endpoints

### Auth
- `POST /api/auth/register` – Register user
- `POST /api/auth/login` – Login user

### Patients
- `GET /api/patients` – Get all patients
- `GET /api/patients/:id` – Get patient by id
- `POST /api/patients` – Create patient
- `POST /api/patients/:id` – Update patient
- `DELETE /api/patients/:id` – Delete patient


### Doctors
- `GET /api/doctors` – Get all doctors
- `POST /api/doctors` – Create doctor
- `GET /api/doctors/:id` – Get doctors by id
- `POST /api/doctors/:id` – Update doctors details
- `DELETE /api/doctors/:id` – Delete doctors

### Mappings
- `POST /api/mappings` – Map patient to doctor
- `GET /api/mappings` – Get all mappings
- `GET /api/mappings/:id` – Get mappings by patient ID
- `DELETE /api/mappings/:id` – Delete mappings


##  Tech Stack
- Node.js
- Express
- PostgreSQL
- Sequelize ORM
- JWT Auth
- Bcrypt
- Render (for DB hosting)
## Outcome
- Users will be able to register and log in.
- Authenticated users will be able to add and manage patient and doctor records.
- Patients will be able to be assigned to doctors.
- Data will be stored securely in PostgreSQL.

