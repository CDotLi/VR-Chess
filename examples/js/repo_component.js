AFRAME.registerComponent('repo', {

    init: function() {
        const avatar1 = document.querySelector('#player')
        const sText = document.querySelector('#startText')
        const pCursor = document.querySelector('#playercursor') 
        const emp = document.querySelector('#empty');  
        
        this.el.addEventListener('click', function() {  //reset position, remove instructions, set playerID for turns
            if (this.getAttribute('id')=="whiteBox") {
                avatar1.setAttribute('position', "0 1.2 0.4")
                sText.setAttribute('visible', "false")
                pCursor.setAttribute('playerID', "0")
            }
            else if (this.getAttribute('id')=="blackBox") {   //reset position, remove instructions, set playerID for turns
                    avatar1.setAttribute('position', "0 1.2 -0.4")
                    sText.setAttribute('visible', "false")
                    pCursor.setAttribute('playerID', "1")
                }
        })
    }
});

AFRAME.registerComponent('char', {
    schema:{
        playerID: {type: 'string', default: '0'}
    }
});

AFRAME.registerComponent('turns', {
    schema:{
        whoseTurn: {type: 'string', default:"0"}
    }
})

