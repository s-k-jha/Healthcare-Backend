const { Mapping, Doctor, Patient } = require('../models');

exports.assign = async (req, res) => {
  const { doctorId, patientId } = req.body;
  const map = await Mapping.create({ DoctorId: doctorId, PatientId: patientId });
  res.status(201).json(map);
};

exports.getAll = async (req, res) => {
  const mappings = await Mapping.findAll({
    include: [
      { model: Doctor, as: 'Doctor' },
      { model: Patient, as: 'Patient' },
    ],
  });

  res.json(mappings);
};

exports.getByPatient = async (req, res) => {
  const mappings = await Mapping.findAll({
    where: { PatientId: req.params.patientId },
    // include: [Doctor],
    include: [
      { model: Doctor, as: 'Doctor' },
      { model: Patient, as: 'Patient' },
    ]
  });
  res.json(mappings);
};

exports.remove = async (req, res) => {
  const mapping = await Mapping.findByPk(req.params.id);
  await mapping.destroy();
  res.sendStatus(204);
};
