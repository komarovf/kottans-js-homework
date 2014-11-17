function loadUsers(userIds, load, done) {
    var users = [];
    var loaded = 0;
    userIds.forEach(function(user, index) {
        load(user, function(result) {
            users[index] = result;
            if (++loaded !== userIds.length) return;
            done(users);
        });
    });
}

module.exports = loadUsers;