<template>
  <div id="info-acc-template">
    <label for="info-acc-first" class="label-first">Заполните данные для регистрации личного кабинета:</label>
    <input id="info-acc-first" class="info-acc" type="text" placeholder="Имя" v-model="saveName" required ref="inputName">
    <input class="info-acc" type="email" placeholder="E-mail" v-model="saveEmail" required ref="inputMail">
    <input id="info-acc-last" class="info-acc" type="tel" placeholder="Телефон" v-model="saveTel" required  ref="inputTel">
    <label for="info-acc-last">На E-mail вы будете получать только сообщения по вашей заявке. А телефон увидит магазин, который вы выберете в качестве исполнителя.</label>
    <div class="wrap-btn">
      <button class="btnNext" @click="saveInfo()">Далее</button>
    </div>
    
  </div> 
</template>

<script>

export default {
  name: 'InfoAccount',
  props: ['goNext', 'valid'],
  data() {
    return {
      saveName: '',
      saveEmail: '',
      saveTel: ''
    }
  },
  methods: {
    saveInfo() {
      if (this.saveName == '') {
        this.$refs.inputName.style.border = '1px solid red';
      } else if (this.saveEmail == '' || !this.valid(this.$refs.inputMail)) {
        this.$refs.inputMail.style.border = '1px solid red';
      } else if (this.saveTel == '' || !this.valid(this.$refs.inputTel)) {
        this.$refs.inputTel.style.border = '1px solid red';
      } else {
        this.goNext({
          name: this.saveName,
          email: this.saveEmail,
          tel: this.saveTel,
          formNumber: 1,
          stepNumber: 1
        })
      }
    }
  }
}
</script>

<style scoped>
main #info-acc-template {
  text-align: left;
}
main #info-acc-template input {
  display: block;
  width: 370px;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 15px;
}
main #info-acc-template #VIN {
  margin-top: 20px;
}
main #info-acc-template .btnNext {
  width: 125px;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #0F73E8;
}
main #info-acc-template button {
  color: #fff;
  font-family: Roboto;
}
main #info-acc-template label {
  width: 450px;
  color: #545454;
  font-family: Roboto;
  font-weight: 300;
  font-size: 16px;
  text-align: left;
}
main #info-acc-template .label-first {
  color: #000;
  font-weight: 400;
  margin: 20px 0;
}
main #info-acc-template .wrap-btn {
  width: 100%;
  display: flex;
  justify-content: center;
}
@media(max-width: 768px) {
  main #info-acc-template input {
    width: 100%;
  }
  main #info-acc-template .btnNext {
    margin: 0;
    width: 100%;
  }
  main #info-acc-template label {
    width: 100%;    
  }
}
</style>

