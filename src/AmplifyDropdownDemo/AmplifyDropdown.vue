

<template>
  <div class="amplify-dropdown" v-bind:class="{show: isMenuActive}" ref="menu">
        <button class="btn menu-btn" type="button" ref="menuBtn" aria-haspopup="true" aria-expanded="false" @click="openMenu" @keydown.down="focusFirstItem">{{buttonText}}</button>
        <ul class="dropdown-menu">
            <li v-for="(item, index) in itemArray" :key="item.id" v-bind:class="{last : index === (items.length-1), first : index === 0}" @click="selectItem" @keydown.down="moveDown" @keydown.up="moveUp" @keyup.space.enter="selectItem" @keydown.esc="closeMenu"  ref="listItem" class="dropdown-item" tabindex="0">
            {{item}}</li>
        </ul>
    </div>
</template>

<script>


export default {
  name: "AmplifyDropdown",
  methods: {
    openMenu: function() {
      this.isMenuActive = !this.isMenuActive;
      this.changeAriaTag();
    },
    closeMenu: function() {
      this.isMenuActive = !this.isMenuActive;
      this.changeAriaTag();
      this.$refs.menuBtn.focus();
    },
    moveDown: function(e) {
      e.target.classList.contains("last") ? "" : e.target.nextSibling.focus();
    },
    moveUp: function(e) {
      e.target.classList.contains("first") ? "" : e.target.previousSibling.focus();
    },
    selectItem: function(e) {
      this.changeAriaTag();

      this.$refs.menuBtn.focus();
      this.$refs.menuBtn.innerHTML = e.target.innerHTML;
      this.isMenuActive = false;
      this.emitSelection(e.target.innerHTML);
    },
    focusFirstItem: function(event) {
      event.preventDefault();
      this.$refs.listItem[0].focus();
    },
    changeAriaTag() {
      this.$refs.menuBtn.getAttribute("aria-expanded") == "false"
        ? this.$refs.menuBtn.setAttribute("aria-expanded", "true")
        : this.$refs.menuBtn.setAttribute("aria-expanded", "false");
    },
    makeArray() {
      
      const itemArray = JSON.stringify(this.items);
    },
    emitSelection(item) {
      var itemSelected = new CustomEvent(this.selectedItemEvent, {
        detail: { item }
      });

      this.htmlBody.dispatchEvent(itemSelected);
    },
  },
  props: {
    buttonText: String,
    selectedItemEvent: String,
    items: String
  },
  data: function() {
    return {
      isMenuActive: false,
      htmlBody: document.querySelector('body')
    };
  },
  computed : {
    itemArray(){
        const list = this.items;
        var array = list.split(',');
        return array;
    }
  }
};
</script>
