const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const c = require('../controllers/mappingController');

router.post('/', auth, c.assign);
router.get('/', auth, c.getAll);
router.get('/:patientId', auth, c.getByPatient);
router.delete('/:id', auth, c.remove);

module.exports = router;
