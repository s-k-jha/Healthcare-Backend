const { Patient } = require('../models');

exports.create = async (req, res) => {
  try {
    const patient = await Patient.create({ ...req.body, UserId: req.userId });
    res.status(201).json(patient);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAll = async (req, res) => {
  const patients = await Patient.findAll({ where: { UserId: req.userId } });
  res.json(patients);
};

exports.getOne = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  res.json(patient);
};

exports.update = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  await patient.update(req.body);
  res.json(patient);
};

exports.remove = async (req, res) => {
  const patient = await Patient.findByPk(req.params.id);
  await patient.destroy();
  res.sendStatus(204);
};
