import 'dotenv/config';
import express from 'express';
import * as plantings from './plantings-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/plantings', (req,res) => { 
    plantings.createPlanting(
        req.body.location_name, 
        req.body.bed_length, 
        req.body.exec_date
        )
        .then(plantings => {
            res.status(201).json(plantings);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ error: 'create a document failed' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/plantings', (req, res) => {
    plantings.retrievePlanting()
        .then(plantings => { 
            if (plantings !== null) {
                res.json(plantings);
            } else {
                res.status(404).json({ Error: 'document not found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'retrieve document failed.' });
        });
});


// RETRIEVE by ID controller
app.get('/plantings/:_id', (req, res) => {
    plantings.retrievePlantingByID(req.params._id)
    .then(movie => { 
        if (movie !== null) {
            res.json(movie);
        } else {
            res.status(404).json({ Error: 'document not found' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'retrieve document failed' });
    });

});


// UPDATE controller ************************************
app.put('/plantings/:_id', (req, res) => {
    plantings.updatePlanting(
        req.params._id, 
        req.body.location_name, 
        req.body.bed_length, 
        req.body.exec_date
    )
    .then(plantings => {
        res.json(plantings);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ error: 'document update failed' });
    });
});


// DELETE Controller ******************************
app.delete('/plantings/:_id', (req, res) => {
    plantings.deletePlantingById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'document no longer exists' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'delete a document failed' });
        });
});

app.delete('/plantings', (req, res) => {
    plantings.deleteAllPlantings()
    .then(deletedCount => {
        if (deletedCount > 0) {
            res.status(204).send();
            console.log(deletedCount)
        } else{
            res.status(404).json({ Error: 'no documents deleted'})
        }
    })
    .catch(error => {
        console.log(error);
        res.send({error: 'delete all documents failed'})
    });
})


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});