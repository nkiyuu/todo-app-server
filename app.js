'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
const express = require('express');
const app = express();
const router = express.Router();
router.get('/', (req, res) => {
  res.json({ message: 'hello' });
});
app.use(router);
app.listen(3000);
console.log('start server localhost:3000');
// # sourceMappingURL=app.js.map
