<script setup lang="ts">
import { ref, reactive, nextTick } from 'vue'
import Breadcrumb from '@/components/common/Breadcrumb.vue'

const breadCrumb = ref([
  {
    name: '首頁',
    url: '/',
  },
  {
    name: 'HMD藥品管理子系統',
    url: '#',
  },
  {
    name: '10000受理作業',
    url: '#',
  },
  {
    name: '10101藥材受理分派作業',
    url: '#',
  },
])

const form = reactive({
  email: '',
  name: '',
  food: null,
  checked: [],
})
const show = ref(true)

const onSubmit = (event: Event) => {
  event.preventDefault()
  // eslint-disable-next-line no-alert
  alert(JSON.stringify(form))
}

const onReset = (event: Event) => {
  event.preventDefault()
  // Reset our form values
  form.email = ''
  form.name = ''
  form.food = null
  form.checked = []
  // Trick to reset/clear native browser form validation state
  show.value = false
  nextTick(() => {
    show.value = true
  })
}
</script>

<template>
  <main>
    <div class="top">
      <div class="title">
        <div class="text">HMDI0101S01_藥材受理分派作業</div>
        <Breadcrumb :breadCrumb="breadCrumb" />
      </div>
      <BButton class="printBtn" pill variant="outline-secondary">
        <IBiPrinter />列印</BButton
      >
    </div>
    <div class="main">
      <BForm @submit="onSubmit" @reset="onReset">
        <BFormGroup id="input-group-1" label="收文號" label-for="input-1">
          <BFormInput
            id="input-1"
            v-model="form.email"
            type="text"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-2" label="案件編號" label-for="input-2">
          <BFormInput
            id="input-2"
            v-model="form.email"
            type="text"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-2" label="Your Name:" label-for="input-2">
          <BFormInput
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          />
        </BFormGroup>
        <BFormGroup id="input-group-3" label="Food:" label-for="input-3">
          <BFormSelect
            id="input-3"
            v-model="form.food"
            :options="foods"
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-4">
          <BFormCheckboxGroup id="checkboxes-4" v-model="form.checked">
            <BFormCheckbox value="me">Check me out</BFormCheckbox>
            <BFormCheckbox value="that">Check that out</BFormCheckbox>
          </BFormCheckboxGroup>
        </BFormGroup>
        
        <BButton type="submit" variant="primary">Submit</BButton>
        <BButton type="reset" variant="danger">Reset</BButton>
      </BForm>
    </div>
  </main>
</template>
<style lang="scss" scoped>
.top {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 36px 120px 20px 36px;
  .title {
    padding-left: 10px;
    border-left: 5px solid $app-main-color;
    .text {
      font-size: 30px;
      color: #004f73;
    }
  }
  .printBtn {
    svg {
      margin-right: 5px;
    }
  }
}
.main {
  background: #e3e7eb;
  padding: 20px 20px 20px 36px;
}
</style>
