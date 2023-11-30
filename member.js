function skillsMember() {
    var member = document.getElementById("member");
    var memberSkills = member.getElementsByClassName("skills");
    var i;
    for (i = 0; i < memberSkills.length; i++) {
        memberSkills[i].className += " memberSkills";
    }
}