<template>
    <button
        :class="classes"
        @click="click(data)" title="Update">
        Edit
    </button>
</template>

<script>
export default {
    props: {
        data: {},
        name: {},
        click: {
            type: Function,
            default: () => {}
        },
        classes: {
            type: Object,
            default: {
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
            }
        }
    }
}
</script>