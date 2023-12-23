const functions = require('firebase-functions');
const admin = require('firebase-admin');

admin.initializeApp(functions.config().firebase);

// Contact Form Submission HTTPS Callable Function
exports.submitContactForm = functions.https.onCall(async (data, _) => {

    const timestamp = admin.firestore.Timestamp.fromDate(new Date())
    // throw new functions.https.HttpsError(
    //     'failed-precondition',
    //     'User is not a part of this group.'
    // )
    const contact =  admin.firestore().collection('contact_form_submissions').add({
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: timestamp,
        ip_address: null,
    })
    
      return {status: 'success'}
  });
