function checkUsersValid(goodUsers) {
      return function(submittedUsers) {
        return submittedUsers.every(function(i) {
            return goodUsers.some(function(j) {
                return (i.id === j.id);
            })
        });
      };
    }
    
    module.exports = checkUsersValid