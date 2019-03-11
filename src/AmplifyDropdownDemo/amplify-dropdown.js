// Define a new component called button-counter
Vue.mixin({ delimiters: ['[[',']]'] });

Vue.component('amplify-dropdown', {
  name: 'amplify-dropdown',
  data: function () {
    return {
      isMenuActive: false
    }
  },
  props: {
    buttonText: String,
    items: Array
  },
  methods: {
    showMenu: function() {
      this.isMenuActive ? this.isMenuActive = false : this.isMenuActive = true;
      this.$refs.menuBtn.focus();
      this.changeAriaTag();
    },
    closeMenu: function() {
      this.isMenuActive = !this.isMenuActive;
      this.changeAriaTag();
      this.$refs.menuBtn.focus();
    },
    moveDown: function(e) {
      e.preventDefault();
      e.target.classList.contains("last") ? "" : e.target.nextSibling.focus();
    },
    moveUp: function(e) {
      e.preventDefault();
      e.target.classList.contains("first") ? "" : e.target.previousSibling.focus();
    },
    selectItem: function(e) {
      this.changeAriaTag();

      this.$refs.menuBtn.focus();
      this.$refs.menuBtn.innerHTML = e.target.innerHTML;
      this.isMenuActive = false;
    },
    focusFirstItem: function(event) {
      event.preventDefault();
      this.$refs.listItem[0].focus();
    },
    changeAriaTag() {
      this.$refs.menuBtn.getAttribute("aria-expanded") == "false"
        ? this.$refs.menuBtn.setAttribute("aria-expanded", "true")
        : this.$refs.menuBtn.setAttribute("aria-expanded", "false");
    }
  },
    created: function(){
        window.addEventListener('click', e => {

            if(e.target !== this.$refs.menuBtn && e.target !== this.$refs.listItem) {
                this.isMenuActive = false;
            }
            
        })
      },
    template: `<div class="amplify-dropdown" id="single-select-menu" v-bind:class="{show: isMenuActive}" ref="menu">
        <button class="btn menu-btn" type="button" ref="menuBtn" aria-haspopup="true" aria-expanded="false" @click="showMenu" @keydown.down="focusFirstItem">[[buttonText]]</button>
        <ul class="dropdown-menu">
            <li v-for="(item, index) in items" :key="item.id" v-bind:class="{last : index === (items.length-1), first : index === 0}" @click="selectItem" @keydown.down="moveDown" @keydown.up="moveUp" @keyup.space.enter="selectItem" @keydown.esc="closeMenu"  ref="listItem" class="dropdown-item" tabindex="0">
            [[item]]</li>
        </ul>
    </div>`
})
