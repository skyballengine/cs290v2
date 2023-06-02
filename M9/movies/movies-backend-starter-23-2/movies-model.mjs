// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ error: '500:Connection to the server failed.' });
    } else  {
        console.log('Successfully connected to MongoDB Movies collection using Mongoose.');
        // console.log(db);
    }
});

// SCHEMA: Define the collection's schema.
const movieSchema = mongoose.Schema({
	title:    { type: String, required: true },
	year:     { type: Number, required: true },
	language: { type: String, required: true }
});

// Compile the model from the schema.
const Movie = mongoose.model('Movie', movieSchema);


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
const retrieveMovies = async () => {
    const query = Movie.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveMovieByID = async (_id) => {
    const query = Movie.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteMovieById = async (_id) => {
    const result = await Movie.deleteOne({_id: _id});
    return result.deletedCount;
};

// DELETE all movies
const deleteAllMovies = async () => {
    const result = await Movie.deleteMany();
    return result.deletedCount;
}


// UPDATE model *****************************************************
const updateMovie = async (_id, title, year, language) => {
    const result = await Movie.replaceOne({_id: _id }, {
        title: title,
        year: year,
        language: language
    });
    return { 
        _id: _id, 
        title: title,
        year: year,
        language: language 
    }
}



// Export our variables for use in the controller file.
export { createMovie, retrieveMovies, retrieveMovieByID, updateMovie, deleteMovieById, deleteAllMovies }