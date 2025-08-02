const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const router = express.Router();
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

router.get('/', (req, res) => {
    return res.send('Hello world');
});
app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});