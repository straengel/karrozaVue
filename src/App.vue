<template>
  <div id="mainForm">
      

    <div class="headerSiteBar" v-if="formNumber > 0 && stepNumber < 4">
      <div class="headerTitle">
        <h2>Заявка на атозапчасти</h2>
        <!-- <p class="steps">{{ form }}</p> -->
        <button @click="backArrow()"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></button>
      </div>
      <div class="siteBar">
        <div class="widthStep" :style="{ width: returnWidth() }"></div>
      </div>
      <p class="steps">Шаг {{ stepNumber }} из 3</p>
      
      
    </div>
    <Form v-if="formNumber === 0" :goNext="goNext"/>
    <MarkModel v-if="formNumber === 1" :goNext="goNext"/>
    <Model v-if="formNumber === 2" :form="form" :goNext="goNext"/>
    <Year v-if="formNumber === 3" :goNext="goNext"/>
    <VIN v-if="formNumber === 4" :goNext="goNext"/>
    <InfoAccount v-if="formNumber === 5" :goNext="goNext"/>
    <OrderConfirmation v-if="formNumber === 6" :form="form" :goNext="goNext"/>
    <SentOrder v-if="formNumber === 7" :form="form" :goNext="goNext"/>
    
  </div>
</template>

<script>
import Form from './components/Form.vue';
import MarkModel from './components/MarkModel.vue';
import Model from './components/Model.vue';
import Year from './components/Year.vue';
import VIN from './components/VIN.vue';
import InfoAccount from './components/InfoAccount.vue';
import OrderConfirmation from './components/OrderConfirmation.vue';
import SentOrder from './components/SentOrder.vue';

export default {
  name: 'mainForm',
  components: {
    Form,
    MarkModel,
    Model,
    Year,
    VIN,
    InfoAccount,
    OrderConfirmation,
    SentOrder
  },
  data() {
    return {
      formNumber: 0,
      stepNumber: 1,
      length: 4,
      form: {
        id: 0,
        detail: '',
        mark: '',
        model: '',
        year: '',
        VIN: '',
        category: '',
        name: '',
        email: '',
        tel: '',
        delivery: false,
        img: '',
        msg: ''
      },
      component: 'Form'
    }
  },
  methods: {
    goBack() {
      this.currentStepNumber--
    },
    goNext(data) {
      for(let d in data) {
        if(d == 'stepNumber') {
          this.stepNumber++;
        } else if(d == 'formNumber') {
          this.formNumber++;
        } else {
          this.form[d] = data[d];
        }
        
      }

    },
    returnWidth() {
      return Math.round( 100 / 3 * this.stepNumber) + '%'
    },
    backArrow() {
      if (this.formNumber === 4 || this.formNumber === 5) {
        this.stepNumber = this.stepNumber - 1;
      }
      this.formNumber = this.formNumber - 1;
      
    }
  }
}
</script>

<style>
main #mainForm {
  position: relative;
  width: 700px;
  display: block;
  justify-content: center;
  text-align: center;
  margin: 80px auto 0 auto;
}
main #mainForm h1 {
  width: 100%;
  font-family: Merriweather, sans-serif;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 30px;
}
main label {
  color: #000;
  font-family: Roboto;
  
}
main .headerSiteBar {
  width: 100%;
}
main .headerSiteBar button {
  display: inline-block;
}
main .headerSiteBar button {
  background-color: transparent;
  position: absolute;
  top: 0;
  left: 70px;
}
main .headerSiteBar button i {
  font-size: 35px;
  color: #c7c7c7;
  
}
main .headerTitle {
  position: relative;
}
main .headerSiteBar h2 {
  font-family: Merriweather, sans-serif;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 30px;
}
main .siteBar {
  width: 100%;
  height: 2px;
  background-color: #AACCFD;
  
}
main .siteBar .widthStep {
  height: 2px;
  background-color: #0F73E8;
  position: relative;
}
main .siteBar .widthStep::after, main .siteBar .widthStep::before {
  content: "";
  width: 8px;
  height: 8px;
  position: absolute;

  border-radius: 50%;
  border: 1px solid #0F73E8;
  background-color: #eee;
}
main .siteBar .widthStep::after {
  left: 0;
  top: -3px;
}
main .siteBar .widthStep::before {
  right: 0;
  top: -3px;
}
main .headerSiteBar .steps {
  color: #545454;
  font-family: Roboto;
  margin-top: 10px;
}
main p {
  margin: 0;
}
</style>