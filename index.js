
const express = require("express");
const app = express();
const port = 5000;


const appleWatchCollection = [
  {
    "id": 1,
    "model": "Apple Watch Series 9",
    "releaseDate": "September 2024",
    "caseSizes": ["41mm", "45mm"],
    "colors": ["Midnight", "Starlight", "Silver", "Graphite"],
    "features": ["Always-On Display", "Blood Oxygen App", "ECG App", "S9 Chip"],
    "price": "$399 - $499",
    "availableBands": ["Sport Band", "Sport Loop", "Leather Loop", "Milanese Loop"],
    "image": "https://m.media-amazon.com/images/I/81OjeU5w-aL._AC_SX522_.jpg"
  },
  {
    "id": 2,
    "model": "Apple Watch Ultra 2",
    "releaseDate": "September 2024",
    "caseSizes": ["49mm"],
    "colors": ["Titanium"],
    "features": ["Ultra-Low Temperature Resistance", "Action Button", "Dual GPS Bands", "S9 Chip"],
    "price": "$799",
    "availableBands": ["Alpine Loop", "Ocean Band", "Trail Loop"],
    "image": "https://m.media-amazon.com/images/I/81LaeWvEbGL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
  },
  {
    "id": 3,
    "model": "Apple Watch SE (2nd Gen)",
    "releaseDate": "September 2022",
    "caseSizes": ["40mm", "44mm"],
    "colors": ["Midnight", "Starlight", "Silver"],
    "features": ["Fitness Tracking", "Heart Rate Monitoring", "Fall Detection"],
    "price": "$249 - $299",
    "availableBands": ["Sport Band", "Sport Loop"],
    "image": "https://m.media-amazon.com/images/I/61ripYHNMfL._AC_SX522_.jpg"
  },
  {
    "id": 4,
    "model": "Apple Watch Series 8",
    "releaseDate": "September 2022",
    "caseSizes": ["41mm", "45mm"],
    "colors": ["Midnight", "Starlight", "Red", "Silver"],
    "features": ["Temperature Sensor", "Always-On Display", "Blood Oxygen App"],
    "price": "$399 - $499",
    "availableBands": ["Sport Band", "Sport Loop", "Leather Loop", "Milanese Loop"],
    "image": "https://m.media-amazon.com/images/I/61ETcfPZFJL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
  },
  {
    "id": 5,
    "model": "Apple Watch Series 7",
    "releaseDate": "October 2021",
    "caseSizes": ["41mm", "45mm"],
    "colors": ["Midnight", "Starlight", "Green", "Blue"],
    "features": ["Always-On Display", "Blood Oxygen App", "Faster Charging"],
    "price": "$399 - $499",
    "availableBands": ["Sport Band", "Sport Loop", "Leather Loop", "Milanese Loop"],
    "image": "https://m.media-amazon.com/images/I/71e3oo0Qk3L.__AC_SX300_SY300_QL70_FMwebp_.jpg"
  },
  {
    "id": 6,
    "model": "Apple Watch Series 6",
    "releaseDate": "September 2020",
    "caseSizes": ["40mm", "44mm"],
    "colors": ["Red", "Silver", "Gold", "Blue"],
    "features": ["Blood Oxygen App", "Always-On Display", "ECG App"],
    "price": "$399 - $499",
    "availableBands": ["Sport Band", "Sport Loop", "Leather Loop", "Milanese Loop"],
    "image": "https://m.media-amazon.com/images/I/71ulah9iIwL.__AC_SY445_SX342_QL70_FMwebp_.jpg"
  }
];

// Middleware to parse JSON
app.use(express.json());


app.get("/products", (req, res) => {
  res.json(appleWatchCollection);
});


app.get("/products/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const watch = appleWatchCollection.find((item) => item.id === id);

  if (watch) {
    res.json(watch);
  } else {
    res.status(404).json({ message: "Watch not found" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
