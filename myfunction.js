const axios = require('axios')
const express = require('express');
const app = express();
const port =3000;

app.use(express.json())
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });


  app.get('/say/',(req,res)=>{

    axios.get('https://n2kcu8ui8j.execute-api.us-east-1.amazonaws.com/test/say?keyword='+req.query.keyword
       ).then(function(response){
            res.send(response.data)
        })
        .catch(err=>{
            console.log('Failed');
        })

  
    });
    app.listen(port, () =>{
        console.log(`API Served at http://localhost:${port}`)
    })
    