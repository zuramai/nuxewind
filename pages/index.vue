<template>
    <div class="main-content">
        <nx-container vertical="fluid" horizontal="default">
            <nx-section>
                <nx-section-header>
                    <template slot="title"> Dashboard </template>
                    <template slot="subtitle"> Welcome back, Saugi! </template>
                </nx-section-header>
                <div class="flex row">
                    <div class="w-full md:w-1/2 col">
                        <div class="flex row">
                            <div class="w-full md:w-1/2 col">
                                <nx-card>
                                    <template slot="header">
                                        <nx-card-header>
                                            <template slot="title"
                                                >Today Revenue</template
                                            >
                                        </nx-card-header>
                                    </template>
                                    <template slot="body">
                                        <h1 class="text-5xl font-thin dark:text-gray-400">$4,096</h1>
                                        <div class="inline-flex items-center">
                                            <bootstrap-icon
                                                icon="arrow-down-right"
                                                size="sm"
                                                class="text-red-500"
                                            ></bootstrap-icon>
                                            <span class="ml-3 text-red-500">-32%</span>
                                        </div>
                                    </template>
                                </nx-card>
                            </div>
                            <div class="w-full md:w-1/2 col">
                                <nx-card>
                                    <template slot="header">
                                        <nx-card-header>
                                            <template slot="title"
                                                >Today Customers</template
                                            >
                                        </nx-card-header>
                                    </template>
                                    <template slot="body">
                                        <div class="inline-flex items-end w-full">
                                            <h1 class="text-5xl font-thin dark:text-gray-400">185</h1>
                                            <h1 class="text-xl font-thin ml-2 mb-3">
                                                Customer
                                            </h1>
                                        </div>
                                        <div class="inline-flex items-center">
                                            <bootstrap-icon
                                                icon="arrow-up-right"
                                                size="sm"
                                                class="text-green-500"
                                            ></bootstrap-icon>
                                            <span class="ml-3 text-green-500">+50%</span>
                                        </div>
                                    </template>
                                </nx-card>
                            </div>
                        </div>
                        <nx-card>
                            <template slot="body">
                                <div class="flex row items-center">
                                    <div class="w-1/2 col">
                                        <client-only>
                                                <apexchart
                                                    height="180"
                                                    type="bar"
                                                    :options="chart1.options"
                                                    :series="chart1.series"
                                                ></apexchart>
                                        </client-only>
                                    </div>
                                    <div class="w-1/2 col">
                                        <h1 class="text-2xl mb-3 leading-tight font-light dark:text-white">
                                            Welcome to Nuxewind
                                        </h1>
                                        <p class="text-sm">
                                            Lorem ipsum dolor sit amet consectetur,
                                            adipisicing elit. Molestias, dolor fugit
                                            distinctio quod, nobis in
                                        </p>
                                    </div>
                                </div>
                            </template>
                        </nx-card>
                    </div>
                    <div class="w-full md:w-1/2 col">
                        <nx-card>
                            <template slot="header">
                                <nx-card-header>
                                    <template slot="title">Last 7 days Sales</template>
                                </nx-card-header>
                            </template>
                            <template slot="body">
                                <client-only>
                                    <apexchart
                                        height="300"
                                        type="line"
                                        :options="chart2.options"
                                        :series="chart2.series"
                                    ></apexchart>
                                </client-only>
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
    layout(context) {
        return context.store.state.layout;
    },
    data: () => ({
        chart1: {
            options: {
                colors: "#2e5bff",
                chart: {
                    id: "vuechart-example",
                    toolbar: {
                        show: false,
                    },
                    offsetY: 0,
                },
                plotOptions: {
                    dataLabels: {
                        enabled: true,
                    },
                },
                dataLabels: {
                    enabled: false,
                },
                sparkline: {
                    enabled: false,
                },
                grid: {
                    show: false,
                },
                xaxis: {
                    categories: [
                        "20 Dec 2020",
                        "21 Dec 2020",
                        "23 Dec 2020",
                        "24 Dec 2020",
                        "25 Dec 2020",
                        "26 Dec 2020",
                        "27 Dec 2020",
                        "28 Dec 2020",
                    ],
                    show: false,
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    show: false,
                    lines: {
                        show: false,
                    },
                },
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 80, 70, 90],
                },
            ],
        },
        chart2: {
            options: {
                colors: ["#2e5bff", "#884fff"],
                chart: {
                    id: "vuechart-example",
                    toolbar: {
                        show: false,
                    },
                    offsetY: 0,
                },
                plotOptions: {
                    dataLabels: {
                        enabled: true,
                    },
                },
                markers: {
                    size: 4,
                    radius: 10,
                },
                sparkline: {
                    enabled: false,
                },
                xaxis: {
                    categories: [
                        "20 Dec 2020",
                        "21 Dec 2020",
                        "23 Dec 2020",
                        "24 Dec 2020",
                        "25 Dec 2020",
                        "26 Dec 2020",
                        "27 Dec 2020",
                        "28 Dec 2020",
                    ],
                    show: true,
                    labels: {
                        show: false,
                    },
                },
                yaxis: {
                    show: true,
                    lines: {
                        show: false,
                    },
                },
                stroke: {
                    curve: "smooth",
                },
            },
            series: [
                {
                    name: "Electonics",
                    data: [30, 35, 60, 35, 49, 80, 70, 90],
                },
                {
                    name: "Groceries",
                    data: [30, 50, 80, 55, 90, 58, 85, 95],
                },
            ],
        },
    }),
};
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
</style>
