<template>
    <div class="card">
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Posición</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <h3>{{ props.content.name }}</h3>
                    </td>
                    <td>
                        <p>{{ props.content.age }}</p>
                    </td>
                    <td>
                        <p>{{ props.content.position }}</p>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';

const props = defineProps(['content'])
</script>

<style scoped>
.card {
    color: #fff;
    background-color: #34495E;
    border-radius: 10px;
    padding: 5px;
    display: flex;
    margin: 3px;
    width: 100%;
    justify-content: space-around;
}
</style>