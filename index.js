const express = require('express');
const app = express();
const mqtt = require('mqtt');

// MQTT client connection
const client = mqtt.connect('ws://localhost'); // MQTT broker address

client.on('connect', function () {
    console.log('Connected to MQTT broker');
    client.subscribe('topic'); // Subscribe to relevant MQTT topics
});

client.on('message', function (topic, message) {
    console.log('Received message:', message.toString());
    // Process the message as needed
});

// Express route to handle incoming messages (if required)
app.post('/incoming', (req, res) => {
    // Process incoming message from client
    res.send('Message received');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
