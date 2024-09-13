import React, { Component } from 'react';
import './App.css';
import QueueAnim from 'rc-queue-anim'
import { Layout, Typography} from 'antd';
import { SiInstagram, SiTwitter, SiCitrix, SiLinkedin } from 'react-icons/si';
import { FiGithub } from 'react-icons/fi';
import { FcGoogle } from 'react-icons/fc';
import { GrLocationPin } from 'react-icons/gr';
import { MdAlternateEmail } from 'react-icons/md';
const { Text } = Typography;
const { Header, Content, Footer } = Layout;




class App extends Component {
  
  render() {
    return (
      <Layout>
        <Header></Header>
        <Content>
          <QueueAnim delay={500} type='left' ease = 'easeInOutQuart'>
            <div key = {1}>
              <Text className = "IntroductionText">Hi 👋, I'm Adarsh <strong>/</strong> आदर्श.<br/><br/></Text>
              <Text className = "IntroductionText">I currently work as a Software Engineer at <a href = "https://www.google.com/"><FcGoogle style={{marginBottom: '-5px', fontSize: '30px'}}/></a>.<br/></Text>
              <Text className = "IntroductionText">Previously, I worked on Power Management and Brokering at <a href = "https://www.citrix.com/products/citrix-virtual-apps-and-desktops/"><SiCitrix style={{fontSize: '24px'}}/></a>.<br/></Text>
              <Text className = "IntroductionText">Graduated with a Summa Cum Laude in Computer Science from the <mark style={{background: '#0064B1'}}><a href = "https://www.uta.edu/academics/schools-colleges/engineering/academics/departments/cse">University of Texas at Arlington</a></mark>.<br/></Text>
              <Text className = "IntroductionText">I grew up in different parts of <mark style={{background: '#B3E3EE'}}><a href = "https://en.wikipedia.org/wiki/Coastal_India" style={{color: '#2255A4'}}>Coastal India</a></mark>.<br/></Text>
              <Text className = "IntroductionText"><mark style={{background:'#B3995D'}}><a href = "https://www.youtube.com/watch?v=ze82XMsSgyw" style={{color: '#AA0000'}}>San Francisco 49ers</a></mark>,<mark style={{background: '#C70101'}}><a href = "https://youtu.be/UkhMNryOUSQ">Manchester United</a></mark>, <mark style={{background: '#00529F'}}><a href = "https://youtu.be/yWVrolNQ4RU">Real Madrid</a></mark>, and <mark style={{background: '#006bb6'}}><a href = "https://youtu.be/bhtpppMxfQs" style={{color: '#fdb927'}}>Golden State Warriors</a></mark> fan.<br/></Text>
            </div>
            <div key = {2}>
              <br/><br/>
              <a href = "https://www.instagram.com/adarsh9pai" className = "social"><SiInstagram /></a>
              <a href = "https://www.github.com/adarsh9pai" className = "social"><FiGithub /></a>
              <a href = "https://www.linkedin.com/in/adarsh9pai" className = "social"><SiLinkedin /></a>
            </div>
            <div key = {3}>
              <br/><br/>
              <Text className = "IntroductionText">Currently living in <mark style={{background: '#BE3A34'}}><a href = "https://en.wikipedia.org/wiki/Toronto" style={{color: '#041E42'}}>Toronto</a></mark>.</Text>
            </div>
          </QueueAnim>
        </Content>
        <Footer style = {{textAlign : 'center'}}>
          <Text style={{color: '#696969'}}>© 2024</Text>
        </Footer>
      </Layout>
    )
  }
}

export default App;
