function getShortMessages(messages) {
      return messages.filter(function(msg) {
          return msg.message.length < 50;
      }).map(function(obj) {
          return obj.message;
      });
    }
    
    module.exports = getShortMessages