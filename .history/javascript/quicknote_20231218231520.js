function createChallengesWebsite(NoteTitle,NoteText) {
    // Create the outer container
    var challengesWebsite = document.createElement('div');
    challengesWebsite.className = 'Challenges-website';

    // Create the bar section
    var bar = document.createElement('div');
    bar.className = 'bar';

    var repatedLineCircle = document.createElement('div');
    repatedLineCircle.className = 'repated-line-circle';

    var lineCircle = document.createElement('div');
    lineCircle.className = 'line-circle';

    var upperLine = document.createElement('div');
    upperLine.className = 'upper-line';

    var anchorTag = document.createElement('a');
    anchorTag.href = '';
    anchorTag.target = '_self';

    var circle = document.createElement('div');
    circle.className = 'circle';

    var icon = document.createElement('p');
    icon.innerHTML = '<i class="fa-solid fa-trash" style="font-size: 25px;"></i>';

    var lowerLine = document.createElement('div');
    lowerLine.className = 'lower-line';

    // Append elements to build the bar section
    circle.appendChild(icon);
    anchorTag.appendChild(circle);

    lineCircle.appendChild(upperLine);
    lineCircle.appendChild(anchorTag);
    lineCircle.appendChild(lowerLine);

    repatedLineCircle.appendChild(lineCircle);
    bar.appendChild(repatedLineCircle);

    // Create the challenges section
    var challenges = document.createElement('div');
    challenges.className = 'challenges';

    var ch_ = document.createElement('div');
    ch_.className = 'ch_';

    var container1 = document.createElement('div');
    container1.className = 'container1';

    var heading = document.createElement('h6');
    heading.className = 'custom-heading';
    heading.innerText = '- ' + NoteTitle.value;

    var paragraph = document.createElement('p');
    paragraph.className = 'custom-paragraph';
    paragraph.innerText = NoteText.value;

    // Append elements to build the challenges section
    container1.appendChild(heading);
    container1.appendChild(paragraph);
    ch_.appendChild(container1);
    challenges.appendChild(ch_);

    // Append the bar and challenges sections to the outer container
    challengesWebsite.appendChild(bar);
    challengesWebsite.appendChild(challenges);

    // Append the Challenges Website to the body or another desired element
    document.body.appendChild(challengesWebsite);
}

var NoteTitle = document.querySelector("#notetitle")
var NoteText = document.querySelector("#notedata")
var ButtonAddNote = document.querySelector("#buttonclicksend")

ButtonAddNote.addEventListener('click',function(){
    if(NoteText.value.length !== 0 && NoteTitle.value.length !== 0){
        createChallengesWebsite(NoteTitle,NoteText)
    }
    NoteText.value = ""
    NoteTitle.value = ""
})
