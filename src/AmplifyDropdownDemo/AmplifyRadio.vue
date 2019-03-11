<template>
    <div class="amplify-radio-group" v-bind:class="{vertical: vertical}">
        <div class="amplify-radio-btn" v-for="(value, index) in buttons">
            <label>{{buttons[index].label}}<input type="radio" :name="[groupName]" @click="clicked" ref="input" v-model="selectedNumber" :value="index + 1">
                <div class="radio-div"></div>
            </label>
        </div>
    </div>
</template>

<script>
export default {
    name: "AmplifyRadio",
    data: function() {
        return {
            selectedNumber: null,
            htmlBody: document.querySelector('body'),
        }
    },
    props: {
        buttons: Array,
        selectedItemEvent: String,
        vertical: Boolean,
        groupName: String,
        selected: Number
    },
    watch: {
        selected(newVal) {
            this.selectedNumber = newVal;
        },
    },
    methods: {
        clicked: function(e) {
            var response = [this.groupName, this.buttons[e.target.value - 1].value];
            this.emitSelection(response);
        },
        emitSelection(item) {

            const itemSelected = new CustomEvent(this.selectedItemEvent, {
                detail: { item }
            });

            this.htmlBody.dispatchEvent(itemSelected);
        },
    },
    mounted: function() {
        this.selectedNumber = this.selected;
    },
};
</script>