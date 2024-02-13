const express = require("express"); // this how  you import the express

const app = express(); //to intiallize my application as app variable

app.use(express.json()); //this is for I am using my application with Json format

const port = 9789; //this port number

const array = ["Jammu", "is a good boy", "you know"];

//get method
app.get("/jammu", (req, res) => {
  //it is like if condition , if your method is get and url is "/jammu"
  //first give your application name (app), then give method,
  //then say your url,then call back function nothing but arrow function req,res are parameters
  res.status(200).send(array); //status(200), then you send the array to server
});

//post method//
app.post("/jammu", (req, res) => {
  let newItem = req.body.item; // declare the value which you going to apply in terminal in variable
  array.push(newItem); //push the variable
  res.status(201).send({
    message: "Item has been uploaded",
  });
});

//delete method
app.delete("/jammu", (req, res) => {
  var deleteitem = req.body.item;
  array.find((element, index) => {
    //aacoding to condition find works
    if (element === deleteitem) {
      array.splice(index, 1);
    }
  });
  res.status(204).send({
    message: `Deleted item ${req.body.item}`,
  });
});

app.all("*", (req, res) => {
  res.status(500).send({
    message: "Default url",
  });
});

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
