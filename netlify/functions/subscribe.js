const axios = require("axios");

const API_KEY = process.env.MAILERLITE_PRODUCTION_API_KEY;
const BASE_URL = process.env.MAILERLITE_PRODUCTION_BASE_API_URL;
const GROUP_ID = process.env.MAILERLITE_PRODUCTION_NEWSLETTER_GROUP_ID;

async function handler(event) {
  if (!event.body) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: "Bad request" }),
    };
  }

  // Directly extracting email from the parsed event body
  const { email } = JSON.parse(event.body); // Adjusted to match the incoming data structure

  const url = `${BASE_URL}/subscribers`;

  const data = {
    email: email,
    fields: {},
    groups: [GROUP_ID], // Direct usage without template literal
  };

  const options = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
  };

  try {
    await axios.post(url, data, options);
    return {
      statusCode: 201,
      body: JSON.stringify({
        message: "Subscriber successfully created and added to group",
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Internal Server Error" }), // It's a good practice to avoid exposing the raw error to the client
    };
  }
}

exports.handler = handler; // Make sure to use exports.handler for Netlify Functions
