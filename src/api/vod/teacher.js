import request from '@/utils/request'

const api_name = '/admin/vod/teacher'

export default{
  // 讲师条件查询分页
  // current 当前页， limit每页记录数 searchObj 条件对象
    pageList(page,limit,searchObj) {
      return request({
        url: `${api_name}/findQueryPage/${page}/${limit}`,
        method: `post`,
        data: searchObj
      })
    },
    // 根据id移除老师
    removeById(id) {
      return request({
        url: `${api_name}/remove/${id}`,
        method: `delete`,
      })
    },
    //添加老师
    saveTeacher(teacher) {
      return request({
        url: `${api_name}/saveTeacher`,
        method: `post`,
        data:teacher
      })
    },
    // 根据id查询老师
    getTeacher(id){
      return request({
        url: `${api_name}/getTeacher/${id}`,
        method: `get`,
      })
    },
    //更新老师
    updateTeacher(teacher){
      return request({
        url: `${api_name}/updateTeacher`,
        method: `post`,
        data:teacher
      })
    },
    //批量删除老师
    removeBatch(idList){
      return request({
        url: `${api_name}/removeBatch`,
        method: `delete`,
        data:idList
      })
    }


}

