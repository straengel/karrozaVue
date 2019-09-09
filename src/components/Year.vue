<template>
<div id="year-template">
  <label for="inputYear">Выберете год автомобиля</label>
  <input id="inputYear" type="text" v-model="searchYear" placeholder="Начните вводить год" required> 
  <div class="allYear">
    <button class="checkYear" 
      v-for="dataYear of checkMore ? filteredYears : filteredYears.length > 16 ? filteredYears.slice(0,15) : filteredYears.slice(0,16)"
      :key="dataYear.id"
      @click="showYears(dataYear)">
      <p>{{ dataYear }}</p>    
    </button>
    <button class="checkYear checkMore" v-if="filteredYears.length > 16 && checkMore === false" @click="checkMore = true">
      <p>Ещё года</p> 
    </button>
  </div>
</div>
</template> 

<script>
export default {
  name: 'Year',
  props: ['goNext'],
  data() {
    return {
      src: './../json/Years.json',
      mark: ['Загрузка...'],
      dataYears: [],
      searchYear: '',
      checkMore: false
    }
  },
  mounted() {
    this.getYear();
  },
  computed: {
    filteredYears() {
      return this.dataYears.filter(dataYear => {
        return dataYear.toString().indexOf(this.searchYear) !== -1
      })
    }
  },
  methods: {
    getYear() {
      fetch(this.src)
        .then(r => r.json())
        .then(json => {
          this.dataYears = json;
          
      });
    },
    showYears(year) {
      this.year = year;
      this.goNext({
        year: this.year,
        formNumber: 1,
        stepNumber: 1
      });
      this.searcYear = year;
    }
  }
}
</script>

<style scoped>
#year-template {
  position: relative;
  color: black;
  width: 100%;
  display: block;
  text-align: left;
}
main #year-template label {
  display: block;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0;
}
main #year-template input {
  display: block;
  width: 370px;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
}
main #year-template button.checkYear {
  width: 125px;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  margin: 7px 0;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 45px;
}
main #year-template button.checkYear:active {
  border: 1px solid #0F73E8;
  box-shadow: 5px 5px 10px -6px rgba(15,115,232,1);
}
main #year-template button.checkMore {
  background-color: #0F73E8;
  
}

main #year-template button.checkYear p {
  color: #000;
  font-family: Roboto;
}
main #year-template button.checkMore p {
  color: #fff;
}
main .allYear {
  width: 100%;
  height: 225px;
  overflow: auto;
  flex-flow: row wrap;
}
::-webkit-scrollbar-track {
background-image: url(./../assets/scroll.png)
}
::-webkit-scrollbar-thumb {
  height: 20px;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-color: #0F73E8;
}
::-webkit-scrollbar{
  width: 10px;
}
</style>