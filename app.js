const express=require('express');
const app=express();

//Home Page
app.get('/',((req,res)=>{
    console.log(req.url);
    console.log(req.method);
    console.log('User hit the resource');
    res.status(200).send('Home Page')
}))

app.listen(5000),()=>{
    console.log('Server is Listening on port 5000...');
}
