const mongoose      = require('mongoose');
const Schema        = mongoose.Schema;
const timestamps    = require('mongoose-timestamp');

const eventSchema = new Schema({
    companyName:        String,
    jobURL:             String,
    address:            String,
    pointsOfContact:    [{
                        name:               String,
                        title:              {type: String, enum: ['CTO', 'Lead Engineer', 'HR Person', 'Other']},
                        email:              String,
                        phone:              String,
                        contactDetails:     [{
                                            date:   Date,
                                            action: String
                                            }]
                        }],
    notes:              [String]
  });
  
  eventSchema.plugin(timestamps);
  const Event = mongoose.model('Event', eventSchema);
  module.exports = Event;