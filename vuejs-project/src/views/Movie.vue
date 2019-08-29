<template>
    <fragment>
        <h1 class="title">
            Movie
        </h1>
        <hr />
        <pre> {{ duration }}</pre>
        <div class="columns is-multiline">
            <input type="number" class="input" v-model="rating" />
            <div v-for="(movie, idx) in movies" :key="idx" class="column is-one-third">
                <img :src="movie.src" 
                :class="imgFocus(movie.id)" 
                alt v-on:click="handleClick(movie.id)" />
                <p>{{ movie.rating }}</p>
            </div>
        </div>
    </fragment>
</template>

<script>
import { movies } from '@/db.json';
console.log(movies);
export default {
    methods:{
        //=>ย้ายไปทำใน computed.movies()
        // getMovieImage(value){
        //     let filename = ('000' + value).slice(-3);
        //     return `/images/${filename}.jpg`;
        // },
        handleClick(id){
            if(this.selectMovie[id]){
                this.$set(this.selectMovie, id ,false);
            }else{
                this.$set(this.selectMovie, id ,true);
            }
        },
        imgFocus(id){
            return this.selectMovie[id] ? 'images border' : 'images';
        }
    },
    computed: {
        duration() {
            return movies
                    .filter(f => {
                        return this.selectMovie[f.id]
                    })
                    .reduce((sum, r) => {
                        return sum + r.duration
                    },0);
        },
        movies(){
            //=>เขียนแบบที่ 1
            // return movies.filter(movie => {
            //     console.log('movie',movie)
            //     return movie.rating >= this.rating;
            // });

            //=>เขียนแบบที่ 2
            //return movies.filter(movie => movie.rating >= this.rating );

            //=>เขียนแบบที่ 3
            return movies.filter(({ rating }) => rating >= this.rating)
                        .map(m => {
                            return {
                                ...m,
                                src: '/images/' + `000${m.id}`.slice(-3) + '.jpg'
                                //=>my custom
                                //src: this.getMovieImage(m.id)
                            }
                        });
        }
    },
    data(){
        return {
            selectMovie: {},
            rating: 1
        }
    }
}
</script>

<style scoped>
img {
    cursor: pointer;
}

img.border {
    border: 1px solid black;
}
</style>