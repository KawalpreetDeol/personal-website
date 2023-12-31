/* eslint-disable */ 
const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

// Contact Form Submission HTTPS Callable Function
exports.submitContactForm = functions.https.onCall(async (data, _) => {
  const timestamp = admin.firestore.Timestamp.fromDate(new Date());
  // Name parsing
  // Name length
  if (data.name.length > 30) {
    throw new functions.https.HttpsError(
        "failed-precondition",
        `Name is too long. Keep it 30 or under. Currently ${data.name.length} characters.`,
    );
  }
  // Invalid Character in Name
  invalidCharacters = ["\"", "'", "`", "!", "@", "(", ")", "*", "&", "^", "%", "$", "~",
    "#", "?", ">", "<", ":", ";", ",", "{", "}", "[", "]", "|", "-", "+", "=", "_"];
  
  for (character in invalidCharacters) {
    if (data.name.includes(character)) {
      throw new functions.https.HttpsError(
          "failed-precondition",
          `Name contains an invalid character: ${character}.`,
      );
    }
  }
  // Check for numbers
  const containsNumber = (num) => { return /\d+/.test(num) };
    if (containsNumber(data.name)) {
        throw new functions.https.HttpsError(
            "failed-precondition",
            `Name contains a number.`,
        );
    }

  // email parsing
  const isEmail = (email) => {
    return /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i.test(email);
  };
  if (!isEmail(data.email)) {
    throw new functions.https.HttpsError(
        "failed-precondition",
        `Invalid Email. Emails must follow the RFC-2822 standard. Examples of valid emails: 'abc@def.com', 'abc.def@hijk.com'.`,
    );
  }
  // message parsing
  if (data.message.length > 500) {
    throw new functions.https.HttpsError(
        "failed-precondition",
        `Message is ${data.message.length - 500} characters too long.`,
    );
  }

  const submissionStatus = admin.firestore().collection("contact_form_submissions").add({
    name: data.name,
    email: data.email,
    message: data.message,
    timestamp: timestamp,
  }).then(res => {
    return {status: 200, message: "success"}
  }).catch(error => {
    return {status: 500, message: "Internal failure to submit form."}
  });

  return submissionStatus;
});
