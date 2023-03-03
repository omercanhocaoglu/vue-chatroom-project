<template>
    <form>
        <div class="chat-window box">
            <div class="error" v-if="error">{{ error }}</div>
            <div v-if="documents" class="messages" ref="messages">
                <div v-for="doc in formatedDocuments" :key="doc.id" class="single">
                    <span class="name">{{ doc.name }}</span>
                    <span class="message">{{ doc.message }}</span>
                    <span class="created-at">{{ doc.createdAt }}</span>
                </div>
            </div>
        </div>
    </form>
  </template>
  
  <script>
  import getCollection from "../composables/getCollection";
  import { formatDistanceToNow } from "date-fns";
  import { computed, ref, onUpdated } from "vue";
  export default {
    setup() {
        const { error, documents } = getCollection("messages");
        const messages = ref(null);   
        const formatedDocuments = computed(() => {
            if (documents.value) {
                return documents.value.map((doc) => {
                let time = formatDistanceToNow(doc.createdAt.toDate());
                return { ...doc, createdAt: time };
                });
            }
        });
        onUpdated(() => {
            messages.value.scrollTop = messages.value.scrollHeight;
        });
      
        return { error, documents, formatedDocuments, messages };
    },
  };
  </script>
  
  <style>
  .chat-window {
    background: #fafafa;
    color: black;
    padding: 30px 20px;
    text-align: left;
  }
  .single {
    margin: 18px 0;
  }
  .created-at {
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 5px;
  }
  .name {
    font-weight: bold;
    margin-right: 7px;
  }
  .messages {
    max-height: 400px;
    overflow: auto;
  }

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: linear-gradient(transparent, #23d160);
    border-radius: 5px;
  }
 </style>