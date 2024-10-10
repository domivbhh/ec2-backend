const express=require('express')

const app=express()

app.get('/',(req,res)=>{
    res.send('hello Anand prabhu')
})

app.listen(3000,()=>{
    console.log('server is listening to port 3000')
})