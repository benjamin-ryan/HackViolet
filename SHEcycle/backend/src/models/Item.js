// backend/src/models/Item.js
import mongoose from 'mongoose';

const ItemSchema = new mongoose.Schema({
    name: String,
    description: String,
    category: String,
    type: String,
    imageUrl: String,
    owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    status: { type: String, default: 'available' }, // available, traded
}, { timestamps: true });

export default mongoose.model('Item', ItemSchema);