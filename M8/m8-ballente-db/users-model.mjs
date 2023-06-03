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
    console.log("Successfully connected to MongoDB users_db using Mongoose!");
});


// Define the collection's schema.
const userSchema = mongoose.Schema({
	name: { type: String, required: true },
	age: { type: Number, required: true },
	email: { type: String, required: true },
    phoneNumber: { type: Number, required: false }
});

// Compile the model from the schema.
const User = mongoose.model("User", userSchema);



// CREATE model *****************************************
const createUser = async (name, age, email, phoneNumber) => {
    const user = new User({ 
        name: name, 
        age: age,
        email: email,
        phoneNumber: phoneNumber 
    });
    return user.save();
}


// RETRIEVE models *****************************************

// Retrieve based on a filter and return a promise.
const findUsers = async (filter) => {
    const query = User.find(filter);
    return query.exec();
}

// Retrieve based on the ID and return a promise.
const findById = async (_id) => {
    const query = User.findById(_id);
    return query.exec();
}



// DELETE models  *****************************************
// Delete based on the ID.
const deleteById = async (_id) => {
    const result = await User.deleteOne({_id: _id});
    return result.deletedCount;
};

// Delete based on filter.
const deleteByProperty = async (filter) => {
    const result = await User.deleteMany(filter);
    return result.deletedCount;
}

// Delete all
const deleteAllUsers = async () => {
    const result = await User.deleteMany();
    return result.deletedCount;
}



// UPDATE model *****************************************
const updateUser = async (filter, update) => {
    const result = await User.updateOne(filter, update);
    return result.modifiedCount;
};



// Export our variables for use in the controller file.
export { createUser, findUsers, findById, updateUser, deleteById, deleteByProperty, deleteAllUsers }