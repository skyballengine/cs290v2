import 'dotenv/config';
import express from 'express';
import * as plantings from './plantings-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/log', (req,res) => { 
    plantings.createPlanting(
        req.body.locationName, 
        req.body.bedLength, 
        req.body.execDate
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
app.get('/log', (req, res) => {
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
app.get('/log/:_id', (req, res) => {
    plantings.retrievePlantingByID(req.params._id)
    .then(planting => { 
        if (planting !== null) {
            res.json(planting);
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
app.put('/log/:_id', (req, res) => {
    plantings.updatePlanting(
        req.params._id, 
        req.body.locationName, 
        req.body.bedLength, 
        req.body.execDate
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
app.delete('/log/:_id', (req, res) => {
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

app.delete('/log', (req, res) => {
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