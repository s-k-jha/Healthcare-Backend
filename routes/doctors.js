const router = require('express').Router();
const auth = require('../middlewares/authMiddleware');
const c = require('../controllers/doctorController');

router.post('/', auth, c.create);
router.get('/', c.getAll);
router.get('/:id', c.getOne);
router.put('/:id', auth, c.update);
router.delete('/:id', auth, c.remove);

module.exports = router;