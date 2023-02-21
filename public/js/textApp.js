window.addEventListener('load', ()=>{
    const textArea = document.querySelector('#message-area section.wrapper div.message-container div.message-box textarea');
    const status = document.querySelector('#message-area section.wrapper div.status span.type-status');
    const msgButton = document.querySelector('button');
    const messageArea = document.querySelector('.text-display-container');

    const socket = io();

    const message = document.createElement('h1');
    message.style.cssText = "font-size: 53px; color: #3dba82; padding: 50px";
    message.innerText = "Site is not ready for this yet:(";
    textArea.addEventListener('input', () => {
        if(textArea.value != 0) {
            status.innerText = "typing....";
        } else {
            status.innerText = "";
        }
    });

    // msgButton.addEventListener('click', () => {
    //     if(textArea.value != 0) {
    //         messageArea.appendChild(message);
    //         msgButton.disabled = true;
    //         textArea.disabled = true;
    //         status.innerText = '';
    //         textArea.value = '';
    //     }
    // });
    msgButton.addEventListener('click', () => {
        if(textArea.value != null) {
            socket.emit('chat message', textArea.value)
            textArea.value = ''
            status.innerText = '';
        }
    });

    socket.on('chat message', (msg)=> {
        var item = document.createElement('h3');
        item.textContent = msg;
        messageArea.appendChild(item);
        window.scrollTo(0, document.body.scrollHeight);
    })
});