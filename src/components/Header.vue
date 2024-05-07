<template>
    <header>
        <el-header>
            <el-row type="flex" justify="space-between">
                <el-col :span="6">
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="/vite.svg" class="logo" alt="Vite logo" />
                    </a>
                </el-col>
                <el-col :span="18" class="text-right">
                    <el-button type="text">Home</el-button>
                    <el-button type="text">About</el-button>
                    <el-button type="text">Contact</el-button>
                </el-col>
            </el-row>
        </el-header>
    </header>
</template>

<script>
export default {
    name: 'Header',
    // Add your component logic here
}
</script>

<style scoped>
.el-header {
    background-color: #545c64;
    color: #fff;
    line-height: 60px;
}
</style>