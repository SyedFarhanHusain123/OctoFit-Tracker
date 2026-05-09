// Activity model placeholder
// Will be implemented with MongoDB/Mongoose

const activitySchema = {
  id: 'ObjectId',
  userId: 'ObjectId (reference to User)',
  type: 'String (running, cycling, gym, etc)',
  title: 'String',
  description: 'String',
  distance: 'Number (in km)',
  duration: 'Number (in minutes)',
  calories: 'Number',
  startTime: 'Date',
  endTime: 'Date',
  location: 'String',
  image: 'String (URL)',
  likes: 'Array of user IDs',
  comments: 'Array of comments',
  createdAt: 'Date',
  updatedAt: 'Date'
};

module.exports = activitySchema;