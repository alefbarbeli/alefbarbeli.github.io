<template>
    <div class="af-contato">
        <!-- Started -->
        <div class="section started">
            <div class="centrize full-width">
                <div class="vertical-center">
                    <div class="started-content">
                        <div class="h-title glitch-effect" data-text="Contato">Contato</div>
                        <div class="h-subtitle typing-bread">
                            <p><a href="index.html">Home</a> / <a href="contacts.html">Contato</a></p>
                        </div>
                        <span class="typed-bread"></span>
                    </div>
                </div>
            </div>
            <a href="#" class="mouse_btn"><span class="ion ion-mouse"></span></a>
        </div>
        
        <!-- Contacts Info -->
        <div class="section contacts">
            <div class="content">
                <div class="title">
                    <div class="title_inner">Contato</div>
                </div>
                <div class="service-items">
                    <div class="service-item">
                        <div class="icon"><span class="ion ion-android-phone-portrait"></span></div>
                        <div class="name">Telefone/ WhatsApp</div>
                        <p>
                            +55 (11)94426-4284
                        </p>
                    </div>
                    <div class="service-item">
                        <div class="icon"><span class="ion ion-email"></span></div>
                        <div class="name">Email</div>
                        <p>
                            <a href="mailto:alefbarbeli@gmail.com">alefbarbeli@gmail.com</a>
                        </p>
                    </div>
                </div>
                
                <div class="contact_form">
                    <form id="cform" method="post">
                        <div class="group-val">
                            <input type="text" name="name" placeholder="Name" />
                        </div>
                        <div class="group-val">
                            <input type="text" name="email" placeholder="Email" />
                        </div>
                        <div class="group-val ct-gr">
                            <textarea name="message" placeholder="Message"></textarea>
                        </div>
                        <a href="#" class="btn fill" onclick="$('#cform').submit(); return false;" data-text="Send Message">Send Message</a>
                    </form>
                    <div class="alert-success">
                        <p>
                            Thanks, your message is sent successfully. We will contact you shortly!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>