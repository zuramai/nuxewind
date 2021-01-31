<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template v-slot:title>
						Button
					</template>
					<template v-slot:subtitle>
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-1/2">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Basic Button</template>
                                    <template v-slot:subtitle>Button color variants</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <div class="flex flex-wrap">
                                    <nx-button color="primary" class='mr-2 mt-2'>Primary</nx-button>
                                    <nx-button color="secondary" class='mr-2 mt-2'>Secondary</nx-button>
                                    <nx-button color="warning" class='mr-2 mt-2'>Warning</nx-button>
                                    <nx-button color="danger" class='mr-2 mt-2'>Danger</nx-button>
                                    <nx-button color="success" class='mr-2 mt-2'>Success</nx-button>
                                    <nx-button color="info" class='mr-2 mt-2'>Info</nx-button>
                                    <nx-button color="dark" class='mr-2 mt-2'>Dark</nx-button>
                                    <nx-button color="light" class='mr-2 mt-2'>Light</nx-button>
                                </div>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Outline Button</template>
                                    <template v-slot:subtitle>Button with outlined color</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <div class="flex flex-wrap">
                                    <nx-button variant='outline' color="primary" class='mr-2 mt-2'>Primary</nx-button>
                                    <nx-button variant='outline' color="secondary" class='mr-2 mt-2'>Secondary</nx-button>
                                    <nx-button variant='outline' color="warning" class='mr-2 mt-2'>Warning</nx-button>
                                    <nx-button variant='outline' color="danger" class='mr-2 mt-2'>Danger</nx-button>
                                    <nx-button variant='outline' color="success" class='mr-2 mt-2'>Success</nx-button>
                                    <nx-button variant='outline' color="info" class='mr-2 mt-2'>Info</nx-button>
                                    <nx-button variant='outline' color="dark" class='mr-2 mt-2'>Dark</nx-button>
                                </div>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col w-1/2">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Button with Shadow</template>
                                    <template v-slot:subtitle>Button with customizable shadow</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <div class="flex flex-wrap">
                                    <nx-button shadow="lg" color="primary" class='mr-2 mt-2'>Primary</nx-button>
                                    <nx-button shadow="lg" color="secondary" class='mr-2 mt-2'>Secondary</nx-button>
                                    <nx-button shadow="lg" color="warning" class='mr-2 mt-2'>Warning</nx-button>
                                    <nx-button shadow="lg" color="danger" class='mr-2 mt-2'>Danger</nx-button>
                                    <nx-button shadow="lg" color="success" class='mr-2 mt-2'>Success</nx-button>
                                    <nx-button shadow="lg" color="info" class='mr-2 mt-2'>Info</nx-button>
                                    <nx-button shadow="lg" color="dark" class='mr-2 mt-2'>Dark</nx-button>
                                    <nx-button shadow="lg" color="light" class='mr-2 mt-2'>Light</nx-button>
                                </div>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Button Sizes</template>
                                    <template v-slot:subtitle>Button size variations. Default is medium</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <div class="flex flex-wrap items-center">
                                    <nx-button shadow="lg" size="sm" color="secondary" class='mr-2 mt-2'>Small</nx-button>
                                    <nx-button shadow="lg" size="md" color="primary" class='mr-2 mt-2'>Medium</nx-button>
                                    <nx-button shadow="lg" size="lg" color="warning" class='mr-2 mt-2'>Large</nx-button>
                                </div>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Button States</template>
                                    <template v-slot:subtitle>Button disabled and loading state</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <div class="flex flex-wrap items-center">
                                    <nx-button  size="md" color="primary" class='mr-2 mt-2'>Default</nx-button>
                                    <nx-button :loading="true" size="md" color="primary" class='mr-2 mt-2'>Loading</nx-button>
                                    <nx-button :disabled="true" size="md" color="primary" class='mr-2 mt-2'>Disabled</nx-button>
                                </div>
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
        title: "Button"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    