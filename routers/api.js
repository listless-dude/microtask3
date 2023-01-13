const express = require('express');
const axios = require('axios');

const router = express.Router();

router.get('/myPos', async (req, res) => {
    try {
        const publicAPI = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${req.query.lat}&lon=${req.query.lon}`;
        const response = await axios.get(publicAPI);
        const rest = response.data;

        if (rest == null || rest == undefined)
            return res.status(400).send("Bad request");
        
        res.json({address: rest.address});
    }
    catch (error) {
        console.log(error);
        res.status(500).send("Internal Server Error");
    }
});

module.exports = router;