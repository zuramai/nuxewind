<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Textarea
					</template>
					<template slot="subtitle">
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Basic Textarea</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-textarea></nx-textarea>
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
		
	})
}
</script>
    