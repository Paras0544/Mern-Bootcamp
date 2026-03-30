import express from 'express';

const app = express();
const PORT = 3000;


app.get("/", (req, res) => {
    const today = new Date();
    const day = today.getDay();

    //console.log(day);
    let type = "a weekday";
    let adv = "its time to work hard!";

    if(day === 0 || day ===6){
    let type = "a weekend";
    let adv = "its time to chill hard!"; 
    }

    res.render("index.ejs",
    {dayType: "a weekday",
     advice:"its time to work hard!"});
});


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});
