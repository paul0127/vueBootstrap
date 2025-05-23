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

const classOption = ref([
  { value: null, text: 'Please select an option' },
  { value: 2, text: '2.已收載藥品' },
])
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

        <BFormGroup id="input-group-2" label="收文日期" label-for="input-2">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-3" label="來文內容" label-for="input-3">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-4">
          <BFormCheckboxGroup id="checkboxes-4" v-model="form.checked">
            <BFormCheckbox value="me">紙本流程</BFormCheckbox>
            <BFormCheckbox value="that">電子流程</BFormCheckbox>
          </BFormCheckboxGroup>
        </BFormGroup>

        <BFormGroup id="input-group-3" label="業務類別" label-for="input-3">
          <BFormSelect
            id="input-3"
            v-model="form.food"
            :options="classOption"
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-3" label="承辦人" label-for="input-3">
          <BFormSelect
            id="input-3"
            v-model="form.food"
            :options="['2.已收載藥品']"
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-2" label="申請日期" label-for="input-2">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-2" label="核准日期" label-for="input-2">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-3" label="其他業務說明" label-for="input-3">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <BFormGroup id="input-group-3" label="新藥案編備註" label-for="input-3">
          <BFormInput
            id="input-2"
            type="date"
            v-model="form.name"
            placeholder=""
            required
          />
        </BFormGroup>

        <div>
          <BTabs content-class="mt-3">
            <BTab title="申復註記" active>
              <BFormGroup
                id="input-group-2"
                label="核准日期"
                label-for="input-2"
              >
                <BFormInput
                  id="input-2"
                  type="date"
                  v-model="form.name"
                  placeholder=""
                  required
                />
              </BFormGroup>
              <BFormGroup
                id="input-group-3"
                label="來文內容"
                label-for="input-3"
              >
                <BFormInput
                  id="input-2"
                  type="date"
                  v-model="form.name"
                  placeholder=""
                  required
                />
              </BFormGroup>
            </BTab>
            <BTab title="申請單位"> </BTab>
          </BTabs>
        </div>

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
  position: relative;
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
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width:100px;
    height:100px;
    background:#e3e7eb;
    -webkit-clip-path:inset(20px 10px 30px 10px round 0px 5px 50px 0);
  }
}
.main {
  background: #e3e7eb;
  padding: 20px 20px 20px 36px;
}
</style>
