// this is demonstrates the ejs files and key: value pairs for dayType : " a weekday based on the getDate module

import express from "express";
const app = express();
const port = 3000;
const day = new Date();
app.get("/", (req, res)  => {
    const today = new Date();
    const day = today.getDay();

   // console.log(day);
   let type="a weekday";
   let adv = "its time to work hard";

   if(day === 0 || day ===6) {
        type = "the weekend";
        adv  = "it's time to have some fun";
}

    res.render("index.ejs", {
        dayType: "a weekday", 
        advice: "It's time to work hard", 
    });
});





app.listen(port, () => {
console.log(`sever running on port ${port}`);
})
