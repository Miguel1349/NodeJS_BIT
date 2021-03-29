let socket = io();
socket.on('messages', data => {
    console.log(data);
    publicarMensaje(data);
});

function publicarMensaje(data) {
    let html = data.map((mensaje, index) => {
        return (`<div class='mensaje'>
                    <strong>${mensaje.alias}</strong> dice:
                    <p>
                        ${mensaje.text}
                    </p>
                </div>`);
    }).join(' ');
    document.getElementById('mensajes').innerHTML = html;
}

function agregarMensaje(e) {
    let mensaje = {
        alias: document.getElementById('alias').value,
        text: document.getElementById('texto').value
    }
    document.getElementById('alias').style.display = 'none';
    socket.emit('agregar-mensaje', mensaje);
}