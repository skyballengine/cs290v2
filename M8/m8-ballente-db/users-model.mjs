// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect to the Atlas cluster or local MongoDB.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected 
// and print a message in the console.
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});


// Define the collection's schema.
const movieSchema = mongoose.Schema({
	title: { type: String, required: true },
	year: { type: Number, required: true },
	language: { type: String, required: true }
});

// Compile the model from the schema.
const Movie = mongoose.model("Movie", movieSchema);



// CREATE model *****************************************
const createMovie = async (title, year, language) => {
    const movie = new Movie({ 
        title: title, 
        year: year, 
        language: language 
    });
    return movie.save();
}


// RETRIEVE models *****************************************

// Retrieve based on a filter and return a promise.
const findMovies = async (filter) => {
    const query = Movie.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findById = async (_id) => {
    const query = Movie.findById(_id);
    return query.exec();
}



// DELETE models  *****************************************
// Delete based on the ID.
const deleteById = async (_id) => {
    const result = await Movie.deleteOne({_id: _id});
    return result.deletedCount;
};

// Delete based on filter.
const deleteByProperty = async (filter) => {
    const result = await Movie.deleteMany(filter);
    return result.deletedCount;
}



// UPDATE model *****************************************
const updateMovie = async (filter, update) => {
    const result = await Movie.updateOne(filter, update);
    return result.modifiedCount;
};



// Export our variables for use in the controller file.
export { createMovie, findMovies, findById, updateMovie, deleteById, deleteByProperty }