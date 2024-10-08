const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }
  console.log('Connected to MongoDB.');
  const db = client.db('your_database_name');
  const notificationsCollection = db.collection('notifications');

  // Define API routes
  app.get('/api/notifications', async (req, res) => {
    try {
      const notifications = await notificationsCollection.find().toArray();
      res.json(notifications);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.post('/api/notifications', async (req, res) => {
    try {
      const notification = req.body;
      const result = await notificationsCollection.insertOne(notification);
      res.status(201).send(result);
    } catch (err) {
      res.status(500).send(err);
    }
  });

  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
});
