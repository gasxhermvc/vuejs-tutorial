<template>
    <div class="box">
        <div class="title">
            Hello World
        </div>    
        <p :class="className">
            Counter : {{ counter }}
        </p>
        <p>
            <button @click="counter += 1" class="button">Update</button>
        </p>
        <p>
            My Text
        </p>
        <a href="https://www.google.com" target="_blank" class="abc">
            Google
        </a>
        <p :style="style">Hello</p>
    </div>
</template>
<script>
const baseStyle = {
    fontWeight: 'bold',
    fontSize: '21px',
    color: 'blue'
};

export default {
    computed:{
        className(){
            //return  this.counter % 2 == 0 ? "help is-success" : "help is-danger";
            return `help ${this.counter % 2 == 0 ? 'is-danger' : 'is-success'}`;
        },
        style(){
            // let result;
            // result = { ...baseStyle };
            // if(this.counter % 2 === 0){
            //     baseStyle.color = 'green';
            // }else{
            //     baseStyle.color = 'blue';
            // }

            // return result;

            const add = this.counter % 2 ? { color: 'green' } : { color: 'blue' };

            return {
                ...baseStyle, 
                ...add
            }
        }
    },
    data(){
        return {
            counter: 1
        }
    }
}
</script>
<style scoped>
p {
    color: red;
}
.abc {
    text-decoration: none;
}
</style>