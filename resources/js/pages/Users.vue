<template>
<div>
	<div class="text-right">
		<button class="bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 border border-green-700 rounded" @click="$refs.modal.show()">
		  {{ updateData ? 'Update' : 'Create' }}
		</button>
	</div> 
	<t-modal ref="modal" class="curdmodel">
        <form class="bg-white rounded px-8 pt-6 pb-8 mb-4" @submit.prevent="storeOrUpdate" @keydown="form.onKeydown($event)">
            <div class="p-3">
                <h2 class="mb-2">{{ updateData ? 'Update' : 'Create' }} Client</h2>
                <div class="my-1" v-for="(value,name, index) in form.originalData" :key="index">
                    <p class="capitalize font-semibold"> {{ name }}</p>
                    <t-input v-model="form[name]" :class="{ 'is-invalid': form.errors.has(name) }" class="w-full"/>
                    <has-error :form="form" :field="name" class="mt-2 text-red-600 text-left font-semibold" />
                </div>
                <div class="mt-3 text-right">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" :loading="form.busy">
                      {{ updateData ? 'Update' : 'Create' }}
                    </button>
                </div>
            </div>
        </form>
    </t-modal>
	<data-table
        :columns="columns"
        :classes="classes"
        :data="clients"
        :url="base_url+'/api/users'"
        @loading="isLoading = true"
        @finishedLoading="isLoading = false">
    </data-table>
    <loading
        :is-full-page="true"
        :active.sync="isLoading">
    </loading>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import EditButon from '../components/EditButton.vue';
import Form from 'vform'
import axios from 'axios'
export default {
    middleware: 'auth',
    components: {
        EditButon,
        Loading
    },
	data() {
        return {
            base_url: base_url,
            url: base_url+'/api/users',
            tableProps: {
                search: '',
                length: 10,
                column: 'id',
                dir: 'asc'
            },
            clients: {},
            updateData: false,
            isLoading: false,
            form: new Form({
                name: '',
                email: '',
            }),
            columns: [
                {
                    label: 'ID',
                    name: 'id',
                    orderable: true,
                },
                {
                    label: 'Name',
                    name: 'name',
                    orderable: true,
                },
                {
                    label: 'Email',
                    name: 'email',
                    orderable: true,
                },
                {
                    label: '',
                    name: 'Edit',
                    orderable: false,
                    classes: {
                        'bg-green-500': true,
                        'hover:bg-green-700': true,
                        'py-1': true,
                        'my-1': true,
                        'text-white': true,
                        'text-xs': true,
                        'font-bold': true,
                        'px-2': true,
                        'rounded': true,
                        'float-right': true
                    },
                    event: 'click',
                    handler: this.displayRow,
                    component: EditButon
                }
            ],
            classes: { 
                'table-container': {
                    'justify-center': true,
                    'w-full': true,
                    'flex': true,
                    'inline-block': true,
                    'overflow-hidden': true,
                },
                table: {
                    'text-left': true,
                    'w-full': true,
                    'bg-white': true,
                },
                "td": {
                    'py-0': true,
                    'px-4': true,
                    'border': true,
                    'border-gray-400': true,
                },
                "th": {
                    'py-0': true,
                    'border-gray-400': true,
                    'cursor-pointer': true,
                    'py-2': true,
                    'px-2': true,
                    'border': true,
                    'text-left': true,
                    'text-xs': true,
                    'font-semibold': true,
                    'uppercase': true,
                },
            },
            column:[]
        }
    },
    methods:{
        cleanForm() {
            this.$refs.modal.hide();
            this.getData(this.url);
            this.updateData = false;
            this.form.name = '';
            this.form.email = '';
            this.form.id = '';
            this.errors = {};
        },
    	async storeOrUpdate () {
            if(this.updateData) {
                const response = await this.form.put('/api/users/'+this.form.id);
                if (response.status === 200) {
                    this.cleanForm();
                    showMessage(response.status, 'User updated successfully');
                }
            }else {
                const response = await this.form.post('/api/users');
                if (response.status === 200) {
                    this.cleanForm();
                    showMessage(response.status, 'User created successfully');
                }
            }
        },
         async displayRow(data) {
            this.updateData = true;
            this.$refs.modal.show();
            this.form.name = data.name;
            this.form.id = data.id;
            this.form.phone = data.phone;
            this.form.address = data.address;
            this.form.email = data.email;
        },
        async getData(url = this.url, options = this.tableProps) {
            const response = await axios.get(url, {
                params: options
            });
            if(response.status === 200) {
                this.clients = response.data;
            }
        }
    }
}
</script>