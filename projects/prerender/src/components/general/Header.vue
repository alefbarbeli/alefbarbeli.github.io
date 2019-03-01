<template>
    <header>
        <div class="head-top">
            <a href="#" class="menu-btn"><span></span></a>
            <div class="top-menu">
                <ul>
                    <li><router-link :to="{ name: 'home'}" class="lnk">Home</router-link></li>
                    <li><router-link :to="{ name: 'portfolio'}" class="lnk">Portfolio</router-link></li>
                    <li><router-link :to="{ name: 'resume'}" class="lnk">Curriculum</router-link></li>
                    <li><router-link :to="{ name: 'contato'}" class="btn">Contato</router-link></li>
                    
                </ul>
            </div>
        </div>
    </header>
</template>

