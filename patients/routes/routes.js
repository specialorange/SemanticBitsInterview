const router = require('express').Router();
const { Patient, Drug, PatientDrug, sequelize } = require('../db');

router.get('/', async (req, res) => {
  const data = await Patient.findAll({
    include: [{
      model: Drug,
      as: 'drugs',
      through: {
        model: PatientDrug,
        attributes: [],
      }
    }],
    limit: 25
  });

  // const data = await sequelize.query('select * from patients');

  res.json({
    patients: data
  });
});

router.post('/', function(req, res) {
  // TODO: implement creating a patient using sequelize or SQL
  const data = req.body;

  res.json({
    patient: data
  });
});

router.get('/:id', function(req, res) {
  // TODO: implement patient lookup using sequelize or SQL
  let patients = [];

  res.json({
    person: patients.find(function(patient) {
      return (patient.id === req.params.id);
    })
  });
});

router.put('/:id', function(req, res) {
  // TODO: implement updating a patient using sequelize or SQL
  let patients = [];

  const data = Object.assign({}, req.body);
  const index = patients.findIndex(function(patient) {
    return (patient.id === req.params.id);
  });

  if (index === -1) {
    res.json({});
  } else {
    patients.splice(index, 1, data);

    res.json({
      patient: data
    });
  }
});

router.delete('/:id', function(req, res) {
  // TODO: implement deleting a patient using sequelize or SQL
  let patients = [];

  res.json({
    patient: patients.filter(function(patient) {
      return (patient.id !== req.params.id);
    })
  });
});

module.exports = router;
