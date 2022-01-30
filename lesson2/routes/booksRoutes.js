const router = require('express').Router();
const {books} = require('../controllers')
console.log('books', books.create)

router.get('/', books.getAll);
router.get('/:id', books.getOne);
router.put('/:id', books.update);
router.delete('/:id', books.remove);
router.post('/', books.create);


module.exports = router;