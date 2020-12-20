/*
 * @Author: Mr.Mao
 * @LastEditors: Mr.Mao
 * @Date: 2020-12-20 10:14:27
 * @LastEditTime: 2020-12-21 00:27:58
 * @Description:
 * @任何一个傻子都能写出让电脑能懂的代码，而只有好的程序员可以写出让人能看懂的代码
 */
import { ref } from 'vue'
import { reqUploadImage } from '../api'

interface UploadEvent {
  file: File
  content: string
  message: string
  status: string
}

export const fileList = ref<UploadEvent[]>([])

// 文件读取完成后上传图片
export const onAfterRead = async (event: UploadEvent) => {
  try {
    event.status = 'uploading'
    event.message = '上传中...'
    const formFile = new FormData()
    formFile.append('file', event.file)
    const { data: imageUrl } = await reqUploadImage(formFile)
    event.content = imageUrl
    event.status = ''
    event.message = ''
  } catch (error) {
    event.status = 'failed'
    event.message = '上传失败'
  }
}
// 文件删除时
export const onDeleteFile = (file: UploadEvent, detail: { index: number }) => {
  fileList.value.splice(detail.index - 1, 1)
}
