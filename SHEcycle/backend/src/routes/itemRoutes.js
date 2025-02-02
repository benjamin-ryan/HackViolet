// backend/src/routes/itemRoutes.js
import express from 'express';
import Item from '../models/Item.js';

const router = express.Router();

// GET all items
router.get('/', async (req, res) => {
    try {
        const items = await Item.find().populate('owner', 'name email');
        res.json(items);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).json({ message: 'Item not found' });
        }
        res.json(item);
    } catch (error) {
        res.status(500).json({ error: 'Error fetching item' });
    }
});

export default router;