<template>
    <div id="header-wrapper">
        <NxSidebar/>
        <header id='main-header' class="w-100 bg-white border-b border-gray-400 flex items-center">
            <div class="container mx-auto">
                <div class="flex row items-center">
                    <div class="w-1/2">
                        <div class='logo flex'>
                            <Logo/>
                            <h3 class='text-xl font-bold'>Nuxe<span style="color:#884fff">wind</span></h3>
                        </div>
                    </div>
                    <div class="w-1/2 flex justify-end">
                        <div class="dropdown flex items-center">
                            <div class="name mr-2 font-semibold text-right">
                                <h5>Ahmad Saugi</h5>
                                <p class='text-xs'>Administrator</p>
                            </div>
                            <nx-avatar :src="require('@/assets/images/avatar/1.jpg')" size="sm"/>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </div>
</template>