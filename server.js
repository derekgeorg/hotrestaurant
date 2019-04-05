var express = require("express");
var path = require("path");
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var tables = [
  {
    routeName: "george",
    id: "123",
    name: "George",
    phone: "346 876 5309",
    email: "george@gmail.com"
  }

];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Displays all characters
app.get("/api/tables", function(req, res) {
  return res.json(characters);
});

// Displays a single character, or returns false
app.get("/api/tables/:table", function(req, res) {
  var chosen = req.params.character;

  console.log(chosen);

  for (var i = 0; i < tables.length; i++) {
    if (chosen === tables[i].routeName) {
      return res.json(tables[i]);
    }
  }

  return res.json(false);
});

// Create New Characters - takes in JSON input
app.post("/api/tables", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body parsing middleware
  var newTable = req.body;

  // Using a RegEx Pattern to remove spaces from newCharacter
  // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
  newTable.routeName = newTable.name.replace(/\s+/g, "").toLowerCase();

  console.log(newTable);

  tables.push(newTable);

  res.json(newTable);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
