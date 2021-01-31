<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Select
					</template>
					<template slot="subtitle">
						Nuxewind use vue-select. <a href="https://vue-select.org" class='text-blue-500' target="_blank">Click here</a> to open documentation
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col md:w-1/2 w-full">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Basic Select</template>
                                    <template slot="subtitle">Basic vue-select usage</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <v-select :options="['Canada', 'United States']" v-model="basic"></v-select>
                                <p class='mt-2'>You selected: {{basic}}</p>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col md:w-1/2 w-full">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Multi Select</template>
                                    <template slot="subtitle">Select multiple data</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <v-select :options="['Vue JS', 'React JS', 'Nuxt JS', 'Next JS', 'Laravel', 'Express JS']" v-model="multiple" :multiple="true"></v-select>
                                <p class='mt-2'>You selected: {{multiple}}</p>
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
        title: "Select"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
        basic: 'Canada',
        multiple: ['Vue JS', 'Nuxt JS']
	})
}
</script>
    