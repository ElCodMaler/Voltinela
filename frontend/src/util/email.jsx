import emailjs from '@emailjs/browser';

const enviarMensaje = (e ,btn , form) => {
    e.preventDefault();
    
    btn.current.value = 'Sending...';
    
    const serviceID = 'default_service';
    const templateID = 'template_9fjtawa';
    
    emailjs.sendForm(serviceID, templateID, form.current, {
    publicKey: '81kl26d2STiVF9uZu',
    }).then(() => {
        btn.current.value = 'Send Email';
        alert('Sent!');
    }, (err) => {
        btn.current.value = 'Send Email';
        alert(JSON.stringify(err));
    });
}

export { enviarMensaje };