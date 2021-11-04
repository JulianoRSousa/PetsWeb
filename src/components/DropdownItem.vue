<template>
  <div>
    <button @click="toggleShow" class="anchor">Menu</button>
    <div v-if="showMenu" class="menu">
      <div
        class="menu-item"
        :v-for="item in this.items"
        @click="itemClicked(item)"
      >
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropdownItem",
  data() {
    return {
      showMenu: false,
    };
  },
  props: {
    onClick: Function,
    items: {
      type: Object,
    },
  },
  methods: {
    toggleShow: function() {
      this.showMenu = !this.showMenu;
    },
    itemClicked: function(item) {
      this.toggleShow();
      this.onClick(item);
    },
  },
};
</script>

<style>
.anchor {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  padding: 0.75rem 2rem;
  font-size: 1rem;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: transparent;
}

.anchor::after {
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 0.5em;
  vertical-align: 0.255em;
  content: "";
  border-top: 0.3em solid;
  border-right: 0.28em solid transparent;
  border-bottom: 0;
  border-left: 0.28em solid transparent;
}

.anchor:hover {
  color: #fff;
  background-color: #ff8637;
  border-color: white;
  cursor: pointer;
}

.menu {
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 0.25rem;
  color: #212529;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  list-style: none;
  margin: 0.125rem 0 0;
  padding: 0.5rem 0;
  position: absolute;
  text-align: left;
}

.menu-item {
  color: #212529;
  padding: 0.25rem 1.5rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.menu-item:hover {
  background-color: #f4f6f6;
  cursor: pointer;
}

span {
  font-weight: bold;
  color: #229954;
  font-size: 1.25rem;
}
</style>
