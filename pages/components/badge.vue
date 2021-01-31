<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Badge
					</template>
					<template slot="subtitle">
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-1/2">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Badge Variations</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <nx-badge color="primary">Primary</nx-badge>
                                <nx-badge color="secondary">Secondary</nx-badge>
                                <nx-badge color="success">Success</nx-badge>
                                <nx-badge color="danger">Danger</nx-badge>
                                <nx-badge color="warning">Warning</nx-badge>
                                <nx-badge color="info">Info</nx-badge>
                                <nx-badge color="dark">Dark</nx-badge>
                                <nx-badge color="light">Light</nx-badge>

                            </template>
                        </nx-card>
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Rounded Badge</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <div class="flex items-center ">
                                    <nx-badge color="primary" rounded="none" class='mr-2'>No Rounded</nx-badge>
                                    <nx-badge color="primary" rounded="md" class='mr-2'>Medium Rounded</nx-badge>
                                    <nx-badge color="primary" rounded="full" class='mr-2'>Pill Rounded</nx-badge>
                                    <nx-badge color="primary" rounded="full" class='mr-2 w-10 h-10 items-center flex'>Full</nx-badge>
                                </div>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col w-1/2">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Badge Size</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <nx-badge color="primary" size="sm">Small</nx-badge>
                                <nx-badge color="success" size="md">Normal</nx-badge>
                                <nx-badge color="warning" size="lg">Large</nx-badge>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Badge in Button</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <nx-badge color="primary" size="sm">Small</nx-badge>
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
        title: "Badge"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
	})
}
</script>
    