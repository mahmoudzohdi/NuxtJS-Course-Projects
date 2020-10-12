<template>
  <v-dialog v-model="dialog" persistent max-width="290">
    <template v-slot:activator="{ on, attrs }">
      <v-btn v-if="buttonLabel" v-bind="{...computedProps, ...attrs}" v-on="on">
        {{buttonLabel}}
      </v-btn>
      <slot name="modalButton" :on="on" v-else></slot>
    </template>
    <slot :close="close"></slot>
  </v-dialog>
</template>

<script>
export default {
  name: "app-modal",
  props: {
    modalVisibility: {
      type: Boolean,
      required: false
    },
    buttonLabel: {
      type: String,
      required: false
    },
    buttonColor: {
      type: String,
      default: 'primary'
    },
    buttonTextStyle: {
      type: Boolean,
      default: false
    }
  },
  data(){
    return {
      dialog: false
    }
  },
  computed: {
    computedProps() {
      let returnValue = {
        text: this.buttonTextStyle,
        color: this.buttonColor
      };
      return returnValue;
    }
  },
  methods: {
    close(){
      this.dialog = false;
    }
  }
}
</script>