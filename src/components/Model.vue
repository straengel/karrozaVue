<template>
<div id="model-template">
  <label for="inputModel">Выберете модель автомобиля:</label>
  <input id="inputModel" type="text" v-model="searchModel" placeholder="Начните вводить название" required> 
  <div class="allModel">
    <button class="checkModel" 
      v-for="dataModel of checkMore ? filteredModels : filteredModels.length > 16 ? filteredModels.slice(0,15) : filteredModels.slice(0,16)"
      :key="dataModel.id"
      @click="showModels(dataModel)">
      <p>{{ dataModel.text }}</p>
    </button>
    <button class="checkModel checkMore" v-if="filteredModels.length > 16 && checkMore === false" @click="checkMore = true">
      <p>Ещё модели</p> 
    </button>
  </div>
</div>
</template> 

<script>


export default {
  name: 'Model',
  props: ['form', 'goNext'],
  data() {
    return {
      src: './../json/ModelList_' + this.form.id + '.json',
      model: [],
      idMarks: [0],
      dataModels: [],
      searchModel: '',
      checkMore: false,
      data: []
    }
  },
  mounted() {
    this.getModels();
  },
  computed: {
    filteredModels() {
      return this.dataModels.filter(dataModel => {
        return dataModel.text.toLowerCase().indexOf(this.searchModel.toLowerCase()) !== -1
      })

    }
  },
  methods: {
    getModels() {
      fetch(this.src)
        .then(r => r.json())
        .then(json => {
          let aa = json;
          let keys = Object.keys(json);
          for (let i = 0; i < keys.length; i++) {
            this.dataModels.push({'id': keys[i], 'text': aa[keys[i]]});
          }
      });
    },
    showModels(model) {
      this.model = model;
      this.goNext({
        model: this.model.text,
        formNumber: 1
      });
      this.searchModel = model.text;
    }
  }
}
</script>

<style scoped>
#model-template {
  position: relative;
  color: black;
  width: 100%;
  display: block;
  text-align: left;
}
main #model-template label {
  display: block;
  font-family: Roboto;
  font-size: 22px;
  font-weight: 400;
  margin: 10px 0;
}
main #model-template input {
  display: block;
  width: 370px;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
}

main #model-template button.checkModel {
  width: 125px;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  margin: 7px 0;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 45px;
}
main #model-template button.checkModel:active {
  border: 1px solid #0F73E8;
  box-shadow: 5px 5px 10px -6px rgba(15,115,232,1);
}
main #model-template button.checkMore {
  background-color: #0F73E8;
  
}

main #model-template button.checkModel p {
  color: #000;
  font-family: Roboto;
}
main #model-template button.checkMore p {
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
</style>