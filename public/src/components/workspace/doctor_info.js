import React, {Component} from 'react';  // eslint-disable-line no-unused-vars

class DoctorInfo extends Component {

  render() {
    return (
        <div className='doctor_info'>
          <span className='info_title'>医生信息</span>
          <ul>
            <li className="doctor_img_li">
              <img className='doctor_img' src='/images/1.jpg' alt='医生图片'/>
            </li>
            <li>姓 名 : 张三</li>
            <li>e-mail : 123456@qq.com</li>
            <li>科 室 : 内科</li>
            <li>所在医院 : 西安动物研究院</li>
            <li>级 别 : 高级</li>
            <li className="doctor_info_briefing">简介：毕业于北京大学生物科学专业,对于内科学有20年的临床经验，曾经在手术台上奋战8小时,救活了一名即将临盆的狗狗孕妇和她的宝宝,
              曾获得生物多样性研究大赛一等奖，获得过杰出的生物多样性保护者！</li>
            <img className="doctorInfo_bg" src="/images/pander.png" />
          </ul>
        </div>
    );
  }
}

export default DoctorInfo;