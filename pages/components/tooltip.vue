<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Tooltip
					</template>
					<template slot="subtitle">
						Nuxewind is using v-tooltip for the tooltip component 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Basic Tooltip</template>
                                </nx-card-header>
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
        title: "Tooltip"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    