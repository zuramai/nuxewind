<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Checkbox
					</template>
					<template slot="subtitle">
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Basic Checkbox</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-checkbox val="Apple" name="fruit" label="Apple" v-model="fruit"></nx-checkbox>
                                <nx-checkbox val="Banana" name="fruit" label="Banana" v-model="fruit"></nx-checkbox>
                                <nx-checkbox val="Mango" name="fruit" label="Mango" v-model="fruit"></nx-checkbox>
                                You chose: {{fruit}}
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
        title: "Checkbox"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		fruit: ['Apple']
	})
}
</script>
    