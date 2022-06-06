import './App.css';
import {useState} from 'react'

function App() {

  let 김상현 = '상남자';
  let [애송이,변경] = useState(['이대석','김경보','황규웅']);
  let [소녀,c] = useState('이나현');
  let [love, fallInLove]=useState(0);

  

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>The Man</h4>
      </div>

      <button onClick={()=> {let copy =[...애송이]; copy[2]='언니'; 변경(copy);}}>Change!!</button>

      <div className='list'>
        <h4>{김상현} <span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love} </h4>
        <p>3월 5일</p>
      </div>
      <div className='list'>
        <h4>{애송이[0]} <span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love}</h4>
        <p>2월 28일</p>
      </div>
      <div className='list'>
        <h4>{애송이[1]} <span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love}</h4>
        <p>4월 30일</p>
      </div>
      <div className='list'>
        <h4>{애송이[2]} <span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love}</h4>
        <p>10월 19일</p>
      </div>
      <div className='list'>
        <h4>{소녀} <span onClick={()=>{fallInLove(love+1)}}> 💕</span> {love}</h4>
        <p>7월 7일</p>
      </div>
      {/* <h4 id={post} style={ {color : 'black', fontSize : '16px' } }>{post}</h4> */}
    </div>
  );
}

export default App;
