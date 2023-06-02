import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as movies from './movies-model.mjs';

const app = express();

const PORT = process.env.PORT;

// exploration-using-mongoose-to-implement-crud-operations
movies.createMovie("The Matrix", 1999, "English")

// CREATE controller ******************************************
app.get ('/create', asyncHandler(async (req,res) => { 
    const movie = await movies.createMovie(
        req.query.title, 
        req.query.year, 
        req.query.language
        )
    res.send(movie);
}));

// FILTER through the object using If Else syntax  ****************** 
// 1 PARAM ONLY --- does not work when asking for multiple params
function movieFilter(req) {
    let filter = {};
    if (req.query._id !== undefined) {
        filter._id = req.query._id;
    } if (req.query.title !== undefined) {
         filter.title = req.query.title;
    } if (req.query.year !== undefined) {
         filter.year = req.query.year;
    } if (req.query.language !== undefined) {
        filter.language = req.query.language ;
    } 
    return filter;
}



// RETRIEVE ****************************************************
// ALL or filtered set of documents controller   
app.get ('/retrieve', asyncHandler(async (req,res) => { 
    const filter = movieFilter(req);
    const result = await movies.findMovies(filter)
    res.send(result);
}));



// DELETE Functions and Controller ******************************

// Delete by ID with error catching
function deleteById(req, res) {
    movies.deleteById(req.query._id)
        .then(deletedCount => {
            res.send({ deletedCount: deletedCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
}

// Delete based on the filter
function deleteByProperty(req, res) {
    const filters = movieFilter(req);
    movies.deleteByProperty(filters)
        .then(deletedCount => {
            res.send({ deletedCount: deletedCount });
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
}

// DELETE document by ID or by Property controller
app.get('/delete', (req, res) => {
    if (req.query._id !== undefined) {
        deleteById(req, res);
    } else {
        deleteByProperty(req, res);
    }
});



// UPDATE documents controller ************************************
app.get('/update', (req, res) => {
    // Find the movie via the _id and if found, filter, 
    // make the update, and print the number of updated documents.
    movies.findById(req.query._id)
        .then(movie => {
            if (movie !== null) {
                const update = {};
                if (req.query.title !== undefined) {
                    update.name = req.query.name;
                }
                if (req.query.year !== undefined) {
                    update.year = req.query.year;
                }
                if (req.query.language !== undefined) {
                    update.language = req.query.language;
                }
                movies.updateMovie({ _id: req.query._id }, update)
                    .then(updateCount => {
                        res.send({ updateCount: updateCount });
                    })
                    .catch(error => {
                        console.error(error);
                        res.send({ Error: 'The document was not updated.'});
                    });
            } else {
                res.send({ Error: 'The document was not found.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.json({ Error: error });
        });

});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});