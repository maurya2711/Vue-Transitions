<template>
  <div class="list-conatiner">
    <p>
      Hey There!!! Let's With play with list by adding and removing items from
      list. Click on play to play with list
    </p>
    <button @click="toggleList" type="button">Play</button>
    <div id="app" v-if="this.showList">
      <div class="form">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" />
        <button @click="addPlayer">Add player</button>
      </div>
      <div class="players">
        <transition-group name="player" tag="ul">
          <li class="panel" v-for="player in players" :key="player.id">
            {{ player.name }}

            <span class="remove" @click="deletePlayer(player.id)">Remove</span>
          </li>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListView",
  data() {
    return {
      name: "",
      players: [
        {
          id: 1,
          name: "Batman",
        },
        {
          id: 2,
          name: "Robin",
        },
        {
          id: 3,
          name: "Superman",
        },
        {
          id: 4,
          name: "Spiderman",
        },
      ],
      showList: false,
    };
  },
  methods: {
    addPlayer: function () {
      const newPlayer = {
        id: this.players.length + 1,
        name: this.name,
      };
      this.players.push(newPlayer);
    },
    deletePlayer: function (playerId) {
      let playerToRemove = this.players.find((player) => {
        return player.id === playerId;
      });

      let playerIndex = this.players.indexOf(playerToRemove);
      this.players.splice(playerIndex, 1);
    },
    toggleList: function () {
      this.showList = !this.showList;
    },
  },
};
</script>
<style scoped>
#app {
  border: dashed rebeccapurple 0.2px;
  height: 300px;
  width: 100%;
  margin-top:20px
}
.form {
  margin: 20px auto;
  width: 400px;
}

.panel {
  width: 400px;
  margin: 6px auto;
  overflow: hidden;
  border: 1px solid;
  text-align: center;
  transition: all 1s;
  display: inline-block;
}

.players {
  position: relative;
  text-align: center;
}

.remove {
  float: right;
  cursor: pointer;
  text-decoration: underline;
  font-size: 12px;
  vertical-align: bottom;
}

.player-enter,
.player-leave-to {
  opacity: 0;
}

.player-enter {
  transform: translateY(30%);
}

.player-leave-to {
  transform: translateX(300%);
}

.player-leave-active {
  position: absolute;
}
</style>
