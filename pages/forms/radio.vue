<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Radio Button
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
                                    <template slot="title">Basic Radio</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <nx-radio name="radio1" label="Lorem" val="lorem" v-model="radio1"></nx-radio>
                                <nx-radio name="radio1" label="Ipsum" val="ipsum" v-model="radio1"></nx-radio>
                                You choosed: {{radio1}}
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
        title: "Textarea"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
        radio1: '',
        radio2: '',
        radio3: '',
	})
}
</script>
    