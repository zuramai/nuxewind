<template>
    <div class="auth login">
        <div class="py-48 px-16">
            <h1 class="font-bold text-5xl">Welcome Back</h1>
            <p class='text-lg text-gray-600'>Please login to continue.</p>
            <form action="" method="POST" class='mt-5'>
                <nx-input size='lg' placeholder="Your Username"></nx-input>
                <nx-input size='lg' placeholder="Your Password"></nx-input>
            </form>
        </div>
    </div>
</template>
<script>
export default {
    layout: 'auth',
    data: () => ({

    })
}
</script>