const mongoose = require("mongoose");
mongoose.connect(
    "mongodb+srv://ishathapa2521:Qp8Drtv7E1IyRi4N@cluster0.6kmhngz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then((res)=>console.log("Connected"));