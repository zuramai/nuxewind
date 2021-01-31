<template>
  <div class="main-content">
    <nx-container vertical="fluid" horizontal="default">
      <nx-section>
        <nx-section-header>
          <template slot="title"> Breadcrumb </template>
          <template slot="subtitle"> Beautiful Breadcrumb </template>
        </nx-section-header>
        <div class="flex row">
          <div class="col w-1/2">
            <nx-card>
              <template slot="header">
                <nx-card-header>
                  <template slot="title">Basic Breadcrumb</template>
                  <template v-slot:subtitle>Breadcrumb default</template>
                </nx-card-header>
              </template>
              <template slot="body">
                <nx-breadcrumb :items="items"></nx-breadcrumb>
              </template>
            </nx-card>
            <nx-card>
              <template slot="header">
                <nx-card-header>
                  <template slot="title">Divider Breadcrumb</template>
                  <template v-slot:subtitle
                    >Breadcrumb with different divider</template
                  >
                </nx-card-header>
              </template>
              <template slot="body">
                <nx-breadcrumb
                  :items="items"
                  divider="arrow-right"
                ></nx-breadcrumb>
                <nx-breadcrumb
                  :items="items"
                  divider="caret-right"
                ></nx-breadcrumb>
              </template>
            </nx-card>
          </div>
          <div class="col w-1/2">
            <nx-card>
              <template slot="header">
                <nx-card-header>
                  <template slot="title">Size Breadcrumb</template>
                  <template v-slot:subtitle
                    >Breadcrumb with different size</template
                  >
                </nx-card-header>
              </template>
              <template slot="body">
                <nx-breadcrumb :items="items" size="lg"></nx-breadcrumb>
                <nx-breadcrumb :items="items" size="sm"></nx-breadcrumb>
              </template>
            </nx-card>
            <nx-card>
              <template slot="header">
                <nx-card-header>
                  <template slot="title">Color Breadcrumb</template>
                  <template v-slot:subtitle
                    >Breadcrumb with different color</template
                  >
                </nx-card-header>
              </template>
              <template slot="body">
                <nx-breadcrumb :items="items" color="warning"></nx-breadcrumb>
                <nx-breadcrumb :items="items" color="danger"></nx-breadcrumb>
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
    title: "Breadcrumb",
  },
  layout(context) {
    return context.store.state.layout;
  },
  data: () => ({
    items: [
      {
        text: "Dashboard",
        disabled: false,
        href: "/dashboard",
      },
      {
        text: "Link 1",
        disabled: false,
        href: "/link1",
      },
      {
        text: "Link 2",
        disabled: true,
        href: "/link2",
      },
    ],
  }),
};
</script>
