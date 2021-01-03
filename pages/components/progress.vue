<template>
  	<div class="main-content">
		<nx-container>
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Progress
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
									<template slot="title">Basic Progress</template>
								</nx-card-header>
							</template>
							<template slot="body">
								<nx-progress value="0">0%</nx-progress>
								<nx-progress value="25">25%</nx-progress>
								<nx-progress value="50">50%</nx-progress>
								<nx-progress value="75">75%</nx-progress>
								<nx-progress value="100">100%</nx-progress>
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
        title: "Progress"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    