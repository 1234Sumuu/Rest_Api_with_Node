const mongoose = require("mongoose");

uri = "mongodb+srv://sumusumaiya74:7WdzzAvczgFSimpd@sumuapi.cv4ztzo.mongodb.net/SumuApi?retryWrites=true&w=majority";

const connectDB = () => {
    console.log("connect db")''
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};