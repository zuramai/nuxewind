<template>
  	<div class="main-content">
		<nx-container vertical="fluid" horizontal="default">
			<nx-section>
				<nx-section-header>
					<template slot="title">
						Modal
					</template>
					<template slot="subtitle">
						Nuxewind use @euvl/vue-js-modal in this template. <a href="https://euvl.github.io/vue-js-modal" class='text-blue-500'>Click here</a> for documentation
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full md:w-1/2">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Basic Modal</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-button @click="openModal1()">Open Modal</nx-button>
                                <nx-modal name="modal1" :adaptive="true">
                                    <div class="p-5">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci laborum distinctio, veniam consectetur quod doloribus provident. Recusandae, perspiciatis tenetur! Et nesciunt maiores doloremque commodi cumque natus cum totam ab obcaecati!
                                    </div>
                                    <template v-slot:top-right >
                                        <bootstrap-icon icon="x" @click="$modal.close('modal1')"></bootstrap-icon>
                                    </template>
                                </nx-modal>
                            </template>
                        </nx-card>
                    </div>
                    <div class="col w-full md:w-1/2">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template slot="title">Long content modal</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-button @click="openModal2()">Open Modal</nx-button>
                                <nx-modal name="modal2" :adaptive="true" height="auto" :scrollable="true">
                                    <div class="p-5">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rhoncus, mi ut rutrum placerat, mauris neque tempor nulla, vel consequat turpis arcu aliquet lorem. Curabitur faucibus, felis quis tempus pulvinar, elit ex luctus lorem, vel pulvinar nibh sem ut diam. Nunc id porta turpis. Integer condimentum, purus ac eleifend cursus, ante nunc convallis lacus, ut mattis quam lacus a felis. Nulla convallis massa tincidunt mi aliquet volutpat. Quisque ut mollis mauris, eu porttitor orci. Aenean at tellus lacus. Suspendisse in consequat augue, eu mattis leo. Suspendisse pulvinar tristique sapien sit amet interdum. Phasellus faucibus magna convallis mattis ultricies. Vivamus ullamcorper augue a metus scelerisque, malesuada egestas diam efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus leo enim, aliquam dignissim tincidunt id, lobortis vel neque. Fusce purus lorem, sollicitudin sit amet suscipit non, blandit vitae lectus. Ut ultricies euismod enim, ut ultricies dui semper pharetra.

                                        Donec suscipit est nibh, et auctor libero laoreet in. Maecenas quis ipsum non nisi hendrerit tristique. Sed interdum pulvinar eros, nec porta metus elementum ac. Vestibulum feugiat efficitur enim, et tincidunt purus posuere at. Integer pretium erat nec libero hendrerit, pretium egestas sem hendrerit. Curabitur sit amet interdum tortor. Quisque ex enim, ornare id vestibulum at, mattis eget est. Quisque sed diam et metus gravida tincidunt a a arcu. Pellentesque eros quam, bibendum vitae pretium non, iaculis eu nibh. Praesent rutrum eget justo vel mollis. Pellentesque cursus felis vitae urna elementum rutrum. Nunc sit amet eros ipsum. Cras a mi a lacus mollis ultricies.

                                        Aenean malesuada mauris in magna aliquam facilisis. Nam rhoncus sit amet elit venenatis dapibus. Nam non lobortis massa, id cursus odio. Pellentesque mi velit, sollicitudin ut tortor nec, accumsan scelerisque lectus. Nulla purus enim, viverra at tincidunt eu, scelerisque nec tortor. Integer bibendum, neque sed congue porttitor, ligula metus efficitur enim, sit amet iaculis dui enim at leo. Aenean posuere odio dui, ornare tempor ligula dapibus vitae. Suspendisse eget ligula eu orci congue eleifend. Integer ullamcorper nibh quis nisi egestas, at molestie lacus tempus. Mauris eu fringilla nisl, eu ultrices enim.

                                        Cras quis condimentum orci. Maecenas orci velit, dignissim vel pulvinar ac, finibus condimentum dui. Suspendisse eu ligula dictum, laoreet eros non, varius ante. Fusce lobortis magna at augue venenatis, mattis faucibus magna maximus. Aliquam vel augue turpis. Nam laoreet porttitor gravida. Vivamus at nibh non ipsum venenatis mattis et vel dui. Donec rutrum placerat est nec iaculis.

                                        Proin ullamcorper luctus erat sed pretium. Morbi tempus sem a pretium faucibus. Curabitur eget risus vitae dolor maximus laoreet. Duis congue id nunc ac volutpat. Donec quis risus et augue feugiat bibendum. Quisque congue felis in dui luctus mattis. Donec sodales aliquam diam. Sed risus libero, semper eu rutrum quis, ultricies eget enim. Quisque nec ipsum consectetur, scelerisque nisi et, vehicula turpis. Ut sed libero vel neque pretium dapibus. Fusce quis suscipit dolor, ac egestas ante. Nullam eget tempor neque. Curabitur pellentesque dolor ut diam commodo feugiat. Nulla viverra interdum justo at pharetra. Sed ut nunc dictum, imperdiet metus ut, tristique sem. 
                                    </div>
                                </nx-modal>
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
        title: "Modal"
    },
	layout(context) {
		return context.store.state.layout;
	},
	data: () => ({
		
    }),
    methods: {
        openModal1() {
            this.$modal.show('modal1')
        },
        openModal2() {
            this.$modal.show('modal2')
        }
    }
}
</script>
    