<template>
  <div id="vin-template">
    <input id="VIN" class="vin" type="text" placeholder="Введите VIN-номер" v-model="saveVin" required>
    <input class="vin bottomVin" type="text" name="example" placeholder="Выберете категорию запчастей" readonly required @click="showCheckboxes()" >
    <div id="checkboxes" @change="changeCheckbox($event)">
      
      <label><input type="checkbox" id="one" value="First checkbox" required>First checkbox</label>
      
      <label><input type="checkbox" id="two" value="Second checkbox" required>Second checkbox</label>
      
      <label><input type="checkbox" id="three" value="Third checkbox" required>Third checkbox</label>
    </div>
    <button class="btnNext" @click="saveInfo()">Далее</button>
    <label class="forVin" for="VIN">VIN-номер нужен для того, чтобы сотрудник магазина мог более точно подобрать нужные вам автозапчасти и сделать предложение как можно быстрее.</label>
  </div> 
</template>

<script>

  // register globally
  export default {
    name: 'VIN',
    props: ['goNext'],
    data() {
      return {
        saveVin: '',
        saveCategory: ''
      }
    },
    methods: {
      saveInfo() {
        this.goNext({
          VIN: this.saveVin,
          category: this.saveCategory,
          formNumber: 1,
          stepNumber: 1
        })
      },
      showCheckboxes() {
        let checkboxes = document.getElementById('checkboxes');
    if (!this.expanded) {
      checkboxes.style.display = "block";
      this.expanded = true;
    } else {
      checkboxes.style.display = "none";
      this.expanded = false;
    }
      },
      changeCheckbox(event) {
        let checkboxes = document.getElementById('checkboxes'),
            bottomVin = document.querySelector('.bottomVin');
        if(event.target.checked) {
          if (bottomVin.value.length > 0) {
            bottomVin.value += ', ' + event.target.value;
          } else {
            bottomVin.value += event.target.value;
          }
        } else {
          if (bottomVin.value.indexOf(event.target.value) == 0) {
            if (bottomVin.value.length == event.target.value.length) {
              bottomVin.value = bottomVin.value.replace(event.target.value, '');
            } else {
              bottomVin.value = bottomVin.value.replace(event.target.value + ', ', '');
            }
          } else {
            bottomVin.value = bottomVin.value.replace(', ' + event.target.value, '');
          }
        }
        this.saveCategory = bottomVin.value;
      }
    }
  }
</script>

<style scoped>
main #vin-template {
  text-align: left;
}
main #vin-template .vin {
  display: block;
  width: 370px;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
}
main #vin-template .bottomVin {
  display: inline-block;
  float: left;
}
main #vin-template #VIN {
  margin-top: 20px;
}
main #vin-template .btnNext {
  width: 125px;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  margin: 0px 20px;
  font-size: 14px;
  border-radius: 10px;
  margin-right: 45px;
  background-color: #0F73E8;
  display: inline-block;
  float: left;
  
  
}
main #vin-template .btnNext {
  color: #000;
  font-family: Roboto;
}
main #vin-template button {
  color: #fff;
}
main #vin-template label {
  width: 450px;
  color: #545454;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
}
main #vin-template #checkboxes {
  display: none;
  width: 370px;
  height: 225px;
  overflow-y: auto;
  overflow-x: hidden;
  position: absolute;
  background-color: #fff;
  margin-top: 40px;
  padding: 15px;
}
main #vin-template .multiselect__tags {
  width: 370px;
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
  main #vin-template label {
    left: 0;
    font-size: 14px;
  }
  main #vin-template .vin {
    width: 100%;
  }
  main #vin-template .btnNext {
    margin: 0;
    width: 100%;
    margin-top: 90px;
  }
  main #vin-template #checkboxes {
    width: 100%;  
    height: 100px;
    z-index: 300;
  }
  main #mainForm input {
    width: auto;;
  }
  main #vin-template label.forVin {
    position: absolute;
    top: 220px;
    width: 100%;  
  }
      
    
}
</style>

