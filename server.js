const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((res, req) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log('Server up and running on port ${PORT}');
});