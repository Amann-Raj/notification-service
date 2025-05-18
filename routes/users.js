const express = require('express');
const router = express.Router();

router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Sample User' });
});

module.exports = router;
