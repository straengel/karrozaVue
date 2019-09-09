<template>
<div id="order-confirmation-template">
  <h2>Подтверждение заказа</h2>
  <input id='detail' type="text" placeholder="Какую автозапчасть вы ищите?" v-model="form.detail" readonly required><i class=" up-i fa fa-pencil" aria-hidden="true" @click="editInput($event.target)"></i>
  <button class="addImg"><i class="fa fa-paperclip" aria-hidden="true"></i>{{ form.msg }}<input type="file" @change="imgUrl($event.target.value)" > </button>
  <div class="mmy">
    <span>Марка: </span><p> {{form.mark}} </p>
    <span>Модель: </span><p> {{form.model}} </p>
    <span>Год: </span><p> {{form.year}} </p>
  </div>
  <div class="vin">
    <span>VIN: </span><p><input class="infoLog " type="text" readonly v-model="form.VIN" required><i class="fa fa-pencil" aria-hidden="true" @click="editInput($event.target)"></i></p>
  </div>
  
  <div class="personal-data">
    <p><span>Имя: </span><input class="infoLog" type="text" readonly v-model="form.name" required><i class="fa fa-pencil" aria-hidden="true" @click="editInput($event.target)"></i> </p>
    <p><span>Телефон: </span><input class="infoLog" type="text" readonly  v-model="form.tel" required><i class="fa fa-pencil" aria-hidden="true" @click="editInput($event.target)"></i></p>
    <p><span>E-mail: </span><input class="infoLog" type="text" readonly  v-model="form.email" required><i class="fa fa-pencil" aria-hidden="true" @click="editInput($event.target)"></i></p>
  </div>
  <div class="delivery-block">
    <h3>Доставка</h3>
    <div class="delivery-label-block">
      <label class="radio-p">
        <input class="radio-input" name="delivery" type="radio" value="delivery" checked="checked" required>
        <span>Мне нужна доставка</span>
        Бесплатно в пределах районав котором расположен магазин. 150 рублей за пределы района.
      </label>
      <label class="radio-p">
        <input class="radio-input" name="delivery" type="radio" value="not-delivery" required>
        <span>Заберу сам</span>
        Бесплатно.
      </label>
    </div>
    
  </div>
  <button class="btnNext" @click="saveInfo()">Подтвердить</button>
</div>
</template> 

<script>
export default {
  name: 'Year',
  props: ['form', 'goNext'],
  
  data() {
    return {
      msg: this.form.msg,
    }
  },
  computed: {
    filteredYears() {
      return this.dataYears.filter(dataYear => {
        return dataYear.toString().indexOf(this.searchYear) !== -1
      })
    }
  },
  methods: {
    showYears() {
      this.goNext({
        formNumber: 1
      });
    },
    editInput(e) {
      let inp = e.previousSibling;
      inp.removeAttribute('readonly');
      inp.focus();
      inp.classList.add('focusInfo');
      inp.addEventListener('blur', () => {
        inp.setAttribute('readonly', true);
        inp.classList.remove('focusInfo');
      });
    },
    saveInfo() {
      this.goNext({
        formNumber: 1
      });
      console.log(this.form);
    },
    imgUrl(value) {
      this.form.msg = value.slice(12, 35);
    }
  }
}
</script>

<style scoped>
main #order-confirmation-template {
  padding: 0 15px;
  position: relative;
}
main #order-confirmation-template h2{
  font-family: Merriweather, sans-serif;
  color: #000;
  text-transform: uppercase;
}
main #order-confirmation-template h3 {
  font-family: Merriweather, sans-serif;
  text-transform: uppercase;
  color: #000;
  /* display: flex; */
}
main #order-confirmation-template .addImg {
  width: 205px;
  display: flex;
  background-color: #0067D7;
  color: #ffffff;
  border-radius: 7px;
  padding: 5px 8px;
  /* margin-left: 85px; */
  position: relative;
}
main #order-confirmation-template .addImg i {
  
  transform: rotate(85deg) translateX(3px);
  margin-right: 5px;
}
main input[type=file] {
  width: 210px;
  height: 30px;
  position: absolute;
  outline:0;
  opacity:0;
  top: 0;
  left: 0;
}
main #order-confirmation-template span {
  color: #000;
  display: inline-block;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 600;
  margin: 5px 5px 0 0;
}
main #order-confirmation-template p {
  color: #000;
  display: block;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
  margin: 5px 50px 0 0;
}
main #order-confirmation-template .mmy {
  display: flex;
  margin-top: 10px;
}
main #order-confirmation-template .personal-data {
  text-align: left;
}
main #order-confirmation-template .vin {
  display: flex;
  margin-bottom: 20px;
}
main #order-confirmation-template input#detail {
  width: 100%;
  height: 45px;
  border: 1px solid #0067D7;
  border-radius: 7px;
  padding: 5px 20px;
  color: #000000;
  margin: 15px 0;
}
main #order-confirmation-template input[type="radio"] {
  border: 2px; 
  clip: rect(0 0 0 0); 
  height: 40px; 
  margin: -1px; 
  overflow: hidden; 
  padding: 0; 
  position: absolute; 
  width: 40px;
}
main #order-confirmation-template .delivery-block label {
  display: block;
  cursor: pointer;
}
main #order-confirmation-template .delivery-block [type="radio"] + span:before {
  content: '';
  display: inline-block;
  position: absolute;
  left: -30px;
  width: 20px;
  height: 20px;
  vertical-align: -0.25em;
  border-radius: 50%;
  border: 2px solid #0067D7;
  margin-right: 5px;
  transition: 0.2s ease all;
}
main #order-confirmation-template .delivery-block [type="radio"]:checked + span:before {
  border: 6px solid #0067D7;
}
main #order-confirmation-template .delivery-block .delivery-label-block {
  display: flex;
  
}
main #order-confirmation-template .delivery-block .delivery-label-block label {
  width: 400px;
  text-align: left;
  position: relative;
  margin-left: 40px;
  font-size: 14px;
  font-weight: 400;
}
main #order-confirmation-template .delivery-block .delivery-label-block span {
  display: block;
}
main #order-confirmation-template .btnNext {
  width: 150px;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #0F73E8;
}
main #order-confirmation-template .infoLog {
  width: 180px;
  padding: 0;
  margin: 0;
  border: none;
  border-bottom: 1px solid #fff;
  font-family: Roboto;
  font-size: 18px;
  font-weight: 300;
}
main #order-confirmation-template .infoLog.focusInfo {
  border-bottom: 1px solid #0F73E8;
}
main #order-confirmation-template i {
  color: #0F73E8;
  cursor: pointer;
  margin-left: 5px;
}
main #order-confirmation-template i.up-i {
  position: absolute;
  font-size: 20px;
  top: 110px;
  right: 25px;
}
main #order-confirmation-template .fa-paperclip {
  color: #fff
}
</style>