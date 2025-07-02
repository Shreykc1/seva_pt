const functions = require("firebase-functions");
const { google } = require("googleapis");
const cors = require("cors")({ origin: true });
const serviceAccount = require("./seva.json");

const jwt = new google.auth.JWT(
  serviceAccount.client_email,
  null,
  serviceAccount.private_key,
  ["https://www.googleapis.com/auth/calendar"]
);

const calendar = google.calendar({ version: "v3", auth: jwt });

exports.createCalendarEvent = functions.https.onRequest((req, res) => {
  cors(req, res, async () => {
    const { summary, description, startDateTime, endDateTime, email } = req.body;

    try {
      await jwt.authorize();

      const response = await calendar.events.insert({
        calendarId: "primary",
        resource: {
          summary,
          description,
          start: {
            dateTime: startDateTime,
            timeZone: "Asia/Kolkata",
          },
          end: {
            dateTime: endDateTime,
            timeZone: "Asia/Kolkata",
          },
          attendees: [{ email }],
        },
        sendUpdates: "all", // Sends email invite
      });

      res.status(200).send({
        message: "Event created successfully",
        eventLink: response.data.htmlLink,
      });
    } catch (err) {
      console.error("Error creating event:", err);
      res.status(500).send({ error: err.message });
    }
  });
});
