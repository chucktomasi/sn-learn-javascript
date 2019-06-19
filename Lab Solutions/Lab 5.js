//
// Lab 5: 
// Create a script that creates 5 teams of 4 people
// and assigns a unique identifier to each team member.
// The script should display the team number,
// person number, and identifier for that person/team.
// Avoid displaying zeros for a better user experience.
//

var id = 1;
for (var team = 0; team < 5; team++) {
    for (var person = 0; person < 4; person++) {
        gs.info('id=' + id + ' team=' + team+1 + ' person=' + person+1);
        ++id;
    }
}