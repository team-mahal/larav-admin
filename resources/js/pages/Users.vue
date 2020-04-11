<template>
<div>
	<div class="text-right">
		<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded" @click="$refs.modal.show()">
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
import EditButon from '../buttons/EditButton.vue';
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
                        'btn': true,
                        'btn-blue': true,
                        'bg-blue-500': true,
                        'hover:bg-blue-700': true,
                        'py-2': true,
                        'text-white': true,
                        'font-bold': true,
                        'px-4': true,
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
                    "border-gray-200": true,
                    'inline-block': true,
                    'min-w-full': true,
                    'rounded-lg': true,
                    'overflow-hidden': true,
                },
                table: {
                    'text-left': true,
                    'w-full': true,
                },
                "t-body": {
                    'bg-white': true,
                },
                "t-head-tr": {
                    'border-b': true,
                    'border-gray': true,
                },
                "t-body-tr": {
                    'stripped-table': true,
                    'bg-grey-darkest': true,
                },
                "td": {
                    'py-4': true,
                    'px-6': true,
                    'border-b': true,
                    'border-grey-light': true,
                    'text-gray-light': true,
                },
                "th": {
                    'text-gray-dark': true,
                    'border-gray': true,
                    'border-b-2': true,
                    'border-t-2': true,
                    'border-gray-200': true,
                    'py-3': true,
                    'px-4': true,
                    'bg-gray-100': true,
                    'text-left': true,
                    'text-xs': true,
                    'font-semibold': true,
                    'text-gray-600': true,
                    'uppercase': true,
                    'tracking-wider': true,
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
            // Submit the form.
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
    },
    created(){
        // var self = this;
        // axios.get('/api/users/create').then(function (response) {
        //     self.form.originalData=response.data;
        // }).catch(function (error) {
        //     console.log(error);
        // }).then(function () {
        //     // always executed
        // });
    }
}
</script>