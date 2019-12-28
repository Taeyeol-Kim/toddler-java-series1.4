<template>
    <div>
        <el-form :inline="true" :model="form" class="demo-form-inline">
            <el-form-item>
                <el-input v-model="form.text" placeholder="할일을 적어 주세요"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" @click="onSubmit">저장</el-button>
            </el-form-item>
        </el-form>
        <el-table
                :data="data"
                style="width: 100%"
                max-height="250">
            <el-table-column
                    prop="seq"
                    label="No."
                    width="120">
            </el-table-column>
            <el-table-column
                    prop="text"
                    label="할일"
                    >
            </el-table-column>
            <el-table-column
                    width="120">
                <template slot-scope="scope">
                    <el-button
                            @click="deleteRow(scope.$index)"
                    >
                        삭제
                    </el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script>
    export default {
        name: "Todo",
        data () {
            return {
                form: {
                    seq: '',
                    text: ''
                },
                data: [
                    {
                        seq: 1,
                        text: '할일 목록1'
                    },
                    {
                        seq: 2,
                        text: '할일 목록2'
                    }
                ]
            }
        },
        methods: {
            deleteRow (seq) {
                this.data.splice(seq, 1)
                this.$message('삭제 완료')
            },
            onSubmit () {
                const cnt = Object.keys(this.data).length + 1
                this.form.seq = cnt
                this.data.push(this.form)
                this.form = {}
            }
        }
    }
</script>

<style scoped>

</style>
