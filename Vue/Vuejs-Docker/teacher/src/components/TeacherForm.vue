<template>
    <section>
        <h1>Añadir Profesor</h1>
        <div>
            <label for="">Nombre:</label> <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            <label for="">Apellidos:</label> <input type="text" v-model="teacher.surName">
        </div>
        <div>
            <label for="">Cedula:</label> <input type="text" v-model="teacher.ci">
        </div>
        <div>
            <label for="">Materias:</label> <input type="text" v-model="subject"> <button @click="addSubject">Agregar</button>
            <ul>
                <li v-for="(element, index) in teacher.subjects" :key="index">{{ element }}</li>
            </ul>
        </div>
        <input type="checkbox" name="" id="" v-model="teacher.doc"> Documentación Entregada
        <br>
        <button @click="addTeacher">Agregar</button>
    </section>

    <section>
        <h1>Listado</h1>
        <table>
            <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Cedula</th>
                <th>Materias</th>
                <th>Doc Entregada</th>
            </tr>
            <tr v-for="elm in teachers" :key="elm.ci">
                <th>{{ elm.teacherName }}</th>
                <th>{{ elm.surName }}</th>
                <th>{{ elm.ci }}</th>
                <th>
                    <ul>
                        <li v-for="(item, index) in elm.subjects" :key="index">
                            {{ item.toUpperCase() }}
                        </li>
                    </ul>
                </th>
                <th v-if="elm.doc">Entregado</th>
                <th v-else>No Entregado</th>

            </tr>
        </table>
    </section>
</template>

<script lang="ts" setup>

    import { Ref, ref } from 'vue'

    interface ITeacher {
        teacherName: string,
        surName: string,
        ci: string,
        subjects: Array<string>,
        doc: boolean
    }

    let teacher:Ref<ITeacher> = ref({
        tacherName: '',
        surName: '',
        ci: '',
        subjects: [],
        doc: false
    })

    let teachers:Ref<Array<ITeacher>> = ref([])

    let subject:Ref<string> = ref('')

    // agregar materias
    const addSubject = () => {
        teacher.value.subjects.push(subject.value)
        subject.value = ''
    }

    const addTeacher = () => {
        // teachers.value.push(teacher.value)   
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surName: teacher.value.surName,
            ci: teacher.value.ci,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        })

        teacher.value.teacherName = ''
        teacher.value.surName = ''
        teacher.value.ci = ''
        teacher.value.subjects = []
        teacher.value.doc = false

    }
</script>

<style scoped>
</style>
