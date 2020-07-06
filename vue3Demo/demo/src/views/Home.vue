<!--
 * @Description: createElement demo
 * @Version: 1.0
 * @Autor: wangmiao
 * @Date: 2020-07-06 09:34:18
 * @LastEditors: wangmiao
 * @LastEditTime: 2020-07-06 10:56:23
--> 
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <el-form :inline="true" :model="formInline" class="demo-form-inline">
      <el-form-item label="审批人">
        <el-input v-model="formInline.user" placeholder="审批人"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-select v-model="formInline.region" placeholder="活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">查询</el-button>
      </el-form-item>
    </el-form>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  data(){
    return{
       formInline: {
          user: '',
          region: ''
       }
    }
  },
  methods: {
    onSubmit() {
        console.log('submit!',this.formInline);
      },
    $_handleChangeUser(value) {
      this.formInline.user = value
    }
  },
  render(createElement) {
    return createElement(
      'ElForm',
      {
        props: {
          inline: true,
          model: this.formInline
        },
        staticClass: 'demo-form-inline'
      },
      [
        createElement(
          'ElFormItem',
          {
            props: {
              label: '审批人'
            }
          },
          [
            createElement('ElInput', {
              props: {
                value: this.formInline.user
              },
              attrs: {
                placeholder: '审批人'
              },
              on: {
                input: this.$_handleChangeUser
              }
            })
          ]
        ),
        createElement(
          'ElFormItem',
          {
            props: {
              label: '活动区域'
            }
          },
          [
            createElement(
              'ElSelect',
              {
                props: {
                  value: this.formInline.region,
                  placeholder: '活动区域'
                }
              },
              [
                createElement('ElOption', {
                  props: {
                    label: '区域一',
                    value: 'shanghai'
                  }
                }),
                createElement('ElOption', {
                  props: {
                    label: '区域二',
                    value: 'beijing'
                  }
                })
              ]
            )
          ]
        ),
        createElement('ElFormItem', null, [
          createElement(
            'ElButton',
            {
              props: {
                type: 'primary'
              },
              on: {
                click: this.$_handleSubmit
              }
            },
            '查询'
          )
        ])
      ]
    )
  }
}
</script>
