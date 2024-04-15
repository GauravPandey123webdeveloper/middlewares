import express from 'express';
const app=express();
const router =express.Router();
// built in middleware because it is already defined in express
app.use(express.json());

// global middleware or application level 
app.use((req,res,next)=>{
    let auth=true;
    if(auth){
        console.log("i am global middleware")
        next();
    }else{
        res.send('login please');
    }
    
})
// custom middleware
router.get('/test',(req,res,next)=>{
    // let name='karan'
    let name='himanshu'
    if(name=='himanshu'){
        console.log("i am custom middleware")
        next();
    }else{
        res.send('only himanshu can use this');
    }
})
router.get('/test',(req,res)=>{
    // res.send("hello middleware")
    res.send(req.body);
})
app.use('/',router);
app.listen(8000,()=>{
    console.log("server started on port :",8000);
})