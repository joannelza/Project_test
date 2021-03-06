var express=require("express")
var app=express()

var cors=require("cors")
var bodyParser=require("body-parser")
var mongoose=require("mongoose")
var port=process.env.PORT || 5000



app.use(bodyParser.json())
app.use(cors())
///app.options('*',cors())
app.use(
    bodyParser.urlencoded({
        extended: false
    })
    )

const url="mongodb://localhost:27017/admindb"
mongoose
.connect(url,{useNewUrlParser:true})
.then(() => console.log("MOngoDB connected"))
.catch(err => console.log(err))

var Users=require('./routes/Users')

app.use('./users',Users)

app.listen(port, () => {
    console.log("Server is running on port : " + port)
})