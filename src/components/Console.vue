<template>
  <div class="console">
    <table>
    <tr class="graph">
      <td class='like'><div v-bind:style="{height: likePercentage + '%'}"></div></td>
      <td class='no-like'><div v-bind:style="{height: noLikePercentage + '%'}"></div></td>
      <td class='happy'><div v-bind:style="{height: happyPercentage + '%'}"></div></td>
      <td class='surprise'><div v-bind:style="{height: surprisePercentage + '%'}"></div></td>
      <td class='what'><div v-bind:style="{height: whatPercentage + '%'}"></div></td>
    </tr>
    <tr class="counts">
      <td>{{ likeCount }}</td>
      <td>{{ noLikeCount }}</td>
      <td>{{ happyCount }}</td>
      <td>{{ surpriseCount }}</td>
      <td>{{ whatCount }}</td>
    </tr>
    <tr>
    <td>
      <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)">
      <polyline data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="
        12,46 2,46 2,24 12,24 " stroke-linejoin="miter"></polyline>
      <path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M12,24l6-22l0,0
        c3.3,0,6,2.7,6,6v12h15c3.7,0,6.5,3.3,5.9,6.9l-2.2,14c-0.5,2.9-3,5.1-5.9,5.1H12V24z" stroke-linejoin="miter"></path>
      </g></svg>
    </td>
    <td>
      <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)">
      <polyline data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" points="
        12,2 2,2 2,24 12,24 " stroke-linejoin="miter"></polyline>
      <path fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M12,24l6,22l0,0
        c3.3,0,6-2.7,6-6V28h15c3.7,0,6.5-3.3,5.9-6.9l-2.2-14c-0.5-2.9-3-5.1-5.9-5.1H12V24z" stroke-linejoin="miter"></path>
      </g></svg>
    </td>
    <td>
      <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)">
      <circle fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="24" cy="24" r="22" stroke-linejoin="miter"></circle>
      <path data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M36,26
        c0,6.6-5.4,12-12,12s-12-5.4-12-12H36z" stroke-linejoin="miter"></path>
      <path data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M36,18
        c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4" stroke-linejoin="miter"></path>
      <path data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" d="M20,18
        c0-2.2-1.8-4-4-4c-2.2,0-4,1.8-4,4" stroke-linejoin="miter"></path>
      </g></svg>
    </td>
    <td>
    <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)">
      <circle fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="24" cy="24" r="22" stroke-linejoin="miter"></circle>
      <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="13" cy="23" r="11" stroke-linejoin="miter"></circle>
      <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="13" cy="23" r="3" stroke-linejoin="miter"></circle>
      <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="23" r="3" stroke-linejoin="miter"></circle>
      <circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="35" cy="23" r="11" stroke-linejoin="miter"></circle>
      </g></svg>
    </td>
    <td>
      <svg class="nc-icon outline" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="48px" height="48px" viewBox="0 0 48 48"><g transform="translate(0, 0)"><circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="16" cy="18" r="2" stroke-linejoin="miter"></circle><circle data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="30" cy="18" r="4" stroke-linejoin="miter"></circle><line data-color="color-2" fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" x1="19" y1="32" x2="29" y2="32" stroke-linejoin="miter"></line><circle fill="none" stroke="#444444" stroke-width="2" stroke-linecap="square" stroke-miterlimit="10" cx="24" cy="24" r="22" stroke-linejoin="miter"></circle></g></svg>
    </td>
    </tr>
    <tr>
      <td>Like</td>
      <td>No Like</td>
      <td>Happy</td>
      <td>Surprise</td>
      <td>What</td>
    </tr>
    </table>
  </div>
</template>

<script>
var _ = require('lodash')
var firebase = require('firebase')

var config = {
  apiKey: 'AIzaSyCHkdDVKJFlt57bZCQ4PgOwOS4W7gLne0A',
  authDomain: 'tdrs-d4cde.firebaseapp.com',
  databaseURL: 'https://tdrs-d4cde.firebaseio.com',
  storageBucket: 'tdrs-d4cde.appspot.com',
  messagingSenderId: '889283097220'
}
firebase.initializeApp(config)

export default {
  name: 'console',
  created () {
    firebase.database().ref('actions/').on('child_added', function (incoming) {
      const d = new Date(incoming.val().date)
      const now = new Date()
      const diff = now - d
      if (diff < 300000) {
        const title = incoming.val().type
        const date = incoming.val().date
        this.$store.commit('addPoint', {title, date})
      } else {
        firebase.database().ref('actions/').child(incoming.key).remove()
      }
    }.bind(this))

    setInterval(function () {
      const now = new Date()
      _.forEach(this.$store.state.points, function (point) {
        if (point !== undefined) {
          const d = new Date(point.date)
          const diff = now - d

          if (diff > 300000) {
            this.$store.commit('removePoint', {point})
          }
        }
      }.bind(this))
    }.bind(this), 1000)
  },
  methods: {
    count: function (type) {
      var count = 0

      _.forEach(this.$store.state.points, function (point) {
        if (point.title === type) {
          count++
        }
      })

      return count
    },
    percentage: function (type) {
      var counts = [this.count('like'),
        this.count('no-like'),
        this.count('happy'),
        this.count('surprise'),
        this.count('what')]
      var max = Math.max.apply(Math, counts)

      return parseInt(this.count(type) / max * 100)
    }
  },
  computed: {
    likeCount: function () {
      return this.count('like')
    },
    noLikeCount: function () {
      return this.count('no-like')
    },
    happyCount: function () {
      return this.count('happy')
    },
    surpriseCount: function () {
      return this.count('surprise')
    },
    whatCount: function () {
      return this.count('what')
    },
    likePercentage: function () {
      return this.percentage('like')
    },
    noLikePercentage: function () {
      return this.percentage('no-like')
    },
    happyPercentage: function () {
      return this.percentage('happy')
    },
    surprisePercentage: function () {
      return this.percentage('surprise')
    },
    whatPercentage: function () {
      return this.percentage('what')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 100%;
}
.graph {
  height: 200px;
}
.graph td {
  position: relative;
}

.graph td div {
  position: absolute;
  bottom: 0;
  width: 80%;
  left: 10%;
  transition: height .25s ease;
}
.like div {
  background: #5cb85c;
}
.no-like div {
  background: #d9534f;
}
.happy div {
  background: #5bc0de;
}
.surprise div {
  background: #c14bc1;
}
.what div {
  background: #f0ad4e;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
