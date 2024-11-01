const express = require('express');
const { MongoClient, ObjectId } = require('mongodb'); // Import ObjectId
var cors = require('cors');

const app = express();
const port = 3000;

// MongoDB connection URL
const url = 'mongodb+srv://franzieyoogan2:admin357159@cluster0.guw8a4s.mongodb.net/';
const dbName = 'gallery2';
let db;

app.use(cors());
// Middleware to parse JSON
app.use(express.json());

// Connect to MongoDB
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database');
    db = client.db(dbName);
  })
  .catch(error => console.error('Database connection error:', error));

// Route to get all documents
app.get('/gallery2', async (req, res) => {
  try {
    const gallery2 = await db.collection('gallery2').find().toArray();
    res.json(gallery2);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Route to get documents by type
app.get('/gallery2/:type', async (req, res) => {
  const type = req.params.type;
  console.log(`Fetching items with type: ${type}`);

  try {
    const items = await db.collection('gallery2').find({ type: type }).toArray(); // Use find and convert to array
    if (items.length > 0) {
      res.json(items); // Return all matching items
    } else {
      console.log('No items found');
      res.status(404).send('No items found');
    }
  } catch (error) {
    console.error('Error fetching items:', error);
    res.status(500).send(error);
  }
});

// Route to update a document by ID
app.put('/gallery2/:id', async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body; // Get updated data from request body

  console.log(`Updating item with ID: ${id}`, updatedData);

  try {
    const result = await db.collection('gallery2').updateOne(
      { _id: new ObjectId(id) }, // Ensure ObjectId is used here
      { $set: updatedData }
    );

    console.log('Update result:', result); // Log the result

    if (result.modifiedCount === 0) {
      console.log('Item not found or no changes made');
      return res.status(404).send('Item not found or no changes made');
    }

    console.log('Item updated successfully');
    res.send('Item updated successfully');
  } catch (error) {
    console.error('Error updating item:', error);
    res.status(500).send(error); // Send the error for better debugging
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
