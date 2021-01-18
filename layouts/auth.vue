<template>
    <div id="auth" class='h-screen'>
        <div class="h-screen grid grid-cols-3">
            <div class="col-span-3 lg:col-span-1">
                <Nuxt/>
            </div>
            <div class="hidden lg:block col-span-2">
                <div class="auth-right w-full h-full relative bg-cover" style="background-image: url(https://images.unsplash.com/photo-1610883685547-e3f7fef8f088?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80)">
                <span class="absolute bottom-10 left-10 text-white font-semibold">Photo by <a href="https://unsplash.com/@borkography?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Adam Borkowski</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
                </div>
            </div>
        </div>
    </div>
</template>