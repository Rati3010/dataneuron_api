import express from 'express';
import {
  addCollection,
  getCollection,
  updateCollection,
} from '../controller/collection.controller.js';

const router = express.Router();

router.get('/', getCollection);
router.post('/add', addCollection);
router.put('/update/:collectionId', updateCollection);

export default router;
