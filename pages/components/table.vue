<template>
  	<div class="main-content">
		<nx-container>
			<nx-section>
				<nx-section-header>
					<template v-slot:title>
						Table
					</template>
					<template v-slot:subtitle>
						Beautiful 
					</template>
				</nx-section-header>
                <div class="flex row">
                    <div class="col w-full">
                        <nx-card>
                            <template v-slot:header>
                                <nx-card-header>
                                    <template v-slot:title>Bordered Table</template>
                                </nx-card-header>
                            </template>
                            <template v-slot:body>
                                <nx-table type="bordered">
                                    <template v-slot:thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Name</th>
                                            <th>Address</th>
                                            <th>Phone</th>
                                            <th>Status</th>
                                        </tr>
                                    </template>
                                    <template v-slot:tbody>
                                        <tr v-for="tableData in tableData1" :key="tableData.id">
                                            <td>{{tableData.id}}</td>
                                            <td>{{tableData.name}}</td>
                                            <td>{{tableData.address}}</td>
                                            <td>{{tableData.phone}}</td>
                                            <td>{{tableData.status}}</td>
                                        </tr>
                                    </template>
                                </nx-table>
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
		tableData1: [
            {
                "id": 1,
                "name": "Castor Rose",
                "address": "8884 Non, Rd.",
                "phone": "061-994-4236",
                "status": "1"
            },
            {
                "id": 2,
                "name": "Amery Morrison",
                "address": "917-9673 Ultrices Rd.",
                "phone": "031-514-4577",
                "status": "1"
            },
            {
                "id": 3,
                "name": "Maxwell Monroe",
                "address": "8234 Bibendum Av.",
                "phone": "041-758-2151",
                "status": "0"
            },
            {
                "id": 4,
                "name": "Cyrus Mayo",
                "address": "1643 Nulla Avenue",
                "phone": "049-270-9262",
                "status": "1"
            },
            {
                "id": 5,
                "name": "Lamar Vang",
                "address": "P.O. Box 392, 9153 Sodales Av.",
                "phone": "075-352-8066",
                "status": "1"
            },
            {
                "id": 6,
                "name": "Dolan Goodman",
                "address": "1024 Sed Street",
                "phone": "033-751-4597",
                "status": "0"
            },
            {
                "id": 7,
                "name": "Philip Dunlap",
                "address": "637-350 Fusce Street",
                "phone": "035-916-3848",
                "status": "0"
            },
            {
                "id": 8,
                "name": "Axel Willis",
                "address": "Ap #822-5241 Libero. Ave",
                "phone": "045-054-8091",
                "status": "0"
            },
            {
                "id": 9,
                "name": "Grant Benjamin",
                "address": "358-9670 Semper Rd.",
                "phone": "081-185-6204",
                "status": "0"
            },
            {
                "id": 10,
                "name": "Wylie Byers",
                "address": "913 Ultrices St.",
                "phone": "045-663-6683",
                "status": "0"
            },
        ]
	})
}
</script>
    