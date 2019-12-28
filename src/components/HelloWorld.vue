<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <button @click="getHelloWorld">
      가져오기
    </button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '나의 첫번째 vue.js'
    }
  },
  mounted() {
    test()
  },
  methods: {
    getHelloWorld() {
      this.$http.get('http://localhost:8000')
      .then(response => {
        this.msg = response.data
      })
    },
    vueTest() {
      alert('a');
    }
  }
}

function test() {
  console.log(window.aa)
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
