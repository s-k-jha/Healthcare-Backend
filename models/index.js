const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
  email: { type: DataTypes.STRING, unique: true },
  password: DataTypes.STRING,
});

const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  disease: DataTypes.STRING,
});

const Doctor = sequelize.define('Doctor', {
  name: DataTypes.STRING,
  specialization: DataTypes.STRING,
});

const Mapping = sequelize.define('Mapping', {});

User.hasMany(Patient);
Patient.belongsTo(User);
User.hasMany(Doctor);
Doctor.belongsTo(User);


Patient.belongsToMany(Doctor, {
  through: Mapping,
  as: 'Doctors',
  foreignKey: 'PatientId',
});


Doctor.belongsToMany(Patient, {
  through: Mapping,
  as: 'Patients',
  foreignKey: 'DoctorId',
});


Mapping.belongsTo(Doctor, { as: 'Doctor' });
Mapping.belongsTo(Patient, { as: 'Patient' });


module.exports = { sequelize, User, Patient, Doctor, Mapping };
