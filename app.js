const express = require('express');
const app = express();
require('./Database/connection')

const authRoutes = require("./Routes/auth");
const houseRoutes = require('./Routes/housesRoute')
const templateRoutes = require('./Routes/templateRoute')
const reportRoutes = require('./Routes/reportRoute')
const visitHouseRoutes = require('./Routes/visitHouseRoute')

const Port = 3000;


app.use(express.json());


app.use("/api", authRoutes);
app.use("/api", houseRoutes);
app.use("/api", templateRoutes);
app.use("/api", reportRoutes);
app.use("/api", visitHouseRoutes);

app.listen(Port, () => {
    console.log(`connection to the ${Port}`);
})
