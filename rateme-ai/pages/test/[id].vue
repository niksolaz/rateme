<template>
  <div>
    <div class="h-screen space-y-2">
      <h1>ID_TEST {{ id }}</h1>
      <p>{{ test.titolo }}</p>
      <p>{{ test.breve_descrizione }}</p>
      <div class="space-y-2 border border-gray-200 rounded-md p-2 my-3">
        <UButton
          color="red"
          variant="solid"
          class="border border-gray-300 cursor-pointer hover:bg-blue-600 hover:text-white p-2 rounded-md"
        >
          Invia</UButton>
        <ul class="space-y-2">
          <li v-for="email in test.emails" :key="email.id" class="flex items-center justify-between w-full">
            <p class="text-sm text-gray-500 w-5/6">{{ email.email }} - {{ email.nome }} {{ email.cognome }}</p>
          </li>
        </ul>
      </div>
      <div class="space-y-2">
        <UCard 
          v-for="domanda in test.domande" 
          :key="domanda.id"
          class="hover:shadow-lg transition-shadow duration-200 w-full border border-gray-300 rounded-md p-2"
        >
          <p>{{ domanda.testo }}</p>
          <div 
            v-for="(risposta,i) in domanda.risposte" :key="i" 
            class="flex items-center justify-between w-full"
          >
            <label :for="risposta"><input :id="i" type="radio" :checked="risposteSelezionata[domanda.id] === i" :name="risposta" :value="i" @change="selezionaRisposta(domanda.id,i)"><span class="px-4">{{ risposta }}</span></label>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const id = route.params.id
const risposteSelezionata = ref({})

const { data: test } = await useFetch(`http://localhost:3001/tests/${id}`)

const selezionaRisposta = (id,i) => {
  risposteSelezionata.value[id] = i
}

onMounted(() => {
  test.value.domande.forEach(domanda => {
    risposteSelezionata.value[domanda.id] = null
  })
})
</script>

<style lang="scss" scoped>

</style>