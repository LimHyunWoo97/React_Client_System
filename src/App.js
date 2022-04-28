import React, {Component} from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [{
  'id' : 1,
  'image' : 'https://placeimg.com/64/64/1',
  'name': '홍길동',
  'birthday' : '901212',
  'gender' : '남자',
  'job' : '의적'
},
{
  'id' : 2,
  'image' : 'https://placeimg.com/64/64/2',
  'name': '임현우',
  'birthday' : '970421',
  'gender' : '남자',
  'job' : '대학생'
},
{
  'id' :3,
  'image' : 'https://placeimg.com/64/64/3',
  'name': '김가진',
  'birthday' : '980124',
  'gender' : '여자',
  'job' : '창우통상'
}
]

class App extends Component {
  render(){
    return (
      <div>
        {
          customers.map(c=>{
            return(
              <Customer
                key={c.id}
                id={c.id}
                image ={c.image}
                name = {c.name}
                birthday = {c.birthday}
                gender ={c.gender}
                job ={c.job}
              />
            );            
          })
        }
      </div>
    );  
  }
}

export default App;
