/* eslint-disable */
<template>
  <div id="app">
    <vue-headful
      description="Description from vue-headful"
      title="Pozdnyakova"
    />
    <div class="gridall">
      <div class="cont-1">
        <div class="box-1">
          <img
            alt="лого"
            class="logo"
            src="/logo.png"
          >
        </div>
        <div class="box-2">
          <a href="index.html">Главная</a><br>
          <a href="sotrud.html">Список сотрудников</a>
        </div>
      </div>
      <div class="grid-container">
        <section class="s1">
          <table>
            <th>id</th>
            <th>Фамилия</th>
            <th>Имя</th>
            <th>Отчество</th>
            <th>Отдел</th>
            <tr
              v-for="note in notes"
              :key="note.id"
            >
              <td>{{ note.id }}</td>
              <td>{{ note.name }}</td>
              <td>{{ note.surname }}</td>
              <td>{{ note.patr }}</td>
              <td>{{ note.otd }}</td>
            </tr>
          </table>
        </section>

        <section class="s3">
          <picture>
            <source
              media="(max-width: 720px)"
              srcset="/pic.jpg"
            >
            <source
              media="(min-width: 720px)"
              srcset="/pic2.png"
            >
            <img
              alt="kot"
              src="/pic2.png"
            >
          </picture>
        </section>
        <section class="s4">
          <h1 class="zt">
            Зачем нужен список сотрудников?
          </h1>
          <p class="ot">
            Он необходим для удобства хранения всех данных в одном месте.
          </p>
        </section>
        <section class="s5">
          <ul>
            <li class="l1">
              <a
                class="hide fb"
                href=""
              />
            </li>
            <li class="l1">
              <a
                class="hide twitter"
                href=""
              />
            </li>
            <li class="l1">
              <a
                class="hide youtube"
                href=""
              />
            </li>
            <li class="l1">
              <a
                class="hide instagram"
                href=""
              />
            </li>
          </ul>
        </section>
      </div>
      <div class="cont-2">
        <div class="nbox-1">
          <p class="f1">
            позднякова роза кирилловна
          </p>
        </div>
        <div class="nbox-2">
          <p class="f2">
            181-361
          </p>
        </div>
        <div class="nbox-3">
          <p class="f2">
            22 июня 2020
          </p>
        </div>
        <div class="nbox-4">
          <p class="f2">
            https://ru.vuejs.org/v2/guide
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      notes: [],
      name: '',
      surname: '',
      patr: '',
      otd: ''
    }
  },
  created () {
    this.updateData()
  },
  methods: {
    async updateData () {
      try {
        await this.$http.get('http://localhost:3000/notes').then((res) => res.json()).then((res) => (this.notes = res))
        console.log(this.notes)
      } catch (err) {
        console.log(err)
      }
    },

    async Save () {
      let note = {
        'name': this.name,
        'surname': this.surname,
        'patr': this.patr,
        'otd': this.otd
      }
      console.log(note)
      try {
        await this.$http.post('http://localhost:3000/notes', note)
        this.updateData()
      } catch (err) {
        console.error(err)
      }
    }

  }
}

</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
  p{
    font-family: 'Roboto', sans-serif;
  }
  .l1 {
    display: inline;
  }

  .l1 a {
    display: inline-block;
    width: 100px;
    height: 100px;
  }

  .l1 a.fb {
    background-position: 0 -110px;
  }

  .l1 a.twitter {
    background-position: -105px -110px;
  }

  .l1 a.youtube {
    background-position: -210px -110px;
  }

  .l1 a.instagram {
    background-position: -315px -110px;
  }

  img {
    width: 100%;
  }

  @media screen and (min-width: 720px) {
    /* пк версия */
    .cont-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 2em;
      background-color: bisque;
    }

    .logo {
      width: 100px;
    }

    .box-1 {
      order: 1;

    }

    .box-2 {
      order: 2;

    }

    .pic {
      width: 100%;
      place-self: center;
    }

    .grid-container {
      display: grid;
      align-items: center;
      height: 100vh;
      margin: 0 2em;
      background-color: powderblue;

      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "s1   s2   s3" "s4   s6   s3" "s4   s6   s5"

    }

    section.s1 {
      grid-area: s1;

    }

    section.s2 {
      grid-area: s2;

    }

    section.s3 {
      grid-area: s3;

    }

    section.s4 {
      grid-area: s4;
      align-self: center;

    }

    section.s5 {
      grid-area: s5;

    }

    .cont-2 {
      display: flex;
      justify-content: space-between;
      align-content: start;
      margin: 0 2em;
      background-color: rgb(253, 223, 223);
    }

    .nbox-1 {
      order: 1;

    }

    .nbox-2 {
      order: 2;

    }
    .nbox-3 {
      order: 3;

    }
    .nbox-4 {
      order: 4;

    }

  }

  @media screen and (max-width: 992px) {
    /* планшет версия */
    .cont-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 0 2em;
      background-color: bisque;
    }

    .logo {
      width: 100px;
    }

    .box-1 {
      order: 1;

    }

    .box-2 {
      order: 2;

    }

    .pic {
      width: 100%;
      place-self: center;
    }

    .grid-container {
      display: grid;
      align-items: center;
      height: 100vh;
      margin: 0 2em;
      background-color: powderblue;

      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;
      grid-template-areas: "s1   s2   s3" "s4   s4   s3" "s4   s4   s5"

    }

    section.s1 {
      grid-area: s1;

    }

    section.s2 {
      grid-area: s2;

    }

    section.s3 {
      grid-area: s3;

    }

    section.s4 {
      grid-area: s4;

    }

    section.s5 {
      grid-area: s5;

    }

    .cont-2 {
      display: flex;
      justify-content: space-between;

      margin: 0 2em;
      background-color: rgb(253, 223, 223);
    }

    .nbox-1 {
      order: 1;

    }

    .nbox-2 {
      order: 2;

    }

    .nbox-3 {
      order: 3;

    }

    .nbox-4 {
      order: 4;

    }

  }

  @media screen and (max-width: 720px) {
    /* мобил версия */
    .cont-1 {
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: bisque;
      margin: 0 2em;

    }

    .logo {
      max-width: 120px;
    }

    .pic {
      width: 100%;

    }

    .box-1 {
      order: 1;
      place-self: center;

    }

    .box-2 {
      order: 2;
      place-self: center;

    }

    .grid-container {

      display: grid;
      height: 100vh;
      margin: 0 2em;

      background-color: powderblue;

      grid-template-columns: 1fr;
      grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
      grid-template-areas: "s3" "s1" "s2" "s4" "s5"
    }

    section.s1 {
      grid-area: s1;
      place-self: center;

    }

    section.s2 {
      grid-area: s2;
      place-self: center;
    }

    section.s3 {
      grid-area: s3;
      place-self: center;
    }

    section.s4 {
      grid-area: s4;
      place-self: center;
    }

    section.s5 {
      grid-area: s5;
      place-self: center;
    }

    .cont-2 {
      display: flex;
      justify-content: space-between;
      align-content: start;
      margin: 0 2em;
      background-color: rgb(253, 223, 223);
    }

    .nbox-1 {
      order: 1;

    }

    .nbox-2 {
      order: 2;

    }
    .nbox-3 {
      order: 3;

    }

    .nbox-4 {
      order: 4;

    }

  }

  @media print {
    .grid-container {
      font-family: Times, 'Times New Roman', serif;

    }

    .cont-1, .cont-2 {
      display: none;
    }
  }
  .col-4 {
    display: inline;
    border: 1px solid purple;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
  table, th, td {
    border: 1px solid black;
    border-collapse: collapse;
  }
</style>
