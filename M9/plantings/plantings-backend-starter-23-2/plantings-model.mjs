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
	location_name:    { type: String, required: true },
	bed_length:     { type: Number, required: true },
	exec_date: { type: Date, required: true }
});

// Compile the model from the schema.
const Planting = mongoose.model('Planting', plantingSchema);


// CREATE model *****************************************
const createPlanting = async (location_name, bed_length, exec_date) => {
    const planting = new Planting({ 
        location_name: location_name, 
        bed_length: bed_length, 
        exec_date: exec_date 
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


// UPDATE model *****************************************************
const updatePlanting = async (_id, location_name, bed_length, exec_date) => {
    const result = await Planting.replaceOne({_id: _id }, {
        location_name: location_name, 
        bed_length: bed_length, 
        exec_date: exec_date
    });
    return { 
        _id: _id, 
        location_name: location_name, 
        bed_length: bed_length, 
        exec_date: exec_date
    }
}



// Export our variables for use in the controller file.
export { createPlanting, retrievePlantings, retrievePlantingByID, updatePlanting, deletePlantingById, deleteAllPlantings }