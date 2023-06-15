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
        console.log('Successfully connected to MongoDB Plantings collection using Mongoose.');
        // console.log(db);
    }
});

// SCHEMA: Define the collection's schema.
const plantingSchema = mongoose.Schema({
	locationName:    { type: String, required: true },
	bedLength:     { type: Number, required: true },
	execDate: { type: Date, required: true, default: Date.now }
});

// Compile the model from the schema.
const Planting = mongoose.model('Planting', plantingSchema);


// CREATE model *****************************************
const createPlanting = async (locationName, bedLength, execDate) => {
    const planting = new Planting({ 
        locationName: locationName, 
        bedLength: bedLength, 
        execDate: execDate 
    });
    return planting.save();
}


// RETRIEVE models *****************************************
// Retrieve based on a filter and return a promise.
const retrievePlanting = async () => {
    const query = Planting.find();
    return query.exec();
}

// RETRIEVE by ID
const retrievePlantingByID = async (_id) => {
    const query = Planting.findById({_id: _id});
    return query.exec();
}

// UPDATE model *****************************************************
const updatePlanting = async (_id, locationName, bedLength, execDate) => {
    const result = await Planting.replaceOne({_id: _id }, {
        locationName: locationName, 
        bedLength: bedLength, 
        execDate: execDate
    });
    return { 
        _id: _id, 
        locationName: locationName, 
        bedLength: bedLength, 
        execDate: execDate
    }
}

// DELETE model based on _id  *****************************************
const deletePlantingById = async (_id) => {
    const result = await Planting.deleteOne({_id: _id});
    return result.deletedCount;
};

// DELETE all plantings
const deleteAllPlantings = async () => {
    const result = await Planting.deleteMany();
    return result.deletedCount;
}




// Export our variables for use in the controller file.
export { createPlanting, retrievePlanting, retrievePlantingByID, updatePlanting, deletePlantingById, deleteAllPlantings }