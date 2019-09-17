<template>
<div id="mark-template">
  <label for="inputMarkModel">Выберете марку автомобиля: </label>
  <input id="inputMarkModel" type="text" v-model="searchMark" placeholder="Начните вводить название" required> 
  <div class="allModel">
    <button class="checkMark" 
      v-for="dataMark of checkMore ? filteredMarks : filteredMarks.length > 16 ? filteredMarks.slice(0,15) : filteredMarks.slice(0,16)"
      :key="dataMark.id"
      @click="showMark(dataMark)">
      <p>{{ dataMark.text }}</p>    
    </button>
    <button class="checkMark checkMore" v-if="filteredMarks.length > 16 && checkMore === false" @click="checkMore = true">
      <p>Ещё марки</p> 
    </button>
  </div>
</div>
</template> 

<script>
export default {
  name: 'MarkModel',
  props: ['goNext'],
  data() {
    return {
      src: './../json/MarkJSON.json',
      mark: ['Загрузка...'],
      idMarks: [0],
      dataMarks: [],
      searchMark: '',
      checkMore: false
    }
  },
  mounted() {
    this.getMark();
  },
  computed: {
    filteredMarks() {
      return this.dataMarks.filter(dataMark => {
        return dataMark.text.toLowerCase().indexOf(this.searchMark.toLowerCase()) !== -1
      })
    }
  },
  methods: {
    getMark() {
      fetch(this.src)
        .then(r => r.json())
        .then(json => {
          this.dataMarks = json.results;
          
      });
    },
    showMark(mark) {
      this.mark = mark;
      this.goNext({
        mark: this.mark.text,
        id: this.mark.id,
        formNumber: 1
      });
      this.searchMark = mark.text;
    }
  }
}
</script>

<style scoped>
#mark-template {
  position: relative;
  color: black;
  width: 100%;
  display: block;
  text-align: left;
}
main #mark-template label {
  display: block;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0;
}
main #mark-template input {
  display: block;
  width: 370px;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
}
main #mark-template button.checkMark {
  width: 125px;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  margin: 7px 0;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 45px; 
}
main #mark-template button.checkMark:active {
  border: 1px solid #0F73E8;
  box-shadow: 5px 5px 10px -6px rgba(15,115,232,1);
}
main #mark-template button.checkMore {
  background-color: #0F73E8;
  
}

main #mark-template button.checkMark p {
  color: #000;
  font-family: Roboto;
}
main #mark-template button.checkMore p {
  color: #fff;
}
main .allModel {
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

@media(max-width: 768px) {
  main #mark-template label {
    font-size: 18px;
  }
  main #mark-template input {
    width: 100%;
  }
  main #mark-template button.checkMark {
    margin: 3px 0;
    margin-right: 6px;
  }

}
@media(max-width: 425px) {
  main #mark-template button.checkMark {
    margin-right: 20px;
  }
}
</style>