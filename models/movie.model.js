import { model, Schema } from "mongoose";

// Write the schema
const MovieSchema = new Schema({
    title: {
        type : String,
        required : true,
        unique: true
    },
    desc: {
        type : String,
        required : true
    }
});

// Create your model
const Movie = model("Movie",MovieSchema);

export default Movie