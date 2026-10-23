import express, { Router } from "express";

const app = express();


app.get ( "/.menu", (request,respond) => {

    console.log ("req recived on /menu Route");
});

// GET handler
app.get("/menu", (request, response) => {
  console.log("Get request recieved on /menu route");

  response.send(
    "okay okay, I got your GET request, but I don't have anything to response right now...",
  );
});

// POST handler
app.post("/menu", (request, response) => {
  console.log("POST request recieved on /menu route");

  response.send(
    "okay okay, I got your POST request, but I don't have anything to response right now...",
  );
});

// PUT handler
app.put("/menu", (request, response) => {
  console.log("PUT request recieved on /menu route");

  response.send(
    "okay okay, I got your PUT request, but I don't have anything to response right now...",
  );
})


// DELETE handler
app.delete("/menu", (request, response) => {
  console.log("DELETE request recieved on /menu route");

  response.send(
    "okay okay, I got your DELETE request, but I don't have anything to response right now...",
  );
})


app.listen(8080, () => {
  console.log("Server is Running on PORT 8080");
});
