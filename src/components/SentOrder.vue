<template>
  <div class="firstForm" id="sent-order-template">
    <h2>Ваш заказ отправлен в 12 магазинов</h2>
    <p class="text-header">В ближайшее время заказ будет обработан, и магазины отправят свои лучшие предложения.</p>
    <img class="ellipse" src="./../assets/Ellipse.png" alt="">
    <img class="vector" src="./../assets/Vector.png" alt="">
    <div class="input-acc">
      <span>Данные для входа в личный кабинет отправлены на указанный E-mail.</span>
      <p>Зайдите в личный кабинет, сравните предложения от магазинов и задайте вопросы специалистам.</p>
    </div>
    <input type="email" placeholder="E-mail" required>
    <input type="password" placeholder="Пароль" required>
    <button @click="rload()">Войти</button>
  </div> 
</template>

<script>

export default {
  name: 'SentOrder',
  props: ['form', 'goNext'],
  data() {
    return {
    }
  },
  methods: {
    rload() {
      location.reload();
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main #sent-order-template {
  position: relative;
}
main #sent-order-template h2{
  font-family: Merriweather, sans-serif;
  color: #000;
  font-size: 24px;
}
main #sent-order-template p.text-header {
  width: 470px;
  margin: auto;
  color: #000;
  font-size: 16px;
  text-align: left;
}
main #sent-order-template img {
  position: absolute;
  margin: 0 auto;
  
}
main #sent-order-template img.ellipse {
  width: 150px;
  top: -40px;
  left: 275px;
}
main #sent-order-template img.vector{
  width: 60px;
  left: 320px;
  top: 0
}
main #sent-order-template .input-acc {
  width: 400px;
  margin: auto;
  margin-top: 80px;
  text-align: left;
  color:#000;
}
main #sent-order-template span {
  font-size: 16px;
  font-family: Roboto;
  font-weight: 600; 
}
main #sent-order-template p {
  color: #545454;
}
main #sent-order-template input {
  display: block;
  width: 370px;
  margin: auto;
  border: 1px solid #0F73E8;
  border-radius: 10px;
  height: 40px;
  margin-top: 10px;
  padding: 0 15px;
}
main #sent-order-template input[type="email"] {
  margin-top: 20px;
}
main #sent-order-template button {
  width: 120px;
  flex-grow: 1;
  background-color: #fff;
  border: 1px solid #ababab;
  padding: 10px 6px;
  font-size: 14px;
  border-radius: 10px;
  background-color: #0F73E8;
  margin-top: 20px;
}
</style>
