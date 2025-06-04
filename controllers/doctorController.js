const { Doctor } = require('../models');

exports.create = async (req, res) => {
  const doctor = await Doctor.create({ ...req.body, UserId: req.userId });
  res.status(201).json(doctor);
};

exports.getAll = async (req, res) => {
  const doctors = await Doctor.findAll();
  res.json(doctors);
};

exports.getOne = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  res.json(doctor);
};

exports.update = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  await doctor.update(req.body);
  res.json(doctor);
};

exports.remove = async (req, res) => {
  const doctor = await Doctor.findByPk(req.params.id);
  await doctor.destroy();
  res.sendStatus(204);
};
