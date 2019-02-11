const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Transaction Schema
var ObjectId = require("mongoose").Types.ObjectId;

const TransactionSchema = new Schema({
    user: { type: ObjectId, ref: 'users' },
    amount: Number,
    type: String,
    remark: String,
    date: Date
});

module.exports = Transaction = mongoose.model("Transaction", TransactionSchema);
