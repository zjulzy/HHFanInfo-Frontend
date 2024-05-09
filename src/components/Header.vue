<template>
    <header>
        <el-header :height="80">
            <el-row type="flex" justify="space-between">
                <el-col :span="6" >
                    <el-row>
                    <el-col :span="10" style="justify-content: center;" >
                    <a href="https://vitejs.dev" target="_blank">
                        <img src="../assets/家紋_ピンク・ブルー.png" class="logo" alt="Vite logo" />
                    </a>
                    </el-col>
                    <el-col :span="14" style="justify-content: center;" >
                    <div style="display:inline;">    
                        <p class="header-title">HimeHina Fan Info</p>
                        <p class="header-title">HimeHina 粉丝信息站</p>
                    </div>
                    </el-col>
                    </el-row>
                </el-col>
                <el-col :span="18" class="text-right">
                    <el-button type="text"><router-link to="/" >主页</router-link></el-button>
                    <el-button type="text"><router-link to="/event" >公告页</router-link></el-button>
                    <el-button type="text"><router-link to="/fanart" >二创页</router-link></el-button>
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
    padding: 8px;
}
.el-col {
    align-items: center;
}
.logo {
    width: 60px;
    height: 60px;
}
.header-title {
    font-size: 16px;
    font-weight: bold;
    margin: 0;
}
</style>