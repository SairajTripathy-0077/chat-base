const mongoose = require('mongoose');

const conversationSchema = new mongoose.Schema({
    participants: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    lastmessage: { type: mongoose.Schema.Types.ObjectId, ref: 'Message' },
    unreadcount: {type: Number, default: 0},
}, {Timestamps: true});

const Conversation = mongoose.model('Conversation', conversationSchema);

module.exports = Conversation;