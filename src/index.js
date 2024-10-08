const express = require('express');

const {serverConfig,loggerConfig} = require("./config");

const apiRoutes = require('./routes');

const app = express();

app.use('/api',apiRoutes);


app.listen(serverConfig.PORT,()=>{
    console.log(`Server is running on the PORT ${serverConfig.PORT}`),
    loggerConfig.info("successfully started the server")
})

