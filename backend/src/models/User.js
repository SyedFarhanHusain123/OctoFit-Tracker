// User model placeholder
// Will be implemented with MongoDB/Mongoose

const userSchema = {
  id: 'ObjectId',
  username: 'String',
  email: 'String',
  password: 'String (hashed)',
  firstName: 'String',
  lastName: 'String',
  bio: 'String',
  avatar: 'String (URL)',
  totalActivities: 'Number',
  totalDistance: 'Number',
  totalDuration: 'Number',
  createdAt: 'Date',
  updatedAt: 'Date'
};

module.exports = userSchema;