const router = require('express').Router();

let heroes = [
  {
    id: 3,
    firstName: 'Tony',
    lastName: 'Stark',
    organization: 'Marvel'
  },
  {
    id: 7,
    firstName: 'Orora',
    lastName: 'Munroe',
    organization: 'Marvel'
  },
  {
    id: 1,
    firstName: 'Bruce',
    lastName: 'Banner',
    organization: 'Marvel'
  },
  {
    id: 2,
    firstName: 'Bruce',
    lastName: 'Wayne',
    organization: 'DC'
  },
  {
    id: 5,
    firstName: 'Clark',
    lastName: 'Kent',
    organization: 'DC'
  },
  {
    id: 8,
    firstName: 'Miles',
    lastName: 'Morales',
    organization: 'Marvel'
  },
  {
    id: 4,
    firstName: 'Howard',
    lastName: 'Stark',
    organization: 'Marvel'
  },
  {
    id: 6,
    firstName: 'Selina',
    lastName: 'Kyle',
    organization: 'DC'
  }
];

router.get('/', async (req, res) => {
  res.json({
    heroes
  });
});

router.get('/:id', function (req, res) {
  try {
    if (req.params.id) {
      const id = req.params.id;
    }
    res.json({
      person: heroes.find(hero => hero.id === id)
    });
  } catch (e) {
    res.status(500).json({
      error: 'Something went wrong!'
    });
  }
});

module.exports = router;
