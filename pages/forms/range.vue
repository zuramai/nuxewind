<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Range
					</template>
					<template slot="subtitle">
						Nuxewind is using <a href="https://github.com/NightCatSama/vue-slider-component" class='text-blue-500'>vue-slider</a> for input range component 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Basic Range</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-range v-model="sliderBasic1"></nx-range>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Slider Range Mode</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-range v-model="sliderRange1"></nx-range>
                                <nx-range v-model="sliderRange2"></nx-range>
                            </template>
                        </nx-card>
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Slider with Marks</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-range class='mb-5' v-model="sliderMark1" :marks="true" :data="sliderMark1Data"></nx-range>
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
        title: "Range"
    },
	layout(context) {
		return context.store.state.layout;
    },
	data: () => ({
        sliderBasic1: 30,
        sliderRange1: [30,50],
        sliderRange2: [54,80],
        sliderMark1: 50,
        sliderMark1Data: ["No", "Maybe", "Yes"]
	})
}
</script>
    