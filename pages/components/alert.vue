<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Alert
					</template>
					<template slot="subtitle">
						Beautiful Alert
					</template>
				</nx-section-header>
				<div class="flex row">
					<div class="w-full col">
						<nx-card>
							<template slot="header">
								<nx-card-header>
									<template slot="title">Basic Alert</template>
									<template slot="subtitle">Alert with color variations</template>
								</nx-card-header>
							</template>
							<template slot="body">
								<nx-alert color="primary">This is primary alert.</nx-alert>
								<nx-alert color="secondary" class='mt-4'>This is secondary alert.</nx-alert>
								<nx-alert color="warning" class='mt-4'>This is warning alert.</nx-alert>
								<nx-alert color="danger" class='mt-4'>This is danger alert.</nx-alert>
								<nx-alert color="success" class='mt-4'>This is success alert.</nx-alert>
								<nx-alert color="dark" class='mt-4'>This is dark alert.</nx-alert>
								<nx-alert color="info" class='mt-4'>This is info alert.</nx-alert>
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
        title: "Alert"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
