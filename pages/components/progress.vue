<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
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
								<nx-progress value="54" color="primary" size="md">0%</nx-progress>
								<nx-progress value="32" color="info" size="md">20%</nx-progress>
								<nx-progress value="10" color="secondary" size="md">25%</nx-progress>
								<nx-progress value="50" color="warning" size="md">50%</nx-progress>
								<nx-progress value="75" color="danger" size="md">75%</nx-progress>
								<nx-progress value="100" color="success" size="md">100%</nx-progress>
							</template>
                        </nx-card>
                        <nx-card>
							<template slot="header">
								<nx-card-header>
									<template slot="title">Progress Size</template>
								</nx-card-header>
							</template>
							<template slot="body">
								<nx-progress value="54" color="primary" size="sm">0%</nx-progress>
								<nx-progress value="85" color="danger" size="md">100%</nx-progress>
								<nx-progress value="100" color="success" size="lg">85%</nx-progress>
								<nx-progress value="100" color="success" size="xl">40%</nx-progress>
							</template>
                        </nx-card>
                        <nx-card>
							<template slot="header">
								<nx-card-header>
									<template slot="title">Progress Label</template>
								</nx-card-header>
							</template>
							<template slot="body">
								<nx-progress value="54" color="primary" label="top" size="md">54%</nx-progress>
								<nx-progress value="85" color="warning" label="top" size="md">85%</nx-progress>
								<nx-progress value="100" color="success" label="top" size="md">100%</nx-progress>
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
    