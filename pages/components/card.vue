<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template v-slot:title>
						Card
					</template>
					<template v-slot:subtitle>
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full md:w-1/3">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Basic Card</template>
                                    <template v-slot:subtitle>Card with actions</template>
                                    <template v-slot:actions>
                                        <a href="#"><bootstrap-icon icon="gear" size="sm"></bootstrap-icon></a>
                                    </template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body-free>
                                <img src="@/assets/images/misc/orange.jpg" class='h-64 w-full object-center object-cover'>
                            </template>
                            <template v-slot:body>
                                <p class='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet justo luctus urna pretium mattis. </p>
                                <p>Donec interdum ultricies dapibus. Nullam tempus urna ac nunc lacinia, in sagittis odio tempor. Nulla vulputate metus eget rhoncus pretium..</p>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col w-full md:w-2/3">
                        <nx-card>
                            <template v-slot:body-free>
                                <div class="flex row">
                                    <div class="col w-full md:w-5/12">
                                        <img src="@/assets/images/misc/device.jpg" class='w-full object-cover h-64 rounded-t-lg md:rounded-t-none md:rounded-l-lg'>
                                    </div>
                                    <div class="col w-full md:w-7/12">
                                        <div class="p-5">
                                            <h1 class="text-3xl font-bold pb-5">This Is Article Title</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam laoreet justo luctus urna pretium mattis. Donec interdum ultricies dapibus. Nullam tempus urna ac nunc lacinia, in sagittis odio tempor. Nulla vulputate metus eget rhoncus pretium. Integer elementum dignissim turpis ac ultrices. Etiam vulputate mi tortor. </p>
                                        </div>
                                    </div>
                                </div>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:body-free>
                                <carousel class="story-carousel story-carousel--colors">
                                    <slide class="story-carousel__slide">
                                        <img src="@/assets/images/misc/landscape1.jpg" class="w-full h-64 object-cover">
                                    </slide>
                                    <slide class="story-carousel__slide">
                                        <img src="@/assets/images/misc/landscape2.jpg" class="w-full h-64 object-cover">
                                    </slide>
                                    <slide class="story-carousel__slide">
                                        <img src="@/assets/images/misc/landscape3.jpg" class="w-full h-64 object-cover">
                                    </slide>
                                </carousel>
                            </template>
                            <template v-slot:body>
                                <h1 class="text-3xl font-bold py-5">Card with Carousel</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi sit iure deserunt! Amet, sunt, a, eligendi explicabo fugit ab minus delectus numquam porro cumque nisi reprehenderit facilis? Dicta, quia nulla?</p>
                                
                            </template>
                        </nx-card>
                    </div>
                </div>
            </nx-section>
        </nx-container>
    </div>
</template>
<script>

export default {
    head: {
        title: "Card"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    