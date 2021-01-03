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
								<h4 class="text-gray-600 text-md uppercase my-2">Small</h4>
								<nx-progress value="0" color="primary" size="sm">0%</nx-progress>
								<nx-progress value="10" color="dark" size="sm">10%</nx-progress>
								<nx-progress value="20" color="info" size="sm">20%</nx-progress>
								<nx-progress value="25" color="secondary" size="sm">25%</nx-progress>
								<nx-progress value="50" color="warning" size="sm">50%</nx-progress>
								<nx-progress value="75" color="danger" size="sm">75%</nx-progress>
								<nx-progress value="100" color="success" size="sm">100%</nx-progress>
								<h4 class="text-gray-600 text-md uppercase my-2">Medium</h4>
								<nx-progress value="0" color="primary" size="md">0%</nx-progress>
								<nx-progress value="10" color="dark" size="md">10%</nx-progress>
								<nx-progress value="20" color="info" size="md">20%</nx-progress>
								<nx-progress value="25" color="secondary" size="md">25%</nx-progress>
								<nx-progress value="50" color="warning" size="md">50%</nx-progress>
								<nx-progress value="75" color="danger" size="md">75%</nx-progress>
								<nx-progress value="100" color="success" size="md">100%</nx-progress>
								<h4 class="text-gray-600 text-md uppercase my-2">Large</h4>
								<nx-progress value="0" color="primary" size="lg">0%</nx-progress>
								<nx-progress value="10" color="dark" size="lg">10%</nx-progress>
								<nx-progress value="20" color="info" size="lg">20%</nx-progress>
								<nx-progress value="25" color="secondary" size="lg">25%</nx-progress>
								<nx-progress value="50" color="warning" size="lg">50%</nx-progress>
								<nx-progress value="75" color="danger" size="lg">75%</nx-progress>
								<nx-progress value="100" color="success" size="lg">100%</nx-progress>
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
    