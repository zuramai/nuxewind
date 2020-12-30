<template>
    <div id='layout-horizontal' class='layout-wrapper bg-light dark:bg-black-600 min-h-screen'>
        <div id="app">
            <nx-header/>
        </div>
        <div id="content" >
            <transition name="fade-slide-horizontal" mode="out-in">
                <Nuxt/>
            </transition>
        </div>
    </div>
</template>
