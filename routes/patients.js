const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const c = require('../controllers/patientController');

router.post('/', auth, c.create);
router.get('/', auth, c.getAll);
router.get('/:id', auth, c.getOne);
router.put('/:id', auth, c.update);
router.delete('/:id', auth, c.remove);

module.exports = router;