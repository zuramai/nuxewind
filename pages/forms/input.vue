<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template v-slot:title>
						Input
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
                                    <template v-slot:title>Default Input</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-input placeholder="With placeholder"/>
                                <nx-input placeholder="Disabled input" disabled/>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Input with Icon</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-input icon="bi bi-person" placeholder="Username"/>
                                <nx-input icon="bi bi-lock" placeholder="Password"/>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Input size</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-input size="sm" placeholder="Small"/>
                                <nx-input size="md" placeholder="Normal"/>
                                <nx-input size="lg" placeholder="Large"/>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col w-1/2">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Label Placeholder</template>
                                    <template v-slot:subtitle>The placeholder with fly up as label when the input is focus</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-input label-placeholder="Click me - Label placeholder"/>
                                <nx-input label="Label only"/>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Input Color Theme</template>
                                    <template v-slot:subtitle>Input outline shadow onfocus color variations</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-input color="primary" placeholder="Primary"/>
                                <nx-input color="warning" placeholder="Warning"/>
                                <nx-input color="danger" placeholder="Danger"/>
                                <nx-input color="success" placeholder="Success"/>
                                <nx-input color="dark" placeholder="Dark"/>
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
        title: "Input"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    