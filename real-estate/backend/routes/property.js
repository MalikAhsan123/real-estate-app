// routes/property.js
import express from 'express';
import multer from 'multer';
import Property from '../models/property.js';

const router = express.Router();

// Multer setup for image upload
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname);
    }
});

const upload = multer({ storage });

// POST /api/properties
router.post('/', upload.single('image'), async (req, res) => {
    try {
        const {
            propertyname,
            price,
            location,
            type,
            bedrooms,
            bathrooms,
            garage,
            area,
            description
        } = req.body;

        const newProperty = new Property({
            propertyname,
            price,
            location,
            type,
            image: req.file ? `/uploads/${req.file.filename}` : '',
            bedrooms,
            bathrooms,
            garage,
            area,
            description
        });

        const saved = await newProperty.save();
        res.status(201).json(saved);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET /api/properties
router.get('/', async (req, res) => {
    try {
        const properties = await Property.find().sort({ createdAt: -1 });
        res.json(properties);
    } catch (err) {
        res.status(500).json({ message: 'Error fetching properties' });
    }
});

export default router;