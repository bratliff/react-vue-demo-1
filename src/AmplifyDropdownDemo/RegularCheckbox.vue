<template>
    <div>
      <input type="checkbox" id="jack" class="guy" v-model="checkedNames" value="Jack" @input="onChange">
      <label for="jack">Jack</label>
      <input type="checkbox" id="mike" class="guy" v-model="checkedNames" value="Mike"@input="onChange">
      <label for="mike">Mike</label>
      <input type="checkbox" id="john" class="guy" v-model="checkedNames" value="John" @input="onChange">
      <label for="john">John</label>
      <br>
      <span>Checked names: {{ checkedNames }}</span>
  </div>
</template>

<script>
export default {
    name: "RegularCheckbox",
    props: {
        selected: Number
    },
    data: function() {
        return {
            checkedNames: [],
            selectedNumber: null
        }
    },
    watch: {
        selected(newVal){
            let guy = document.getElementsByClassName('guy');

            guy[newVal].click();
        }
    },
    methods: {
        onChange: function() {
            //console.log(this.$refs.input);
        }
    },
    mounted: function() {
        let guy = document.getElementsByClassName('guy');

        guy[this.selected].click();
    }
};
</script>