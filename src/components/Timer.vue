<template>
    <div>
        <p>距离 {{ eventName }} 还有 {{ daysRemaining }} 天</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            eventName: '活动名称',
            targetDate: '2022-12-31', // Replace with your target date
            daysRemaining: 0
        };
    },
    mounted() {
        this.updateDaysRemaining();
        setInterval(this.updateDaysRemaining, 1000); // Update every second
    },
    methods: {
        updateDaysRemaining() {
            const currentDate = new Date();
            const targetDate = new Date(this.targetDate);
            const timeDifference = targetDate.getTime() - currentDate.getTime();
            const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));
            this.daysRemaining = daysRemaining >= 0 ? daysRemaining : 0;
        }
    }
};
</script>