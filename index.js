const app = require('express')()
const cors = require('cors')({
    origin:'*'
})

app.use(cors)
app.get('/',(req, res)=>{
    return res.status(200).json({
        msg:"online in heroku app, OK!"
    })
})

app.listen(3005)