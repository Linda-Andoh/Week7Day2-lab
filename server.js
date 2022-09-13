//...................
//Greetings

// const express = require('express');

// const app = express();

// app.get('/greeting/:name', (req, res) => {
//     res.json({
//         greeting: `Hello ${req.params.name}, It's so great to see you!`
//     });
// });

// app.listen(3000, () => {
//     console.log('listening on port 3000!');
// });


//......................../
//Tip Calculator//

const express = require('express');

const app = express();

app.get('/tip/:total/:tipPercentage', (req, res) => {
    let tip = req.params.total * req.params.tipPercentage / 100;
    res.json({
        tip: `Hey Your tip is ${tip}` 
    });
});


app.listen(3000, () => {
    console.log('listening on port 3000!');
});