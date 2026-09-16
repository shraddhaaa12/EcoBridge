require("dotenv").config();

const express = require("express");
const cors = require("cors");
const { createClient } = require("@supabase/supabase-js");

const app = express();


// ===============================
// MIDDLEWARE
// ===============================

app.use(cors());
app.use(express.json());


// ===============================
// SUPABASE CONNECTION
// ===============================

const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
);


// ===============================
// BASIC API ROUTE
// ===============================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EcoBridge API is running!"
  });
});


// ===============================
// HEALTH CHECK
// ===============================

app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "EcoBridge backend is connected!"
  });
});


// ===============================
// DATABASE CONNECTION TEST
// ===============================

app.get("/api/test-db", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("id")
      .limit(1);

    if (error) {
      console.error("Supabase error:", error);

      return res.status(500).json({
        success: false,
        message: "Database connection failed",
        error: error.message
      });
    }

    res.json({
      success: true,
      message: "EcoBridge database is connected!",
      data: data
    });

  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message
    });
  }
});


// ===============================
// TEST USERS API
// ===============================

app.get("/api/users", async (req, res) => {
  try {
    const { data, error } = await supabase
      .from("users")
      .select("*");

    if (error) {
      return res.status(500).json({
        success: false,
        error: error.message
      });
    }

    res.json({
      success: true,
      users: data
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
});


// ===============================
// SERVER
// ===============================

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`EcoBridge server running on http://localhost:${PORT}`);
});