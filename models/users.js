const mongoose = require('mongoose');
const { collection } = require('./courses');
const { Schema, model } = mongoose;


const userSchema = new Schema(
    {
        id: {
            type: Number,
            require: true,
            unique: ture,
        },
        name: {
            types: String,
            required: true,

        },
        enrolledCourses: {
            type: Array,
            default: [],
        },
        completedScore: {
            type: Number,
            default: 0
        }

    },

    {
        collection: "users"
    }
)

module.exports=model("users",userSchema);