
import { Component } from 'vue'
 
interface FileType {
  [key: string]: Component
}
interface componentItem {
  name: string
  sfc: Component
}

/*
 * 从common、layouts、graph文件夹导入所有的组件
 * 每一个文件需要是独立文件夹，通过index.vue导出组件
 * “组件名必须写！！！”，将自动组件名注册
*/
 
const commonFiles: Record<string, FileType> = import.meta.globEager(
  '/src/components/common/*/index.ts'
)
const layoutFiles: Record<string, FileType> = import.meta.globEager(
  '/src/components/layouts/*/index.ts'
)

const componentList: componentItem[] = []
const files: Record<string, FileType> = Object.assign(commonFiles,layoutFiles)

Object.keys(files).forEach((c: string) => {
  const component = files[c]?.default
  componentList.push({ name: component.name as string, sfc: component })
})

export const installComponents = (app: any) => {
  // *注册自定义组件
  componentList.forEach((component) => {
    app.component(component.name, component.sfc)
  })
}