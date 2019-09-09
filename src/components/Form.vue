<template>
  <div class="firstForm" id="form-template">
    <h1>все автомaгaзины тут</h1>
    <input id='detail' type="text" placeholder="Какую автозапчасть вы ищите?" v-model="detail" required>
    <button class="search" @click="showDetail()">Найти</button>
    <label for="detail">Например: клапан вентиляции, масло SHELL Helix</label>
    <button class="addImg"><i class="fa fa-paperclip" aria-hidden="true"></i>{{ msg }}<input type="file" @change="imgUrl($event.target.value)" > </button>
    <h3>Вы получите</h3>
    <div class="blockPlus">
      <div class="plus">
        <div class="divImg">
          <img src="./../assets/business-and-finance.png" alt="">
        </div>
        <p>Цены от магазинов рядом</p>
      </div>
      <div class="plus">
        <div class="divImg">
          <img src="./../assets/shipped.png" alt="">
        </div>
        <p>Кэшбэк до 5%</p>
      </div>
      <div class="plus">
        <div class="divImg">
          <img src="./../assets/transfer.png" alt="">
        </div>
        <p>Бесплатную доставку</p>
      </div>
    </div>
  </div> 
</template>

<script>

export default {
  name: 'Form',
  props: ['goNext'],
  data() {
    return {
      detail: '',
      msg: 'Прикрепить изображение'
    }
  },
  methods: {
    showDetail() {
      this.goNext({
        detail: this.detail,
        formNumber: 1,
        msg: this.msg
      })
    },
    imgUrl(value) {
      this.msg = value.slice(12, 35)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
main input#detail {
  width: 445px;
  height: 45px;
  border: 1px solid #0067D7;
  border-radius: 7px;
  padding: 5px 20px;
  color: #000000;
}
main .search {
  width: 100px;
  height: 45px;
  background-color: #0067D7;
  margin-left: 10px;
  border-radius: 7px;
  color: #ffffff;
}
main label {
  display: flex;
  font-weight: 300;
  margin: 8px 85px;
}
main .addImg {
  width: 205px;
  display: flex;
  background-color: #0067D7;
  color: #ffffff;
  border-radius: 7px;
  padding: 5px 8px;
  margin-left: 85px;
  position: relative;
}
main .addImg i {
  
  transform: rotate(85deg) translateX(3px);
  margin-right: 5px;
}
main h3 {
  display: inline-block;
  margin: 30px auto;
  font-family: Merriweather, sans-serif;
  color: black;
  text-transform: uppercase;
  border-bottom: 2px solid rgba(0, 103, 215, 0.2);
}
main .blockPlus {
  display: flex;
  justify-content: space-between;
}
main .blockPlus .plus {
  width: 145px;
}
main .blockPlus img {
  width: 145px;
  padding: 35px;
}
main .blockPlus .divImg {
  position: relative;
}
main .blockPlus .divImg::before {
  content: "";
  z-index: 3;
  position: absolute;
  width: 145px;
  height: 145px;
  top: 0;
  left: 0;
  border: 2px solid rgba(0, 103, 215, 0.2);
  border-radius: 50%;
}
main .blockPlus .plus p {
  color: #000000;
  font-family: Merriweather;
  font-size: 19px;
  width: 205px;
  margin-left: -30px;
  margin-top: 15px;
}
main input[type=file] {
  width: 205px;
  height: 30px;
  position: absolute;
  outline:0;
  opacity:0;
  top: 0;
  left: 0;
}
</style>
