const mongoose = require('mongoose');
const bookSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },

        author: {
            type: String,
            required: true
        },

        imgurl: {
            type: String,
            required: true,
        },
        desc: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

const Book = mongoose.model("Book", bookSchema);
module.exports=Book;