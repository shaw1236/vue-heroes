<template>
    <div>
    <div v-if="messages.length">
      <hr/>
        <h2>Messages</h2>
          <button v-on:click="clearMessages" class="clear">clear</button>
          <div v-for="(message, index) in messages" :key="index"> {{message}} </div>
    </div>
    <div v-else>  <!-- empty page section -->
    </div>
    </div>
</template>
<script>
import {MessageService} from "../services/MessageService";

export default {
    data() {
        return {
            messages: MessageService.get()
        }
    },
    methods: {
        clearMessages: function() {
            //console.log("Messages clear");
            MessageService.clear();
            this.messages = MessageService.get();
            this.$forceUpdate();
        }
    }
}
</script>

<style>
button {
    border: none;
    color: white;
    background-color: green;
    padding: 5px 10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 12px;
    margin: 4px 2px;
    cursor: pointer;
}
button:hover {
    background-color: #cfd8dc;
}
button:disabled {
    background-color: #eee;
    color: #ccc;
    cursor: auto;
}
</style>

